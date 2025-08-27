"use client";
import React, { useState } from "react";
import { useCategoriesStore } from "@/libs/store-categories";
import { FaCheckCircle, FaCircle } from "react-icons/fa";
import { LuFilter } from "react-icons/lu";
import HocCard from "@/HOC/HocCard";

const FilterSidebar = ({ onFilterChange }) => {
  const categories = useCategoriesStore((state) => state.categories);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const handleCategoryChange = (categoryName, event) => {
    event.preventDefault();

    const isSelected = selectedCategories.includes(categoryName);
    const updatedCategories = isSelected
      ? selectedCategories.filter((cat) => cat !== categoryName)
      : [...selectedCategories, categoryName];
    setSelectedCategories(updatedCategories);
    onFilterChange(updatedCategories);
  };

  console.log(categories);

  return (
    <HocCard>
      <div className="flex items-center gap-3 mb-4">
        <LuFilter size={20} />
        <h3 className="text-xl font-bold text-gray-800">Categorías</h3>
      </div>

      <ul className="space-y-4">
        {categories &&
          categories?.map((category) => (
            <li
              key={category.id}
              className="flex items-center justify-between hover:bg-gray-200 p-2 rounded-lg  transition-all cursor-pointer w-full"
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
                      : "text-gray-200"
                  }`}
                >
                  {selectedCategories?.includes(category.categoryName) ? (
                    <FaCheckCircle />
                  ) : (
                    <FaCircle />
                  )}
                </span>
                <div className="flex items-center justify-between w-full">
                  <span className="text-gray-800 font-medium">
                    {category.categoryName}
                  </span>
                  <span>{category?.products?.length}</span>
                </div>
              </label>
              <input
                type="checkbox"
                id={`category-${category.id}`}
                value={category.categoryName}
                checked={selectedCategories.includes(category.categoryName)}
                className="hidden"
              />
            </li>
          ))}
      </ul>
    </HocCard>
  );
};

export default FilterSidebar;
