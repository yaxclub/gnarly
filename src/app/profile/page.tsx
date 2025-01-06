"use client";

import Button from "@/components/button"
import Wrapper from "@/components/wrapper"

export default function Profile() {
  return (
    <>
    <Wrapper 
      className="bg-zinc-300 dark:bg-gray-700">
      <div className="container w-4/5 mx-auto text-green bg-gray-800 text-center">
      <Button 
          className="float-right"
          onClick={() => console.log("Initiate logout")}
        >LOG OUT 💯
        </Button>
      <h1 className="text-4xl">Username</h1>
      </div>

      <Button 
        onClick={() => console.log("hello")}
      >
        HelloTest
        </Button>
    </Wrapper>
    </>
  );
}
