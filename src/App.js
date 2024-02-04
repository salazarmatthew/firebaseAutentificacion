import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { app } from "./fb";
import Home from "./Home";
import Logueo from "./Logueo";

function App() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged((usuarioFirebase) => {
      console.log("ya tienes sesión iniciada con:", usuarioFirebase);
      setUsuario(usuarioFirebase);
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={usuario ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={usuario ? <Navigate to="/" /> : <Logueo setUsuario={setUsuario} />} />
      </Routes>
    </Router>
  );
}

export default App;