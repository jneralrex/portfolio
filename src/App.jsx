import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, useLocation } from "react-router-dom";

import AboutPage from './pages/AboutPage';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import LandingPage from './pages/LandingPage';
import RootLayout from './components/layout/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path='contact' element={<Contact />} />
      <Route path='projects' element={<Projects />} />
      <Route path='about' element={<AboutPage />} />
    </Route>
    </>
  )
);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
