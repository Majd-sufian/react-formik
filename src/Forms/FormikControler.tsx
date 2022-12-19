import CheckboxGroup from "./CheckboxGroup";
import DatePicker from "./DatePicker";
import Input from "./Input";
import RadioButtons from "./RadioButtons";
import Select from "./Select";
import TextArea from "./TextArea";

interface FormikControlProps {
  control: string;
  name: string;
  label: string;
  type?: string;
  as?: string;
  options?: any;
}

function FormikControl({ control, ...rest }: FormikControlProps) {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    // case "chakraInput":
    // //   return <ChakraInput {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
