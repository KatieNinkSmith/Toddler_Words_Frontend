import SignUpForm from "../components/RegistrationForm.jsx";
import LoginForm from "../components/LoginForm.jsx";

function AuthPage(props) {
  return (
    <div className="signupLogin">
      <SignUpForm className="signLogForm" setUser={props.setUser} />
      <LoginForm className="signLogForm" setUser={props.setUser} />
    </div>
  );
}

export default AuthPage;
