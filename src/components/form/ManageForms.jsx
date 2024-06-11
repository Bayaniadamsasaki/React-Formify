import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ManageForms() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        await axios.post(
          "http://127.0.0.1:8000/api/v1/auth/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        localStorage.removeItem("token");
        navigate("/");
      }
    } catch (error) {
      console.error("Logout gagal:", error);
    }
  };

  const handleCreateForm = () => {
    navigate("/create-form");
  };

  const handleDetailForm = () => {
    navigate("/detail-form");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-primary navbar-dark">
        <div className="container">
          <a className="navbar-brand" onClick={handleCreateForm}>
            Formify
          </a>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Administrator
              </a>
            </li>
            <li className="nav-item">
              <button onClick={handleLogout} className="btn bg-white text-primary ms-4">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <div className="hero py-5 bg-light">
          <div className="container">
            <button onClick={handleCreateForm} className="btn btn-primary">
              Create Form
            </button>
          </div>
        </div>

        <div className="list-form py-5">
          <div className="container">
            <h6 className="mb-3">List Form</h6>

            <a onClick={handleDetailForm} className="card card-default mb-3">
              <div className="card-body">
                <h5 className="mb-1">Biodata - Web Tech Members</h5>
                <small className="text-muted">@biodata (limit for 1 response)</small>
              </div>
            </a>

            <a onClick={handleDetailForm} className="card card-default my-3">
              <div className="card-body">
                <h5 className="mb-1">HTML Fundamental - Quiz</h5>
                <small className="text-muted">@html-fundamental-quiz</small>
              </div>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default ManageForms;
