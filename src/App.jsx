import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LandingPage, Login, SignUp, TeacherHome } from './pages';
import { Navbar, Footer } from './components';

const App = () => {
  const [user, setUser] = useState(false);

  return (
    <div className="font-poppings box-border">
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <TeacherHome /> : <LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
