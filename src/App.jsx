import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Home from "./pages/Home.jsx";
import Discussion from "./pages/Discussion.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/discussion/:id" element={<Discussion />} />
        <Route exact path="/create-post" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;