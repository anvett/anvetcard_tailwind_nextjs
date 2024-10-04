

"use client";

import React from "react";
import { motion } from "framer-motion";
import ProfileCard from "../components/profile/ProfileCard/ProfileCard.jsx";
import ContactButtons from "@/components/profile/ContactButtons/ContactButtons.jsx";
import SocialMediaIcons from "@/components/profile/SocialMediaIcons/SocialMediaIcons.jsx";
import GalleryWithModal from "@/components/cardContent/GalleryWithModal/GalleryWithModal.jsx";
import Slider from "@/components/cardContent/Slider/Slider.jsx";
import EducationExperience from "@/components/cardContent/EducationExperience/EducationExperience.jsx";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer.jsx";
import QRDisplay from "@/components/cardContent/QRDisplay/QRDispaly.jsx";
import PaymentInfo from "@/components/cardContent/PaymentInfo/PaymentInfo.jsx";

// Animaciones básicas
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};

const slideInLeft = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};

const slideInRight = {
  hidden: { x: "100vw", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};


export default function Home() {
  //---------------------------------------------------------
  // Perfil
  //---------------------------------------------------------

  const profileData = {
    name: "Andrés Veintimilla",
    title: "Presidente y CEO de Anvetcorp S.A.S.",
    image: "/assets/images/profile/profile.jpeg",
    description:
      "Soy Ingeniero Informático con más de 15 años de experiencia en soporte técnico, help desk y desarrollo web full stack.",
    phone: "+593992543979",
  };

  const whatsappMessage = "Hola Andrés, me gustaría conectar contigo.";

  //---------------------------------------------------------
  // Datos de contacto
  //---------------------------------------------------------

  //---------------------------------------------------------
  //Iconos de contacto

  const contacts = [
    {
      type: "location",
      icon: "/assets/icons/location.png",
      text: "Dirección",
      address: "Juan Montalvo 53 y Abdón Calderón, Urb. Ontaneda, Conocoto, Quito, Ecuador",
      hours: "Lunes a Viernes, 9:00 AM - 6:00 PM",
      googleMapsLink:
        "https://www.google.com/maps/place/ANVETCORP+Inform%C3%A1tica+y+Tecnolog%C3%ADa/@-0.2987752,-78.4889591,18z/data=!4m20!1m13!4m12!1m4!2m2!1d-78.4802151!2d-0.3126909!4e1!1m6!1m2!1s0x91d5a2b0678255c3:0xcba1b16c406a929d!2sanvetcorp!2m2!1d-78.4897359!2d-0.2979049!3m5!1s0x91d5a2b0678255c3:0xcba1b16c406a929d!8m2!3d-0.2979049!4d-78.4897359!16s%2Fg%2F11bwfmfm_t?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      type: "phone",
      icon: "/assets/icons/call.png",
      action: "tel:+593992543979",
      text: "Llamar",
    },
    {
      type: "email",
      icon: "/assets/icons/email.png",
      action: "mailto:aveintimilla@anvetcorp.com",
      text: "email",
    },
    {
      type: "whatsapp",
      icon: "/assets/icons/whatsapp.png",
      action: "https://wa.me/+593992543979",
      text: "WhatsApp",
    },
  ];

  //---------------------------------------------------------
  // Social media
  //---------------------------------------------------------

  //---------------------------------------------------------
  //Iconos y botones de redes sociales

  const socialMediaLinks = [
    {
      type: "facebook",
      icon: "facebook.png",
      url: "https://www.facebook.com/yourpage",
      text: "Facebook",
    },
    {
      type: "instagram",
      icon: "instagram.png",
      url: "https://www.instagram.com/yourprofile",
      text: "Instagram",
    },
    {
      type: "twitter",
      icon: "twitterx.png",
      url: "https://twitter.com/yourusername",
      text: "Twitter",
    },
    {
      type: "linkedin",
      icon: "linkedin.png",
      url: "https://www.youtube.com/c/YourChannelName",
      text: "Linkedin",
    },
  ];

  //---------------------------------------------------------
  // Galería de productos y/servicios con imagen o video
  //---------------------------------------------------------

  const items = [
    {
      type: "image",
      title: "Servicio Premium",
      image: "/assets/images/items/work_team.jpg",
      description: [
        "Acceso ilimitado a todos los recursos.",
        "Soporte técnico 24/7.",
        "Integración con sistemas existentes.",
        "Reportes y análisis detallados.",
      ],
      highlight: "Solo $299 al año",
    },
    {
      type: "video",
      title: "Introducción al Producto",
      image: "/assets/videos/servicios_financieros.mp4",
      thumbnail: "/assets/images/items/work_team.jpg",
      description: [
        "Diseño innovador y moderno.",
        "Fácil de usar e instalar.",
        "Compatible con múltiples plataformas.",
        "Eficiente y reducido consumo de energía.",
      ],
      highlight: "Consulta precios y promociones",
    },
  ];

  //---------------------------------------------------------
  //Slider de productos y servicios
  //---------------------------------------------------------

  const slidesData = [
    {
      image: "/assets/images/slides/image1.png",
      title: "Baneficios Increíbles",
    },
    {
      image: "/assets/images/slides/image2.jpg",
      title: "Préstamos inmediatos",
    },
    {
      image: "/assets/images/slides/image3.jpg",
      title: "Valores importantes y destacados",
    },
  ];

  //---------------------------------------------------------
  // Accordion de experiencia laboral y educación
  //---------------------------------------------------------

  const entries = [
    {
      date: "2024 - Present",
      title: "Lead Software Developer",
      description: "Tech Innovations Inc.",
      details: [
        "Leading a team of software developers",
        "Focusing on cutting-edge solutions for fintech",
        "Implemented agile methodologies across departments",
      ],
      image: "/assets/images/education/education2.png",
    },
    {
      date: "2022 - 2024",
      title: "Master of Science in Computer Science",
      description: "University of Advanced Technology",
      details: [
        "Specialized in artificial intelligence",
        "Completed thesis on the implications of AI in predictive analytics",
        "Graduated with distinction",
      ],
    },
    {
      date: "2020 - 2022",
      title: "Senior Software Engineer",
      description: "Global Tech Solutions",
      details: [
        "Developed and maintained high-load distributed systems",
        "Led a small team in a successful project delivery",
        "Enhanced system security by 30%",
      ],
    },
    {
      date: "2018 - 2020",
      title: "Bachelor of Science in Software Engineering",
      description: "Tech University",
      details: [
        "Concentrated on full stack development",
        "Developed a collaborative coding platform as a capstone project",
        "Graduated summa cum laude",
      ],
    },
    {
      date: "2016 - 2018",
      title: "Software Developer",
      description: "Innovative Solutions Ltd.",
      details: [
        "Worked on multiple web and mobile applications",
        "Focused on user-centered design",
        "Received Employee of the Year Award in 2017",
      ],
    },
    {
      date: "2014 - 2016",
      title: "Associate of Science in Computer Programming",
      description: "City College",
      details: [
        "Focused on learning multiple programming languages",
        "Participated in internships with tech startups",
        "Made Dean's List each semester",
      ],
      image: "/assets/images/education/education1.jpg",
    },
    {
      date: "2012 - 2014",
      title: "Junior Software Developer",
      description: "Startup Tech Inc.",
      details: [
        "Helped to develop and launch the company's first product",
        "Learned and applied skills in JavaScript and Python",
        "Contributed to improvements in codebase efficiency",
      ],
    },
  ];

  //---------------------------------------------------------
  // Payment Info
  //---------------------------------------------------------

  const banksData = [
    {
      name: "Bank A",
      logo: "logo_pichincha.png",
      instructions: "Use estos detalles para realizar el pago.",
      details: [
        { label: "Número de Cuenta", value: "1234567890" },
        { label: "Tipo de Cuenta", value: "Ahorros" },
        { label: "Identificación", value: "ABCD123456" },
        { label: "Email", value: "contact@banka.com" },
      ],
    },
    {
      name: "Bank B",
      logo: "amex.png",
      instructions: "Use estos detalles para realizar el pago.",
      details: [
        { label: "Número de Cuenta", value: "0987654321" },
        { label: "Tipo de Cuenta", value: "Corriente" },
        { label: "Identificación", value: "XYZ987654" },
        { label: "Email", value: "info@bankb.com" },
      ],
    },
  ];

  return (
    <main>
      {/* Sección Inicio */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <ProfileCard profile={profileData} whatsappMessage={whatsappMessage} />
        <ContactButtons contacts={contacts} />
        <SocialMediaIcons socialLinks={socialMediaLinks} />
      </motion.div>

      {/* Información de Pago */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="my-spacing-4"
      >
        <h1 className="section-subtitle py-spacing-2">Información de Pago</h1>
        <PaymentInfo banks={banksData} />
      </motion.div>

      {/* Productos */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="my-spacing-4"
      >
        <h1 className="section-subtitle py-spacing-2">Productos Destacados</h1>
        <GalleryWithModal items={items} />
      </motion.div>

      {/* Servicios */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="my-spacing-4"
      >
        <h1 className="section-subtitle py-spacing-2">Servicios</h1>
        <Slider slides={slidesData} />
      </motion.div>

      {/* Educación y Experiencia Laboral */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="my-spacing-4">
        <h1 className="section-subtitle py-spacing-2">Educación y Experiencia Laboral</h1>
        <EducationExperience entries={entries} />
      </motion.div>

      {/* Video Player */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="my-spacing-4">
        <VideoPlayer
          videoSrc="/assets/videos/servicios_financieros.mp4"
          title="Introducción al Producto"
        />
      </motion.div>

      {/* QR Code */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="my-spacing-4">
        <QRDisplay qrImage="/assets/images/qrCode.png" title="Código QR" />
      </motion.div>
    </main>
  );
}
