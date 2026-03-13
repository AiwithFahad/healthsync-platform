import { Stethoscope, Scissors, Baby, Heart, Scan, Brain, Pill, FlaskConical } from "lucide-react";

export interface Department {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: any;
  services: string[];
  contactPhone: string;
  contactEmail: string;
  headDoctor: string;
  color: string;
}

export const departments: Department[] = [
  {
    id: "medicine",
    name: "Medicine & Allied Department",
    shortName: "Medicine",
    description: "Comprehensive internal medicine services including cardiology, pulmonology, endocrinology, and general medicine with advanced diagnostic capabilities.",
    icon: Stethoscope,
    services: ["General Medicine", "Cardiology", "Pulmonology", "Endocrinology", "Gastroenterology", "Rheumatology"],
    contactPhone: "+92-300-1234567",
    contactEmail: "medicine@hospital.com",
    headDoctor: "Dr. Muhammad Irshad Khan",
    color: "primary",
  },
  {
    id: "surgery",
    name: "Surgery & Allied Department",
    shortName: "Surgery",
    description: "State-of-the-art surgical facilities with experienced surgeons specializing in general surgery, orthopedics, urology, and ENT procedures.",
    icon: Scissors,
    services: ["General Surgery", "Orthopedics", "Urology", "ENT Surgery", "Plastic Surgery", "Vascular Surgery"],
    contactPhone: "+92-300-1234568",
    contactEmail: "surgery@hospital.com",
    headDoctor: "Dr. Ahmed Hassan",
    color: "secondary",
  },
  {
    id: "paediatrics",
    name: "Paediatrics & Neonatology",
    shortName: "Paediatrics",
    description: "Dedicated care for children from birth through adolescence, including neonatal intensive care and pediatric emergency services.",
    icon: Baby,
    services: ["General Paediatrics", "Neonatal ICU", "Pediatric Emergency", "Vaccination", "Growth Monitoring", "Pediatric Surgery"],
    contactPhone: "+92-300-1234569",
    contactEmail: "paediatrics@hospital.com",
    headDoctor: "Dr. Malik Ellahi Bukhsh Awan",
    color: "accent",
  },
  {
    id: "gynaecology",
    name: "Gynaecology & Obstetrics",
    shortName: "Gynaecology",
    description: "Complete women's health services including prenatal care, delivery, gynecological surgery, and reproductive health management.",
    icon: Heart,
    services: ["Prenatal Care", "Normal Delivery", "C-Section", "Gynecological Surgery", "Fertility Treatment", "Women's Health Screening"],
    contactPhone: "+92-300-1234570",
    contactEmail: "gynaecology@hospital.com",
    headDoctor: "Dr. Fatima Zahra",
    color: "medical-rose",
  },
  {
    id: "laparoscopic",
    name: "Laparoscopic & Bariatric Surgery",
    shortName: "Laparoscopic",
    description: "Minimally invasive surgical procedures including laparoscopic surgery and bariatric weight loss surgery with rapid recovery protocols.",
    icon: Scan,
    services: ["Laparoscopic Surgery", "Bariatric Surgery", "Hernia Repair", "Gallbladder Surgery", "Weight Management", "Minimally Invasive Procedures"],
    contactPhone: "+92-300-1234571",
    contactEmail: "laparoscopic@hospital.com",
    headDoctor: "Dr. Bilal Mahmood",
    color: "medical-teal",
  },
  {
    id: "neurorehab",
    name: "Neurorehab Department",
    shortName: "Neurorehab",
    description: "Specialized neurological rehabilitation services for patients recovering from stroke, brain injury, and neurological disorders.",
    icon: Brain,
    services: ["Stroke Rehabilitation", "Brain Injury Recovery", "Physical Therapy", "Speech Therapy", "Cognitive Rehabilitation", "Pain Management"],
    contactPhone: "+92-300-1234572",
    contactEmail: "neurorehab@hospital.com",
    headDoctor: "Dr. Rashid Ali",
    color: "medical-amber",
  },
  {
    id: "pharmacy",
    name: "Pharmacy Department",
    shortName: "Pharmacy",
    description: "Full-service hospital pharmacy providing medication dispensing, inventory management, and pharmaceutical care to all departments.",
    icon: Pill,
    services: ["Prescription Fulfillment", "Medication Counseling", "Drug Interaction Check", "Inventory Management", "Compounding", "Home Delivery"],
    contactPhone: "+92-300-1234573",
    contactEmail: "pharmacy@hospital.com",
    headDoctor: "Dr. Saima Nawaz",
    color: "medical-green",
  },
  {
    id: "diagnostics",
    name: "Diagnostics Department",
    shortName: "Diagnostics",
    description: "Advanced diagnostic laboratory and imaging services including radiology, pathology, and molecular diagnostics for accurate disease detection.",
    icon: FlaskConical,
    services: ["Blood Tests", "X-Ray", "CT Scan", "MRI", "Ultrasound", "Pathology", "Molecular Diagnostics"],
    contactPhone: "+92-300-1234574",
    contactEmail: "diagnostics@hospital.com",
    headDoctor: "Dr. Kamran Shah",
    color: "medical-sky",
  },
];
