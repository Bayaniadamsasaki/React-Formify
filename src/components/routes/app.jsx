import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../auth/LoginPage";
import ManageForms from "../form/ManageForms";
import Responses from "../form/Responses";
import SubmitForms from "../form/SubmitForms";
import DetailForms from "../form/DetailForms";
import CreateForms from "../form/CreateForms";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/manage-forms" element={<ManageForms />} />
        <Route path="/responses" element={<Responses />} />
        <Route path="/submit-form" element={<SubmitForms />} />
        <Route path="/detail-form" element={<DetailForms />} />
        <Route path="/create-form" element={<CreateForms />} />
      </Routes>
    </Router>
  );
};

export default App;
