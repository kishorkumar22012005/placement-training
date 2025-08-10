import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Login from "./Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <>
          <Header />
          <Main />
          <Footer />
        </>
      ) : (
        <Login onLogin={setIsLoggedIn} />
      )}
    </>
  );
}

export default App;

