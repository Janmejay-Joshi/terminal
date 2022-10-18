import React from "react";
import * as bin from "./bin";

export const autoCompletion = (
  command: string,
  setCommand: React.Dispatch<React.SetStateAction<string>>
) => {
  const commands = ["clear", ...Object.keys(bin)].filter((entry) => {
    return entry.startsWith(command);
  });

  console.log(commands, command, Object.keys(bin));

  if (commands.length === 1) {
    setCommand(commands[0]);
  }
};
