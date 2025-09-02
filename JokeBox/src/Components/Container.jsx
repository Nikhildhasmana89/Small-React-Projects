import React from "react";

function Container(props) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 max-w-md text-center">
      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
        {props.type}
      </span>
      <h2 className="text-gray-800 font-semibold text-lg mb-2">
        {props.setup}
      </h2>
      <p className="text-gray-600">{props.punchline}</p>
    </div>
  );
}

export default Container;
