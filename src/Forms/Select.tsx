import { Field } from "formik";

interface SelectProps {
  label: string;
  name: string;
  options?: any;
}

const Select: React.FC<SelectProps> = ({ label, name, options }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>

      <Field as="select" id={name} name={name}>
        {options.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
    </div>
  );
};

export default Select;
