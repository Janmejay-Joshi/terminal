import React from "react";
import { HistoryInterface } from "../../../types";
import { useWindowDimensions } from "../../../utils/useWindowDimensions";

type Props = { history: Array<HistoryInterface> };

const History: React.FC<Props> = (props: Props) => {
  const { height, width } = useWindowDimensions();

  return (
    <>
      {props.history.map((data: HistoryInterface, index: number) => {
        console.log(data.command);
        return (
          <div key={data.command + index}>
            <div className="flex flex-row space-x-2 my-1">
              <label htmlFor="prompt" className="flex-shrink">
                {/* <span className="text-blue-500">~ </span> */}
                <span className="text-green-500">❯</span>
              </label>
              <div className="focus:outline-none flex-grow bg-inherit">
                {data.command}
              </div>
            </div>
            <p
              className="whitespace-pre-wrap mb-2"
              style={
                data.command !== "banner"
                  ? {
                      lineHeight: "normal",
                    }
                  : {
                      fontSize: width && width < 420 ? "11px" : "inherit",
                      lineHeight: "normal",
                      background:
                        "linear-gradient(90deg, #ffcf8c, #cec37d, #a0b478, #77a378, #558f77, #3d7a74, #30656b, #2c505c)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "4px 4px 2px rgba(0,0,0,0.2)",
                    }
              }
              dangerouslySetInnerHTML={{ __html: data.output }}
            />
          </div>
        );
      })}
    </>
  );
};

export default History;
