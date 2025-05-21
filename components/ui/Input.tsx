import React from "react";

interface props {
  id: string;
  placeholder?: string;
}

export const Input: React.FC<props> = ({ id, placeholder }) => {
  return (
    <>
      <input id={id} type="text" className="input" placeholder={placeholder} />
    </>
  );
};
