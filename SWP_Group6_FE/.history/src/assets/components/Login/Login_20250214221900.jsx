
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
// const validate = (values) => {
//   const error = {};
//   if (!values.firstName) {
//     error.firstName = "Required";
//   } else if (values.firstName.length > 20) {
//     error.firstName = "must be 20 character or less";
//   }

//   if (!values.lastName) {
//     error.lastName = "Required";
//   } else if (values.lastName.length > 20) {
//     error.lastName = "must be 20 character or less";
//   }
//   return error;
// };

const SignUpForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
      lastName: Yup.string().max(10, "Must be 10 characters or less").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      navigate("/movie");
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          placeholder="enter your firstName"
          className="p-4 rounded-md border border-gray-600"
          {...formik.getFieldProps("firstName")} //auto add truong name
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-sm text-red-500">{formik.errors.firstName} </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          placeholder="enter your lastName"
          className="p-4 rounded-md border border-gray-600"
          {...formik.getFieldProps("lastName")} 
        />
      </div>

      {formik.touched.lastName && formik.errors.lastName ? (
        <div className="text-sm text-red-500">{formik.errors.lastName} </div>
      ) : null}
      <div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
