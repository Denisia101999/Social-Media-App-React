// import logo from "./logo.svg";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./components/Layout";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        <Route path="/chat" element={<ChatPage></ChatPage>}></Route>
        <Route path="/auth" element={<AuthPage></AuthPage>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
