import { useState } from "react";
// adding in auth, i am importing SignUp from utilities
import { signUp } from "../utilities/users-services";
import { useNavigate } from "react-router"; // allows for navigation without clicking on sign in

function SignUpForm() {
  const [user, setUser] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    // ** this is where we will eventually add this to our database
    // but through utilities/user - services (so im making util functions to handle api)
    try {
      // set this up to be able to add a new user
      const submitData = { ...formData };
      delete submitData.confirmPassword;
      console.log(submitData);
      const user = await signUp(submitData);
      console.log(user);
      setUser(user);
      navigate("/profile", { state: { user } });
    } catch (err) {
      console.log("Error caught", err);
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
