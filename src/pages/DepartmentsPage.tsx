import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { departments } from "@/data/departments";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function DepartmentsPage() {
  return (
    <Layout>
      <section className="hero-gradient py-16">
        <div className="container">
          <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">Our Departments</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">Comprehensive healthcare across 8 specialized departments with state-of-the-art facilities.</p>
        </div>
      </section>
      <section className="container py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept, i) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link to={`/departments/${dept.id}`} className="department-card group block h-full">
                <dept.icon className="mb-4 h-10 w-10 text-primary transition-transform group-hover:scale-110" />
                <h3 className="mb-2 font-display text-xl font-semibold text-foreground">{dept.name}</h3>
                <p className="mb-2 text-sm text-muted-foreground">Head: {dept.headDoctor}</p>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{dept.description}</p>
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {dept.services.slice(0, 3).map(s => (
                    <span key={s} className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">{s}</span>
                  ))}
                  {dept.services.length > 3 && (
                    <span className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">+{dept.services.length - 3} more</span>
                  )}
                </div>
                <span className="inline-flex items-center text-sm font-medium text-primary">
                  Explore Department <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
