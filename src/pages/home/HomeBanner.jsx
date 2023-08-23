import React from "react";
import ContainerWrap from "../../components/ContainerWrap";
import Img from "../../components/Img";

const HomeBanner = () => {
  return (
    <div class="flex h-[95vh] w-[90%] mx-auto">
      {/* Left Side Banner */}
      <div className="w-full lg:w-[60%] relative ">
        {/* BG Image */}

        <div className="h-full w-full relative">
          <img
            src="https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt=""
            className="z-0 absolute top-0 left-0 w-full object-cover h-full rounded-b-lg"
          />
        </div>

        {/* Poster */}
        <div className="hidden sm:block absolute left-[2%] bottom-[2%] md:h-[40%] w-[20%] h-auto md:w-[20%]">
          <img
            className="rounded-md w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1505864681725-48344595127c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
        </div>

        <div className="absolute right-0 bottom-[10%] w-[90%] sm:w-[72%]">
          <div className="text-[#d1b76e] z-10 text-6xl sm:text-5xl md:text-6xl ">
            Movie Title
          </div>
          <div className="text-[#d1b76e]">Watch The Trailer</div>
        </div>

        {/* Content */}
      </div>

      {/* Right Side Up Next */}

      <div className="w-[35%] p-2 overflow-scroll no-scrollbar hidden lg:flex flex-col gap-4">
        <h1 className="text-2xl text-yellow-400 mb-2">Up Next</h1>

        {/* Movie */}
        <div className="w-full h-[160px] flex gap-2">
          {/* Img */}

          <img
            src="https://images.unsplash.com/photo-1505864681725-48344595127c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt=""
            className="h-full"
          />

          <div className="overflow-hidden flex flex-col justify-center">
            <h1 class="text-white text-3xl mt-4">Movie Name</h1>
            <p className="truncate text-white text-sm ">
              This is a text that will be truncated if it exceeds the parent
              div's width.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
