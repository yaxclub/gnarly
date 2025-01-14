"use client";

import Button from "@/components/button"
import Wrapper from "@/components/wrapper"
import Image from "next/image"

export default function Profile() {
  return (
    <>
    <Wrapper 
      className="bg-zinc-300 dark:bg-gray-700">

      {/* main profile div */}
      <div className="w-3/5 mx-auto text-green h-full bg-gray-800 flex flex-col justify-center">

        {/* profile header div */}
        <div className="flex flex-row justify-end relative mb-8">
          <h1 className="text-4xl absolute w-full text-center">Coge Cdonnie</h1>

          {/* log out button */}
          <Button 
            className="my-1.5 mx-1.5 h-8 z-10"
            onClick={() => console.log("Initiate logout")}
          >LOG OUT 💯
          </Button>
        </div>

        {/* upper profile div */}
        <div className="flex flex-row justify-between">

          {/* profile picture div */} 
          <div className="w-1/6 h-48 ml-20 relative border-green border-2"> 
              <Image src="/coge.png" fill={true} alt="Image not found" />
          </div>

          {/* details div */}
          <div className="text-right w-1/2 mx-6 relative">

            {/* bio div */}
            <div className="mb-4 h-36">
              <h1> User written bio </h1>
              <h2> User may set these themselves - can add stat components as well </h2>
            </div>

            {/* stats div */}
            <div className="mt-4 h-36">
              <h1> User validated stats </h1>
              <h2> Favourite Spot: KG </h2>
              <h2> Favourite Trick: Pop shuv it </h2>
              <h2> Kickflips Hit: 0 </h2>
            </div>
          </div>
        </div>

        <hr className="my-10" />

        {/* uploads div */}
        <div className="w-full h-full bg-lime-400 grid-cols-3 grid-rows-3">
          <div className="">
          </div>

        </div>
      </div>
    </Wrapper>
    </>
  );
}
