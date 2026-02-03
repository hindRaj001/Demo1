import DiamondAddForm from "./pages/DiamondAddForm";
import { ToastContainer } from "react-toastify";

function App() {
 return <div  style={{ backgroundColor: "#f4f6f9", minHeight: "100vh", padding: "20px" }}>
    <DiamondAddForm />

     <ToastContainer position="top-right" autoClose={2000} />
    </div>;
}

export default App
