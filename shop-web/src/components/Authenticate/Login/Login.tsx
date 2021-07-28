import { useForm } from "react-hook-form";
import "./Login.scss";

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  console.log(watch("example"));

  return (
    <div className="login">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="email">Eamil</label>
          <input {...register("email", { required: true })} />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input {...register("password", { required: true })} />
          {errors.password && <span>This field is required</span>}
        </div>
        <div className="form-btns">
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
