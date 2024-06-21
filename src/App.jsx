import React from "react";
import { useReducer } from "react";

const initialState = {
  red: 0,
  green: 0,
  blue: 0,
};

const COLOR_ACTIONS = {
  INCREMENT_RED: "INCREMENT_RED",
  INCREMENT_GREEN: "INCREMENT_GREEN",
  INCREMENT_BLUE: "INCREMENT_BLUE",
  DECREMENT_RED: "DECREMENT_RED",
  DECREMENT_GREEN: "DECREMENT_GREEN",
  DECREMENT_BLUE: "DECREMENT_BLUE",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COLOR_ACTIONS.INCREMENT_RED:
      return {
        ...state,
        red: state.red + 1,
      };
    case COLOR_ACTIONS.DECREMENT_RED:
      return {
        ...state,
        red: state.red - 1,
      };
    case COLOR_ACTIONS.INCREMENT_GREEN:
      return {
        ...state,
        green: state.green + 1,
      };
    case COLOR_ACTIONS.DECREMENT_GREEN:
      return {
        ...state,
        green: state.green - 1,
      };
    case COLOR_ACTIONS.INCREMENT_BLUE:
      return {
        ...state,
        blue: state.blue + 1,
      };
    case COLOR_ACTIONS.DECREMENT_BLUE:
      return {
        ...state,
        blue: state.blue - 1,
      };

    default:
      throw new Error("Unknown color action: " + action.type);
      break;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { red, green, blue } = state;
  return (
    <div className=" w-full h-[700px] flex flex-col justify-center  items-center border border-black">
      <div
        className=" w-96 h-96 border border-red-500  bg-orange-100"
        style={{
          backgroundColor: `rgb(${red} , ${green} , ${blue})`,
        }}
      ></div>
      <div className="flex gap-[15px]">
        <div className="space-x-1">
          <p>Red: {red}</p>
          <button
            className="border bg-neutral-500 text-white py-2 px-4"
            onClick={() =>
              dispatch({
                type: COLOR_ACTIONS.INCREMENT_RED,
              })
            }
          >
            +1
          </button>
          <button
            className="border bg-neutral-500 text-white py-2 px-4"
            onClick={() =>
              dispatch({
                type: COLOR_ACTIONS.DECREMENT_RED,
              })
            }
          >
            -1
          </button>
        </div>

        <div className="space-x-1">
          <p>Green: {green}</p>
          <button
            className="border bg-neutral-500 text-white py-2 px-4"
            onClick={() =>
              dispatch({
                type: COLOR_ACTIONS.INCREMENT_GREEN,
              })
            }
          >
            +1
          </button>
          <button
            className="border bg-neutral-500 text-white py-2 px-4"
            onClick={() =>
              dispatch({
                type: COLOR_ACTIONS.DECREMENT_GREEN,
              })
            }
          >
            -1
          </button>
        </div>

        <div className="space-x-1">
          <p>Blue: {blue}</p>
          <button
            className="border bg-neutral-500 text-white py-2 px-4"
            onClick={() =>
              dispatch({
                type: COLOR_ACTIONS.INCREMENT_BLUE,
              })
            }
          >
            +1
          </button>
          <button
            className="border bg-neutral-500 text-white py-2 px-4"
            onClick={() =>
              dispatch({
                type: COLOR_ACTIONS.DECREMENT_BLUE,
              })
            }
          >
            -1
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
