import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Doctors from './pages/Doctors';
import FertilityJourney from './pages/FertilityJourney';
import SuccessStories from './pages/success-stories/SuccessStories';
import SuccessStoryDetail from './pages/success-stories/SuccessStoryDetail';
import Resources from './pages/resources/Resources';
import ResourceDetailPage from './pages/resources/ResourceDetailPage';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import TreatmentsOverview from './pages/treatments/TreatmentsOverview';
import TreatmentDetailPage from './pages/treatments/TreatmentDetailPage';
import LocationPage from './pages/locations/LocationPage';

// Scroll to top on page transition
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/fertility-journey" element={<FertilityJourney />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/success-stories/:id" element={<SuccessStoryDetail />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:id" element={<ResourceDetailPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/treatments" element={<TreatmentsOverview />} />
            <Route path="/treatments/:id" element={<TreatmentDetailPage />} />
            <Route path="/locations/:id" element={<LocationPage />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
