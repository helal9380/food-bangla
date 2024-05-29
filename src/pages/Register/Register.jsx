/** @format */

import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import Swal from "sweetalert2";

const Register = () => {
  const {createUser} = useAuth()
  const axiosPublic = useAxiosPublic()
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, email, password };
    console.log(user);
    createUser(email, password).then((result) => {
      const userInfo = {
        name,
        email
      }
      axiosPublic.post('/users', userInfo)
      .then(res => {
        if(res.data.insertedId) {
          Swal.fire({
            title: "User added in the database",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
        }
      
      })
      .catch(err => {
        console.log(err);
      })
      console.log(result.user);
    })
    .catch(err => {
      console.log(err);
    } )
  };
  return (
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form
          onSubmit={handleSubmit}
          className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div>
          <p>Have you already account ? please <Link to={'/login'}>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
