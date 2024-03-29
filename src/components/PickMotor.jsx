import React, { useState } from "react";
import Motor from "./Motor.jsx";

const PickMotor = () => {
  const [activeBtn, setActiveBtn] = useState("FirstMotor");

  const coloringButton = (id) => {
    return activeBtn === id ? "colored-button" : "";
  };

  return (
    <section className="pick-motor">
      <div className="pick-motor-title">
        <h4>Vehicle Models</h4>
        <h1>Our rental fleet</h1>
        <p>
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>

      <div className="pick-motor-body">
        <div className="pick-motor-btns">
          <button
            className={`pick-motor-btn ${coloringButton("FirstMotor")}`}
            id="FirstMotor"
            onClick={() => {
              setActiveBtn("FirstMotor");
              // btnID("btn1");
            }}
          >
            Rx 135(2001)
          </button>
          <button
            className={`pick-motor-btn ${coloringButton("SecondMotor")}`}
            id="SecondMotor"
            onClick={() => {
              setActiveBtn("SecondMotor");
              // btnID("btn2");
            }}
          >
            Rx 100(2003)
          </button>
          <button
            className={`pick-motor-btn ${coloringButton("ThirdMotor")}`}
            id="ThirdMotor"
            onClick={() => {
              setActiveBtn("ThirdMotor");
              // btnID("btn3");
            }}
          >
            Rx-z
          </button>
          <button
            className={`pick-motor-btn ${coloringButton("FourthMotor")}`}
            id="FourthMotor"
            onClick={() => {
              setActiveBtn("FourthMotor");
              // btnID("btn4");
            }}
          >
            Rx 100(2000)
          </button>
          <button
            className={`pick-motor-btn ${coloringButton("FifthMotor")}`}
            id="FifthMotor"
            onClick={() => {
              setActiveBtn("FifthMotor");
              // btnID("btn5");
            }}
          >
          Rx 135(1999)
          </button>
          <button
            className={`pick-motor-btn ${coloringButton("SixthMotor")}`}
            id="SixthMotor"
            onClick={() => {
              setActiveBtn("SixthMotor");
              // btnID("btn6");
            }}
          >
            Rx 135(1995)
          </button>
        </div>
        {activeBtn === "FirstMotor" && <Motor motorID={0}/>}
        {activeBtn === "SecondMotor" && <Motor motorID={1} />}
        {activeBtn === "ThirdMotor" && <Motor motorID={2} />}
        {activeBtn === "FourthMotor" && <Motor motorID={3} />}
        {activeBtn === "FifthMotor" && <Motor motorID={4} />}
        {activeBtn === "SixthMotor" && <Motor motorID={5} />}
      </div>
    </section>
  );
};

export default PickMotor;
