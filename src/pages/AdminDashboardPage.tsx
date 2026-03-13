import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  LayoutDashboard, Users, Calendar, Stethoscope, Pill, FlaskConical,
  Building2, BarChart3, Settings, Bell, User, Activity,
  TrendingUp, UserPlus, AlertCircle
} from "lucide-react";

const sidebarItems = [
  { id: "overview", label: "Dashboard", icon: LayoutDashboard },
  { id: "departments", label: "Departments", icon: Building2 },
  { id: "doctors", label: "Doctors", icon: Stethoscope },
  { id: "patients", label: "Patients", icon: Users },
  { id: "appointments", label: "Appointments", icon: Calendar },
  { id: "pharmacy", label: "Pharmacy", icon: Pill },
  { id: "diagnostics", label: "Diagnostics", icon: FlaskConical },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center hero-gradient">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md rounded-2xl border border-border bg-card p-8"
        >
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary font-display text-xl font-bold text-primary-foreground">M+</div>
            <h1 className="font-display text-2xl font-bold text-foreground">Admin Login</h1>
            <p className="mt-1 text-sm text-muted-foreground">Hospital Administration Portal</p>
          </div>
          <div className="space-y-4">
            <input placeholder="Admin Email" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
            <input type="password" placeholder="Password" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
            <Button variant="hero" className="w-full" onClick={() => setLoggedIn(true)}>Sign In</Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-muted">
      <aside className="hidden w-64 flex-col border-r border-border bg-card lg:flex">
        <div className="flex items-center gap-2.5 border-b border-border p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-display text-lg font-bold text-primary-foreground">M+</div>
          <div>
            <span className="font-display text-sm font-bold text-foreground">MediCare</span>
            <span className="block text-[10px] text-muted-foreground">Admin Panel</span>
          </div>
        </div>
        <nav className="flex-1 space-y-1 p-4">
          {sidebarItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                activeTab === item.id ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <item.icon className="h-4 w-4" /> {item.label}
            </button>
          ))}
        </nav>
        <div className="border-t border-border p-4">
          <Link to="/"><Button variant="ghost" size="sm" className="w-full">Back to Website</Button></Link>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <header className="flex items-center justify-between border-b border-border bg-card px-6 py-4">
          <h1 className="font-display text-xl font-bold text-foreground">
            {sidebarItems.find(s => s.id === activeTab)?.label || "Dashboard"}
          </h1>
          <div className="flex items-center gap-3">
            <button className="relative rounded-lg p-2 hover:bg-muted">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <span className="absolute -right-0.5 -top-0.5 h-4 w-4 rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground flex items-center justify-center">7</span>
            </button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">Super Admin</span>
            </div>
          </div>
        </header>

        <div className="p-6">
          {activeTab === "overview" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: "Total Patients", value: "12,458", change: "+12%", icon: Users, color: "text-primary" },
                  { label: "Today's Appointments", value: "48", change: "+5%", icon: Calendar, color: "text-medical-teal" },
                  { label: "Active Doctors", value: "32", change: "+2", icon: Stethoscope, color: "text-medical-green" },
                  { label: "Revenue (Month)", value: "Rs. 8.2M", change: "+18%", icon: TrendingUp, color: "text-medical-amber" },
                ].map(stat => (
                  <div key={stat.label} className="stat-card">
                    <div className="flex items-center justify-between mb-3">
                      <stat.icon className={`h-7 w-7 ${stat.color}`} />
                      <span className="text-xs font-medium text-medical-green">{stat.change}</span>
                    </div>
                    <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="mb-4 font-display text-lg font-bold text-foreground">Recent Activity</h3>
                  <div className="space-y-3">
                    {[
                      { text: "New patient registration: Aisha Khan", time: "5 min ago", icon: UserPlus },
                      { text: "Appointment confirmed: Dr. Malik", time: "12 min ago", icon: Calendar },
                      { text: "Lab report uploaded: CBC Test #4521", time: "25 min ago", icon: FlaskConical },
                      { text: "Pharmacy stock alert: Paracetamol low", time: "1 hour ago", icon: AlertCircle },
                      { text: "Payment received: Rs. 15,000", time: "2 hours ago", icon: TrendingUp },
                    ].map((act, i) => (
                      <div key={i} className="flex items-center gap-3 rounded-lg p-3 hover:bg-muted">
                        <act.icon className="h-4 w-4 text-primary" />
                        <div className="flex-1">
                          <p className="text-sm text-foreground">{act.text}</p>
                          <p className="text-xs text-muted-foreground">{act.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="mb-4 font-display text-lg font-bold text-foreground">Department Overview</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Medicine", patients: 45, capacity: 80 },
                      { name: "Surgery", patients: 32, capacity: 60 },
                      { name: "Paediatrics", patients: 28, capacity: 50 },
                      { name: "Gynaecology", patients: 18, capacity: 40 },
                      { name: "Diagnostics", patients: 56, capacity: 100 },
                    ].map(dept => (
                      <div key={dept.name}>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-foreground">{dept.name}</span>
                          <span className="text-muted-foreground">{dept.patients}/{dept.capacity}</span>
                        </div>
                        <div className="mt-1 h-2 rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full rounded-full bg-primary transition-all"
                            style={{ width: `${(dept.patients / dept.capacity) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab !== "overview" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-2xl border border-border bg-card p-8 text-center">
              {(() => {
                const item = sidebarItems.find(s => s.id === activeTab);
                const Icon = item?.icon || Activity;
                return (
                  <>
                    <Icon className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                    <h3 className="font-display text-xl font-bold text-foreground">{item?.label} Management</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Full {item?.label?.toLowerCase()} management interface with CRUD operations, filters, and analytics.
                    </p>
                  </>
                );
              })()}
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
