"use client";

import {
  Magnifier,
  Briefcase,
  MapPin,
} from "@gravity-ui/icons";

export default function FindJobHeroTop() {
  return (
    <section className="z-50 top-[630px]  left-1/2 -translate-1/2    absolute  text-white">
      
      {/* Top Soft Gray Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full  blur-[180px]" />

        <div className="absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full  blur-[180px]" />
      </div>

     
      <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col items-center px-4 pt-28 text-center md:px-8">
        
        {/* Badge */}
        <div className="mb-8 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
          
          <Briefcase className="h-5 w-5 text-orange-400" />

          <span className="text-lg font-bold text-white">
            50,000+
          </span>

          <span className="tracking-[0.25em] text-gray-400 uppercase">
            New Jobs This Month
          </span>
        </div>

        {/* Heading */}
        <h1 className=" text-xl font-semibold leading-tight text-white sm:text-2xl md:text-2xl lg:text-5xl">
          Find Your Dream Job Today
        </h1>

        {/* Description */}
        <p className="mt-4  text-base leading-relaxed text-gray-400  md:text-md">
          HireLoop connects top talent with world-class companies.
          Browse thousands of curated opportunities and land your
          next role — faster.
        </p>

        {/* Search Box */}
        <div className="mt-10 w-full  rounded-[28px] border border-white/10 bg-[#0B0B0B]/90 p-2 shadow-[0_0_60px_rgba(255,255,255,0.03)] backdrop-blur-xl">
          
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            
            {/* Search Input */}
            <div className="flex flex-1 items-center gap-4 rounded-2xl px-3 py-2">
              
              <Magnifier className="h-7 w-7 text-white" />

              <input
                type="text"
                placeholder="Job title, skill or company"
                className="w-full bg-transparent text-lg text-white placeholder:text-gray-500 outline-none"
              />
            </div>

            {/* Divider */}
            <div className="hidden h-10 w-px bg-white/10 lg:block" />

            {/* Location */}
            <div className="flex flex-1 items-center gap-4 rounded-2xl px-3 py-2">
              
              <MapPin className="h-7 w-7 text-white" />

              <input
                type="text"
                placeholder="Location or Remote"
                className="w-full bg-transparent text-lg text-white placeholder:text-gray-500 outline-none"
              />
            </div>

            {/* Search Button */}
            <button className="flex h-13 w-13 items-center justify-center rounded-2xl  transition hover:scale-105 bg-[#045cdb]">
              
              <Magnifier className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>

        {/* Trending Tags */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          
          <span className="text-sm text-gray-400">
            Trending Position
          </span>

          {[
            "Product Designer",
            "AI Engineering",
            "Dev-ops Engineer",
          ].map((item) => (
            <button
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-2 py-2 text-sm text-white backdrop-blur-xl transition hover:bg-white/10"
            >
              {item}
            </button>
          ))}
        </div>

       
      </div>
    </section>
  );
}