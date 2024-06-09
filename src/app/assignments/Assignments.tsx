import React from "react";
import "../../styles/assignments.css";

const Assignments = () => {
  return (
    <div className="flex flex-col bg-white font-rubik">
      <div className="flex gap-5 justify-between py-3.5 pr-14 pl-6 w-full text-lg bg-orange-50 text-stone-900 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="/images/wasong-logo.png"
          className="shrink-0 max-w-full w-[126px]"
        />
        <div className="flex gap-5 my-auto max-md:flex-wrap max-md:max-w-full">
          <div>Home</div>
          <div>Classes</div>
          <div className="flex-auto font-bold underline">Assignments</div>
          <div className="text-center capitalize text-neutral-950">
            My Profile
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center self-center mt-12 w-full max-w-[1366px] max-md:mt-10 max-md:max-w-full">
        <div className="self-stretch text-5xl font-bold text-zinc-800 max-md:max-w-full max-md:text-4xl">
          Ongoing Assignment(s)
        </div>
        <div className="mt-20 w-full max-w-[1200px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start px-14 py-11 w-full font-bold bg-white rounded-2xl shadow-lg max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl text-zinc-800 max-md:text-4xl">
                  Classical Piano
                </div>
                <div className="mt-6 text-3xl text-neutral-800">
                  Play a score of Chopin No.9
                  <br />
                  Due in 2 days{" "}
                </div>
                <div className="justify-center self-center p-2.5 mt-5 text-2xl text-black whitespace-nowrap rounded-lg border-4 border-black border-solid max-md:px-5">
                  DETAILS
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start px-14 py-11 w-full font-bold bg-white rounded-2xl shadow-lg max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl text-zinc-800 max-md:text-4xl">
                  Classical Piano
                </div>
                <div className="mt-6 text-3xl text-neutral-800">
                  Play a score of Chopin No.9
                  <br />
                  Due in 2 days{" "}
                </div>
                <div className="justify-center self-center p-2.5 mt-6 text-2xl text-black whitespace-nowrap rounded-lg border-4 border-black border-solid max-md:px-5">
                  DETAILS
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28 w-full max-w-[1200px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start px-14 py-11 w-full font-bold bg-white rounded-2xl shadow-lg max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl text-zinc-800 max-md:text-4xl">
                  Classical Piano
                </div>
                <div className="mt-8 text-3xl text-neutral-800">
                  Play a score of Chopin No.9
                  <br />
                  Due in 2 days{" "}
                </div>
                <div className="justify-center self-center p-2.5 mt-3.5 text-2xl text-black whitespace-nowrap rounded-lg border-4 border-black border-solid max-md:px-5">
                  DETAILS
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start px-14 py-11 w-full font-bold bg-white rounded-2xl shadow-lg max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl text-zinc-800 max-md:text-4xl">
                  Classical Piano
                </div>
                <div className="mt-8 text-3xl text-neutral-800">
                  Play a score of Chopin No.9
                  <br />
                  Due in 2 days{" "}
                </div>
                <div className="justify-center self-center p-2.5 mt-3.5 text-2xl text-black whitespace-nowrap rounded-lg border-4 border-black border-solid max-md:px-5">
                  DETAILS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-20 ml-6 max-w-full font-bold w-[722px] max-md:mt-10">
        <div className="text-5xl text-zinc-800 max-md:max-w-full max-md:text-4xl">
          Finished Assignment(s)
        </div>
        <div className="flex flex-col self-end px-14 py-11 mt-20 max-w-full bg-white rounded-2xl shadow-lg w-[544px] max-md:px-5 max-md:mt-10">
          <div className="text-5xl text-zinc-800 max-md:max-w-full max-md:text-4xl">
            Violin
          </div>
          <div className="mt-6 text-3xl text-neutral-800 max-md:max-w-full">
            Play a score of any Mozart song
            <br />
            Finished in 1 May 2024{" "}
          </div>
          <div className="justify-center self-center p-2.5 mt-5 text-2xl text-black whitespace-nowrap rounded-lg border-4 border-black border-solid max-md:px-5">
            DETAILS
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-14 mt-24 w-full text-7xl italic font-bold bg-orange-50 text-zinc-800 max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
      <img
            loading="lazy"
            srcSet="/images/wasong-journey.png"
            />
      </div>
    </div>
  );
}

export default Assignments;