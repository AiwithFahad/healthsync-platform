import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { departments } from "@/data/departments";
import { doctors } from "@/data/doctors";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, Calendar } from "lucide-react";

export default function DepartmentPage() {
  const { id } = useParams();
  const dept = departments.find(d => d.id === id);

  if (!dept) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground">Department Not Found</h1>
          <Button variant="hero" className="mt-6" asChild>
            <Link to="/departments">View All Departments</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const deptDoctors = doctors.filter(d => d.departmentId === dept.id);

  return (
    <Layout>
      {/* Header */}
      <section className="hero-gradient py-16">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/20">
                <dept.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">{dept.name}</h1>
                <p className="text-primary-foreground/70">Head: {dept.headDoctor}</p>
              </div>
            </div>
            <p className="max-w-2xl text-lg text-primary-foreground/80">{dept.description}</p>
          </motion.div>
        </div>
      </section>

      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Services */}
            <div>
              <h2 className="mb-6 font-display text-2xl font-bold text-foreground">Our Services</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {dept.services.map(service => (
                  <div key={service} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Doctors */}
            {deptDoctors.length > 0 && (
              <div>
                <h2 className="mb-6 font-display text-2xl font-bold text-foreground">Department Doctors</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {deptDoctors.map(doc => (
                    <div key={doc.id} className="rounded-2xl border border-border bg-card p-6">
                      <h3 className="font-display text-lg font-bold text-foreground">{doc.name}</h3>
                      <p className="text-sm text-primary">{doc.specialization}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{doc.experience} experience</p>
                      <div className="mt-4 flex gap-2">
                        <Button size="sm" variant="hero" asChild>
                          <Link to={`/book-appointment?doctor=${doc.id}`}>Book</Link>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <Link to={`/doctors/${doc.id}`}>Profile</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-4 font-display text-lg font-bold text-foreground">Contact Department</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" /> {dept.contactPhone}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" /> {dept.contactEmail}
                </div>
              </div>
              <Button variant="hero" className="mt-4 w-full" asChild>
                <Link to={`/book-appointment?department=${dept.id}`}>
                  <Calendar className="mr-2 h-4 w-4" /> Book Appointment
                </Link>
              </Button>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-4 font-display text-lg font-bold text-foreground">All Departments</h3>
              <div className="space-y-2">
                {departments.map(d => (
                  <Link
                    key={d.id}
                    to={`/departments/${d.id}`}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                      d.id === dept.id ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <d.icon className="h-4 w-4" /> {d.shortName}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
