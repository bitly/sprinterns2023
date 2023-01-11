import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from './HomePage.jsx'; 
import CreateEvent from './CreateEvent.jsx'; 
// import RSVP from './RSVP.jsx'; 
//import ViewEvent from './ViewEvent.jsx'; 
//Add About Us page
//Add a community page

function App() {
  return (
    <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create-event">Create</Link>
        </li>
        <li>
          <p>RSVP</p>
          {/* <Link to="/RSVP.jsx">RSVP</Link> */}
        </li>
        <li>
          <p>Community</p>
          {/* <Link to="/Community.jsx">Community</Link> */}
        </li>
        <li>
          <p>About Us</p>
          {/* <Link to="/AboutUs.jsx">About Us</Link> */}
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/create-event" element={<CreateEvent />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  </div>
  );
}

export default App;
