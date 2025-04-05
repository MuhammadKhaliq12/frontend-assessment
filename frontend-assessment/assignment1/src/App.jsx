import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import OverviewCard from "./components/OverviewCard";
import Demographics from "./components/Demographics";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <OverviewCard />
      <Demographics />
    </>
  );
}

export default App;
