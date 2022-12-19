import { Field } from "formik";
import React from "react";

interface CheckboxGroupProps {
  label: string;
  name: string;
  options?: any;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label,
  name,
  options,
}) => {
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name}>
        {({ field }: any) => {
          return options.map((option: any) => (
            <React.Fragment key={option.key}>
              <input
                type="checkbox"
                id={option.value}
                {...field}
                value={option.value}
                checked={field.value.includes(option.value)}
              />
              <label htmlFor={option.value}>{option.key}</label>
            </React.Fragment>
          ));
        }}
      </Field>
    </div>
  );
};

export default CheckboxGroup;
