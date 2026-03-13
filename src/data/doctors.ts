export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  department: string;
  departmentId: string;
  qualifications: string[];
  experience: string;
  image: string;
  availability: string;
  bio: string;
  featured: boolean;
}

export const doctors: Doctor[] = [
  {
    id: "dr-malik",
    name: "Dr. Malik Ellahi Bukhsh Awan",
    specialization: "Child Specialist",
    department: "Paediatrics & Neonatology",
    departmentId: "paediatrics",
    qualifications: ["MBBS", "FCPS (Paediatrics)", "MRCPCH"],
    experience: "18+ Years",
    image: "/doctor-malik.jpg",
    availability: "Mon - Sat, 9:00 AM - 5:00 PM",
    bio: "Dr. Malik is a renowned child specialist with over 18 years of experience in paediatric medicine and neonatal care. He specializes in pediatric emergency care, neonatal intensive care, and developmental paediatrics.",
    featured: true,
  },
  {
    id: "dr-irshad",
    name: "Dr. Muhammad Irshad Khan",
    specialization: "Medical Specialist",
    department: "Medicine & Allied",
    departmentId: "medicine",
    qualifications: ["MBBS", "FCPS (Medicine)", "MRCP (UK)"],
    experience: "22+ Years",
    image: "/doctor-irshad.jpg",
    availability: "Mon - Sat, 10:00 AM - 6:00 PM",
    bio: "Dr. Irshad is a distinguished medical specialist with extensive experience in internal medicine, cardiology consultation, and complex medical case management. He leads the Medicine & Allied department.",
    featured: true,
  },
];
