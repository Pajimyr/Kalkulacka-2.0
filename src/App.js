import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Kalkulacka } from './pages/kalkulacka/kalkulacka.js';
import { Navbar } from './components/Navbar.js';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Box sx={{
      backgroundColor:"black",
      height:"100vh"
    }}>
      <Router>
      <Box>
        <Navbar/>
        <Routes>
          <Route path="/kalkulacka" element={<Kalkulacka />} />
        </Routes>
      </Box>
    </Router>
    <ToastContainer
      position="top-right"
      autoClose={1500}
      hideProgressBar={false}
      closeOnClick={true}
      pauseOnHover={true}
      progress={0}
      theme="dark"
    />
    </Box>
    
  );
}

export default App;
