import React, { useState } from 'react';
import { DrawTools } from '../../types';

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
  const [color, setColor] = useState('#ff0000');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    onColorSelect(e.target.value);
  };

  return (
    <div className="flex justify-between px-6 py-4 bg-gray-200 ws-[400px]">
      <div className="flex justify-around items-center">
        {/* Text Button */}
        <button
          className="ml-4 mr-4 text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={() => onToolSelect(DrawTools.Hand)}
          title="Hand tool"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-hand-index-thumb"
            viewBox="0 0 16 16"
          >
            <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1zM8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5.114 5.114 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.632 2.632 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002zm2.094 2.025z" />
          </svg>
        </button>
        {/* Text Button */}
        <button
          className="ml-4 mr-4 text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={() => onToolSelect(DrawTools.Text)}
          title="Text tool"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16.301"
            height="16.301"
            viewBox="0 0 16.301 16.301"
            fill="currentColor"
            className="bi bi-fonts h-6 w-6"
          >
            <path d="M12.258 3h-8.51l-.083 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.431.013c1.934.062 2.434.301 2.693 1.846h.479L12.258 3z" />
          </svg>
        </button>
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
        {/* Clear Button */}
        <button
          className="ml-4 mr-4 text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={() => onToolSelect(DrawTools.Clear)}
          title="Clear tool"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16.301"
            height="16.301"
            viewBox="0 0 16.301 16.301"
            fill="currentColor"
            className="bi bi-trash3"
          >
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
          </svg>
        </button>
        {/* Download Button */}
        <button
          className="ml-4 mr-4 text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={() => onToolSelect(DrawTools.Download)}
          title="Download tool"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20.301"
            height="20.301"
            viewBox="0 0 16.301 16.301"
            fill="currentColor"
            className="bi bi-cloud-arrow-down"
          >
            <path
              fillRule="evenodd"
              d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"
            />
            <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
          </svg>
        </button>
        {/* Color Button */}
        <div className="color-picker" style={{ backgroundColor: color }}>
          <input
            type="color"
            id="color-picker"
            name="color-picker"
            value={color}
            onChange={handleChange}
          />
        </div>
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
