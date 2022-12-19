// @ts-nocheck
import DateView from "react-datepicker";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
  label: string;
  name: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ label, name, ...rest }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }: any) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val: any) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};

export default DatePicker;
