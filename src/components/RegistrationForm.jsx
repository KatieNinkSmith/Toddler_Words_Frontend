import { useState } from "react";
import { signUp } from "../utilities/users-services";

function SignUpForm() {
  const [user, setUser] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const submitData = { ...formData };
      delete submitData.confirmPassword;
      const user = await signUp(submitData);
      setUser(user);
      window.location.href = "https://toddlerwords.netlify.app/profile";
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Log in Failed - Try Again";
      setError(errorMessage);
    }
  }

  return (
    <>
      <div className="signLogForm">
        <p>Sign Up to start adding your personal images and audio</p>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Display name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Display Name"
            required
          />
          <br />
          <label>Email address (needs to be unique)</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email address will be your login"
            required
          />
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <br />
          <label>Confirm Password</label>
          <br />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Must match password"
            required
          />
          <br />
          <button
            type="submit"
            disabled={formData.password !== formData.confirmPassword}
          >
            SIGN UP now
          </button>
        </form>
        <p>{error}</p>
      </div>
    </>
  );
}

export default SignUpForm;
