import Dashboard from "./Dashboard/Dashboard";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
function App() {
  return (
    <div className="App">
     <Header/>
     <div className="flex">
       <Sidebar/>
       <Dashboard/>
       </div>
    </div>
  );
}

export default App;
