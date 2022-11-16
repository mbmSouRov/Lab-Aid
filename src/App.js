import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Public Route/PublicRoute";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
