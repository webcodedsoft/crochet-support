import React from 'react';

function Form() {
  return (
    <div
      className="fixed bottom-0 right-0 p-6 lg:w-1/3 xl:w-1/4 lg:w-70"
      style={{ width: 'calc((100% - 82%) + 5%)' }}
    >
      <form className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="input">
            Bug Summary
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="input"
            type="text"
            placeholder="Enter text here"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="textarea"
          >
            Textarea
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="textarea"
            rows={5}
            placeholder="Enter text here"
          ></textarea>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
