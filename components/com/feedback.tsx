"use client";
import MagicButton from "../ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase"; // Adjust the path based on your project structure
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "You are my best friend.",
    "Wish you could be mine.",
    "Let's do a project together.",
    "My name is Pavan.",
    "You inspire me every day.",
    "I love your work!",
    "Can't wait to see what you do next.",
    "You are amazing at coding.",
    "Let's grab coffee sometime.",
    "Your tips have helped me a lot."
  ];
  

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const inputElement = e.target.querySelector("input");
    const inputValue = inputElement ? inputElement.value : "";

    console.log("Form submitted with value: ", inputValue);

    if (inputValue) {
      try {
        const docRef = await addDoc(collection(db, "Messages"), {
          message: inputValue,
          timestamp: new Date(),
        });
        console.log("Document written with ID: ", docRef.id);
        alert("Thanks for your message!");
        inputElement.value = ""; // Clear the input field after successful submission
      } catch (e) {
        console.error("Error adding document: ", e);
        alert("There was an error submitting your message. Please try again.");
      }
    } else {
      alert("Please enter a message before submitting.");
    }
  };


  return (
    <div className="w-full mb-4 max-w-xl sm:w-[80rem] flex flex-col justify-center items-center px-4">
    <PlaceholdersAndVanishInput
      placeholders={placeholders}
      onChange={handleChange}
      onSubmit={onSubmit}
    />
    {/* <div className="mt-4">
    <MagicButton
            title="Send"
            icon={<FaLocationArrow />}
            position="right"
          />
          </div> */}
  </div>
  );
}