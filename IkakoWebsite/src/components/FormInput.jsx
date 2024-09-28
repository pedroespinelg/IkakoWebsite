import { useState } from "react";

export default function FormInput() {
  const [input, setInput] = useState("");

  function changeHandler(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <form>
        <input onChange={(e) => changeHandler(e)} type="text" value={input} />
      </form>
    </>
  );
}
