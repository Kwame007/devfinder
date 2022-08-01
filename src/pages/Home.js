import React, { useState, useContext } from "react";
import Card from "../components/Card";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import ProfileDetails from "../components/ProfileDetails";
import Button from "../components/Button";
import Notice from "../components/Notice";
import SearchForm from "../components/SearchForm";
import useGetUser from "../hook/useGetUser";
import { userContext } from "../store/userContext";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [initialLoad, setInitialLoad] = useState(true);
  const { user, error } = useGetUser(searchQuery);

  const { setTheme, theme } = useContext(userContext);

  // get user data
  const handleUserSearch = (search) => {
    if (search) {
      setInitialLoad(false);
      setSearchQuery(search);
    }
    return;
  };

  // construct date
  const constructDate = (date) => {
    const newDate = new Date(date);

    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();

    return `${day}-${month}-${year}`;
  };

  return (
    <section className="bg-lighter dark:bg-darker h-screen font-mono ">
      <div className=" px-3 pt-10 md:max-w-3xl md:mx-auto">
        <div className=" flex justify-between items-center">
          <h1 className="font-bold text-lg text-dark dark:text-white">
            devfinder
          </h1>

          {theme === "light" ? (
            <Button
              className="flex items-center gap-3"
              onClick={() => setTheme("dark")}
            >
              <p className="w-1/2 text-xs uppercase">Dark</p>
              <MoonIcon className="w-5 h-5" />
            </Button>
          ) : (
            <Button
              className="flex items-center gap-3 dark:text-white"
              onClick={() => setTheme("light")}
            >
              <p className="w-1/2 text-xs uppercase">light</p>
              <SunIcon className="w-5 h-5" />
            </Button>
          )}
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
          {error && !initialLoad && !user && (
            <div className="h-40 flex items-center">
              <p className="text-center mx-auto">User not found 🤧.</p>
            </div>
          )}
        </Card>
        <Notice />
      </div>
    </section>
  );
};

export default Home;
