import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

interface TextAreaProps {
  label: string;
  name: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, name, ...rest }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} as="textarea" {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default TextArea;
