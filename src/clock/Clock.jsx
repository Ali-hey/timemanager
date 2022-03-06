import React from "react";
import "../style.css";

const Clock = () => {
  // const secDiv = document.getElementById("sec");
  // const minDiv = document.getElementById("min");
  // const hourDiv = document.getElementById("hour");
  // setInterval(updateClock, 1000);

  // function updateClock() {
  //   let date = new Date();
  //   let sec = date.getSeconds() / 60;
  //   let min = (date.getMinutes() + sec) / 60;
  //   let hour = (date.getHours() + min) / 12;

  //   secDiv.style.transform = "rotate(" + sec * 360 + "deg)";
  //   minDiv.style.transform = "rotate(" + min * 360 + "deg)";
  //   hourDiv.style.transform = "rotate(" + hour * 360 + "deg)";
  // }

  // updateClock();
  return (
    <div>
      <i>Clock</i>
      <div className="clock">
        <div className="num num1">
          <div>1</div>
        </div>
        <div className="num num2">
          <div>2</div>
        </div>
        <div className="num num3">
          <div>3</div>
        </div>
        <div className="num num4">
          <div>4</div>
        </div>
        <div className="num num5">
          <div>5</div>
        </div>
        <div className="num num6">
          <div>6</div>
        </div>
        <div className="num num7">
          <div>7</div>
        </div>
        <div className="num num8">
          <div>8</div>
        </div>
        <div className="num num9">
          <div>9</div>
        </div>
        <div className="num num10">
          <div>10</div>
        </div>
        <div className="num num11">
          <div>11</div>
        </div>
        <div className="num num12">
          <div>12</div>
        </div>
        <div className="hand" id="sec">
          <div className="sec" style={{}}></div>
        </div>
        <div className="hand" id="min">
          <div className="min" style={{}}></div>
        </div>
        <div className="hand" id="hour">
          <div className="hour" style={{}}></div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
