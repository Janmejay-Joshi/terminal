import type { NextPage } from "next";
import { useRef } from "react";
import Head from "../components/Head";
import Input from "../components/term/Input";
import History from "../components/term/History";
import { useShell } from "../utils/shellProvider";

const Home: NextPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickAnywhere = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  const { history } = useShell();

  return (
    <>
      <Head title="Home" />

      <main
        className="flex flex-col bg-gray-800 h-screen w-screen overflow-hidden"
        onClick={onClickAnywhere}
      >
        <div className="scrollbar-hide h-full m-2 p-3 rounded border-2 border-slate-600 overflow-y-scroll">
          <History history={history} />
          <Input inputRef={inputRef} />
        </div>
      </main>
    </>
  );
};

export default Home;
