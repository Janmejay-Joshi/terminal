import React, { useState, useEffect, createContext, useContext } from "react";
import { HistoryInterface } from "../types";
import * as bin from "./bin";

interface ShellContextInterface {
  history: Array<HistoryInterface>;
  command: string;
  lastCommandIndex: number;

  setHistory: (output: string) => void;
  setCommand: (command: string) => void;
  setLastCommandIndex: (index: number) => void;
  clearHistory: (output: string) => void;

  execute: (command: string) => Promise<void>;
}

const ShellContext = createContext<ShellContextInterface>({
  history: [{ command: "", id: 1, output: "" }],
  command: "",
  lastCommandIndex: 0,

  setHistory: () => {},
  setCommand: () => {},
  clearHistory: () => {},
  setLastCommandIndex: () => {},

  execute: async () => {},
});

export const useShell = () => useContext(ShellContext);

interface ShellProviderProps {
  children: React.ReactNode;
}

export const ShellProvider: React.FC<ShellProviderProps> = ({ children }) => {
  const [init, setInit] = useState<boolean>(true);
  const [history, _setHistory] = useState<Array<HistoryInterface>>([]);
  const [command, _setCommand] = useState<string>("");
  const [lastCommandIndex, setLastCommandIndex] = React.useState<number>(0);

  useEffect(() => {
    setCommand("banner");
  }, []);

  useEffect(() => {
    if (!init) {
      execute();
    }
  }, [command, init]);

  const setHistory = (output: string) => {
    _setHistory([
      ...history,
      {
        id: history.length,
        command: command,
        output,
      },
    ]);
  };

  const clearHistory = () => {
    _setHistory([]);
  };

  const setCommand = (command: string) => {
    _setCommand(command);
    setInit(false);
  };

  const execute = async () => {
    const [cmd, ...args] = command.split(" ");

    switch (cmd) {
      case "clear":
        clearHistory();
        break;
      case "":
        setHistory("");
        break;
      default: {
        if (Object.keys(bin).indexOf(cmd) === -1) {
          setHistory(`Command not found: ${cmd}. Try 'help' to get started.`);
        } else {
          try {
            const output = await (bin as any)[cmd](args);

            setHistory(output);
          } catch (error: any) {
            setHistory(error.message);
          }
        }
      }
    }
  };

  return (
    <ShellContext.Provider
      value={{
        history,
        command,
        lastCommandIndex,
        setHistory,
        setCommand,
        setLastCommandIndex,
        clearHistory,
        execute,
      }}
    >
      {children}
    </ShellContext.Provider>
  );
};
