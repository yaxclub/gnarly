"use client";

import Button from "@/components/button";
import Heading from "@/components/heading";
import Inputfield from "@/components/inputfield";
import Paragraph from "@/components/paragraph";
import Wrapper from "@/components/wrapper";
import { Formik, Form } from 'formik';

export default function Login() {
  function handle_submit(e){
  }

  return (
    <>
    <Wrapper className="bg-jet mx-auto h-dvh flex flex-col justify-center text-center">

      <Formik 
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <Heading size={"xl"} className="my-4 "> Log in </Heading>
          <Heading size={"md"}> Username </Heading>
          <Inputfield placeholder="Enter username" />
          <Heading size={"md"}> Password </Heading>
          <Inputfield placeholder="Enter password" />

          <Button 
            type="submit"
            className="h-12 w-32"> 
            Submit
          </Button>

        </Form>
      </Formik>
    </Wrapper>
    </>
  );
}
