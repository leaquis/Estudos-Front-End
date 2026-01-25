import React from "react";

const Fragment = ({ propFragment }) => {
  return (
    <>
      <h1>Primeiro titulo</h1>
      <h3>Segundo titulo</h3>
      <h4>{propFragment}</h4>
    </>
  );
};

export default Fragment;
