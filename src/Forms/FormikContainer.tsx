import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControler from "./FormikControler";

interface FormikContainerProps {}

const dropDownOptions = [
  { key: "Select an option", value: "" },
  { key: "Option 1", value: "option1" },
  { key: "Option 2", value: "option2" },
  { key: "Option 3", value: "option3" },
];

const radioOptions = [
  { key: "Option 1", value: "rOption1" },
  { key: "Option 2", value: "rOption2" },
  { key: "Option 3", value: "rOption3" },
];

const checkboxOptions = [
  { key: "Option 1", value: "cOption1" },
  { key: "Option 2", value: "cOption2" },
  { key: "Option 3", value: "cOption3" },
];

const initialValues = {
  email: "",
  description: "",
  selectOption: "",
  radionOtions: "",
  checkboxOptions: [],
  birthDate: null,
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  description: Yup.string().required("Required"),
  selectOption: Yup.string().required("Required"),
  radionOtions: Yup.string().required("Required"),
  checkboxOptions: Yup.array().required("Required"),
  birthDate: Yup.date().required("Required").nullable(),
});

const onSubmit = (values: any) => {
  console.log("test", values);
};

const FormikContainer: React.FC<FormikContainerProps> = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>
          <FormikControler
            control="input"
            type="email"
            label="Email"
            name="email"
          />

          <FormikControler
            control="textarea"
            label="Description"
            name="description"
            as="textarea"
          />

          <FormikControler
            control="select"
            label="Select a topic"
            name="selectOption"
            options={dropDownOptions}
          />

          <FormikControler
            control="radio"
            label="Radio topic"
            name="radionOtions"
            options={radioOptions}
          />

          <FormikControler
            control="checkbox"
            label="Checkbox topic"
            name="checkboxOptions"
            options={checkboxOptions}
          />

          <FormikControler
            control="date"
            label="Pick a date"
            name="birthDate"
          />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
