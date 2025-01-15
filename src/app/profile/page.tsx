"use client";

import Button from "@/components/button"
import Wrapper from "@/components/wrapper"
import Heading from "@/components/heading"
import Image from "next/image"

export default function Profile() {
  return (
    <>
    <Wrapper className="bg-gray-700">

      {/* main profile div */}
      <div className="w-3/5 mx-auto text-green m-h-screen bg-gray-800 flex flex-col justify-center">

        {/* profile header div */}
        <div className="flex flex-row justify-end relative mb-8">
          <Heading size={"xl"} className="text-4xl absolute w-full text-center">Coge Cdonnie</Heading>

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
            <div className="mb-4 h-auto">
              <Heading size={"lg"}> Bio </Heading>
              <p> User may set these themselves - can add stat components as well </p>
            </div>

            {/* stats div */}
            <div className="mt-4 h-36">
              <Heading size={"lg"}> Stats </Heading>
              <p> Favourite Spot: KG </p>
              <p> Favourite Trick: Pop shuv it </p>
              <p> Kickflips Hit: 0 </p>
            </div>
          </div>
        </div>

        <hr className="my-10" />
  
        {/* uploads div */}
        <div className="w-full px-3 pb-3 grid grid-cols-3 gap-3 ">
          {/* logic here to display all of users pictures */}
          {/* for (let i = 0; i < picture_array.length(); i++) {
            p_address = $picture_array.get_id(i).address;
            <div 
            className="relative aspect-square"
            onClick={() => console.log("Open page")}
            >
                <Image src=`${p_address}` fill={true} alt="Image not found" />
            </div>
          }
          */}
          <div className="relative aspect-square">
              <Image src="/coge.png" fill={true} alt="Image not found" />
          </div>
          <div className="relative aspect-square">
              <Image src="/coge.png" fill={true} alt="Image not found" />
          </div>
          <div className="relative aspect-square">
              <Image src="/coge.png" fill={true} alt="Image not found" />
          </div>
          <div className="relative aspect-square">
              <Image src="/coge.png" fill={true} alt="Image not found" />
          </div>
          <div className="relative aspect-square">
              <Image src="/coge.png" fill={true} alt="Image not found" />
          </div>
          <div className="relative aspect-square">
              <Image src="/coge.png" fill={true} alt="Image not found" />
          </div>
        </div>
      </div>
    </Wrapper>
    </>
  );
}
