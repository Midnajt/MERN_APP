import { Link, Form, redirect, useNavigate } from "react-router-dom";

import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow, SubmitBtn } from "../components";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      await customFetch.post("/auth/login", data);
      queryClient.invalidateQueries();
      toast.success("Login successful");
      return redirect("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

function Login() {
  const navigate = useNavigate();
  const loginDemoUser = async () => {
    const data = {
      email: "test@test.com",
      password: "secret123",
    };
    try {
      await customFetch.post("/auth/login", data);
      toast.success("Take a test drive");
      return navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

  return (
    <Wrapper>
      <Form className='form' method='post'>
        <Logo />
        <h4>Login</h4>
        <FormRow type='email' name='email' />
        <FormRow type='password' name='password' />
        <SubmitBtn />
        <button type='buttpm' className='btn btn-block' onClick={loginDemoUser}>
          explore the app
        </button>
        <p>
          Not a member yet?
          <Link to='/register' className='member-btn'>
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
}
export default Login;
