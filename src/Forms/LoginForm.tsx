import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControler from "./FormikControler";

interface LoginFormProps {}

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
});

const onSubmit = (values: any) => {
  console.log("test", values);
};

const LoginForm: React.FC<LoginFormProps> = () => {
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

          <button type="submit" disabled={!formik.isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
