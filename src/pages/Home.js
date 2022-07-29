import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import ProfileDetails from "../components/ProfileDetails";
import Button from "../components/Button";
import Notice from "../components/Notice";
import SearchForm from "../components/SearchForm";
import useGetUser from "../hook/useGetUser";

// initiall load
let initialLoad = true;

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { user, error } = useGetUser(searchQuery);

  // get user data
  const handleUserSearch = (search) => {
    setSearchQuery(search);
  };

  // construct date
  const constructDate = (date) => {
    const newDate = new Date(date);

    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();

    return `${day}-${month}-${year}`;
  };

  useEffect(() => {
    // set the search query to the input value
    handleUserSearch(searchQuery);
  }, [searchQuery, user]);

  console.log(initialLoad);
  console.log(searchQuery);
  console.log(user);
  console.log(error);

  return (
    <main className="bg-lighter h-screen font-mono ">
      <div className=" px-3 pt-10 md:max-w-3xl md:mx-auto">
        <div className=" flex justify-between items-center">
          <h1 className="font-bold text-lg text-dark">devfinder</h1>
          <Button className="flex items-center gap-3">
            <p className="w-1/2 text-xs uppercase">Dark</p>
            <MoonIcon className="w-5 h-5" />
          </Button>
        </div>
        <div>
          <SearchForm onSubmit={handleUserSearch} />
        </div>
        <Card>
          {!searchQuery && initialLoad && (
            <div className="h-40 flex items-center">
              <p className="text-center mx-auto">Find a user 🔍.</p>
            </div>
          )}
          {user && <ProfileDetails user={user} getDate={constructDate} />}
          {/* {!error && user && (
            <div className="h-40 flex items-center">
              <p className="text-center mx-auto">User not found 🤧.</p>
            </div>
          )} */}
        </Card>
        <Notice />
      </div>
    </main>
  );
};

export default Home;
