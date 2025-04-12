function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  //   console.log(options);
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option  ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={hasAnswered}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payLoad: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
