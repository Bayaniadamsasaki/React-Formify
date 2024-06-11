import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/routes/app";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

