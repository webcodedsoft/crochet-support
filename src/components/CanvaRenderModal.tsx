import React from 'react';
import Form from './Form';
import Toolbar from './Toolbar';

type Props = {
  image: string;
  closeFeedback: () => void;
};

export default function CanvaRenderModal({ image, closeFeedback }: Props) {
  return (
    <div>
      <div className="fixed z-50 inset-0 overflow-y-auto p-6">
        <div className="flex items-centers justify-centers px-4 pt-4 pb-20 sm:block sm:p-0">
          {/* Background Overlay */}
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          {/* Modal */}
          <div
            className="bg-gray-500 h-screen rounded-lg overflow-hidden shadow-xl transform transition-all mx-auto lg:w-1/3 xl:w-1/4 p-4s lg:px-6s xl:px-8s py-6s lg:py-8s xl:py-10s w-screen lg:w-70"
            style={{
              marginRight: 'calc((100% - 70%) + 2%)',
              width: 'calc((100% - 35%) + 2%)',
              //   paddingBottom: 500,
              //   height: 'calc((100% - 5%) + 2%)',
            }}
          >
            <Toolbar closeFeedback={closeFeedback} />
            <div className="p-6">
              <img className="h-screens w-screens" src={image} />
            </div>
          </div>
        </div>
        <Form />
        <div className="flex-1"></div>
      </div>
    </div>
  );
}