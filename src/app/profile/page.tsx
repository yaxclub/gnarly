"use client";

import Button from "@/components/button"

export default function Profile() {
  return (
    <>
      <Button
        className="bg-red-500" 
        onClick={() => console.log("hello")}
      >
        HelloTest
        </Button>
    </>
  );
}
