import React, { useRef, useState } from 'react';
import EVENT_NAME from '../constants';
import { FormValueTypes } from '../types';

type IForm = {
  getFormData: (data: FormValueTypes) => void;
};

const formValues: FormValueTypes = {
  bugSummary: '',
  bugDescription: '',
  reportName: '',
  reportEmail: '',
};

function Form({ getFormData }: IForm) {
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const [formValue, setFormValue] = useState<FormValueTypes>(formValues);

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const customEvent = new Event(EVENT_NAME.GET_CANVAS_DRAWING);
    submitButtonRef.current?.dispatchEvent(customEvent);
    getFormData(formValue);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    getFormData({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="fixed bottom-0 right-0 p-6 lg:w-1/3 xl:w-1/4 lg:w-70"
      style={{ width: 'calc((100% - 82%) + 5%)' }}
    >
      <form className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="bugSummary"
          >
            Bug Summary
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="bugSummary"
            type="text"
            name="bugSummary"
            placeholder="Enter bug Summary here"
            value={formValue.bugSummary}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="reportName"
          >
            Your Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="reportName"
            type="text"
            name="reportName"
            placeholder="Enter your name here"
            value={formValue.reportName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="reportEmail"
          >
            Your Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="reportEmail"
            type="text"
            name="reportEmail"
            placeholder="Enter your email here"
            value={formValue.reportEmail}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="bugDescription"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="bugDescription"
            rows={5}
            name="bugDescription"
            placeholder="Enter bug description"
            value={formValue.bugDescription}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          ref={submitButtonRef}
          id={EVENT_NAME.CROCHET_BUTTON_EVENT}
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default Form;
