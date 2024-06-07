"use client";
import React from "react";
import "../../styles/details.css";

const Details = () => {
    return(
            <div className="flex flex-col bg-white">
              <div className="flex gap-5 justify-between py-3.5 pr-14 pl-6 w-full text-lg bg-orange-50 text-stone-900 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="/images/wasong-logo.png"
                  className="shrink-0 max-w-full w-[126px]"
                />
                <div className="flex gap-5 my-auto max-md:flex-wrap max-md:max-w-full">
                  <div className="grow">Home</div>
                  <div className="font-bold">Classes</div>
                  <div className="flex-auto">Assignments</div>
                  <div className="text-center capitalize text-neutral-950">
                    My Profile
                  </div>
                </div>
              </div>
              <div className="flex flex-col px-11 mt-14 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl font-bold text-zinc-800 max-md:max-w-full max-md:text-4xl">
                  Classes
                </div>
                <div className="mt-14 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-3 py-6 w-full text-xl font-medium text-black bg-white rounded-2xl shadow-lg max-md:mt-9">
                        <img
                          loading="lazy"
                          srcSet="/images/best-acoustic-guitars-1.png"
                          className="w-full aspect-[1.56]"
                        />
                        <div className="mt-5">Acoustic Guitar</div>
                        <div className="mt-10 max-md:mt-10">Rp 1.500.000/month </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-3 py-6 w-full text-xl font-medium text-black bg-white rounded-2xl shadow-lg max-md:mt-9">
                        <img
                          loading="lazy"
                          srcSet="/images/screenshot-2024-05-03-at-19-16-1.png"
                          className="w-full aspect-[1.59]"
                        />
                        <div className="mt-5">Electric Keyboard</div>
                        <div className="mt-10 max-md:mt-10">Rp 1.200.000/month </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-3 py-6 w-full text-xl font-medium text-black bg-white rounded-2xl shadow-lg max-md:mt-9">
                        <img
                          loading="lazy"
                          srcSet="/images/trombone-quickstart-guide-1.png"
                          className="w-full aspect-[1.59]"
                        />
                        <div className="mt-5">Trombone</div>
                        <div className="mt-10 max-md:mt-10">Rp 1.000.000/month </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-3 py-6 w-full text-xl font-medium text-black bg-white rounded-2xl shadow-lg max-md:mt-9">
                        <img
                          loading="lazy"
                          srcSet="/images/screenshot-2024-05-03-at-19-19-1.png"
                          className="w-full aspect-[1.59]"
                        />
                        <div className="mt-5">Cello</div>
                        <div className="mt-10 max-md:mt-10">Rp 1.450.000/month </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-14 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-3 py-6 w-full text-xl font-medium text-black bg-white rounded-2xl shadow-lg max-md:mt-9">
                        <img
                          loading="lazy"
                          srcSet="/images/saxophone-buying-guide-featured-image-1.png"
                          className="w-full aspect-[1.56]"
                        />
                        <div className="mt-5">Saxophone</div>
                        <div className="mt-10 max-md:mt-10">Rp 1.250.000/month </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-3 py-6 w-full text-xl font-medium text-black bg-white rounded-2xl shadow-lg max-md:mt-9">
                        <img
                          loading="lazy"
                          srcSet="/images/dsc-3600-1.png"
                          className="w-full aspect-[1.56]"
                        />
                        <div className="mt-6">Flute</div>
                        <div className="mt-11 max-md:mt-10">Rp 1.450.000/month </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                    </div>
                  </div>
                </div>
                <div className="mt-24 text-5xl font-bold text-zinc-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                  Enrolled Classes
                </div>
                <div className="mt-14 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-3 py-5 w-full text-xl font-medium text-black bg-white rounded-2xl shadow-lg max-md:mt-9">
                        <img
                          loading="lazy"
                          srcSet="/images/maxresdefault-1.png"
                          className="w-full aspect-[1.59]"
                        />
                        <div className="mt-6">Classical Piano</div>
                        <div className="mt-8 mr-6 max-md:mr-2.5">
                          Next Class: Tuesday, 2 May 2024
                          <br />
                          Time: 13:00 - 14.30
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-3 py-5 w-full text-xl font-medium text-black bg-white rounded-2xl shadow-lg max-md:mt-9">
                        <img
                          loading="lazy"
                          srcSet="/images/screenshot-2024-05-03-at-19-17-1.png"
                          className="w-full aspect-[1.59]"
                        />
                        <div className="mt-5">Violin</div>
                        <div className="mt-9 max-md:mr-2.5">
                          Next Class: Saturday, 4 May 2024
                          <br />
                          Time: 13:00 - 14.30
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
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

export default Details;