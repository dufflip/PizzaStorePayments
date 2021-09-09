import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { ACTION_login } from "../store/ducks/login";

import { API_login } from "../fake-api/api";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    loading: false,
    erro: false,
  });

  const updateState = (e) =>
    setState((state) => ({ ...state, [e.target.name]: e.target.value }));

  const dispatch = useDispatch();

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   setState((state) => ({ ...state, erro: false }));

  //   if (!state.name || !state.email || !state.password) {
  //     return false;
  //   }

  //   setState((state) => ({ ...state, loading: true }));
  // };
  const onSubmit = (e) => {
    setState((state) => ({ ...state, loading: true }));

    API_login(state)
      .then((response) => dispatch(ACTION_login(response)))
      .catch((erro) =>
        setState((state) => ({ ...state, loading: false, erro }))
      );
  };

  return (
    <>
      <section className="section-LG">
        <div className="div-LG">
          <div className="img-box-LG">
            {/* <img src={ImgBG} alt="background image" /> */}
          </div>
          <div className="form-box-LG">
            <h2>Login Here</h2>
            <form className="login-form-LG" onSubmit={handleSubmit(onSubmit)}>
              <div className="input-box-LG">
                <span>Username</span>
                <input
                  type="name"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  value={state.name}
                  onChange={updateState}
                  disabled={state.loading}
                />
                <span>Email</span>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  value={state.email}
                  onChange={updateState}
                  disabled={state.loading}
                />
                <span>Password</span>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Password"
                  value={state.password}
                  onChange={updateState}
                  disabled={state.loading}
                />
                {/* {errors.name && <span>This field is required</span>} */}
                <button type="submit" className="login-btn-LG">
                  {state.loading ? "Loading..." : "Submit"}
                </button>
                {state.erro && <div className="alert">{state.erro}</div>}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
