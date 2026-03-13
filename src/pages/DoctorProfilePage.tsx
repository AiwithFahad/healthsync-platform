import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { doctors } from "@/data/doctors";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Clock, Award, BookOpen, Stethoscope } from "lucide-react";
import doctorMalik from "@/assets/doctor-malik.jpg";
import doctorIrshad from "@/assets/doctor-irshad.jpg";

const doctorImages: Record<string, string> = {
  "dr-malik": doctorMalik,
  "dr-irshad": doctorIrshad,
};

export default function DoctorProfilePage() {
  const { id } = useParams();
  const doc = doctors.find(d => d.id === id);

  if (!doc) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground">Doctor Not Found</h1>
          <Button variant="hero" className="mt-6" asChild>
            <Link to="/doctors">View All Doctors</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="hero-gradient py-16">
        <div className="container">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
            <img src={doctorImages[doc.id]} alt={doc.name} className="h-32 w-32 rounded-2xl object-cover shadow-lg" />
            <div>
              <h1 className="font-display text-3xl font-bold text-primary-foreground">{doc.name}</h1>
              <p className="mt-1 text-lg text-primary-foreground/80">{doc.specialization}</p>
              <p className="text-primary-foreground/60">{doc.department}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {doc.qualifications.map(q => (
                  <span key={q} className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-sm text-primary-foreground">{q}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="mb-4 font-display text-2xl font-bold text-foreground">About</h2>
              <p className="text-muted-foreground leading-relaxed">{doc.bio}</p>
            </motion.div>

            <div>
              <h2 className="mb-4 font-display text-2xl font-bold text-foreground">Dashboard Preview</h2>
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="text-sm text-muted-foreground mb-4">Full doctor dashboard available after staff login.</p>
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { icon: Calendar, label: "Today's Appointments", value: "12" },
                    { icon: Stethoscope, label: "Active Patients", value: "48" },
                    { icon: BookOpen, label: "Prescriptions", value: "156" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-muted p-4 text-center">
                      <stat.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                      <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-4 font-display text-lg font-bold text-foreground">Availability</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" /> {doc.availability}
              </div>
              <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                <Award className="h-4 w-4" /> {doc.experience} Experience
              </div>
              <Button variant="hero" className="mt-6 w-full" asChild>
                <Link to={`/book-appointment?doctor=${doc.id}`}>
                  <Calendar className="mr-2 h-4 w-4" /> Book Appointment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
