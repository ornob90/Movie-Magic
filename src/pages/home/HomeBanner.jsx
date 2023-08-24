import React, { useEffect } from "react";
import { BsBoxArrowInRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import { fetchAPI } from "../../API/api";
import ContainerWrap from "../../components/ContainerWrap";
import Img from "../../components/Img";
import useFetch from "../../hooks/useFetch";

const HomeBanner = () => {
  const { data, loading } = useFetch("/movie/upcoming");
  const url = useSelector((state) => state.home.url);

  const movie = data?.results?.[Math.floor(Math.random() * 20)];

  const topThreeMovies = data?.results?.slice(0, 3);

  return (
    <div className="flex h-[95vh] min-h-[500px] w-[90%] mx-auto lg:mt-[4.5%]">
      {/* Left Side Banner */}
      <div className="w-full h-screen lg:h-auto lg:w-[60%] relative ">
        {/* BG Image */}

        <div className="relative w-full h-full opacity-25">
          {!loading && (
            // <img
            //   src={url.backdrop + movie?.backdrop_path}
            //   alt=""
            //   className="absolute top-0 left-0 z-0 object-cover w-full h-full rounded-b-lg"
            // />
            <Img
              src={url.backdrop + movie?.backdrop_path}
              className="absolute top-0 left-0 z-0 object-cover w-full h-full rounded-b-lg"
            />
          )}

          <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        {/* Poster */}

        {loading && (
          <div className="bg-slate-700 absolute left-[2%] md:h-[20%] w-[20%] h-auto md:w-[20%]">
            <div className="w-4/5 rounded-full h-4/5"></div>
          </div>
        )}

        <div className="absolute w-full shadow-lg left-2 bottom-8 sm:bottom-2">
          {!loading && (
            // {"hidden sm:block absolute left-[2%] bottom-[10%] md:bottom-[30%] lg:bottom-[20%] md:h-[30%] w-[20%] h-auto md:w-[20%]"}
            <div className="hidden sm:block md:h-[30%] w-[20%] h-auto md:w-[20%]">
              <Img
                className="object-cover w-full h-full rounded-md"
                src={url.poster + movie?.poster_path}
                alt=""
              />
            </div>
          )}

          <div className="h-max absolute right-0 bottom-[20%] w-[90%] sm:w-[72%]">
            <div className="z-10 text-5xl text-white md:text-5xl lg:text-5xl ">
              {movie?.original_title}
            </div>
            <div className="text-white">Watch The Trailer</div>
          </div>
        </div>

        {/* Content */}
      </div>

      {/* Right Side Up Next */}

      <div className="w-[35%] p-4 h-full hidden gap-4 lg:flex flex-col  text-white bg-[#141416]">
        <h1 className="mb-2 text-2xl text-yellow-400">Up Next</h1>

        {/* Movie */}
        <div className="w-full h-4/5 flex flex-col gap-2 shadow-md p-4 bg-gradient-to-b from-black to-[#141416]">
          {topThreeMovies?.map(
            ({ id, title, release_date, poster_path, overview }) => (
              <div key={id} className="w-full h-[30%] flex gap-2">
                {/* Img */}

                <img src={url.poster + poster_path} alt="" className="" />

                <div className="flex flex-col justify-center gap-3 overflow-hidden text-white">
                  <h1 className="mt-4 text-3xl font-bold ">{title}</h1>
                  <p className="text-sm truncate ">{overview}</p>
                  <p className="text-sm">Releasing {release_date}</p>
                </div>
              </div>
            )
          )}
        </div>

        <div className="flex items-center gap-2 text-2xl font-bold">
          <h1 className="">Browse More</h1>
          <BsBoxArrowInRight className="mt-2" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
