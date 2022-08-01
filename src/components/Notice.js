import React from "react";
import { ChartBarIcon } from "@heroicons/react/solid";
import Button from "./Button";

const Notice = () => {
  return (
    <footer className="my-10 text-center text-slate-500">
      <small>
        <span className="text-black font-bold inline-block dark:text-white">
          NB :
        </span>{" "}
        Want a much detailed view of the a github user?
        <Button
          to="stats"
          className="bg-blue-500 py-2 px-5 w-full rounded-md text-white font-bold
          transition-all duration-500 hover:bg-blue-600 md:w-fit md:ml-3"
        >
          <ChartBarIcon className="w-5 h-5 inline-block mr-2" />
          <span className="mt-2 inline-block">Checkout this project</span>
        </Button>
      </small>
      <small className="block my-5">
        Built with ❤️‍🩹 by{" "}
        <a
          href="https://github.com/Kwame007"
          className="text-blue-500 hover:underline"
        >
          @kwame007
        </a>
      </small>
    </footer>
  );
};

export default Notice;
