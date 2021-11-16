import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CindyClawford from "./components/CindyClawford";
import LittleMissPurrfect from "./components/LittleMissPurrfect";
import ElTaco from "./components/ElTaco";
import MyGwumpy from "./components/MyGwumpy";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <div className="cards__wrapper">
          <CindyClawford />
          <LittleMissPurrfect />
          <ElTaco />
          <MyGwumpy />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
