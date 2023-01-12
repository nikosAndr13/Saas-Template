import React from "react";

const Form = (props) => {
  const  {field1, field2, submit} = props;
  const inputs = [field1, field2, submit];
  return (
    <React.Fragment>
      {inputs.map(input => {
        return (
        <div key={input.props.name}>
          {input}
        </div>
      )})}
    </React.Fragment>
  )
}

export default Form;