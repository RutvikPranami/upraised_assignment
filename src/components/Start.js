import React, { useContext } from "react";
import DataContext from "../context/dataContext";

const Start = () => {
  const { startQuiz, showStart } = useContext(DataContext);
  return (
    <section
      className="text-white text-center"
      style={{
        display: `${showStart ? "block" : "none"}`,
        background: "linear-gradient(to bottom, #ffffff, #8a8aff)",
      }}
    >
      <div className="container ">
        <div className="d-flex flex-column vh-100 justify-content-between align-items-center">
          <h1
            className="rounded-circle bg-white text-danger p-3"
            style={{ width: "200px", height: "200px", lineHeight: "176px" }}
          >
            Quiz
          </h1>

          <button
            onClick={startQuiz}
            className="btn btn-danger px-4 py-2 mb-5 fw-bold"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </section>
  );
};

export default Start;
