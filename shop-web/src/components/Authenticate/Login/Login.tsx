import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../../store";
import { login } from "../../../store/auth/authSlice";
import Loader from "../../UI/Loader";
import "./Login.scss";

type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  const { isLoading, isAuth, error } = useSelector((state: RootState) => {
    const {
      auth: { isLoading, isAuth, error },
    } = state;
    return { isLoading, isAuth, error };
  });
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    isAuth && history.push("/");
  }, [isAuth, history]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data =>
    dispatch(login(data.email, data.password));

  return (
    <div className="login">
      <h2 className="login-title">Login</h2>
      {error && <span className="alert">{error}</span>}
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
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
                value: 4,
                message: "min length is 4",
              },
            })}
          />
          {errors.password && (
            <span className="error">{errors.password.message}</span>
          )}
        </div>
        <div className="form-btns">
          <button
            disabled={isLoading}
            className="btn btn-primary"
            type="submit"
          >
            {isLoading ? <Loader /> : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
}
