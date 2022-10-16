import React from "react";
import { HistoryInterface } from "../../../types";

type Props = { history: Array<HistoryInterface> };

const History: React.FC<Props> = (props: Props) => {
  return (
    <>
      {props.history.map((data: HistoryInterface, index: number) => {
        return (
          <div key={data.command + index}>
            <div></div>
          </div>
        );
      })}
    </>
  );
};

export default History;
