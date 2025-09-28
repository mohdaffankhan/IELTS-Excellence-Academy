// Type definitions for our IELTS Institute application

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  photo: string;
  rating: number;
  text: string;
  achievement: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export interface HeroContent {
  headline: string;
  subtext: string;
  ctaText: string;
  ctaHref: string;
  bannerImage: string;
}

export interface InstituteInfo {
  name: string;
  tagline: string;
  logo: string;
  description: string;
}
