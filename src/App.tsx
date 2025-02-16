import { Suspense } from "react";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

// Company Pages
import AboutUs from "./pages/company/AboutUs";
import Careers from "./pages/company/Careers";
import Press from "./pages/company/Press";

// Blog
import Blog from "./pages/blog/Blog";

// Courses
import PopularCourses from "./pages/courses/PopularCourses";

// Resources
import Community from "./pages/resources/Community";
import HelpCenter from "./pages/resources/HelpCenter";
import Partners from "./pages/resources/Partners";
import Guides from "./pages/resources/Guides";

// Legal
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import CookiePolicy from "./pages/legal/CookiePolicy";
import GDPR from "./pages/legal/GDPR";

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
      }
    >
      <>
        {/* For the tempo routes */}
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}

        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Company Routes */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />

          {/* Blog Route */}
          <Route path="/blog" element={<Blog />} />

          {/* Courses Routes */}
          <Route path="/courses" element={<PopularCourses />} />
          <Route path="/courses/:courseId" element={<PopularCourses />} />
          <Route
            path="/courses/category/:categoryId"
            element={<PopularCourses />}
          />

          {/* Resources Routes */}
          <Route path="/community" element={<Community />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/guides" element={<Guides />} />

          {/* Legal Routes */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/gdpr" element={<GDPR />} />

          {/* Tempo Routes */}
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}

          {/* Catch all route - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
