import React from 'react';
import { DrawTools } from '../types';

type Props = {
  closeFeedback: () => void;
  onToolSelect: (val: string) => void;
  onColorSelect: (val: string) => void;
};

export default function Toolbar({
  closeFeedback,
  onToolSelect,
  onColorSelect,
}: Props) {
  return (
    <div className="flex justify-between px-6 py-4 bg-gray-200 ws-[400px]">
      <div className="flex justify-around items-center">
        {/* Arrow Button */}
        <button
          className="ml-4 mr-4 text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={() => onToolSelect(DrawTools.Arrow)}
          title="Arrow tool"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
        {/* Line Button */}
        <button
          className="ml-4 mr-4 text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={() => onToolSelect(DrawTools.Line)}
          title="Line tool"
        >
          <svg width="16.301" height="16.301">
            <line
              x1="0"
              y1="0"
              x2="16.301"
              y2="16.301"
              stroke="#5a6168"
              strokeWidth="2"
            />
          </svg>
        </button>
        {/* Circle Button */}
        <button
          className="ml-4 mr-4 text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={() => onToolSelect(DrawTools.Circle)}
          title="Circle tool"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16.301"
            height="16.301"
            viewBox="0 0 16.301 16.301"
          >
            <path
              id="circle-regular"
              d="M16.3,8.15A8.15,8.15,0,1,1,8.15,0,8.15,8.15,0,0,1,16.3,8.15ZM8.15,1.528A6.622,6.622,0,1,0,14.773,8.15,6.621,6.621,0,0,0,8.15,1.528Z"
              fill="#5a6168"
            />
          </svg>
        </button>
        {/* Rectangle Button */}
        <button
          className="ml-4 mr-4 text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={() => onToolSelect(DrawTools.Rectangle)}
          title="Rectangle tool"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16.301"
            height="16.301"
            viewBox="0 0 16.301 16.301"
          >
            <path
              id="square-regular"
              d="M13.972,32A2.33,2.33,0,0,1,16.3,34.329V45.972A2.331,2.331,0,0,1,13.972,48.3H2.329A2.33,2.33,0,0,1,0,45.972V34.329A2.329,2.329,0,0,1,2.329,32Zm0,1.747H2.329a.582.582,0,0,0-.582.582V45.972a.583.583,0,0,0,.582.582H13.972a.584.584,0,0,0,.582-.582V34.329A.583.583,0,0,0,13.972,33.747Z"
              transform="translate(0 -32)"
              fill="#5a6168"
            />
          </svg>
        </button>
        {/* Brush Button */}
        <button
          className="ml-4 mr-4 text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={() => onToolSelect(DrawTools.Brush)}
          title="Brush tool"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14.445"
            height="14.462"
            viewBox="0 0 14.445 14.462"
          >
            <path
              id="Path_153"
              data-name="Path 153"
              d="M8.319,8.378l6.014-6.535a.4.4,0,0,0-.024-.577L13.155.111a.4.4,0,0,0-.553,0L6.066,6.125a.4.4,0,0,0,0,.577L7.742,8.378a.4.4,0,0,0,.577,0Zm-3.44-.89,2.093,2.1a.8.8,0,0,1,.249.457v.393a3.208,3.208,0,0,1-.938,2.277,6.223,6.223,0,0,1-4.739,1.732,2.326,2.326,0,0,1-1.427-.481.4.4,0,0,1-.048-.505,4.772,4.772,0,0,0,.714-2.609A3.626,3.626,0,0,1,1.744,8.17a3.208,3.208,0,0,1,2.269-.938,3.134,3.134,0,0,1,.393,0A.874.874,0,0,1,4.879,7.488Z"
              fill="#5a6168"
              fillRule="evenodd"
            />
          </svg>
        </button>
        {/* Eraser Button */}
        <button
          className="ml-4 mr-4 text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={() => onToolSelect(DrawTools.Eraser)}
          title="Eraser tool"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17.093"
            height="16.301"
            viewBox="0 0 17.093 16.301"
          >
            <path
              id="bx-eraser"
              d="M2.543,14.46l3.985,3.985a.923.923,0,0,0,.655.272H18.309V16.862h-6.45l6.695-6.695a1.855,1.855,0,0,0,0-2.622l-4.59-4.589a1.857,1.857,0,0,0-2.622,0l-4.4,4.4L2.532,11.849a1.86,1.86,0,0,0,.011,2.61ZM12.653,4.268l4.589,4.589-2.4,2.4L10.256,6.665l2.4-2.4Zm-4.4,4.4.689-.688,4.589,4.589L9.31,16.789a.951.951,0,0,0-.064.073H7.568L3.855,13.148l4.4-4.484Z"
              transform="translate(-2.003 -2.416)"
              fill="#5a6168"
            />
          </svg>
        </button>
        <input
          type="color"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onColorSelect(e.target.value)
          }
          title="Color palette"
        />
      </div>
      <button
        onClick={closeFeedback}
        className="text-gray-600 hover:text-gray-900 font-bold text-xl focus:outline-none"
        title="Cancel"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}
