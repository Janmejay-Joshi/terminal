import type { NextPage } from "next";
import { useRef } from "react";
import Head from "../components/Head";
import Input from "../components/term/Input";

const Home: NextPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickAnywhere = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <>
      <Head title="Home" />

      <main
        className="flex flex-col bg-gray-800 h-screen w-screen"
        onClick={onClickAnywhere}
      >
        <div className="h-full m-2 p-3 rounded border-2 border-slate-600">
          <div id="history"></div>
          <Input inputRef={inputRef} />
        </div>
      </main>
    </>
  );
};

export default Home;
