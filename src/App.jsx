import "./App.css";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/product-list/Product-List";
import ReactLogo from "./components/ReactLogo/ReactLogo";
import Aplayer from "./components/aplayer/Aplayer";

function App() {
  return (
    <>
      <div>
        <Aplayer />
        <Intro />
        <About />
        <ProductList />
      </div>
      <div>
        <ReactLogo />
      </div>
    </>
  );
}

export default App;
