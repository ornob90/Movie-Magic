import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import ContainerWrap from "../../components/ContainerWrap";
import useFetch from "../../hooks/useFetch";

const Navbar = () => {
  const [query, setQuery] = useState(null);
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
    <nav className="bg-[#141416] w-full fixed top-0">
      <div className="w-[90%] mx-auto mx-w-[1224px] flex justify-between text-white py-4">
        {/* Left Side */}
        <ul className="ml-[5%] flex w-2/5 justify-between items-center">
          <li className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFCC2F] to-[#EF5734]">
            MOVIE MAGIC
          </li>
          <li>Home</li>
          <li>Movie</li>
          <li>Tv Series</li>
        </ul>

        {/* Right Side */}
        <div className="relative w-2/5 mr-[5%] flex justify-end items-center">
          <input
            type="text"
            className="input bg-transparent w-3/5 h-[90%] mr-2 rounded-full"
            placeholder="Search Movies and Tv-Series"
            onChange={handleQuery}
            onKeyUp={handleSearch}
          />
          <CiSearch
            onClick={() => navigate(`/search/${query}`)}
            className="absolute right-[4%] text-white font-bold text-xl"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
