import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../../store";
import { signup } from "../../../store/auth/authSlice";
import Loader from "../../UI/Loader";

import "./Register.scss";

type Inputs = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register: React.FC = () => {
  const { isLoading, isAuth, error } = useSelector((state: RootState) => {
    const {
      auth: { isLoading, isAuth, error },
    } = state;
    return { isLoading, isAuth, error };
  });
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    (isAuth || !!localStorage.getItem("token")) && history.push("/");
  }, [isAuth, history]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => dispatch(signup(data));

  return (
    <div className="register">
      <h2 className="register-title">Register</h2>
      {error && <span className="alert">{error}</span>}
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="username"
            {...register("username", {
              required: true,
            })}
          />
          {errors.username && (
            <span className="error">Username is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Eamil</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 5,
                message: "min length is 6",
              },
            })}
          />
          {errors.password && (
            <span className="error">{errors.password.message}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) => value === watch("password"),
            })}
          />
          {errors.confirmPassword && (
            <span className="error">The passwords do not match</span>
          )}
        </div>
        <div className="form-btns">
          <button
            disabled={isLoading}
            className="btn btn-primary"
            type="submit"
          >
            {isLoading ? <Loader /> : "Sign up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
