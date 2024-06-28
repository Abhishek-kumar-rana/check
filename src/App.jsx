import React from 'react';
import SignUp from './components/SignUp.jsx';
import ProfileForm from './components/ProfileForm.jsx';
import Wallet from './components/Wallet.jsx';
import { Route, Routes } from 'react-router-dom';
import Start from './components/Start.jsx';


const App = () => (
  <div>
    <Routes>
      <Route path='/' element={<Start />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/profile' element={<ProfileForm />} />
      <Route path='/wallet' element={<Wallet />} />

    </Routes>
  </div>
);

export default App;
