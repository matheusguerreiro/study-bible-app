import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.sass";
import { Header, Main, Nav } from "./components";
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
    </div>
  );
}

export default App;
