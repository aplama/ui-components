import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Features from "./components/comp2/Features";
// import Footer from "./components/comp2/Footer";
// import Hero from "./components/comp2/Hero";

// import NavBar from "./components/NavBar";
// import Blog from "./pages/Blog";
// import Home from "./pages/Home";
// import Form from "./components/Form";
// import Components from "./pages/ComponentsView";
// import twForm from "./components/twForm";
import Nav from "./components/comp2/Nav";
// import Pricing from "./components/comp2/Pricing";
import Home2 from "./pages/pages2/Home2";
import FAQ from "./components/comp2/FAQ";
import Resume from "./pages/pages2/Resume";
import CV from "./pages/pages2/CV";
import Blog2 from "./pages/pages2/Blog2";
import Login from "./pages/pages2/Login";
import Register from "./pages/pages2/Register";

function App() {
  return (
    <Router>
      <Nav />

      {/* <Hero />
      <Features />
      <Pricing />
      <Footer /> */}
      <Route exact path='/' component={Home2} />
      <Route exact path='/faq' component={FAQ} />
      <Route exact path='/resume' component={Resume} />
      <Route exact path='/cv' component={CV} />
      <Route exact path='/blog' component={Blog2} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      {/* <NavBar />

      <Route exact path='/' component={Home} />
      <Route exact path='/blog' component={Blog} />
      <Route exact path='/form' component={Form} />
      <Route exact path='/components' component={Components} />
      <Route exact path='/twform' component={twForm} /> */}
    </Router>
  );
}

export default App;
