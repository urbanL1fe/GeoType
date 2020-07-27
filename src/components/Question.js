import React from "react";

export default function Question({ country }) {
  return (
    <>
      <img width="40" src={country?.flag} />
      <p> What is the capital of {country?.name}?</p>
    </>
  );
}
