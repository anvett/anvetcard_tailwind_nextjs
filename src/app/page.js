"use client";

import React from "react";
import ProfileCard from "../components/profile/ProfileCard/ProfileCard.jsx";
import ContactIcons from "@/components/profile/ContactIcons/ContactIcons.jsx";
import ContactButtons from "@/components/profile/ContactButtons/ContactButtons.jsx";
import SocialMediaIcons from "@/components/profile/SocialMediaIcons/SocialMediaIcons.jsx";
import SocialMediaButtons from "@/components/profile/SocialMediaButtons/SocialMediaButtons.jsx";
import GalleryWithModal from "@/components/cardContent/GalleryWithModal/GalleryWithModal.jsx";
import Slider from "@/components/cardContent/Slider/Slider.jsx";
import EducationExperience from "@/components/cardContent/EducationExperience/EducationExperience.jsx";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer.jsx";
import QRDisplay from "@/components/cardContent/QRDisplay/QRDispaly.jsx";
import PaymentInfo from "@/components/cardContent/PaymentInfo/PaymentInfo.jsx";

export default function Home() {
  const profileData = {
    name: "Eva Doe",
    title: "Gerente General Coac SUP Ltda",
    image: "/assets/images/profile/profile1.jpg",
    description:
      "Ingeniera Comercial con más de 10 años de experiencia en el sector financiero. Me apasiona el trabajo en equipo y la innovación en el sector de las cooperativas de ahorro y crédito. ",
  };

  //---------------------------------------------------------
  // Datos de contacto
  //---------------------------------------------------------

  //---------------------------------------------------------
  //Iconos de contacto

  const contacts = [
    { type: "phone", icon: "/assets/icons/instagram.png", action: "tel:+1234567890" },
    { type: "email", icon: "/assets/icons/email.png", action: "mailto:example@example.com" },
    { type: "whatsapp", icon: "/assets/icons/whatsapp.png", action: "https://wa.me/1234567890" },
    {
      type: "location",
      icon: "/assets/icons/location.png",
      address: "123 Fake St, Fake City",
      hours: "9am - 5pm",
    },
  ];

  // ---------------------------------------------------------
  // Botones de contacto

  // const contacts = [
  //   { type: "phone", icon: "/assets/icons/phone.png", action: "tel:+1234567890", text: "Llámame" },
  //   {
  //     type: "email",
  //     icon: "/assets/icons/email.png",
  //     action: "mailto:info@example.com",
  //     text: "Email",
  //   },
  //   {
  //     type: "whatsapp",
  //     icon: "/assets/icons/whatsapp.png",
  //     action: "https://wa.me/1234567890",
  //     text: "WhatsApp",
  //   },
  //   {
  //     type: "location",
  //     icon: "/assets/icons/location.png",
  //     action: "https://maps.google.com/?q=Your Location",
  //     text: "Ubicación",
  //   },
  // ];

  //---------------------------------------------------------
  // Social media
  //---------------------------------------------------------

  //---------------------------------------------------------
  //Iconos de redes sociales

  // const socialMediaLinks = [
  //   { type: 'facebook', icon: 'facebook.png', url: 'https://www.facebook.com/yourpage' },
  //   { type: 'instagram', icon: 'instagram.png', url: 'https://www.instagram.com/yourprofile' },
  //   { type: 'tiktok', icon: 'whatsapp.png', url: 'https://www.tiktok.com/@yourusername' },
  //   { type: 'twitter', icon: 'twitter.png', url: 'https://twitter.com/yourusername' },
  //   { type: 'youtube', icon: 'youtube.png', url: 'https://www.youtube.com/c/YourChannelName' }
  // ];

  // ---------------------------------------------------------
  // Botones de redes sociales

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
      icon: "twitter.png",
      url: "https://twitter.com/yourusername",
      text: "Twitter",
    },
    {
      type: "youtube",
      icon: "youtube.png",
      url: "https://www.youtube.com/c/YourChannelName",
      text: "YouTube",
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
    { image: "/assets/images/slides/image1.png", title: "Baneficios Increíbles" },
    { image: "/assets/images/slides/image2.jpg", title: "Préstamos inmediatos" },
    { image: "/assets/images/slides/image3.jpg", title: "Valores importantes y destacados" },
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
    <main className="">
      <div id="inicio">
        <ProfileCard profile={profileData} />
        <ContactIcons contacts={contacts} />
        <SocialMediaButtons socialLinks={socialMediaLinks} />
      </div>

      <div id="info_pago" className="my-spacing-4">
        <h1 className="section-subtitle py-spacing-2">Información de Pago</h1>
        <PaymentInfo banks={banksData} />
      </div>
      <div id="productos" className="my-spacing-4">
        <h1 className="section-subtitle py-spacing-2">Productos Destacados</h1>
        <GalleryWithModal items={items} />
      </div>
      <div id="servicios" className="my-spacing-4">
        <h1 className="section-subtitle py-spacing-2">Servicios</h1>
        <Slider slides={slidesData} />
      </div>
      <div id="curriculum" className="my-spacing-4">
        <h1 className="section-subtitle py-spacing-2">Educación y Experiencia Laboral</h1>
        <EducationExperience entries={entries} />
      </div>
      <VideoPlayer
        videoSrc="/assets/videos/servicios_financieros.mp4"
        title="Introducción al Producto"
      />
      <QRDisplay qrImage="/assets/images/qrcode.png" title="Código QR" />
    </main>
  );
}
