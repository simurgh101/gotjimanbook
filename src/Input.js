import PropTypes from "prop-types";
import React, { useState } from "react";

const Input = ({ addPost }) => {
  const [input, setInput] = useState("");
  const onChange = (event) => {
    setInput(event.target.value);
  };
  const onKeyDown = (event) => {
    const title = event.target.value;
    if (event.key === "Enter" && title) {
      addPost(title);
      setInput("");
    }
  };
  return (
    <div className="Input">
      <div className="input__head">Creat New Post</div>
      <input
        className="input_area"
        type="text"
        value={input}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

Input.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default Input;
