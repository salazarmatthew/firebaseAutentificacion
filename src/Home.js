import React, { useState, useEffect } from "react";
import { app } from "./fb";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = app.auth().currentUser;
    if (currentUser) {
      setUser(currentUser.email);
    }
  }, []);

  const cerrarSesion = () => {
    app.auth().signOut();
  };

  return (
    <div>
      <h1>Bienvenido, {user ? user : "sesión iniciada"}</h1>
      <button onClick={cerrarSesion}>Cerrar Sesión</button>
    </div>
  );
};

export default Home;