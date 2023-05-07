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
    <div>
      {formSubmitted ? (
        <h1 className="text-xl text-center text-yellow-400">We will try to get back to you super soon.😊</h1>
      ) : (
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-yellow-200 text-white mx-4 my-4 w-80 border-2 border-red-600"
        >
          <input
            type="text"
            name="user_name"
            id=""
            placeholder="Name"
            className="mx-4 my-2"
          />
          <input
            type="email"
            name="user_email"
            id=""
            placeholder="Email"
            className="mx-4 my-2"
          />
          <input
            type="text"
            name="user_location"
            placeholder="Location"
            className="mx-4 my-2"
          />
          <input
            type="text"
            name="user_mobilenumber"
            id=""
            placeholder="Phone Number"
            className="mx-4 my-2"
          />
          <select className="mx-4 my-2 text-black">
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
            className=" text-black mx-4 my-2"
          ></textarea>
          <button className="rounded bg-yellow-400 p-2 m-2 my-4">
            Get a call back!
          </button>{" "}
          <br />
        </form>
      )}
    </div>
  );
};

export default Form;
