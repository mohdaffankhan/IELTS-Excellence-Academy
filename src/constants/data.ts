import type {
  Feature,
  Testimonial,
  NavLink,
  ContactInfo,
  HeroContent,
  InstituteInfo,
} from "../types";

// Institute Information
export const instituteInfo: InstituteInfo = {
  name: "IELTS Excellence Academy",
  tagline: "Your Gateway to Global Success",
  logo: "/logo.svg", // We'll create this later
  description:
    "Empowering students worldwide to achieve their IELTS goals with expert guidance, innovative technology, and personalized learning experiences.",
};

// Navigation Links
export const navLinks: NavLink[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "courses", label: "Courses", href: "#courses" },
  { id: "about", label: "About", href: "#about" },
  { id: "contact", label: "Contact", href: "#contact" },
];

// Hero Section Content
export const heroContent: HeroContent = {
  headline: "Achieve Your IELTS Band Score Goals",
  subtext:
    "Join thousands of successful students who have improved their English proficiency and achieved their dream IELTS scores with our proven methodology and expert instructors.",
  ctaText: "Start Your Journey",
  ctaHref: "#courses",
  bannerImage: "/hero-banner.jpg", // We'll use a placeholder
};

// Feature Cards
export const features: Feature[] = [
  {
    id: "speaking",
    title: "Speaking Practice",
    description:
      "Interactive speaking sessions with AI-powered feedback and real-time pronunciation analysis.",
    icon: "🎤",
    benefits: [
      "Real-time pronunciation feedback",
      "Interactive conversation practice",
      "Confidence building exercises",
      "Accent reduction techniques",
    ],
  },
  {
    id: "mock-tests",
    title: "Mock Tests",
    description:
      "Full-length practice exams that simulate the actual IELTS test environment and conditions.",
    icon: "📝",
    benefits: [
      "Authentic test experience",
      "Detailed performance analysis",
      "Time management practice",
      "Progress tracking",
    ],
  },
  {
    id: "ai-scoring",
    title: "AI Band Score",
    description:
      "Get instant, accurate band score predictions using advanced AI technology trained on thousands of IELTS tests.",
    icon: "🤖",
    benefits: [
      "Instant scoring results",
      "Detailed feedback reports",
      "Weakness identification",
      "Improvement suggestions",
    ],
  },
  {
    id: "feedback",
    title: "Personalized Feedback",
    description:
      "Receive detailed, personalized feedback from certified IELTS instructors to accelerate your learning.",
    icon: "💬",
    benefits: [
      "Expert instructor feedback",
      "Personalized study plans",
      "Regular progress reviews",
      "One-on-one consultations",
    ],
  },
];

// Student Testimonials
export const testimonials: Testimonial[] = [
  {
    id: "sarah",
    name: "Sarah Johnson",
    photo: "/testimonials/sarah.jpg",
    rating: 5,
    text: "The personalized feedback and mock tests helped me improve from Band 6 to Band 8. The instructors are incredibly supportive and knowledgeable.",
    achievement: "Achieved Band 8.0",
  },
  {
    id: "ahmed",
    name: "Ahmed Hassan",
    photo: "/testimonials/ahmed.jpg",
    rating: 5,
    text: "The AI scoring system was incredibly accurate and helped me identify my weak areas quickly. I went from Band 5.5 to Band 7.5 in just 3 months!",
    achievement: "Achieved Band 7.5",
  },
  {
    id: "maria",
    name: "Maria Rodriguez",
    photo: "/testimonials/maria.jpg",
    rating: 5,
    text: "The speaking practice sessions boosted my confidence tremendously. The real-time feedback helped me improve my pronunciation and fluency significantly.",
    achievement: "Achieved Band 8.5",
  },
];

// Contact Information
export const contactInfo: ContactInfo = {
  email: "info@ielts-excellence.com",
  phone: "+1 (555) 123-4567",
  address: "123 Education Street, Learning City, LC 12345",
  socialMedia: {
    facebook: "https://facebook.com/ielts-excellence",
    twitter: "https://twitter.com/ielts-excellence",
    linkedin: "https://linkedin.com/company/ielts-excellence",
    instagram: "https://instagram.com/ielts-excellence",
  },
};

// Footer Links
export const footerLinks = {
  quickLinks: [
    { label: "About Us", href: "#about" },
    { label: "Our Courses", href: "#courses" },
    { label: "Success Stories", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    { label: "IELTS Tips", href: "#tips" },
    { label: "Study Materials", href: "#materials" },
    { label: "Practice Tests", href: "#tests" },
    { label: "FAQ", href: "#faq" },
  ],
  support: [
    { label: "Help Center", href: "#help" },
    { label: "Live Chat", href: "#chat" },
    { label: "Email Support", href: "#email" },
    { label: "Phone Support", href: "#phone" },
  ],
};
