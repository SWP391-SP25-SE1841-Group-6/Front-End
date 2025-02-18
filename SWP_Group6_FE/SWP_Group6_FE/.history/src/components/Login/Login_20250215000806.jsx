
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
// const validate = (values) => {
//   const error = {};
//   if (!values.name) {
//     error.name = "Required";
//   } else if (values.name.length > 20) {
//     error.name = "must be 20 character or less";
//   }

//   if (!values.password) {
//     error.password = "Required";
//   } else if (values.password.length > 20) {
//     error.password = "must be 20 character or less";
//   }
//   return error;
// };

const SignUpForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
      password: Yup.string().max(10, "Must be 10 characters or less").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      navigate("/homepage");
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="name">Account Name</label>
        <input
          type="text"
          id="name"
          placeholder="enter your name"
          className="p-4 rounded-md border border-gray-600"
          {...formik.getFieldProps("name")} //auto add truong name
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-sm text-red-500">{formik.errors.name} </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="password">Last Name</label>
        <input
          type="text"
          id="password"
          placeholder="enter your password"
          className="p-4 rounded-md border border-gray-600"
          {...formik.getFieldProps("password")} 
        />
      </div>

      {formik.touched.password && formik.errors.password ? (
        <div className="text-sm text-red-500">{formik.errors.password} </div>
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
