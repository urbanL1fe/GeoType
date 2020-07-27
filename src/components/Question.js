import React from "react";

export default function Question({ country }) {
  return (
    <>
      <p> What is the capital of {country?.name}?</p>
      <img src={country?.flag} />
    </>
  );
}
