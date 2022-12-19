import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControler from "./FormikControler";

interface RegistrationFormProps {}

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
  modeOfContact: "",
  phone: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Password must match")
    .required("Required"),
  modeOfContact: Yup.string().required("Required"),
  phone: Yup.string().when("modeOfContact", {
    is: "phone",
    then: Yup.string().required("Required"),
  }),
});

const onSubmit = (values: any) => {
  console.log("test", values);
};

const RegistrationForm: React.FC<RegistrationFormProps> = () => {
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
            control="input"
            type="password"
            label="Password"
            name="password"
          />
          <FormikControler
            control="input"
            type="password"
            label="Confirm Password"
            name="confirmPassword"
          />
          <FormikControler
            control="radio"
            label="Mode of contact"
            name="modeOfContact"
            options={[
              { key: "Email", value: "email" },
              { key: "Phone2", value: "phone" },
            ]}
          />
          <FormikControler
            control="input"
            type="text"
            label="Phone number"
            name="phone"
          />
          <button type="submit" disabled={!formik.isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
