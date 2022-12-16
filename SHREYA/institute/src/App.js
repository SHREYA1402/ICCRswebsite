
import './App.css';
import Header from "./MyComponents/Header";
import { Body } from "./MyComponents/Body";
import { Footer } from "./MyComponents/Footer";
import { ROs } from "./MyComponents/ROs";
import { UR } from "./MyComponents/UR";
import "./css/style.css"



function App() {
  let myVariable = 21;
  return (
    <>
      <Header />
      <Body />
      <ROs />
      <UR />
      <Footer />

    </>
  );
}

export default App;
