import React from 'react';


function nothing(x) {
  if(x === "none"){
      return(
        <div className="Not-Subtext"></div>
      )
  }else{
    return(
      <p className="about-me my-5 mb-0">
        {x}
      </p>
    )
  }
}

const Title = props => {
  return (
    <div>
        <p className="mb-0">{props.subtitle}</p>
        <h1>{props.title}</h1>
        {nothing(props.text)}
    </div>
  );
};

export default Title;



