"use client";
import React, { useState } from "react";
import { useCategoriesStore } from "@/libs/store-categories";
import { useProductsStore } from "@/libs/store-products";
import { FaCheckCircle, FaCircle } from "react-icons/fa";

const FilterSidebar = ({ onFilterChange }) => {
  const categories = useCategoriesStore((state) => state.categories);

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (categoryName) => {
    const isSelected = selectedCategories.includes(categoryName);
    const updatedCategories = isSelected
      ? selectedCategories.filter((cat) => cat !== categoryName)
      : [...selectedCategories, categoryName];
    setSelectedCategories(updatedCategories);
    onFilterChange(updatedCategories); // Notifica los cambios al componente padre
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
              className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 p-3 rounded-lg shadow-sm transition-all"
            >
              <label
                htmlFor={`category-${category.id}`}
                className="flex items-center cursor-pointer space-x-3"
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
                onChange={() => handleCategoryChange(category.categoryName)}
                className="hidden"
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FilterSidebar;
