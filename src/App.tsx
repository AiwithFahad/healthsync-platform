import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import DepartmentsPage from "./pages/DepartmentsPage.tsx";
import DepartmentPage from "./pages/DepartmentPage.tsx";
import DoctorsPage from "./pages/DoctorsPage.tsx";
import DoctorProfilePage from "./pages/DoctorProfilePage.tsx";
import BookAppointmentPage from "./pages/BookAppointmentPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import PatientPortalPage from "./pages/PatientPortalPage.tsx";
import AdminDashboardPage from "./pages/AdminDashboardPage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/departments" element={<DepartmentsPage />} />
          <Route path="/departments/:id" element={<DepartmentPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/doctors/:id" element={<DoctorProfilePage />} />
          <Route path="/book-appointment" element={<BookAppointmentPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/patient-portal" element={<PatientPortalPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
