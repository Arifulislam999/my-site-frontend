import React from "react";
function ApplicationSingle({ img }) {
  return (
    <div>
      <div className="front-img">
        <img className="front-i" src={img} alt="img" />
      </div>
    </div>
  );
}

export default ApplicationSingle;
