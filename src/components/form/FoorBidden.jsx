import React from "react";
class ForBidden extends React.Component {
  render() {
    return (
      <main>
        <div class="hero py-5 bg-light">
          <div class="container text-center">
            <h2 class="mb-3">403 Forbidden Access</h2>
            <div class="text-muted">You don't have access this form.</div>
          </div>
        </div>
      </main>
    );
  }
}

export default ForBidden;
