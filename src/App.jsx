import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.sass";
import { Footer, Header, Main, Nav } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
