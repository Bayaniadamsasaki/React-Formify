import React from 'react';

class SubmitForms extends React.Component {
  render() {
    return (
      <>
        <main>
          <div class="hero py-5 bg-light">
            <div class="container text-center">
              <h2 class="mb-3">Biodata - Web Tech Members</h2>
              <div class="text-muted">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>

          <div class="py-5">
            <div class="container">
              <div class="row justify-content-center ">
                <div class="col-lg-5 col-md-6">
                  <div class="text-muted">
                    <span class="text-primary">budi@webtech.id</span>{" "}
                    <small>
                      <i>(shared)</i>
                    </small>
                  </div>

                  <form>
                    <div class="form-item card card-default my-4">
                      <div class="card-body">
                        <div class="form-group">
                          <label for="name" class="mb-1 text-muted">
                            Name <span class="text-danger">*</span>
                          </label>
                          <input
                            id="name"
                            type="text"
                            placeholder="Your answer"
                            class="form-control"
                            name="name"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="form-item card card-default my-4">
                      <div class="card-body">
                        <div class="form-group">
                          <label for="address" class="mb-1 text-muted">
                            Address
                          </label>
                          <textarea
                            id="address"
                            rows="4"
                            placeholder="Your answer"
                            class="form-control"
                            name="address"
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div class="form-item card card-default my-4">
                      <div class="card-body">
                        <div class="form-group">
                          <label for="" class="mb-1 text-muted">
                            Sex <span class="text-danger">*</span>
                          </label>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              value="Male"
                              id="sex-male"
                              name="sex"
                            />
                            <label class="form-check-label" for="sex-male">
                              Male
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              value="Female"
                              id="sex-female"
                              name="sex"
                            />
                            <label class="form-check-label" for="sex-female">
                              Female
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              value="Others"
                              id="sex-others"
                              name="sex"
                            />
                            <label class="form-check-label" for="sex-others">
                              Others
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-item card card-default my-4">
                      <div class="card-body">
                        <div class="form-group">
                          <label for="born-date" class="mb-1 text-muted">
                            Born Date <span class="text-danger">*</span>
                          </label>
                          <input
                            type="date"
                            placeholder="Your answer"
                            class="form-control"
                            id="born-date"
                            name="born_date"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="form-item card card-default my-4">
                      <div class="card-body">
                        <div class="form-group">
                          <label for="" class="mb-1 text-muted">
                            Hobbies
                          </label>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="Football"
                              id="hobbies-football"
                              name="hobbies[]"
                            />
                            <label
                              class="form-check-label"
                              for="hobbies-football"
                            >
                              Football
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="Guitar"
                              id="hobbies-guitar"
                              name="hobbies[]"
                            />
                            <label
                              class="form-check-label"
                              for="hobbies-guitar"
                            >
                              Guitar
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="Coding"
                              id="hobbies-coding"
                              name="hobbies[]"
                            />
                            <label
                              class="form-check-label"
                              for="hobbies-coding"
                            >
                              Coding
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="Watching"
                              id="hobbies-watching"
                              name="hobbies[]"
                            />
                            <label
                              class="form-check-label"
                              for="hobbies-watching"
                            >
                              Watching
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="Traveling"
                              id="hobbies-traveling"
                              name="hobbies[]"
                            />
                            <label
                              class="form-check-label"
                              for="hobbies-traveling"
                            >
                              Traveling
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="mt-4">
                      <button class="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default SubmitForms;
