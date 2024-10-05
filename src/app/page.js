

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
      "Ingeniero Informático y Máster en TI con más de 15 años de experiencia en Ingeniería de Soporte, help desk y desarrollo web full stack.",
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
      url: "https://www.facebook.com/andres.veintimilla1",
      text: "Facebook",
    },
    {
      type: "instagram",
      icon: "instagram.png",
      url: "https://www.instagram.com/aveintimillat/",
      text: "Instagram",
    },
    {
      type: "twitter",
      icon: "twitterx.png",
      url: "https://x.com/aveintimillat",
      text: "Twitter",
    },
    {
      type: "linkedin",
      icon: "linkedin.png",
      url: "https://www.linkedin.com/in/andres-veintimilla-764a1565/",
      text: "Linkedin",
    },
  ];

  //---------------------------------------------------------
  // Galería de productos y/servicios con imagen o video
  //---------------------------------------------------------

  const items = [
    {
      type: "image",
      title: "Soporte Técnico y Help Desk",
      image: "/assets/images/services/soporte_tecnico.jpg",
      description: [
        "Atención personalizada para resolver problemas técnicos.",
        "Soporte remoto y en sitio para garantizar el funcionamiento.",
        "Monitoreo proactivo para evitar fallos inesperados.",
        "Consultoría en optimización y gestión de sistemas."
      ],
      highlight: "Soporte 24/7 disponible"
    },
    {
      type: "image",
      title: "Repotenciación de Computadoras",
      image: "/assets/images/services/repotenciacion_computadoras.jpg",
      description: [
        "Mejoramos la velocidad de tu equipo con discos SSD.",
        "Ampliación de memoria RAM para mayor rendimiento.",
        "Actualización de hardware y optimización del sistema.",
        "Recupera la eficiencia de tu equipo sin comprar uno nuevo."
      ],
      highlight: "Promoción especial: 10% de descuento en repotenciación"
    },
    {
      type: "image",
      title: "Soporte a Empresas",
      image: "/assets/images/services/soporte_empresas.png",
      description: [
        "Soluciones a medida para empresas de cualquier tamaño.",
        "Mantenimiento de equipos y redes empresariales.",
        "Protección avanzada con seguridad informática.",
        "Planes de soporte continuos para asegurar operaciones sin interrupciones."
      ],
      highlight: "Soporte mensual desde $99"
    },
    {
      type: "image",
      title: "Outsourcing de TI",
      image: "/assets/images/services/outsourcing.jpg",
      description: [
        "Externalización completa de la gestión de TI.",
        "Ahorro de costos operativos con un equipo especializado.",
        "Adaptación de soluciones tecnológicas a las necesidades del negocio.",
        "Mantenimiento preventivo y correctivo."
      ],
      highlight: "Consultoría gratuita en la primera reunión"
    },
    {
      type: "image",
      title: "Diseño Web con Administración de Hosting y Dominio",
      image: "/assets/images/services/web_design.jpg",
      description: [
        "Diseño web responsivo y optimizado para SEO.",
        "Administración de hosting y dominios personalizados.",
        "Mantenimiento de sitios web para máxima funcionalidad.",
        "Implementación de tiendas en línea y plataformas empresariales."
      ],
      highlight: "Plan desde $30/mes"
    },
    {
      type: "image",
      title: "Instalación y Administración de Redes LAN y WiFi",
      image: "/assets/images/services/redes_wifi.jpg",
      description: [
        "Instalación de redes LAN y WiFi de alta velocidad.",
        "Configuración de equipos de red para máximo rendimiento.",
        "Mantenimiento y monitorización de redes empresariales.",
        "Optimización de la seguridad y velocidad de las redes."
      ],
      highlight: "Descuento del 15% en instalaciones nuevas"
    }
  ];
  

  //---------------------------------------------------------
  //Slider de productos y servicios
  //---------------------------------------------------------

  const slidesData = [
    {
      image: "/assets/images/slides/repotenciacion_ssd_ram.png",
      title: "Repotenciación con SSD y RAM",
    },
    {
      image: "/assets/images/slides/proteccion_electrica.jpg",
      title: "Protección eléctrica con UPS",
    },
    {
      image: "/assets/images/slides/venta_computadoras.jpg",
      title: "Venta de Computadoras",
    },
    {
      image: "/assets/images/slides/anvetcard.jpg",
      title: "Tarjetas de presentación digitales",
    },
    {
      image: "/assets/images/slides/web_design.png",
      title: "Diseño web y hosting",
    },
  ];

  //---------------------------------------------------------
  // Accordion de experiencia laboral y educación
  //---------------------------------------------------------

  const entries = [
    {
      date: "2005",
      title: "Ingeniero Informático",
      description: "Universidad Técnica Particular de Loja",
      details: [
        "Desarrollo de habilidades en programación, redes y sistemas operativos.",
        "Proyectos de investigación en seguridad informática y desarrollo web.",
        "Administración de bases de datos y diseño de software.",
        "Prácticas profesionales en empresas de tecnología.",
        "Prácticas en soporte técnico y help desk."
      ],
      image: "/assets/images/education/utpl.jpeg",
    },
    {
      date: "2022",
      title: "Máster en Tecnologías de la Información",
      description: "IEXE Tec Universidad",
      details: [
        "Especialización en diseño web Full Stack y desarrollo de aplicaciones.",
        "Gestión de proyectos de tecnología y sistemas de información.",
        "Seguridad informática y protección de datos.",
        "Prácticas profesionales en empresas de tecnología."
      ],
      image: "/assets/images/education/iexe.png",
    },
    {
      date: "2008 - Presente",
      title: "Presidente y CEO de Anvetcorp S.A.S.",
      description: "Informática y Tecnología Anvetcorp S.A.S.",
      details: [
        "Liderando el crecimiento de la empresa especializada en soporte técnico y soluciones tecnológicas.",
        "Implementación de proyectos de repotenciación de computadoras y soluciones de infraestructura TI.",
        "Desarrollo de soluciones web personalizadas para empresas y clientes individuales.",
        "Gestión de equipos de soporte técnico y atención al cliente.",
        "Consultoría en tecnologías de la información y soluciones empresariales.",
        "Desarrollo de estrategias de marketing digital y presencia online.",
        "Gestión de alianzas estratégicas y relaciones con proveedores.",
        "Desarrollo de productos y servicios innovadores para el mercado.",
        "Outsourcing de soporte técnico y gestión de infraestructura TI.",
        "Administración de redes LAN y WiFi para empresas.",
        "Diseño web y administración de hosting y dominios.",
        "Venta de computadoras y accesorios informáticos.",
        "Desarrollo de tarjetas de presentación digitales para empresas.",
        "Asesoramiento en protección eléctrica y seguridad informática.",
        "Implementación de soluciones de seguridad informática y protección de datos.",
        "Mantenimiento preventivo y correctivo de equipos informáticos.",
        "Soporte técnico y help desk para empresas y clientes individuales.",


      ],
      image: "/assets/images/education/anvetcorp.png",
    },
    {
      date: "2012 - 2023",
      title: "Director de Outsourcing Soporte Técnico",
      description: "PYMES varias",
      details: [
        "Coordinación de equipos de soporte técnico para clientes empresariales.",
        "Más de 50 empresas atendidas con soluciones a medida.",
        "Mantenimiento de sistemas y redes LAN y WiFi en grandes empresas.",
        "Optimización de infraestructura TI y gestión de servidores.",
        "Soporte técnico remoto y en sitio para empresas de diversos sectores.",
        "Desarrollo de soluciones a medida para empresas con necesidades específicas.",
        "Gestión de contratos de soporte técnico y mantenimiento de equipos.",
        "Implementación de soluciones de seguridad informática y protección de datos.",
        "Consultoría en tecnologías de la información y soluciones empresariales.",
        "Administración de hosting y dominios para empresas y clientes individuales.",
        "Diseño web y desarrollo de aplicaciones personalizadas para empresas.",
        "Desarrollo de estrategias de marketing digital y presencia online.",
        "Instalación de redes LAN y WiFi para empresas.",
      ],
      image: "/assets/images/education/outsourcing.jpg",
    },
    
    
  ];
  

  //---------------------------------------------------------
  // Payment Info
  //---------------------------------------------------------

  const banksData = [
    {
      name: "Bank Pichincha",
      logo: "logo_pichincha.png",
      instructions: "Use estos detalles para realizar el pago. La cuenta está a nombre de Verónica Cano.",
      details: [
        { label: "Número de Cuenta", value: "5261025500" },
        { label: "Tipo de Cuenta", value: "Ahorros" },
        { label: "Identificación", value: "1103535835" },
        { label: "Email", value: "aveintimilla@anvetcorp.com" },
      ],
    },
   
  ];

  return (
    <main>
      {/* Sección Inicio */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn} id="inicio" >
        <ProfileCard profile={profileData} whatsappMessage={whatsappMessage} />
        <ContactButtons contacts={contacts} />
        <SocialMediaIcons socialLinks={socialMediaLinks} />
      </motion.div>

      {/* Educación y Experiencia Laboral */}
      <motion.div id="curriculum" initial="hidden" animate="visible" variants={fadeIn} className="my-spacing-4">
        <h1 className="section-subtitle py-spacing-2">Educación y Experiencia Laboral</h1>
        <EducationExperience entries={entries} />
      </motion.div>

      {/* Productos */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="my-spacing-4"
        id="productos"
      >
        <h1 className="section-subtitle py-spacing-2">Servicios Destacados</h1>
        <GalleryWithModal items={items} />
      </motion.div>

      {/* Servicios */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="my-spacing-4"
      >
        <h1 className="section-subtitle py-spacing-2">Ofertas y Promociones</h1>
        <Slider slides={slidesData} />
      </motion.div>

      

      {/* Video Player */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="my-spacing-4">
        <VideoPlayer
          videoSrc="/assets/videos/servicios_informaticos.mp4"
          title="Servicios Informáticos"
        />
      </motion.div>

      {/* Información de Pago */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="my-spacing-4"
        id="info_pago"
      >
        <h1 className="section-subtitle py-spacing-2">Información de Pago</h1>
        <PaymentInfo banks={banksData} />
      </motion.div>

      {/* QR Code */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="my-spacing-4">
        <QRDisplay qrImage="/assets/images/qrCode.png" title="Código QR" />
      </motion.div>
    </main>
  );
}
