import logo from "./logo.svg";
import "./App.scss";
import "./styles/partials/_global.scss"; // checked, it works
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="content-holder">
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
