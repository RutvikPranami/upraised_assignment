import React, { useContext } from "react";
import DataContext from "../context/dataContext";

const Quiz = () => {
  const {
    showQuiz,
    question,
    quizs,
    checkAnswer,
    correctAnswer,
    selectedAnswer,
    questionIndex,
    nextQuestion,
    showTheResult,
  } = useContext(DataContext);

  return (
    <section
      className="text-white"
      style={{
        display: `${showQuiz ? "block" : "none"}`,
        background: "#AF9CF3",
      }}
    >
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-4">
            <h2
              style={{

                marginLeft:"170px",
                color: "black",
                width: "60px",
                textAlign: "right",
                borderRadius: "50%",
                backgroundColor: "white",
                padding: "6px",
                border: "3px solid lightgreen",
              }}
            >
              <span
                style={{
                  fontSize: "30px",
                  fontWeight: "800",
                }}
              >
                {quizs.indexOf(question) + 1}
              </span>
              <span style={{ fontSize: "12px" }}>/ {quizs?.length}</span>
            </h2>
            <div
              className="card p-4 "
              style={{ background: "white", borderColor: "#646464" }}
            >
              <div className="d-flex justify-content-between gap-md-3">
                <h5
                  className="mb-2 fs-normal lh-base"
                  style={{ color: "black" }}
                >
                  {question?.question}
                </h5>
              </div>
              <div>
                {question?.options?.map((item, index) => (
                  <label key={index} className="d-flex align-items-center mb-3">
                    <input
                        type="radio"
                        className="d-none"
                        onClick={(event) => checkAnswer(event, item)}
                        checked={correctAnswer === item}
                        readOnly
                      />
                      <span
                        className="rounded-circle border bg-white d-flex justify-content-center align-items-center"
                        style={{
                          width: "24px",
                          height: "24px",
                          border: "2px solid #ccc",
                          marginRight: "10px",
                          position: "relative",
                        }}
                      >
                        {correctAnswer === item && (
                          <span
                            className="text-success"
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                            }}
                          >
                            ✓
                          </span>
                        )}
                      </span>
                    <button
                      style={{
                        background: "#F3F4FA",
                        border: "1px solid #ccc",
                        flex: 1,
                      }}
                      className={`option w-100 text-start btn text-black py-2 px-3 rounded btn-dark ${
                        correctAnswer === item && "bg-success"
                      }`}
                      onClick={(event) => checkAnswer(event, item)}
                    >
                      {item}
                    </button>
                  </label>
                ))}
              </div>

              {questionIndex + 1 !== quizs.length ? (
                <button
                  className="btn mt-3 align-items-center justify-content-center"
                  style={{
                    marginLeft:"100px",
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
                  onClick={nextQuestion}
                  disabled={!selectedAnswer}
                >
                  Next Question
                  <span>&rarr;</span>
                </button>
              ) : (
                <button
                  className="btn py-2 w-100 mt-3 bg-primary text-light fw-bold"
                  onClick={showTheResult}
                  disabled={!selectedAnswer}
                >
                  Show Result
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
