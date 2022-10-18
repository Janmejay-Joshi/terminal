import React, { MutableRefObject, useEffect, useState } from "react";
import { autoCompletion } from "../../../utils/autoCompletion";
import { commandExists } from "../../../utils/commandExists";
import { useShell } from "../../../utils/shellProvider";

type Props = {
  inputRef: MutableRefObject<HTMLInputElement | null>;
  scrollRef: MutableRefObject<HTMLDivElement | null>;
};

const Input: React.FC<Props> = (props: Props) => {
  const [value, setValue] = useState<string>("");
  const {
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
    lastCommandIndex,
    command,
    history,
  } = useShell();

  useEffect(() => {
    props.scrollRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [history, props.scrollRef]);

  const onSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const commands: string[] = history
      .map(({ command }) => command)
      .filter((value: string) => value);

    if (event.key === "c" && event.ctrlKey) {
      event.preventDefault();

      setValue("");

      setHistory("");
    }

    if (event.key === "l" && event.ctrlKey) {
      event.preventDefault();

      clearHistory("");
    }

    if (event.key === "Tab") {
      event.preventDefault();

      autoCompletion(value, setValue);
    }

    if (event.key === "Enter" || event.code === "13") {
      event.preventDefault();

      setCommand(value);
      setValue("");
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (!commands.length) {
        return;
      }

      const index: number = lastCommandIndex + 1;

      if (index <= commands.length) {
        setLastCommandIndex(index);
        setValue(commands[commands.length - index]);
      }
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (!commands.length) {
        return;
      }

      const index: number = lastCommandIndex - 1;

      if (index > 0) {
        setLastCommandIndex(index);
        setValue(commands[commands.length - index]);
      } else {
        setLastCommandIndex(0);
        setValue("");
      }
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
