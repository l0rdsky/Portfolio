"use client";

import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase"; // Adjust the path based on your project structure
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "What's your favorite programming language?",
    "Share a tech tip you swear by!",
    "Got a fun fact about coding?",
    "Tell us about a project you're proud of.",
    "What's your go-to debugging trick?",
    "What's a piece of advice you'd give to new developers?",
    "Share a book or resource that changed your coding journey.",
    "What's your favorite tech conference or meetup?",
    "Any interesting open-source projects you're following?",
    "What's a challenge you've recently overcome in coding?"
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
  </div>
  );
}