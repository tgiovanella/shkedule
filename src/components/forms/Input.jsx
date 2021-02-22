import { Field } from "react-final-form";
import { InputText } from "primereact/inputtext";
import { Fragment } from "react";

export const Input = (props) => {
  return (
    <Field name={props.name}>
      {({ input, meta }) => {
        <Fragment>
          <InputText {...props} name={props.name} className="form-field" />

          <label htmlFor={props.name}>{props.label}</label>
          {console.log(props)}
        </Fragment>;
      }}
    </Field>
  );
};
