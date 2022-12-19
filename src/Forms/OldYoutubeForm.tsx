// Refactor the following code to use Formik and Yup for validation. give the best possible code you can write.

import { useFormik } from "formik";
import * as Yup from "yup";

interface FormValues {
  name: string;
  email: string;
  channel: string;
}

interface Errors {
  name?: string;
  email?: string;
  channel?: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values: FormValues) => {
  console.log("test", values);
};

// const validate = (values: FormValues) => {
//   const errors: Errors = {};

//   if (!values.name) {
//     errors.name = "Required";
//   }

//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email format";
//   }

//   if (!values.channel) {
//     errors.channel = "Required";
//   }

//   return errors;
// };

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});

function OldYoutubeForm() {
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues,
      onSubmit,
      // validate,
      validationSchema,
    });

  const { channel: channelValue, email: emailValue, name: nameValue } = values;
  const { channel: channelError, email: emailError, name: nameError } = errors;
  const {
    name: isNameTouched,
    email: isEmailTouched,
    channel: isChannelTouched,
  } = touched;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={nameValue}
        />
        {isNameTouched && nameError && <div className="error">{nameError}</div>}
      </div>

      <div className="form-control">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={emailValue}
        />
        {isEmailTouched && emailError && (
          <div className="error">{emailError}</div>
        )}
      </div>

      <div className="form-control">
        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={handleChange}
          onBlur={handleBlur}
          value={channelValue}
        />
        {isChannelTouched && channelError && (
          <div className="error">{channelError}</div>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default OldYoutubeForm;
