import { BrowserRouter } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <PrivateRoutes/>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
