import React from 'react';

type Props = {
  closeFeedback: () => void;
};

export default function Toolbar({ closeFeedback }: Props) {
  return (
    <div className="flex justify-between px-6 py-4 bg-gray-200 ws-[400px]">
      <div className="flex justify-around items-center">
        <button className="mr-4 text-gray-600 hover:text-gray-900 focus:outline-none">
          <svg className="h-6 w-6" viewBox="0 0 24 24">
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </button>
        <button className="ml-4 mr-4 text-gray-600 hover:text-gray-900 focus:outline-none">
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
        <button className="ml-4 mr-4 text-gray-600 hover:text-gray-900 focus:outline-none">
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
            <path d="M12 19l7-7 1 1-7 7-1-1zm-1.75 1.25l-4.5 1.5 1.5-4.5 10-10a3 3 0 0 1 4.25 0l1.5 1.5a3 3 0 0 1 0 4.25l-10 10z" />
          </svg>
        </button>
        <button className="ml-4 mr-4 text-gray-600 hover:text-gray-900 focus:outline-none">
          <svg className="h-6 w-6" viewBox="0 0 24 24">
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
              ry="2"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </button>
      </div>
      <button
        onClick={closeFeedback}
        className="text-gray-600 hover:text-gray-900 font-bold text-xl focus:outline-none"
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
