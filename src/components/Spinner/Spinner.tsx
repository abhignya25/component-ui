import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-indigo-500">
        <div className="w-20 h-20 border-4 border-b-0 border-gray-200 rounded-full animate-spin"></div>
    </div>
  );
}

export default Spinner;