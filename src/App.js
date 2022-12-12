import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Seiyuus from './pages/Seiyuus';
import ForgotPassword from './pages/ForgotPassword';
import Header from './components/Header';

import 'react-toastify/dist/ReactToastify.css';
import ToastAlert from './utils/toastAlert';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/seiyuus" element={<Seiyuus />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
      <ToastAlert/>
    </>
  );
}

export default App;
