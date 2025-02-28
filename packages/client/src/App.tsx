import { Routes, Route } from "react-router";
import TwoStepForm from "./components/Form";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route path="/chci-nabidku" element={<TwoStepForm />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
