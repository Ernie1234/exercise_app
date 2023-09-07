import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import { Footer, NavBar } from "./components";
import { Home, Exercise } from "./pages";

function App() {
  return (
    <Box>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/exercise/:id" exact element={<Exercise />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
