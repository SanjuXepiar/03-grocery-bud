import { ToastContainer } from "react-toastify";
import "./App.css";
import { Form } from "./Form";
function App() {
  return (
    <main className="main">
      <ToastContainer position="top-center" autoClose={1500} />

      <h2 style={{ marginTop: "5rem" }}>Grocery Bud</h2>
      <Form />
    </main>
  );
}

export default App;
