export const siteInfo = {
  name: "Thamara Foreign Employment Agency",
  legalName: "Thamara Foreign Employment Agency (Pvt) Ltd.",
  tagline: "Your Prosperity is Our Responsibility.",
  intro:
    "Thamara Foreign Employment Agency (Pvt) Ltd is a professional foreign employment agency dedicated to connecting Sri Lankan job seekers with reliable and suitable employment opportunities overseas.",
  introSecondary:
    "We provide support throughout the recruitment process, including job placement, documentation, interview preparation, and pre-departure guidance. Our commitment is to provide a trusted and professional service while helping our candidates achieve their career goals abroad.",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Countries", href: "#countries" },
  { label: "Contact", href: "#contact" },
];

export const trustBadges = [
  { value: "5", label: "Destination Countries" },
  { value: "4", label: "Core Services" },
  { value: "100%", label: "Documentation Support" },
  { value: "1:1", label: "Candidate Guidance" },
];

export const about = {
  vision: {
    label: "Vision",
    body: "To be the premier catalyst in empowering Sri Lankan professionals with global recognition, ensuring dignity and sustainable prosperity through unwavering trust and excellence.",
  },
  mission: {
    label: "Mission",
    body: "To empower Sri Lankan workers by providing secure and dignified international career opportunities through a transparent and ethical recruitment process, dedicated to uplifting their lives.",
  },
};

export const directorMessage = {
  quote:
    "With years of experience in the foreign employment industry, our commitment is to provide Sri Lankan job seekers with reliable employment opportunities and professional guidance. With trust, professionalism and a friendly approach, we aim to support every candidate in moving confidently towards a better future.",
  name: "Managing Director",
  role: "Thamara Foreign Employment Agency (Pvt) Ltd.",
};

export const countries = [
  { name: "Kuwait", code: "KW", image: "/images/country-kuwait.jpg" },
  { name: "Dubai (UAE)", code: "AE", image: "/images/country-dubai.jpg" },
  { name: "Oman", code: "OM", image: "/images/country-oman.jpg" },
  { name: "Qatar", code: "QA", image: "/images/country-qatar.jpg" },
  { name: "Bahrain", code: "BH", image: "/images/country-bahrain.jpg" },
];

export const services = [
  {
    title: "Document Assistance",
    description:
      "End-to-end help preparing and verifying the paperwork required for overseas employment.",
  },
  {
    title: "Interview Preparation",
    description:
      "Guidance to help candidates present themselves confidently to overseas employers.",
  },
  {
    title: "Pre-Departure Guidance",
    description:
      "Briefings on travel, workplace expectations, and life abroad before candidates depart.",
  },
  {
    title: "Foreign Employment Support",
    description:
      "Ongoing support throughout the placement process, from job matching to deployment.",
  },
];

export const whyChooseUs = [
  "Experienced & Professional",
  "Trusted Job Opportunities",
  "Complete Guidance & Support",
  "Documentation Assistance",
  "Friendly & Reliable Service",
];

export const gallery = [
  { label: "Our Office", image: "/images/gallery-office.jpg" },
  { label: "Opening Ceremony", image: "/images/gallery-ceremony.jpg" },
  { label: "Candidate Briefing", image: "/images/gallery-meeting.jpg" },
  { label: "Our Team", image: "/images/gallery-team.jpg" },
];

export const applyFormFields = [
  { name: "name", label: "Name", type: "text" },
  { name: "contactNumber", label: "Contact Number", type: "tel" },
  { name: "job", label: "Job", type: "text" },
  { name: "position", label: "Position", type: "text" },
  { name: "preferredCountry", label: "Preferred Country of Employment", type: "text" },
  { name: "qualifications", label: "Qualifications", type: "textarea" },
] as const;

export const contact = {
  address: ["No. 37, 1/2, Rajapihilla Road,", "Kurunegala."],
  phone: "0377 119 330",
  phoneLabel: "Hotline",
  whatsapp: "071 5505105",
  email: "thamaraforeign@gmail.com",
  website: "www.thamaraforeign.lk",
};
