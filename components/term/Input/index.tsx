import React, { MutableRefObject, useState } from "react";
import { commandExists } from "../../../utils/commandExists";
import { useShell } from "../../../utils/shellProvider";

type Props = { inputRef: MutableRefObject<HTMLInputElement | null> };

const Input: React.FC<Props> = (props: Props) => {
  const [value, setValue] = useState<string>("");
  const { setCommand, setHistory, clearHistory } = useShell();

  const onSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "c" && event.ctrlKey) {
      event.preventDefault();

      setValue("");

      setHistory("");
    }

    if (event.key === "l" && event.ctrlKey) {
      event.preventDefault();

      clearHistory();
    }

    if (event.key === "Enter" || event.code === "13") {
      event.preventDefault();

      setCommand(value);
      setValue("");
    }
  };

  return (
    <div className="flex flex-row space-x-2">
      <label htmlFor="prompt" className="flex-shrink">
        <span className="text-blue-500">~ </span>
        <span className="text-green-500">❯</span>
      </label>
      <input
        ref={props.inputRef}
        id="prompt"
        type="text"
        className="focus:outline-none flex-grow bg-inherit"
        aria-label="prompt"
        style={{
          color: commandExists(value) || value === "" ? "#87ab69" : "#b53737",
        }}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        autoFocus
        onKeyDown={onSubmit}
        autoComplete="off"
        spellCheck={false}
        autoCorrect="off"
        autoCapitalize="off"
      />
    </div>
  );
};

export default Input;
