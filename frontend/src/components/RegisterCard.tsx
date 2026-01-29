import styled from "styled-components";
import type { RegisterCardProps } from "../types/components/RegisterCardProps";
import { Link } from "react-router-dom";

export const RegisterCard = ({ form, onChange, onSubmit }: RegisterCardProps) => {
  return (
    <StyledWrapper>
      <form className="form-control" onSubmit={onSubmit}>
        <p className="title">Sign Up</p>
        <div className="input-field">
          <input required className="input" name="name" value={form.name} onChange={onChange} type="text" />
          <label className="label" htmlFor="input">
            Enter Your Name
          </label>
        </div>
        <div className="input-field">
          <input required className="input" name="email" value={form.email} onChange={onChange} type="text" />
          <label className="label" htmlFor="input">
            Enter Email
          </label>
        </div>
        <div className="input-field">
          <input required className="input" name="password" value={form.password} onChange={onChange} type="password" />
          <label className="label" htmlFor="input">
            Enter Password
          </label>
        </div>
        <Link to="/login">Already have account?</Link>
        <button className="submit-btn" type="submit">Sign Up</button>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form-control {
    margin: 20px;
    background-color: #ffffff;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
    width: 400px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    padding: 25px;
    border-radius: 8px;
  }
  .title {
    align-self: center;
    font-size: 28px;
    font-weight: 800;
    color: #000;
  }
  .input-field {
    position: relative;
    width: 100%;
  }

  .input {
    box-sizing: border-box;
    margin-top: 15px;
    width: 100%;
    outline: none;
    border-radius: 8px;
    height: 45px;
    border: 2px solid #000000;
    background: transparent;
    color: #000;
    font-size: 1rem;
    padding-left: 10px;
  }
  .input:focus {
    border: 1.5px solid #2d79f3;
  }
  .input-field .label {
    position: absolute;
    top: 25px;
    left: 15px;
    color: #ccc;
    transition: all 0.3s ease;
    pointer-events: none;
    z-index: 2;
  }
  .input-field .input:focus ~ .label,
  .input-field .input:valid ~ .label {
    top: 5px;
    left: 5px;
    font-size: 12px;
    color: #2d79f3;
    background-color: #ffffff;
    padding-left: 5px;
    padding-right: 5px;
  }
  .submit-btn {
    margin-top: 30px;
    height: 55px;
    background: #f2f2f2;
    border-radius: 11px;
    border: 0;
    outline: none;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    background: linear-gradient(180deg, #363636 0%, #1b1b1b 50%, #000000 100%);
    box-shadow:
      0px 0px 0px 0px #ffffff,
      0px 0px 0px 0px #000000;
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
    cursor: pointer;
  }

  .submit-btn:hover {
    box-shadow:
      0px 0px 0px 2px #ffffff,
      0px 0px 0px 4px #0000003a;
  }
`;
