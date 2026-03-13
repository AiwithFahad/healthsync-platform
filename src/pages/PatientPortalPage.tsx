import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Calendar, FileText, Pill, Activity, CreditCard, Bell, User,
  Clock, Download, ChevronRight, Stethoscope, FlaskConical
} from "lucide-react";

const mockAppointments = [
  { id: 1, doctor: "Dr. Malik Ellahi Bukhsh Awan", dept: "Paediatrics", date: "2026-03-15", time: "10:00 AM", status: "Confirmed" },
  { id: 2, doctor: "Dr. Muhammad Irshad Khan", dept: "Medicine", date: "2026-03-20", time: "02:30 PM", status: "Pending" },
];

const mockLabResults = [
  { id: 1, test: "Complete Blood Count", date: "2026-03-10", status: "Ready" },
  { id: 2, test: "Liver Function Test", date: "2026-03-08", status: "Ready" },
];

const mockPrescriptions = [
  { id: 1, doctor: "Dr. Irshad Khan", date: "2026-03-10", medicines: 3 },
];

const tabs = [
  { id: "overview", label: "Overview", icon: Activity },
  { id: "appointments", label: "Appointments", icon: Calendar },
  { id: "records", label: "Medical Records", icon: FileText },
  { id: "lab", label: "Lab Results", icon: FlaskConical },
  { id: "prescriptions", label: "Prescriptions", icon: Pill },
  { id: "billing", label: "Billing", icon: CreditCard },
];

export default function PatientPortalPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md rounded-2xl border border-border bg-card p-8"
        >
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary font-display text-xl font-bold text-primary-foreground">M+</div>
            <h1 className="font-display text-2xl font-bold text-foreground">Patient Portal</h1>
            <p className="mt-1 text-sm text-muted-foreground">Sign in to access your health records</p>
          </div>
          <div className="space-y-4">
            <input placeholder="Email or Patient ID" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
            <input type="password" placeholder="Password" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
            <Button variant="hero" className="w-full" onClick={() => setLoggedIn(true)}>Sign In</Button>
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account? <button className="font-medium text-primary" onClick={() => setLoggedIn(true)}>Register</button>
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-muted">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r border-border bg-card lg:flex">
        <div className="flex items-center gap-2.5 border-b border-border p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-display text-lg font-bold text-primary-foreground">M+</div>
          <div>
            <span className="font-display text-sm font-bold text-foreground">MediCare</span>
            <span className="block text-[10px] text-muted-foreground">Patient Portal</span>
          </div>
        </div>
        <nav className="flex-1 space-y-1 p-4">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                activeTab === tab.id ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="h-4 w-4" /> {tab.label}
            </button>
          ))}
        </nav>
        <div className="border-t border-border p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Ahmad Raza</p>
              <p className="text-xs text-muted-foreground">Patient</p>
            </div>
          </div>
          <Link to="/">
            <Button variant="ghost" size="sm" className="mt-3 w-full">Back to Website</Button>
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        <header className="flex items-center justify-between border-b border-border bg-card px-6 py-4">
          <h1 className="font-display text-xl font-bold text-foreground">
            {tabs.find(t => t.id === activeTab)?.label}
          </h1>
          <div className="flex items-center gap-3">
            <button className="relative rounded-lg p-2 hover:bg-muted">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <span className="absolute -right-0.5 -top-0.5 h-4 w-4 rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground flex items-center justify-center">3</span>
            </button>
          </div>
        </header>

        <div className="p-6">
          {activeTab === "overview" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: "Upcoming Appointments", value: "2", icon: Calendar, color: "text-primary" },
                  { label: "Lab Results", value: "2", icon: FlaskConical, color: "text-medical-teal" },
                  { label: "Prescriptions", value: "1", icon: Pill, color: "text-medical-green" },
                  { label: "Pending Bills", value: "Rs. 5,200", icon: CreditCard, color: "text-medical-amber" },
                ].map(stat => (
                  <div key={stat.label} className="stat-card">
                    <stat.icon className={`mb-3 h-7 w-7 ${stat.color}`} />
                    <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="mb-4 font-display text-lg font-bold text-foreground">Upcoming Appointments</h3>
                <div className="space-y-3">
                  {mockAppointments.map(apt => (
                    <div key={apt.id} className="flex items-center justify-between rounded-xl bg-muted p-4">
                      <div className="flex items-center gap-3">
                        <Stethoscope className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">{apt.doctor}</p>
                          <p className="text-sm text-muted-foreground">{apt.dept} · {apt.date} · {apt.time}</p>
                        </div>
                      </div>
                      <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                        apt.status === "Confirmed" ? "bg-medical-green/10 text-medical-green" : "bg-medical-amber/10 text-medical-amber"
                      }`}>{apt.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "appointments" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <Button variant="hero" asChild><Link to="/book-appointment">Book New Appointment</Link></Button>
              {mockAppointments.map(apt => (
                <div key={apt.id} className="rounded-xl border border-border bg-card p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display font-bold text-foreground">{apt.doctor}</p>
                      <p className="text-sm text-muted-foreground">{apt.dept}</p>
                      <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {apt.date}</span>
                        <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {apt.time}</span>
                      </div>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                      apt.status === "Confirmed" ? "bg-medical-green/10 text-medical-green" : "bg-medical-amber/10 text-medical-amber"
                    }`}>{apt.status}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "lab" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              {mockLabResults.map(lab => (
                <div key={lab.id} className="flex items-center justify-between rounded-xl border border-border bg-card p-6">
                  <div>
                    <p className="font-display font-bold text-foreground">{lab.test}</p>
                    <p className="text-sm text-muted-foreground">{lab.date}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-medical-green/10 px-3 py-1 text-xs font-medium text-medical-green">{lab.status}</span>
                    <Button variant="outline" size="sm"><Download className="mr-1 h-4 w-4" /> Download</Button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "prescriptions" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              {mockPrescriptions.map(rx => (
                <div key={rx.id} className="flex items-center justify-between rounded-xl border border-border bg-card p-6">
                  <div>
                    <p className="font-display font-bold text-foreground">Prescription by {rx.doctor}</p>
                    <p className="text-sm text-muted-foreground">{rx.date} · {rx.medicines} medicines</p>
                  </div>
                  <Button variant="outline" size="sm"><Download className="mr-1 h-4 w-4" /> Download</Button>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "records" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-2xl border border-border bg-card p-8 text-center">
              <FileText className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
              <h3 className="font-display text-lg font-bold text-foreground">Medical Records</h3>
              <p className="mt-2 text-sm text-muted-foreground">Your complete electronic medical records are securely stored and accessible here.</p>
            </motion.div>
          )}

          {activeTab === "billing" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-2xl border border-border bg-card p-8 text-center">
              <CreditCard className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
              <h3 className="font-display text-lg font-bold text-foreground">Billing & Payments</h3>
              <p className="mt-2 text-sm text-muted-foreground">View and manage your bills, invoices, and payment history.</p>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
