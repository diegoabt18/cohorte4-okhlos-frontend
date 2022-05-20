import React from "react";
import { Icon } from "@iconify/react";

const Search = () => {
  return (
    <form >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-transparent sr-only dark:text-gray-300"
      >
        Search
      </label>
      <div className="relative  ">
        <input
          type="search"
          id="default-search"
          className="block p-1 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  font-GilroyLight border border-gray-300 focus:ring-transparent focus:border-transparent dark:bg-transparent dark:border-transparent dark:placeholder-transparent dark:text-white dark:focus:ring-transparent dark:focus:border-transparent"
          placeholder="Search"
          required
        />

        <div className="absolute right-0 top-[50%] translate-y-[-50%]">
          <button
            type="submit"
            className="p-2.5 ml-2 text-sm font-medium text-black bg-transparent rounded-lg hover:bg-transparent focus:ring-1 focus:outline-none focus:ring-transparent dark:bg-transparent dark:hover:bg-transparent dark:focus:ring-transparent"
          >
            <Icon icon="akar-icons:search" style={{ display: 'inline' }} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
