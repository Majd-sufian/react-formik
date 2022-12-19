import { Field } from "formik";
import React from "react";

interface RadioButtonsProps {
  label: string;
  name: string;
  options?: any;
  type?: string;
}

const RadioButtons: React.FC<RadioButtonsProps> = ({
  label,
  name,
  options,
  type,
}) => {
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name} type={type}>
        {({ field }: any) => {
          return options.map((option: any) => (
            <React.Fragment key={option.key}>
              <input
                type="radio"
                id={option.value}
                {...field}
                value={option.value}
                checked={field.value === option.value}
              />
              <label htmlFor={option.value}>{option.key}</label>
            </React.Fragment>
          ));
        }}
      </Field>
    </div>
  );
};

export default RadioButtons;
