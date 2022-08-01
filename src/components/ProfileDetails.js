import React from "react";
import {
  LocationMarkerIcon,
  LinkIcon,
  OfficeBuildingIcon,
  BellIcon,
} from "@heroicons/react/solid";

const ProfileDetails = ({ user, getDate }) => {
  // console.log(user);
  return (
    <section className="p-2">
      <div>
        <div className="flex gap-5 ">
          <div className="w-28  ">
            <img
              src={user?.avatar_url}
              alt=""
              className="w-20 h-20 rounded-full mx-auto md:w-24 md:h-24"
            />
          </div>
          <div className="w-full dark:text-slate-400">
            <div className="md:flex md:w-full md:justify-between">
              <div>
                <h2 className="font-bold text-black dark:text-white">
                  {user?.name}
                </h2>
                <p className="text-blue-500">
                  <a href={user?.html_url} target="_blank" rel="noreferrer">
                    {" "}
                    {`@${user?.login}`}
                  </a>
                </p>
                <p className="pt-1 md:hidden">
                  {" "}
                  {`Joined ${getDate(user?.created_at)}`}
                </p>
              </div>
              <div>
                <p className="hidden md:block">
                  {" "}
                  {`Joined ${getDate(user?.created_at)}`}
                </p>
              </div>
            </div>
            <div className="mt-5 hidden md:block">
              <p>
                {" "}
                {user?.bio === null ? "This profile has no bio 😢" : user?.bio}
              </p>
            </div>
            <div className="hidden mt-8 bg-lighter py-6 px-2 text-center text-black  rounded-2xl md:grid md:grid-cols-3 md:gap-2 dark:bg-darker dark:text-white">
              <div>
                <p>Repos</p>
                <p className=" pt-2 font-bold">{user?.public_repos}</p>
              </div>
              <div>
                <p>Followers</p>
                <p className=" pt-2 font-bold">{user?.followers}</p>
              </div>
              <div>
                <p>Following</p>
                <p className=" pt-2 font-bold">{user?.following}</p>
              </div>
            </div>
            <div className="hidden mt-6 md:grid md:grid-cols-2 md:gap-5">
              <div>
                <div className="flex gap-3 mb-5">
                  <LocationMarkerIcon className="w-5" />
                  <p>
                    {user?.location === null ? "Not available" : user?.location}
                  </p>
                </div>
                <div className="flex gap-3 mb-5">
                  <LinkIcon className="w-5" />
                  <p className="text-blue-500">
                    {user?.blog === "" ? (
                      "Not available"
                    ) : (
                      <a href={user?.blog} target="_blank" rel="noreferrer">
                        {" "}
                        {user?.blog}
                      </a>
                    )}
                  </p>
                </div>
              </div>
              <div>
                <div className="flex gap-3 mb-5">
                  <BellIcon className="w-5" />
                  <p>
                    {" "}
                    {user?.twitter_username === null
                      ? "Not available"
                      : "@" + user?.twitter_username}
                  </p>
                </div>
                <div className="flex gap-3 mb-5">
                  <OfficeBuildingIcon className="w-5" />
                  <p>
                    {user?.company === null ? "Not available" : user?.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 md:hidden">
          <div>
            <p>{user?.bio}</p>
          </div>
          <div className="mt-5 md:hidden">
            <div className="grid grid-cols-3 gap-2 bg-lighter py-6 px-2   rounded-2xl dark:bg-darker dark:text-white">
              <div>
                <p>Repos</p>
                <p className="ml-5 pt-2 font-bold text-black dark:text-white">
                  2
                </p>
              </div>
              <div>
                <p>Followers</p>
                <p className="ml-7 pt-2 font-bold text-black dark:text-white">
                  20
                </p>
              </div>
              <div>
                <p>Following</p>
                <p className="ml-7 pt-2 font-bold text-black dark:text-white">
                  10
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2 mt-6">
              <div className="flex gap-3 mb-3">
                <LocationMarkerIcon className="w-5" />
                <p>
                  {" "}
                  {user?.location === null ? "Not available" : user?.location}
                </p>
              </div>
              <div className="flex gap-3 mb-3">
                <LinkIcon className="w-5" />
                <p>{user?.blog === "" ? "Not available" : user?.blog}</p>
              </div>
              <div className="flex gap-3 mb-3">
                <BellIcon className="w-5" />
                <p>
                  {" "}
                  {user?.twitter_username === null
                    ? "Not available"
                    : "@" + user?.twitter_username}
                </p>
              </div>
              <div className="flex gap-3 mb-3">
                <OfficeBuildingIcon className="w-5" />
                <p>
                  {user?.company === null ? "Not available" : user?.company}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileDetails;
