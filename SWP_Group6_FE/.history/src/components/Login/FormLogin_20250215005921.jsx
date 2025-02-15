import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input,  } from "antd";

export const FormLogin = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      remember: true,
    },
    validationSchema: Yup.object({
      username: Yup.string().max(20, "Must be 20 characters or less").required("Username is required"),
      password: Yup.string().max(10, "Must be 10 characters or less").required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      navigate("/homepage");
    },
  });

  return (
  
        <div   className="p-10 w-full max-w-[500px] mx-auto">
          <Form
            name="login"
            className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg"
            onFinish={formik.handleSubmit}
          >
            <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
    
            <Form.Item
              name="username"
              className="mb-4"
              validateStatus={formik.errors.username && formik.touched.username ? "error" : ""}
              help={formik.touched.username && formik.errors.username}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Username"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...formik.getFieldProps("username")}
              />
            </Form.Item>
    
            <Form.Item
              name="password"
              className="mb-4"
              validateStatus={formik.errors.password && formik.touched.password ? "error" : ""}
              help={formik.touched.password && formik.errors.password}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...formik.getFieldProps("password")}
              />
            </Form.Item>
    
            <Form.Item className="mb-4">
              <div className="flex justify-between items-center">
                <Checkbox
                  name="remember"
                  checked={formik.values.remember}
                  onChange={(e) => formik.setFieldValue("remember", e.target.checked)}
                >
                  Remember me
                </Checkbox>
                <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
              </div>
            </Form.Item>
    
            <Form.Item className="mb-4">
              <Button block type="primary" htmlType="submit" className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
                Log in
              </Button>
            </Form.Item>
    
            <div className="text-center">
              or <a href="#" className="text-blue-500 hover:underline">Register now!</a>
            </div>
          </Form>
        </div>
      );
    };
    

  
