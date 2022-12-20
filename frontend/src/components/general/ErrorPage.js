import React from "react";

const Error = () => {
  return (
    <>
      <div className="bg-white-500 w-full h-screen flex justify-center items-center m-auto">
        <div className="flex flex-col text-center items-center gap-10">
          <h1 className="text-8xl text-blue-400">404 : Page Not Found</h1>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <a href="/home">Go to Home</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Error;
