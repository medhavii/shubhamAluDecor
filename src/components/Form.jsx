import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Options = [
  "Doors",
  "Windows",
  "Renovating a house",
  "building a new home",
  "office or workshops",
  "other",
];

export const Form = () => {
  const [formSubmitted, SetFormSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4ca8jbr",
        "template_anxdwbi",
        form.current,
        "VxE7bhVeAESr6QNht"
      )
      .then(
        (result) => {
          console.log(result.text);
          SetFormSubmitted(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex justify-center my-4">
      {formSubmitted ? (
        <h1 className="text-5xl text-center min-h-screen flex justify-center  text-yellow-400">We will get back to you super soon! 😊</h1>
      ) : (
        <form
          ref={form}
          onSubmit={sendEmail}
          className="  text-yellow-50 mx-4 my-4 w-80 "
        >
          <input
            type="text"
            name="user_name"
            id=""
            placeholder="Name"
            className="mx-4 my-2 p-1 bg-slate-600 rounded-lg border-2 border-slate-500 "
          />
          <input
            type="email"
            name="user_email"
            id=""
            placeholder="Email"
            className="mx-4 my-2 p-1 bg-slate-600 rounded-lg border-2 border-slate-500"
          />
          <input
            type="text"
            name="user_location"
            placeholder="Location"
            className="mx-4 my-2 p-1 bg-slate-600 rounded-lg border-2 border-slate-500"
          />
          <input
            type="text"
            name="user_mobilenumber"
            id=""
            placeholder="Phone Number"
            className="mx-4 my-2 p-1 bg-slate-600 rounded-lg border-2 border-slate-500"
          />
          <select className="mx-4 my-2  p-1 bg-slate-600 rounded-lg border-2 border-slate-500">
            <option name="user_problem">Need Assistance with?</option>
            {Options.map((option, index) => {
              return (
                <option key={index} name={index}>
                  {option}
                </option>
              );
            })}
          </select>
          <textarea
            name="user_description"
            id=""
            cols="30"
            rows="10"
            placeholder="Description"
            className=" text-yellow-50 h-44 mx-4 my-2 p-1 bg-slate-600 rounded-lg border-2 border-slate-500"
          ></textarea>
          <button className="rounded bg-yellow-400   text-yellow-50 p-2 mx-4 my-4">
            Get a call back!
          </button>{" "}
          <br />
        </form>
      )}
    </div>
  );
};

export default Form;
