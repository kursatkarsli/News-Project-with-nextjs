"use client";
import React from "react";

function FilterError({error}) {
  return (
    <div id="error">
      <h2 className="">An Error Occured</h2>
      <p>{error.message}</p>
    </div>
  );
}
export default FilterError;
