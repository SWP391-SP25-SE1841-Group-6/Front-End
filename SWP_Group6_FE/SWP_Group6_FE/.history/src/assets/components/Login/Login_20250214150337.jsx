
import { Formik, Form} from "formik";
import * as Yup from "yup";

const SignUpFormV2Final = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        terms: false, //check box
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(10, "Must be 10 characters or less")
          .required("Required"),
        email: Yup.string()
          .email("example: guest@gmail.com")
          .required("Required"),
        intro: Yup.string().required("Required"),
        job: Yup.string().required("Required"),
        terms: Yup.boolean()
          .oneOf([true], "You must accept the terms and conditions")
          .required("You must accept the terms and conditions"),
      })}
      //oneOf bat buoc phai truyen vao true (!true = error)
      onSubmit={(values) => {
        console.log("value", values);
      }}
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto">
        <MyInput
          label="First Name"
          name="firstName"
          placeholder="Enter first name"
          id="firstName"
        ></MyInput>

        <MyInput
          label="Last Name"
          name="lastName"
          placeholder="Enter last name"
          id="lastName"
        ></MyInput>

        <MyInput
          type="email"
          label="Email Address"
          name="email"
          placeholder="Enter email"
          id="email"
        ></MyInput>

        <MyTextArea
          label="Intro"
          name="intro"
          placeholder="Enter intro"
          id="intro"
        ></MyTextArea>

        <MySelectBox name="job" label="Select your job">
          <option value="it">IT</option>
          <option value="doctor">Doctor</option>
          <option value="firehuman">Fire Human</option>
        </MySelectBox>

        <MyCheckBox name="terms">
          <p>I agree the terms and condition</p>
        </MyCheckBox>

        <div>
          <button
            type="submit"
            className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};










export default SignUpFormV2Final;
// useField => ko muon su dung nhung cai co san
// destructoring duoi dang obj
//res parameter ... *3
//spread paremeter =>  {...field[0]}
