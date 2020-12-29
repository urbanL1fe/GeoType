import React from "react";

export default function Question({ country }) {
  return (
    <>
      <div class="image-wrapper">
        <img src={country?.flag} />
      </div>
      <p> What is the capital of {country?.name}?</p>
    </>
  );
}
