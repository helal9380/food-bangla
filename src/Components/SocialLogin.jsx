/** @format */

import { FaGoogle } from "react-icons/fa";
import useAuth from "../Hook/useAuth";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const axiosPublic = useAxiosPublic();
  const { gooleSignIn } = useAuth();
  const navigate = useNavigate()
  const handleGoogle = () => {
    gooleSignIn()
      .then((result) => {
        const userInfo = {
          email: result.user.email,
          name: result.user.displayName,
        };
        axiosPublic.post("/users", userInfo)
        .then(res => {
            console.log(res.data);
            navigate('/')
        })
        .catch(err => {
            console.log(err);
        })
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <button
        onClick={handleGoogle}
        className="btn">
        <FaGoogle></FaGoogle> Google
      </button>
    </div>
  );
};

export default SocialLogin;
