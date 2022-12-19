import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface FormValues {
  name: string;
  email: string;
  channel: string;
  comments: string;
  social: {
    facebook: string;
    twitter: string;
  };
  phoneNumbers: string[];
}

const initialValues: FormValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
};

const onSubmit = (values: FormValues, onSumbitProps: any) => {
  console.log("test", values);
  console.log("onSumbitProps", onSumbitProps);
  onSumbitProps.resetForm();
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
  comments: Yup.string().required("Required"),
  social: Yup.object({
    facebook: Yup.string().required("Required"),
    twitter: Yup.string().required("Required"),
  }),
  phoneNumbers: Yup.array().of(
    Yup.string().matches(phoneRegExp, "Phone number is not valid")
  ),
});

function NewYoutubeForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={false}
    >
      <Form>
        <FormInput label="Name" name="name" type="text" />

        <FormInput label="Email" name="email" type="email" />

        <FormInput label="Channel" name="channel" type="text" />

        <FormInput label="Comments" name="comments" as="textarea" />

        <FormInput label="Twitter" name="social.twitter" type="text" />

        <FormInput label="Facebook" name="social.facebook" type="text" />

        <FormInput label="Phone 1" name="phoneNumbers[0]" type="tel" />

        <FormInput label="Phone 2" name="phoneNumbers[1]" type="tel" />

        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </Form>
    </Formik>
  );
}

function FormInput({
  label,
  name,
  type,
  as,
}: {
  label: string;
  name: string;
  type?: string;
  as?: string;
}) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      {type ? (
        <Field id={name} name={name} type={type} />
      ) : (
        <Field id={name} name={name} as={as} />
      )}
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

function TextError(props: any) {
  return <div className="error">{props.children}</div>;
}

export default NewYoutubeForm;
