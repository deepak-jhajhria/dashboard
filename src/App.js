import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Tabs from './components/Tabs';
import Faq from './components/Faqs';
import FormValidation from './components/FormValidation';


function App() {
  return (
    <div className='min-h-screen'>
      <NavBar />
      <Routes>
        <Route path="/tabs" element={<Tabs />} />
        <Route path="/accordion" element={(<Faq />)} />
        <Route path="/faqs" element='' />
        <Route path="/form" element={<FormValidation />} />
      </Routes>
    </div>
  );
}

export default App;