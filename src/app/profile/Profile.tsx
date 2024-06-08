import React from "react";
import "../../styles/profilepage.css";

const Profile = () => {
    return (
        <div className="flex flex-col pb-20 bg-white">
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
          <div className="flex flex-col items-center px-20 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="text-5xl font-bold text-zinc-800 max-md:max-w-full max-md:text-4xl">
              Profile
            </div>
            <div className="self-start mt-20 ml-5 max-w-full w-[835px] max-md:mt-10">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="/images/mikumikumiku.png"
                    className="grow w-full aspect-[1.14] max-md:mt-8 max-md:max-w-full"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col mt-5 text-xl font-bold text-neutral-600 max-md:mt-10">
                    <div className="text-4xl text-zinc-800">Toper</div>
                    <div className="mt-3">Harbin, China</div>
                    <div className="mt-8">
                      Email
                      <br />
                      Age
                      <br />
                      Date of Birth
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="self-stretch my-auto text-xl text-neutral-600 max-md:mt-10">
                    : toperrrr@gmail.com
                    <br />: 55
                    <br />: 20 February 2001
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col px-14 pt-5 pb-3 mt-20 w-full bg-white rounded-2xl shadow-lg max-w-[1422px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-3xl font-bold text-neutral-600 max-md:max-w-full">
                About
              </div>
              <div className="mt-7 text-xl text-justify text-neutral-600 max-md:max-w-full">
                Little John managed to save billions of dollars for his family, only to get a 2 meter square
                room. So he decided to illegally expand the room using galvanized square steel and placing eco-friendly
                wood veneers for support, by borrowing the screws from his aunt.
              </div>
              <div className="flex gap-5 self-center ml-36 max-w-full text-2xl font-medium text-white w-[238px]">
                <div className="flex-auto">Read More</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb17ce935785832c810ea2620d29379933f50ca8c18e5dd09f9ef14599e508da?"
                  className="shrink-0 self-start aspect-[3.57] fill-white w-[25px]"
                />
              </div>
            </div>
            <div className="mt-24 text-4xl font-bold text-zinc-800 max-md:mt-10 max-md:max-w-full">
              Enrolled Classes
            </div>
            <div className="self-start mt-16 ml-5 max-w-full w-[747px] max-md:mt-10">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
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
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
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
              </div>
            </div>
          </div>
        </div>
      );
}
export default Profile;