import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [signupError, setSignupError] = useState("");
  const handleSignup = (data, e) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((Result) => {
        setSignupError("");
        console.log(Result);
        e.target.reset();
        toast.success("Successfully Created!");
      })
      .catch((err) => {
        console.log(err.message);
        setSignupError(err.message);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignup)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("name", { required: "Name is required" })}
            />

            {errors.name && (
              <span className="text-red-700 font-semibold">
                {errors.name?.message}
              </span>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", { required: "Email field is empty" })}
            />
            {errors.email && (
              <span className="text-red-700 font-semibold">
                {errors.email?.message}
              </span>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special characters",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-700 font-semibold">
                {errors.password?.message}
              </span>
            )}
          </div>
          {signupError && <p className="text-red-600">{signupError}</p>}
          <input
            className="btn btn-accent w-full my-5"
            value="Signup"
            type="submit"
          />
        </form>
        <p>
          Already Have An Account?
          <Link className="text-secondary" to="/login">
            Click Here!
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Signup;
