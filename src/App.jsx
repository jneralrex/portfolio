import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import LandingPage from './components/landing/LandingPage';
import Nav from './components/navigation/Nav';
import AboutPage from './components/story/AboutPage';
import Contact from './components/onboardingPages/Contact';
import Projects from './components/projects/Projects';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route index element={<LandingPage />} />
        <Route path='contact' element={<Contact />} />
        <Route path='meetme' element={<Nav />}>
          <Route path='projects' element={<Projects />} />
          <Route path='about' element={<AboutPage />} />
        </Route>
      </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
