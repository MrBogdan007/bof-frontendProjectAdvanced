import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../../schema/userForm";
import { useForm, SubmitHandler } from "react-hook-form";

import React from "react";
import { ModalInt } from "../../types/form";

const Form = (signForm: ModalInt) => {
  interface IFormInput {
    firstname: string;
  }
  const { register, handleSubmit } = useForm<IFormInput>({
    resolver: yupResolver(userSchema),
  });
  const onSubmit: SubmitHandler<IFormInput> = data => {
  
  };

  const registrationModal = () => {
    return !signForm;
  }
  return (
    <>
      {signForm ? (
        <form style={{ display: signForm ? 'block': 'none'}} onSubmit={handleSubmit(onSubmit)}>
          <div className="form-item">
            <label htmlFor="email">Enter your email</label>
            <input type="password" name="email" id="email" />
          </div>
          <div className="form-item">
            <label htmlFor="password">Enter your password</label>
            <input type="password" name="password" id="password" />
          </div>

          <div className="form-item">
            <button type="submit" className="button button_sm">
              Sign In
            </button>
          </div>
          <div className="form-item">
            <span>You don't have an account?</span>
            <button type="button" onClick={registrationModal} className="button button_sm">
              Create your account
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-item">
            <label htmlFor="firstname">Enter your first name</label>
            <input
              type="text"
              {...register("firstname")}
              placeholder="Title"
              id="title"
            />
          </div>
          <div className="form-item">
            <label htmlFor="lastname">Enter your last name</label>
            <input type="text" name="lastname" id="lastname" />
          </div>
          <div className="form-item">
            <label htmlFor="email">Enter your email</label>
            <input type="password" name="email" id="email" />
          </div>
          <div className="form-item">
            <label htmlFor="password">Enter your password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="form-item">
            <label htmlFor="passwordConfirm">Confirm your password</label>
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
            />
          </div>
          <div className="form-item">
            <select name="status" id="status">
              <option value="none" selected disabled hidden>
                Select your sex
              </option>
              <option value="done">Man</option>
              <option value="not started">Women</option>
              <option value="in progress">Other</option>
            </select>
          </div>
          <div className="form-item">
            <button type="submit" className="button button_sm">
              Add
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default Form;
