import React from 'react';
import './style.css';

type IProps = {
  children: React.ReactNode;
  style?: object;
  onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, style, onClick }: IProps) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
      style={style ? { ...style } : {}}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
