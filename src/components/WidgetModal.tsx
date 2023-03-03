import React from 'react';
import Form from './Form';

type Props = {
  showWidgetModal?: boolean;
  toggleFormWidget: () => void;
};

export default function Modal({ showWidgetModal, toggleFormWidget }: Props) {
  return (
    <div className="fixeds  z-10 inset-0 overflow-y-autos" id="myModal">
      <div
        className={`px-32  min-h-screen overlays ${
          showWidgetModal ? 'open' : 'body-lock'
        }  `}
      >
        <div className="flex justify-end">
          <button className="text-right px-10" onClick={toggleFormWidget}>
            X
          </button>
        </div>
        <Form />
      </div>
    </div>
  );
}
