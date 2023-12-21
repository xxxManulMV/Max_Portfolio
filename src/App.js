import {Routes, Route} from 'react-router-dom'

import HomePage from "./Pages/Home/HomePage";
import AboutPage from "./Pages/About/AboutPage";

import Layout from "./Layout";


export default function App() {
  return (
    <Routes>
      <Route path = '/' element={<Layout />}>
        <Route path = '/' element={<HomePage />}/>
        <Route path = '/about' element={<AboutPage />}/>
      </Route>
    </Routes>
  );
}