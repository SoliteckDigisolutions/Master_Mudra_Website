import {
  ShieldCheck,
  Zap,
  BadgeCheck,
  Wallet,
  CreditCard,
  Smartphone,
  Users,
  Headphones,
  CircleStar,
  MailCheck,
  MapPin,
  PhoneForwarded,
} from "lucide-react";
import { CardDataType} from "./type";


export const CardData : CardDataType[] = [
  {
    icon: ShieldCheck,
    title: "Secure Transactions",
    content:
      "Advanced security protocols and encryption ensure every transaction is protected and reliable.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Services",
    content:
      "Experience instant payments, money transfers, and bill payments powered by high-performance infrastructure.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Guaranteed",
    content:
      "Our dedicated technical team ensures seamless operations and uninterrupted service delivery.",
  },
  {
    icon: Wallet,
    title: "Digital Wallet Solutions",
    content:
      "Manage payments, transfers, and balances conveniently through a single platform.",
  },
  {
    icon: CreditCard,
    title: "Multiple Payment Options",
    content:
      "Support for UPI, cards, banking services, and digital payment methods to serve every customer.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    content:
      "Access powerful financial services anytime, anywhere with a responsive and user-friendly platform.",
  },
  {
    icon: Users,
    title: "Business Growth Support",
    content:
      "Empowering retailers and entrepreneurs with digital tools to increase revenue and customer engagement.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    content:
      "Our expert support team is always available to assist you whenever you need help.",
  },
];



export const CardDataContact:CardDataType[] = [
  {
    title: "Email",
    content: "mastermudrapaymentsolution@gmail.com",
    icon: MailCheck,
  },
  {
    title: "Address",
    content:
      `CS NO 4009/B/138, PLOT NO 161, BEHIND KRISHNA COLOUR LAB
PARAS CHAMBERS
OPP. M. P. SHAH SCIENCE COLLEGE
Surendranagar
State: Gujarat 363002`,
    icon: MapPin,
  },
  {
    title: "Mobile No",
    content: "9998811611",
    icon: PhoneForwarded,
  },
];