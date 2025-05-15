"use client";
import React, { useState } from "react";
import { useCategoriesStore } from "@/libs/store-categories";
import { FaCheckCircle, FaCircle } from "react-icons/fa";

const FilterSidebar = ({ onFilterChange }) => {
  const categories = useCategoriesStore((state) => state.categories);

  const [selectedCategories, setSelectedCategories] = useState([]);

  // Modificamos la función para recibir el evento
  const handleCategoryChange = (categoryName, event) => {
    // Prevenimos la acción por defecto del evento (como la activación del input por la label)
    event.preventDefault();
    // Opcional: event.stopPropagation(); // Para evitar que el evento burbujee más allá del li

    const isSelected = selectedCategories.includes(categoryName);
    const updatedCategories = isSelected
      ? selectedCategories.filter((cat) => cat !== categoryName)
      : [...selectedCategories, categoryName];
    setSelectedCategories(updatedCategories);
    onFilterChange(updatedCategories);
  };

  return (
    <div className="filter-sidebar p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h3 className="text-xl font-bold mb-6 text-gray-800">
        Filtrar por Categoría
      </h3>
      <ul className="space-y-4">
        {categories &&
          categories?.map((category) => (
            <li
              key={category.id}
              className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 p-3 rounded-lg shadow-sm transition-all cursor-pointer w-full"
              // Modificamos el onClick para pasar el evento
              onClick={(event) =>
                handleCategoryChange(category.categoryName, event)
              }
            >
              <label
                htmlFor={`category-${category.id}`}
                className="flex items-center space-x-3 w-full cursor-pointer"
              >
                <span
                  className={`text-xl ${
                    selectedCategories?.includes(category.categoryName)
                      ? "text-green-500"
                      : "text-gray-400"
                  }`}
                >
                  {selectedCategories?.includes(category.categoryName) ? (
                    <FaCheckCircle />
                  ) : (
                    <FaCircle />
                  )}
                </span>
                <span className="text-gray-800 font-medium">
                  {category.categoryName}
                </span>
              </label>
              <input
                type="checkbox"
                id={`category-${category.id}`}
                value={category.categoryName}
                checked={selectedCategories.includes(category.categoryName)}
                // onChange se mantiene eliminado
                className="hidden"
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FilterSidebar;
