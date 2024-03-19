import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./context/userContext";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Sorry from "./components/Sorry";
import StateVerification from "./components/StateVerification";
import Search from "./components/Search";
import Saved from "./components/Saved";

import BeachDetails from "./components/BeachDetails";
import BeachCard from "./components/BeachCard";
import Dashboard from "./components/Dashboard";
import PrivateBeach from "./components/Beach";
import PublicBeach from "./components/PublicBeach";
import SubmissionForm from "./components/SubmissionForm";
import UserSubmissions from "./components/UserSubmissions";
import AccountSettings from "./components/AccountSettings";
import BeachCardNav from "./components/BeachCardNav";


function App() {
  const { token } = useContext(UserContext);

  return (
    <>
      <Nav />
      {token && <BeachCardNav token={token} />}
      <div className="content">
        <Routes>
          <Route path="sorry" element={<Sorry />} />
          <Route
            path="search"
            element={!token ? <StateVerification /> : <Search />}
          />
          <Route
            path="saved"
            element={!token ? <StateVerification /> : <Saved />}
          />
        
          <Route path="beach-card" element={<BeachCard />} />
          <Route
            path="beach-card/dashboard"
            element={!token ? <BeachCard /> : <Dashboard />}
          />
          <Route
            path="beach-card/private-library"
            element={!token ? <BeachCard /> : <PrivateBeach />}
          />
          <Route
            path="beach-card/public-beach"
            element={!token ? <BeachCard /> : <PublicBeach/>}
          />
          <Route
            path="beach-card/submission-form"
            element={!token ? <BeachCard /> : <SubmissionForm />}
          />
          <Route
            path="beach-card/user-submissions"
            element={!token ? <BeachCard /> : <UserSubmissions />}
          />
          <Route
            path="beach-card/account-settings"
            element={!token ? <BeachCard /> : <AccountSettings />}
          />
          <Route path="beach-details" element={<BeachDetails />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
