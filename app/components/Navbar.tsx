"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LogIn, Menu, X } from "lucide-react";
import axios, { AxiosResponse } from "axios";

const navLinks = [
   { id: "home", label: "Home", href: "/#home", type: "anchor" },
  { id: "about", label: "About", href: "/#about", type: "anchor" },
   { id: "features", label: "Features", href: "/#features", type: "anchor" },
  { id: "services", label: "Services", href: "/#services", type: "anchor" },
 
  { id: "contact", label: "Contact", href: "/#contact", type: "anchor" },
  { id: "terms", label: "Terms & Conditions", href: "/term", type: "route" },
  { id: "privacy", label: "Privacy Policy", href: "/policy", type: "route" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState("about");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
    const [redirectURL, setRedirectURL] = useState("");
 const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const KEY = process.env.NEXT_PUBLIC_AUTH_KEY;

  interface ApiRespose {
  responseCode: number;
  responseMessage: string;
  data: any;
  responseData: string;
  signalR: any;
}


   useEffect(() => {
    axios
      .get(`${BASE_URL}api/WLUser/Auth/WhitelableUser?Authkey=${KEY}`)
      .then((response: AxiosResponse<ApiRespose>) => {
        const parsedData = JSON.parse(response.data.responseData);
        const brandingData = parsedData[0];

        brandingData.LoginImg =
          brandingData.LoginImg === "NULL" ? "" : brandingData.LoginImg;

        const fixedUrl = brandingData.URL.replace(/\\\//g, "/").replace(
          /^http:\\\\/,
          "http://"
        );

        const encoded = encodeURIComponent(JSON.stringify(brandingData));
        const targetURL = `${fixedUrl}?brandingData=${encoded}`;

        setRedirectURL(targetURL);
      })
      .catch((err) => console.log(err));
  }, [BASE_URL, KEY]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    if (pathname === "/") {
      const sections = navLinks
        .filter((link) => link.type === "anchor")
        .map((link) => document.getElementById(link.id))
        .filter(Boolean) as HTMLElement[];

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(entry.target.id);
            }
          });
        },
        {
          threshold: 0.5,
        }
      );

      sections.forEach((section) => observer.observe(section));

      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", handleScroll);
      };
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/term") {
      setActive("terms");
    } else if (pathname === "/policy") {
      setActive("privacy");
    } else if (pathname === "/") {
      setActive("about");
    }
  }, [pathname]);

  const handleNavClick = (link: { id: string; href: string; type: string }) => {
    setMobileMenu(false);

    if (link.type === "anchor") {
      if (pathname === "/") {
        const section = document.getElementById(link.id);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          window.history.pushState({}, "", link.href);
          return;
        }
      }

      router.push(link.href);
      return;
    }

    router.push(link.href);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-md"
          : "bg-white"
      }`}
    >
      <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-2 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#home" className="block">
            <Image
              src="/assets/h-logo.svg"
              alt="Mudra Master"
              width={180}
              height={40}
              priority
              className="h-auto w-[140px] sm:w-[180px]"
            />
          </a>
        </div>
        
        

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link)}
              className={`relative text-sm font-medium transition-colors ${
                active === link.id
                  ? "text-green-600"
                  : "text-gray-600  hover:text-green-600"
              }`}
            >
              {link.label}

              {active === link.id && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-green-600" />
              )}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1 items-center">
         
          <button  onClick={() => window.location.assign(redirectURL)} className="hidden lg:flex lg:gap-2 rounded-xl border bg-green-500 px-5 py-2 font-medium text-white transition-all hover:bg-green-600 hover:text-white md:block">
            <LogIn className="text-white font-semibold" /> <p>Login</p>
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="rounded-lg border p-2 md:hidden"
            aria-label="Toggle Menu"
          >
            {mobileMenu ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileMenu
            ? "max-h-96 border-t"
            : "max-h-0"
        }`}
      >
        <nav className="bg-white px-4 py-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className={`rounded-lg px-3 py-2 text-left transition ${
                  active === link.id
                    ? "bg-green-50 font-semibold text-green-600"
                    : "text-gray-600"
                }`}
              >
                {link.label}
              </button>
            ))}

            <button className="mt-2 rounded-xl bg-green-400 py-3 font-medium text-white">
              Login
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}