import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import ContainerWrap from "../../components/ContainerWrap";
import useFetch from "../../hooks/useFetch";

const Navbar = () => {
  const [query, setQuery] = useState(null);
  const [menu, setMenu] = useState(false);
  const { data } = useFetch(`/search/multi`, { query: `${query}` });
  const navigate = useNavigate();

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`search/${query}`);
    }
  };

  return (
    <nav className="bg-[#141416] w-full fixed top-0 z-10 drop-shadow-lg flex items-center">
      <div
        className={
          !menu
            ? "w-[90%] mx-auto mx-w-[1224px] flex justify-evenly lg:justify-between text-white py-4 items-center"
            : "w-[90%] flex mx-auto mx-w-[1224px]"
        }
      >
        {/* Left Side */}
        <div
          className={
            menu ? "hidden" : "flex gap-2 justify-between w-full items-center"
          }
        >
          <li className="w-max text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFCC2F] to-[#EF5734]">
            MOVIE MAGIC
          </li>
          <ul className="flex items-center justify-between w-max lg:w-[20%]">
            <li className="hidden lg:block" onClick={() => navigate("/")}>
              Home
            </li>
            <li className="hidden lg:block">Movie</li>
            <li className="hidden lg:block">Tv Series</li>
          </ul>

          {/* Right Side */}
          <div className="hidden relative w-[50%] lg:w-2/5 mr-[5%] sm:flex justify-end items-center">
            <input
              type="text"
              className="input text-sm bg-transparent w-full lg:w-3/5 h-[90%] mr-2 rounded-full"
              placeholder="Search Movies and Tv-Series"
              onChange={handleQuery}
              onKeyUp={handleSearch}
            />
            <CiSearch
              onClick={() => navigate(`/search/${query}`)}
              className="absolute right-[4%] text-white font-bold text-xl"
            />
          </div>

          <AiOutlineMenu
            className="text-2xl text-white lg:hidden"
            onClick={() => setMenu(!menu)}
          />
        </div>

        {/* Mobile Menu */}

        <div
          className={
            menu
              ? "bg-[#141416] w-full h-screen duration-400"
              : "absolute left-[-100%] duration-400 top-0"
          }
        >
          {menu && (
            <div className="relative w-full h-screen">
              <AiOutlineMenu
                className="absolute top-[-12%] right-0 text-2xl text-white"
                onClick={() => setMenu(!menu)}
              />
              <div class="w-full h-screen p-4 mt-[20%] flex flex-col">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full p-2 pl-4 mr-2 text-sm bg-transparent border-white rounded-full h-max input lg:w-3/5"
                    placeholder="Search Movies and Tv-Series"
                    onChange={handleQuery}
                    onKeyUp={handleSearch}
                  />

                  <CiSearch
                    onClick={() => navigate(`/search/${query}`)}
                    className="absolute right-3 top-[25%] text-white font-bold text-xl sm:text-2xl"
                  />
                </div>

                <ul className="flex flex-col items-center justify-center gap-8 mt-6 text-2xl text-white ">
                  <li>Home</li>
                  <li>Movie</li>
                  <li>Tv Series</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
