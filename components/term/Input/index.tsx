import React, { MutableRefObject, useState } from "react";

type Props = { inputRef: MutableRefObject<HTMLInputElement | null> };

const Input: React.FC<Props> = (props: Props) => {
  const [value, setValue] = useState<string>("");

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
        style={
          {
            //   color: commandExists(value) || value === "" ? theme.green : theme.red,
          }
        }
        value={value}
        onChange={(event) => setValue(event.target.value)}
        autoFocus
        // onKeyDown={onSubmit}
        autoComplete="off"
        spellCheck={false}
        autoCorrect="off"
        autoCapitalize="off"
      />
    </div>
  );
};

export default Input;
