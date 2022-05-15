import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GetMinRoutePage } from "./pages/GetMinRoutePage";
import { GetRoutesPage } from "./pages/GetRoutesPage";
import { HomePage } from "./pages/HomePage";
import { RegisterGraphPage } from "./pages/RegisterGraphPage";
import { ViewGraphPage } from "./pages/ViewGraphPage";

function App() {
  return (
    <div className="bg-success" style={{minHeight: "100vw"}}>
      <h1 className="text-center text-light">Routes App</h1>
      <div className="px-2 px-sm-4 px-md-5">
        <BrowserRouter>
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="register-graph" element={<RegisterGraphPage />} />
            <Route path="view-graph" element={<ViewGraphPage />} />
            <Route path="get-routes" element={<GetRoutesPage />} />
            <Route path="get-min-route" element={<GetMinRoutePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
