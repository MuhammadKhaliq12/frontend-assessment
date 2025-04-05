import "./App.css";
import FoundedCompanies from "./components/Foundedcompanies";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Overview />
      <FoundedCompanies />
    </>
  );
}

export default App;
