"use client";
import React from "react";
import "../../styles/homepage.css";

const Home = () => {
    return (
        <div className="flex flex-col bg-white">
          <div className="flex gap-5 justify-between py-3.5 pr-14 pl-6 w-full text-lg bg-orange-50 text-stone-900 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="/images/wasong-logo.png"
              className="shrink-0 max-w-full w-[126px]"
            />
            <div className="flex gap-5 my-auto max-md:flex-wrap max-md:max-w-full">
              <div className="grow font-bold">Home</div>
              <div>Classes</div>
              <div className="flex-auto">Assignments</div>
              <div className="text-center capitalize text-neutral-950">
                My Profile
              </div>
            </div>
          </div>
          <div className="flex z-10 flex-col px-12 mt-0 w-full max-md:px-5 max-md:max-w-full">
            <div className="ml-24 max-w-full w-[841px]">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="/images/piano_icon.png"
                    className="grow w-full aspect-[0.94] max-md:mt-8"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
                  <div className="mt-48 text-7xl font-bold text-zinc-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                    Hello, Toper!
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-9 text-5xl font-bold text-zinc-800 max-md:max-w-full max-md:text-4xl">
              Choose Your Instrument
            </div>
            <div className="mt-4 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-3 pt-3.5 pb-8 w-full text-xl font-medium text-black bg-white rounded-2xl shadow-lg max-md:mt-9">
                    <img
                      loading="lazy"
                      srcSet="/images/best-acoustic-guitars-1.png"
                      className="w-full aspect-[1.56]"
                    />
                    <div className="mt-6">Acoustic Guitar</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-3.5 pt-3.5 pb-7 w-full text-xl font-medium text-black bg-white rounded-2xl shadow-lg max-md:mt-9">
                    <img
                      loading="lazy"
                      srcSet="/images/screenshot-2024-05-03-at-19-16-1.png"
                      className="w-full aspect-[1.56]"
                    />
                    <div className="mt-6">Electric Keyboard</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-3.5 pt-3.5 pb-8 w-full text-xl font-medium text-black bg-white rounded-2xl shadow-lg max-md:mt-9">
                    <img
                      loading="lazy"
                      srcSet="/images/maxresdefault-1.png"
                      className="w-full aspect-[1.56]"
                    />
                    <div className="mt-6">Classical Piano</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-3 pt-3.5 pb-8 w-full text-xl font-medium text-black whitespace-nowrap bg-white rounded-2xl shadow-lg max-md:mt-9">
                    <img
                      loading="lazy"
                      srcSet="/images/screenshot-2024-05-03-at-19-17-1.png"
                      className="w-full aspect-[1.56]"
                    />
                    <div className="mt-6">Violin</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3.5 self-start px-14 py-4 mt-8 ml-8 text-base font-medium text-white rounded-3xl bg-zinc-800 max-md:px-5 max-md:ml-2.5">
              <div className="my-auto">Read More</div>
              <img
                loading="lazy"
                src="/images/arrow_outlined.png"
                className="shrink-0 aspect-square w-[23px]"
              />
            </div>
            <div className="mt-9 text-5xl font-bold text-zinc-800 max-md:max-w-full max-md:text-4xl">
              Meet your Teachers!
            </div>
            <div className="self-center mt-7 w-full max-w-[1395px] max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-11 py-5 w-full font-medium bg-white rounded-2xl shadow-lg max-md:px-5 max-md:mt-8">
                    <img
                      loading="lazy"
                      srcSet="/images/ellipse-13.png"
                      className="w-full rounded-full aspect-square max-md:mr-2 max-md:ml-2"
                    />
                    <div className="mt-7 text-xl text-black">
                      Prof. Ivan Aldy Ganesen
                    </div>
                    <div className="self-center mt-1.5 text-base text-neutral-500">
                      Specialist in Mang
                    </div>
                    <div className="mt-3.5 text-lg text-center text-neutral-600">
                      Interested in playing guitar while singing hoarsely? Join my
                      team!
                    </div>
                    <div className="justify-center items-start px-5 py-5 mx-4 mt-3.5 max-w-full text-2xl text-white bg-orange-500 rounded-[96px] w-[207px] max-md:px-5 max-md:mx-2.5">
                      Read More
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-11 py-5 w-full font-medium bg-white rounded-2xl shadow-lg max-md:px-5 max-md:mt-8">
                    <img
                      loading="lazy"
                      srcSet="/images/ellipse-13.png"
                      className="w-full rounded-full aspect-square max-md:mr-2 max-md:ml-2"
                    />
                    <div className="mt-7 text-xl text-black">
                      Prof. Ivan Aldy Ganesen
                    </div>
                    <div className="self-center mt-1.5 text-base text-neutral-500">
                      Specialist in Mang
                    </div>
                    <div className="mt-3.5 text-lg text-center text-neutral-600">
                      Interested in playing guitar while singing hoarsely? Join my
                      team!
                    </div>
                    <div className="justify-center items-start px-5 py-5 mx-4 mt-3.5 max-w-full text-2xl text-white bg-orange-500 rounded-[96px] w-[207px] max-md:px-5 max-md:mx-2.5">
                      Read More
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-11 py-5 w-full font-medium bg-white rounded-2xl shadow-lg max-md:px-5 max-md:mt-8">
                    <img
                      loading="lazy"
                      srcSet="/images/ellipse-13.png"
                      className="w-full rounded-full aspect-square max-md:mr-2 max-md:ml-2"
                    />
                    <div className="mt-7 text-xl text-black">
                      Prof. Ivan Aldy Ganesen
                    </div>
                    <div className="self-center mt-1.5 text-base text-neutral-500">
                      Specialist in Mang
                    </div>
                    <div className="mt-3.5 text-lg text-center text-neutral-600">
                      Interested in playing guitar while singing hoarsely? Join my
                      team!
                    </div>
                    <div className="justify-center items-start px-5 py-5 mx-4 mt-3.5 max-w-full text-2xl text-white bg-orange-500 rounded-[96px] w-[207px] max-md:px-5 max-md:mx-2.5">
                      Read More
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-11 py-5 w-full font-medium bg-white rounded-2xl shadow-lg max-md:px-5 max-md:mt-8">
                    <img
                      loading="lazy"
                      srcSet="/images/ellipse-13.png"
                      className="w-full rounded-full aspect-square max-md:mr-2 max-md:ml-2"
                    />
                    <div className="mt-7 text-xl text-black">
                      Prof. Ivan Aldy Ganesen
                    </div>
                    <div className="self-center mt-1.5 text-base text-neutral-500">
                      Specialist in Mang
                    </div>
                    <div className="mt-3.5 text-lg text-center text-neutral-600">
                      Interested in playing guitar while singing hoarsely? Join my
                      team!
                    </div>
                    <div className="justify-center items-start px-5 py-5 mx-4 mt-3.5 max-w-full text-2xl text-white bg-orange-500 rounded-[96px] w-[207px] max-md:px-5 max-md:mx-2.5">
                      Read More
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center px-16 py-14 mt-16 w-full text-7xl italic font-bold bg-orange-50 max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            <img
            loading="lazy"
            srcSet="/images/wasong-journey.png"
            />
          </div>
        </div>
      );
}

export default Home;