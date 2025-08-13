"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function PortfolioPage() {
  const skills = [
    "Python", "Java", "DBMS", "Web Development", "UI/UX Design",
    "Artificial Intelligence", "Machine Learning", "Business Intelligence"
  ]

  const languages = ["English", "Tamil", "French"]

  const projects = [
    {
      title: "Advanced Traffic Management System",
      desc: "Dynamic traffic control with vehicle detection, congestion analysis, and real-time mapping."
    },
    {
      title: "Smart Waste Segregating System (In Progress)",
      desc: "Automated waste segregation using smart sensors for efficient recycling."
    },
    {
      title: "E-commerce Website",
      desc: "Modern shopping platform with dark mode, chatbot integration, and animations."
    },
    {
      title: "Portfolio Website",
      desc: "Responsive, animated portfolio showcasing skills, projects, and certifications."
    }
  ]

  const certificates = [
    "Python for Data Analysis",
    "Java Fundamentals",
    "NPTEL Elite – User-Centric Computing for HCI",
    "Microsoft Azure - Technical Skills",
    "Cybersecurity – NASSCOM Certified",
    "Hackathon Event – Certified Participation",
    "IoT Workshop – College Event",
    "Power BI Online Workshop – Certified"
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white p-8">
      
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
          K. Ameer Malik Bahad
        </h1>
        <p className="text-lg mt-2 text-fuchsia-300">
          Final-Year CSE (Data Science & AI) Student | Seeking Internship Opportunities
        </p>
        <div className="mt-4 space-x-4">
          <Button
            className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:opacity-90"
            onClick={() => window.open("mailto:ameerofficial2907@gmail.com")}
          >
            Contact Me
          </Button>
          <Button
            className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:opacity-90"
            onClick={() => window.open("https://github.com/ameer2907")}
          >
            GitHub
          </Button>
        </div>
      </motion.div>

      {/* PROFILE */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 max-w-4xl mx-auto"
      >
        <Card className="bg-white/10 backdrop-blur-lg border border-purple-500/40">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-pink-400">Profile</h2>
            <p className="mt-2 text-gray-200">
              As a forward-thinking innovator, I transform ideas into powerful, real-world solutions that blend creativity with precision. I thrive on tackling challenges with an intuitive, results-driven approach, delivering outcomes that leave a lasting impact. Fueled by a relentless drive for excellence, I push boundaries to turn ambitious visions into reality.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-pink-400 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <Badge
              key={i}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full shadow-md"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </motion.section>

      {/* LANGUAGES */}
      <motion.section
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-pink-400 mb-4">Languages</h2>
        <div className="flex gap-3">
          {languages.map((lang, i) => (
            <Badge key={i} className="bg-purple-600 text-white px-3 py-1 rounded-full">
              {lang}
            </Badge>
          ))}
        </div>
      </motion.section>

      {/* EDUCATION */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-pink-400">Education</h2>
        <Card className="bg-white/10 backdrop-blur-lg border border-purple-500/40 mt-4">
          <CardContent className="p-6">
            <p className="text-lg text-blue-400 font-semibold">B.TECH CSE (DS & AI)</p>
            <p className="text-gray-300">
              Dr.M.G.R Educational and Research Institute (2022 – Present) | Maduravoyal, Chennai-600095
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* INTERNSHIP */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-pink-400">Internship</h2>
        <Card className="bg-white/10 backdrop-blur-lg border border-purple-500/40 mt-4">
          <CardContent className="p-6">
            <p className="text-lg text-blue-400 font-semibold">Machine Learning Intern - Thirumoolar IT Solutions</p>
            <p className="text-gray-300 mt-2">
              Applied ML algorithms to real-world datasets, performed preprocessing, and created Power BI dashboards. Learned fundamentals of prompt engineering.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 max-w-5xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-pink-400 mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-white/10 backdrop-blur-lg border border-pink-500/30 hover:shadow-pink-500/50 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-pink-300">{proj.title}</h3>
                  <p className="text-gray-300 mt-2">{proj.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CERTIFICATES */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 max-w-4xl mx-auto mb-12"
      >
        <h2 className="text-2xl font-bold text-pink-400 mb-4">Certificates</h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          {certificates.map((cert, i) => (
            <li key={i}>{cert}</li>
          ))}
        </ul>
      </motion.section>
    </main>
  )
}
