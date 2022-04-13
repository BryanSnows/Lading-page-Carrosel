
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Carrosel from "./components/Carrosel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projeto from "./components/Projetos";
import Container from "./components/Container";


function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/projeto" element={<Projeto />} />
          <Route exact path="/" element={<Carrosel />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
