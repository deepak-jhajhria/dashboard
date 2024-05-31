import './App.css';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import { Route, Routes } from 'react-router-dom';
import FormValidation from './components/FormValidation';
import Tabs from './components/Tabs';
import Faq from './components/Faqs';
import DashboardHeader from './components/Dashboard';


function App() {
  return (
    <div className='h-screen max-w-[1920px] mx-auto relative bg-[#F5F5F5] overflow-hidden'>
      <div className='flex w-full'>
        <SideBar />
        <div className='flex flex-col w-full'>
          <DashboardHeader />
          <div className='flex flex-col w-full h-[calc(100vh-150px)] px-12 mt-12 pb-10 overflow-y-scroll'>
            <Routes>
              {/* <Route path='/' exact element={<Dashboard />}></Route> */}
              <Route path='/faqs' exact element={<Faq />}></Route>
              <Route path='/tabs' exact element={<Tabs />}></Route>
              <Route path='/form-validation' exact element={<FormValidation />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;