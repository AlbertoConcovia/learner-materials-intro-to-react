import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CardWrapper from "./components/CardWrapper";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <CardWrapper />
      </main>
      <Footer />
    </>
  );
}

export default App;
