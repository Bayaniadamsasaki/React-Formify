import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/auth/login",
        {
          email,
          password,
        }
      );

      const { token } = response.data;

      localStorage.setItem("token", token);

      console.log("Login berhasil!", response.data);
      navigate("/manage-forms");
    } catch (error) {
      setError("Login gagal. Periksa kembali email dan password Anda.");
    }
  };

  return (
    <main>
      <section className="login">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6">
              <h1 className="text-center mb-4">Formify</h1>
              <div className="card card-default">
                <div className="card-body">
                  <h3 className="mb-3">Login</h3>
                  <form onSubmit={handleLogin}>
                    <div className="form-group my-3">
                      <label htmlFor="email" className="mb-1 text-muted">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        autoFocus
                      />
                    </div>
                    <div className="form-group my-3">
                      <label htmlFor="password" className="mb-1 text-muted">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="mt-4">
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                    </div>
                  </form>
                  {error && <p className="text-danger mt-3">{error}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
