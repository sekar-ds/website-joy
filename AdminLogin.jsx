import React, {  useState } from "react";
import "./../component/adminLogin.scss";
import { Link, useNavigate } from "react-router-dom";
import {
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { AuthContext } from "././context/Authcontext";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [toggleEye, setToggleEye] = useState(false);
  const [inputType, setInputType] = useState("password");
  const navigate = useNavigate();

//   const { dispatch } = useContext(AuthContext);

  const handleToggle = (e) => {
    setToggleEye(!toggleEye);
    setInputType(inputType === "password" ? "text" : "password");
  };
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // dispatch({ type: "LOGIN_START" });
    try {
      signInWithEmailAndPassword(auth, inputs.email, inputs.password).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
        //   dispatch({ type: "LOGIN_SUCCESS", payload: user });
        navigate("/dashboard");

          console.log(user);
        }
      );
    } catch (error) {
    //   dispatch({ type: "LOGIN_FAILURE" });
    alert(error)
    }
  };

//   const signInWithGoogle = () => {
//     dispatch({ type: "LOGIN_START" });

//     signInWithPopup(auth, provider)
//       .then((result) => {
//         console.log(result);
//         // The signed-in user info.
//         const user = result.user;
//         dispatch({ type: "LOGIN_SUCCESS", payload: user });
//         navigate("/");
//       })
//       .catch((error) => {
//         dispatch({ type: "LOGIN_FAILURE" });
//       });
//   };
  // console.log(inputs);
  return (
    <div className="login">
      <form>
        <h2>Login</h2>
        <div className="formInput">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="formInput">
          <input
            type={inputType}
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <div className="eyeIcon" onClick={handleToggle}>
            {toggleEye ? <Visibility /> : <VisibilityOff />}
          </div>
        </div>
        <button type="submit" onClick={handleLogin}>
          Login
        </button>

        <div className="formLink">
          <span>Don't have an account? </span>
          <Link
            to="/register"
            className="formSignup"
            style={{ textDecoration: "none" }}
          >
            {" "}
            SignUp
          </Link>
        </div>

        <div className="line"></div>
        
        
      </form>
    </div>
  );
};

export default Login;
