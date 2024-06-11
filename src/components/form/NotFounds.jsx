import React from "react";

class NotFounds extends React.Component {
  render() {
    return (
      <main>
        <div class="hero py-5 bg-light">
          <div class="container text-center">
            <h2 class="mb-3">404 Not Found</h2>
            <div class="text-muted">The requested URL not found.</div>
          </div>
        </div>
      </main>
    );
  }
}

export default NotFounds;
