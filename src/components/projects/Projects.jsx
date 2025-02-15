import React, { useEffect } from "react";
import project1 from "../../assets/images/project1.png";
import cinco from "../../assets/images/cinco.png";

import { Link } from "react-router-dom";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-[100vh] flex flex-col p-3">
      <div className="border w-full w-[90%] grid grid-cols-1 md:grid md:grid-cols-4 gap-2 p-3 m-auto">
        <div
          className="h-[300px] max-w-[327px] md:w-full border relative bg-no-repeat"
          style={{ backgroundImage: `url(${project1})` }}
        >
          <Link to="https://getreat.onrender.com/">
            <button className="p-2 border w-[100px] m-2 rounded-lg shadow-gray-100 hover:z-[2] hover:shadow-sm  hover:shadow-gray-900 bottom-0 right-0 absolute bg-gray-700/50 text-white">
              Visit
            </button>
          </Link>
        </div>
        <div
          className="h-[300px] max-w-[327px] md:w-full border relative bg-no-repeat"       
          style={{backgroundImage: `url(${cinco})`}}>
          <Link to="https://cincocinema.onrender.com/">
            <button className="p-2 border w-[100px] m-2 rounded-lg shadow-gray-100 hover:z-[2] hover:shadow-sm  hover:shadow-gray-900 bottom-0 right-0 absolute bg-gray-700/50 text-white">
              Visit
            </button>
          </Link>
        </div>
        <div
          className="h-[300px] max-w-[327px] md:w-full border relative bg-no-repeat"               >
          <button className="p-2 border w-[100px] m-2 rounded-lg  shadow-gray-100 hover:z-[2] hover:shadow-sm hover:shadow-gray-900 absolute right-0 bottom-0">
            Visit
          </button>
        </div>
        <div
          className="h-[300px] max-w-[327px] md:w-full border relative bg-no-repeat"               >
          <button className="p-2 border w-[100px] m-2 rounded-lg  shadow-gray-100 hover:z-[2] hover:shadow-sm hover:shadow-gray-900 absolute right-0 bottom-0">
            Visit
          </button>
        </div>
        <div
          className="h-[300px] max-w-[327px] md:w-full border relative bg-no-repeat"               >
          <button className="p-2 border w-[100px] m-2 rounded-lg  shadow-gray-100 hover:z-[2] hover:shadow-sm hover:shadow-gray-900 absolute right-0 bottom-0">
            Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
