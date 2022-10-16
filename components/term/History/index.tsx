import React from "react";
import { HistoryInterface } from "../../../types";

type Props = { history: Array<HistoryInterface> };

const History: React.FC<Props> = (props: Props) => {
  return (
    <>
      {props.history.map((data: HistoryInterface, index: number) => {
        return (
          <div key={data.command + index}>
            <div className="flex flex-row space-x-2 my-1">
              <label htmlFor="prompt" className="flex-shrink">
                <span className="text-blue-500">~ </span>
                <span className="text-green-500">❯</span>
              </label>
              <div className="focus:outline-none flex-grow bg-inherit">
                {data.command}
              </div>
            </div>
            <p
              className="whitespace-pre-wrap mb-2"
              style={{ lineHeight: "normal" }}
              dangerouslySetInnerHTML={{ __html: data.output }}
            />
          </div>
        );
      })}
    </>
  );
};

export default History;
