import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Responses() {
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

  const handleDetailForm = () => {
    navigate("/detail-form");
  };

  const handleResponses = () => {
    navigate("/responses");
  };

  const handleManageForms = () => {
    navigate("/manage-forms")
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg sticky-top bg-primary navbar-dark">
        <div class="container">
          <a class="navbar-brand" onClick={handleManageForms}>
            Formify
          </a>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active">
                Administrator
              </a>
            </li>
            <li class="nav-item">
              <button type="button" onClick={handleLogout} class="btn bg-white text-primary ms-4">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <div class="hero py-5 bg-light">
          <div class="container text-center">
            <h2 class="mb-2">Biodata - Web Tech Members</h2>
            <div class="text-muted mb-4">To save web tech members biodata</div>
            <div>
              <div>
                <small>For user domains</small>
              </div>
              <small>
                <span class="text-primary">webtech.id, webtech.org</span>
              </small>
            </div>
          </div>
        </div>

        <div class="py-5">
          <div class="container">
            <div class="row justify-content-center ">
              <div class="col-lg-5 col-md-6">
                <div class="input-group mb-5">
                  <input
                    type="text"
                    class="form-control form-link"
                    readonly
                    value="http://localhost:8080/forms/biodata"
                  />
                  <button onClick={handleManageForms} class="btn btn-primary">
                    Copy
                  </button>
                </div>

                <ul class="nav nav-tabs mb-2 justify-content-center">
                  <li class="nav-item">
                    <button class="nav-link" onClick={handleDetailForm}>
                      Questions
                    </button>
                  </li>
                  <li class="nav-item">
                    <button class="nav-link active" onClick={handleResponses}>
                      Responses
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div class="row justify-content-center">
              <div class="col-lg-10">
                <table class="table mt-3">
                  <caption>Total Responses: 3</caption>
                  <thead>
                    <tr class="text-muted">
                      <th>User</th>
                      <th>Name</th>
                      <th>Address</th>
                      <th>Sex</th>
                      <th>Born Date</th>
                      <th>Hobbies</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-primary">budi@webtech.id</td>
                      <td>Budi Andrianto</td>
                      <td>Jakarta</td>
                      <td>Male</td>
                      <td>2000-09-09</td>
                      <td>Football, Coding, Guitar.</td>
                    </tr>
                    <tr>
                      <td class="text-primary">andi@webtech.id</td>
                      <td>Andi Budiman</td>
                      <td>Surabaya</td>
                      <td>Male</td>
                      <td>2005-10-01</td>
                      <td>Traveling, Watching.</td>
                    </tr>
                    <tr>
                      <td class="text-primary">mela@webtech.id</td>
                      <td>Mela Agustin</td>
                      <td>Bandung</td>
                      <td>Female</td>
                      <td>2003-04-07</td>
                      <td>Guitar, Traveling, Coding.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Responses;
