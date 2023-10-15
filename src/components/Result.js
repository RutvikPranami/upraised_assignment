import React, { useContext } from "react";
import DataContext from "../context/dataContext";

const Result = () => {
  const { showResult, quizs, marks, startOver } = useContext(DataContext);
  return (
    <section
      className=" text-white"
      style={{ display: `${showResult ? "block" : "none"}`,background: "#AF9CF3" }}
    >
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-4">
            <div
              className={`text-light text-center p-5 rounded ${
                marks > (quizs.length * 5) / 2 ? "bg-success" : "bg-danger"
              }`}
            >
              <h1 className="mb-2 fw-bold">
                {marks > (quizs.length * 5) / 2 ? "Awesome!" : "Oops!"}
              </h1>
              <h3 className="mb-3 fw-bold">
                Your score is {marks} out of {quizs.length * 5}
              </h3>

              <button
                onClick={startOver}
                className="btn mt-3 align-items-center justify-content-center"
                style={{
                  marginLeft: "80px",
                  backgroundColor: "#FF3B3F",
                  color: "white",
                  fontWeight: "bold",
                  width: "150px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                Start Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Result;
