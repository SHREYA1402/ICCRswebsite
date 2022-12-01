import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Body} from "./MyComponents/Body";
import {Footer} from "./MyComponents/Footer";

function App() {
  let myVariable = 21;
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
