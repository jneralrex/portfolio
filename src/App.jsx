import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
// import StoryPage from './components/storypage/StoryPage';
import LandingPage from './components/landing/LandingPage';
import UserProfile from './components/user/UserProfile';
import Nav from './components/navigation/Nav';
import AboutPage from './components/story/AboutPage';
import Contact from './components/onboardingPages/Contact';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<LandingPage />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user-nav'element={<Nav/>}>
        <Route path='profile' element={<UserProfile />} />
        <Route path='about' element={<AboutPage />} />
      </Route>
    </Route>
  )
);

function app() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default app;