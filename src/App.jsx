import Header from "./components/Header";
import BackgroundAnimated from "./components/BackgroundAnimated";
import Products from "./components/Products";

function App() {
  return (
    <>
      <BackgroundAnimated />
      <Header />
      <main className="relative z-10 p-4"> 
        <Products />
      </main>
    </>
  );
}

export default App;