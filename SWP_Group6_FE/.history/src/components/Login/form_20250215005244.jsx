import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";

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
    <Form
      name="login"
      style={{ maxWidth: 360 }}
      onFinish={formik.handleSubmit}
    className="p-10 w-full max-w-[500px] mx-auto"
    >
      <Form.Item
        name="username"
        validateStatus={formik.errors.username && formik.touched.username ? "error" : ""}
        help={formik.touched.username && formik.errors.username}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="Username"
           className="p-4 rounded-md border border-gray-600"
          {...formik.getFieldProps("username")}
        />
      </Form.Item>

      <Form.Item
        name="password"
        validateStatus={formik.errors.password && formik.touched.password ? "error" : ""}
        help={formik.touched.password && formik.errors.password}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
          {...formik.getFieldProps("password")}
        />
      </Form.Item>

      <Form.Item>
        <Flex justify="space-between" align="center">
          <Checkbox
            name="remember"
            checked={formik.values.remember}
            onChange={(e) => formik.setFieldValue("remember", e.target.checked)}
          >
            Remember me
          </Checkbox>
          <a href="#">Forgot password</a>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Log in
        </Button>
        or <a href="#">Register now!</a>
      </Form.Item>
    </Form>
  );
};
