import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/contact';
import Home from './components/home';
import Students from './components/students';
import Navbar from './components/navbar';
import Edit from './components/edit'
import { StudentData } from './components/studentData';

function App() {
  return (
    <div className="App">
      <Navbar />
      <StudentData>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/students' element={<Students />} />
        <Route path='/student-desc' element={<Edit />} />
        <Route path='/student-desc/:id' element={<Edit />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </StudentData>
    </div>
  );
}

export default App;
