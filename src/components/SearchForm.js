import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import Button from "./Button";
import Input from "./Input";

const SearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState("");

  // set the search value to the input value
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(search);

    // clear the input field
    setSearch("");
  };

  return (
    <form className="relative w-full" onSubmit={handleSubmit}>
      <div>
        <SearchIcon className="absolute bottom-4 left-1 w-5 text-blue-500 md:w-6 md:bottom-5" />
        <Input
          type="text"
          className="bg-light shadow-md mt-10 w-full h-14 px-8 rounded-2xl   placeholder:text-xs md:placeholder:text-base md:h-16"
          placeholder="Search GitHub username_"
          value={search}
          onChange={handleChange}
        />
        <Button className="bg-blue-500 absolute bottom-2 right-2 h-10 w-28  rounded-lg text-white cursor-pointer md:h-12 md:w-40 md:px-6 md:right-3">
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;
