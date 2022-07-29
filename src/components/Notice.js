import React from "react";
import { Link } from "react-router-dom";
import { ChartBarIcon } from "@heroicons/react/solid";

const Notice = () => {
  return (
    <footer className="my-10 text-center text-slate-500">
      <small>
        <span className="text-black font-bold">NB :</span> Want a much detailed
        view of the github user? Click Here{" "}
        <Link
          to="stats"
          className="bg-blue-500 py-3 px-5 rounded-md text-white font-bold
          transition-all duration-500 hover:bg-blue-600 "
        >
          <ChartBarIcon className="w-5 h-5 inline-block mr-2" />
          <span className="mt-2 inline-block">View Stats</span>
        </Link>
      </small>
      <small className="block my-5">
        Built with ❤️‍🩹 by{" "}
        <a href="" className="text-blue-500 hover:underline">
          @kwame007
        </a>
      </small>
    </footer>
  );
};

export default Notice;
