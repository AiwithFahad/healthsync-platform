import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { departments } from "@/data/departments";
import { doctors } from "@/data/doctors";
import { motion } from "framer-motion";
import { Calendar, Clock, CheckCircle, User, Stethoscope } from "lucide-react";

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
];

export default function BookAppointmentPage() {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [selectedDept, setSelectedDept] = useState(searchParams.get("department") || "");
  const [selectedDoctor, setSelectedDoctor] = useState(searchParams.get("doctor") || "");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const filteredDoctors = selectedDept
    ? doctors.filter(d => d.departmentId === selectedDept)
    : doctors;

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <CheckCircle className="mx-auto mb-6 h-20 w-20 text-medical-green" />
            <h1 className="font-display text-3xl font-bold text-foreground">Appointment Requested!</h1>
            <p className="mt-4 text-muted-foreground">Your appointment request has been submitted. You will receive a confirmation shortly.</p>
            <div className="mx-auto mt-8 max-w-sm rounded-2xl border border-border bg-card p-6 text-left">
              <p className="text-sm text-muted-foreground">Doctor: <span className="font-medium text-foreground">{doctors.find(d => d.id === selectedDoctor)?.name}</span></p>
              <p className="text-sm text-muted-foreground mt-2">Date: <span className="font-medium text-foreground">{selectedDate}</span></p>
              <p className="text-sm text-muted-foreground mt-2">Time: <span className="font-medium text-foreground">{selectedTime}</span></p>
            </div>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="hero-gradient py-16">
        <div className="container">
          <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">Book an Appointment</h1>
          <p className="mt-4 text-primary-foreground/80">Schedule your visit in just a few steps.</p>
        </div>
      </section>

      <div className="container py-16">
        {/* Steps indicator */}
        <div className="mb-12 flex items-center justify-center gap-2">
          {[1, 2, 3, 4].map(s => (
            <div key={s} className="flex items-center gap-2">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                s <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}>
                {s}
              </div>
              {s < 4 && <div className={`h-0.5 w-12 transition-colors ${s < step ? "bg-primary" : "bg-muted"}`} />}
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-2xl">
          {/* Step 1: Department */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="mb-6 font-display text-2xl font-bold text-foreground">Select Department</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {departments.map(dept => (
                  <button
                    key={dept.id}
                    onClick={() => { setSelectedDept(dept.id); setStep(2); }}
                    className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-all ${
                      selectedDept === dept.id ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/30"
                    }`}
                  >
                    <dept.icon className="h-6 w-6 text-primary" />
                    <span className="font-medium text-foreground">{dept.shortName}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Doctor */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="mb-6 font-display text-2xl font-bold text-foreground">Select Doctor</h2>
              <div className="space-y-3">
                {filteredDoctors.map(doc => (
                  <button
                    key={doc.id}
                    onClick={() => { setSelectedDoctor(doc.id); setStep(3); }}
                    className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all ${
                      selectedDoctor === doc.id ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/30"
                    }`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Stethoscope className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{doc.name}</p>
                      <p className="text-sm text-muted-foreground">{doc.specialization} · {doc.experience}</p>
                    </div>
                  </button>
                ))}
                {filteredDoctors.length === 0 && (
                  <p className="text-muted-foreground">No doctors available in this department yet.</p>
                )}
              </div>
              <Button variant="ghost" onClick={() => setStep(1)} className="mt-4">← Back</Button>
            </motion.div>
          )}

          {/* Step 3: Date & Time */}
          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="mb-6 font-display text-2xl font-bold text-foreground">Select Date & Time</h2>
              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={e => setSelectedDate(e.target.value)}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground focus:border-primary focus:outline-none"
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Available Time Slots</label>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                    {timeSlots.map(time => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                          selectedTime === time ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:border-primary/30"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex gap-2">
                <Button variant="ghost" onClick={() => setStep(2)}>← Back</Button>
                <Button variant="hero" onClick={() => setStep(4)} disabled={!selectedDate || !selectedTime}>Continue</Button>
              </div>
            </motion.div>
          )}

          {/* Step 4: Patient Info */}
          {step === 4 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="mb-6 font-display text-2xl font-bold text-foreground">Patient Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Full Name</label>
                  <input
                    type="text"
                    value={patientName}
                    onChange={e => setPatientName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Phone Number</label>
                  <input
                    type="tel"
                    value={patientPhone}
                    onChange={e => setPatientPhone(e.target.value)}
                    placeholder="+92-300-XXXXXXX"
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    value={patientEmail}
                    onChange={e => setPatientEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                </div>
              </div>
              <div className="mt-6 flex gap-2">
                <Button variant="ghost" onClick={() => setStep(3)}>← Back</Button>
                <Button variant="hero" onClick={handleSubmit} disabled={!patientName || !patientPhone}>
                  <Calendar className="mr-2 h-4 w-4" /> Confirm Appointment
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </Layout>
  );
}
