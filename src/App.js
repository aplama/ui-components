import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Form from "./components/Form";
import Components from "./pages/ComponentsView";

function App() {
  return (
    <Router>
      <NavBar />

      <Route exact path='/' component={Home} />
      <Route exact path='/blog' component={Blog} />
      <Route exact path='/form' component={Form} />
      <Route exact path='/components' component={Components} />
    </Router>
  );
}

export default App;
