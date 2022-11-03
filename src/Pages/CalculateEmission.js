import classes from "./CalculateEmission.module.css";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

let a = 0;
let b = 1;
let responses = {};
const CalculateEmission = (props) => {
  const questions = props.questions;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isQuestionIndex, setIsQuestionIndex] = useState(questions[a]);
  const [isLastQuestion, setisLastQuestion] = useState(false);
  const [distribution, showDistribution] = useState(false);
  const [isResults, setIsResults] = useState({
    result: 0,
    travel: 0,
    diet: 0,
    carTravel: 0,
    fuel: 0,
    homePeople: 0,
    homeSize: 0,
    pet: 0,
    shopping: 0,
  });

  function optionClickHandler(qIndex, oIndex) {
    responses[`${qIndex}`] = oIndex;
  }
  const skipClickHandler = (event) => {
    event.preventDefault();
    setIsQuestionIndex(questions[++a]);
  };
  const nextClickHandler = (event) => {
    event.preventDefault();
    setIsQuestionIndex(questions[++a]);
    b++;
    if (a === 8) {
      setisLastQuestion(true);
    }
  };

  const distributionHandler = (event) => {
    event.preventDefault();
    showDistribution(!distribution);
  };
  const calculateagainHandler = (event) => {
    event.preventDefault();
    setIsSubmitted(false);
    a = 0;
    b = 1;
    setIsQuestionIndex(questions[a]);
    setisLastQuestion(false);
  };

  const rdata = (ans) => {
    setIsResults({
      result: ans.result,
      travel: ans.travel,
      diet: ans.diet,
      carTravel: ans.carTravel,
      fuel: ans.fuel,
      homePeople: ans.homePeople,
      homeSize: ans.homeSize,
      pet: ans.pet,
      shopping: ans.shopping,
    });
  };
  const submitClickHandler = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    const axios = require("axios").default;
    axios
      .post("https://carbonfootprint-api.herokuapp.com/calculate", responses)
      .then(function (response) {
        rdata(response.data);
        // console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // console.log(rdata);
  };

  return (
    <Fragment>
      <div className={classes.heading}>
        <h1>Calculate your carbon footprint</h1>
      </div>
      {!isSubmitted && (
        <div className={classes.container}>
          <div className={classes.question}>
            <p>
              {b}.&nbsp;{isQuestionIndex.question}
            </p>
          </div>
          <div className={classes.options}>
            <ul className={classes.optionlist}>
              {isQuestionIndex.options.map((option, index) => {
                return (
                  <button
                    onClick={() => optionClickHandler(a, index)}
                    key={index}
                  >
                    {option}
                  </button>
                );
              })}
            </ul>
          </div>
          {!isLastQuestion && (
            <div className={classes.buttonbox}>
              <button onClick={skipClickHandler} className={classes.buttonskip}>
                Skip
              </button>
              <button onClick={nextClickHandler} className={classes.buttonnext}>
                Next
              </button>
            </div>
          )}
          {isLastQuestion && (
            <div className={classes.submitbox}>
              <button
                onClick={submitClickHandler}
                className={classes.buttonsubmit}
              >
                Submit
              </button>
            </div>
          )}
        </div>
      )}
      {isSubmitted && (
        <div className={classes.container}>
          <div className={classes.mainEmission}>
            <h1>{isResults.result}</h1>
            <p>tonns/year</p>
          </div>

          {distribution && (
            <div className={classes.distribution}>
              <p>
                Travel: <b>{isResults.travel}</b>
              </p>
              <p>
                Diet: <b>{isResults.diet}</b>
              </p>
              <p>
                Car Travel:<b>{isResults.carTravel}</b>
              </p>
              <p>
                Fuel: <b>{isResults.fuel}</b>
              </p>
              <p>
                Home People: <b>{isResults.homePeople}</b>
              </p>
              <p>
                Home Size: <b>{isResults.homeSize}</b>
              </p>
              <p>
                Pet: <b>{isResults.pet}</b>
              </p>
              <p>
                Shopping: <b>{isResults.shopping}</b>
              </p>
            </div>
          )}

          <div className={classes.cbutton}>
            <button onClick={distributionHandler}>
              {!distribution ? "Show Distribution" : "Collapse"}
            </button>
            <button onClick={calculateagainHandler}>Calculate again</button>
          </div>
        </div>
      )}
      <div className={classes.homelink}>
        <Link to="/home">back to home..</Link>
      </div>
    </Fragment>
  );
};
export default CalculateEmission;

// <p>{travel}</p>
// <p>{diet}</p>
// <p>{carTravel}</p>
// <p>{fuel}</p>
// <p>{homePeople}</p>
// <p>{homeSize}</p>
// <p>{pet}</p>
// <p>{shopping}</p>
