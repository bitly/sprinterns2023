import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from './HomePage.jsx'; 
import CreateEvent from './CreateEvent.jsx'; 
import CommunityPage from './CommunityPage.jsx'

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
          <Link to="/community-page">Community</Link>
        </li>
        <li>
          <p>About Us</p>
          {/* <Link to="/AboutUs.jsx">About Us</Link> */}
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/community-page" element={<CommunityPage />} />
      <Route path="/create-event" element={<CreateEvent />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  </div>
  );
}

export default App;
