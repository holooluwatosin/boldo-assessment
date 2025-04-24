import Link from "next/link"
import Image from "next/image"

// Define interface for a footer link
interface FooterLink {
  text: string;
  href: string;
  badge?: string; // Badge is optional
}

// Define link structure with potential badges
const footerLinkSections: { [key: string]: FooterLink[] } = {
  landings: [
    { text: "Home", href: "#" },
    { text: "Products", href: "#" },
    { text: "Services", href: "#" },
  ],
  company: [
    { text: "Home", href: "#" },
    { text: "Careers", href: "#", badge: "Hiring!" },
    { text: "Services", href: "#" },
  ],
  resources: [
    { text: "Blog", href: "#" },
    { text: "Products", href: "#" },
    { text: "Services", href: "#" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white pt-[100px] pb-[100px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Logo and Description Column */}
          <div className="md:col-span-2">
            <Image
              src="/images/boldo-logo-dark.png" // Use dark logo for white background
              alt="Boldo Logo"
              width={118}
              height={32}
              className="h-8 w-auto"
            />
            <p className="text-base text-sonic-silver leading-7 max-w-xs mt-10 mb-16">
              Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.
            </p>
            <p className="text-sm leading-7 text-sonic-silver">All rights reserved.</p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinkSections).map(([title, links]) => (
            <div key={title} className="space-y-8">
              <h3 className="text-[20px] leading-8 font-bold text-black capitalize">{title}</h3>
              <ul className="space-y-6">
                {links.map((link: FooterLink) => (
                  <li key={link.text} className="flex items-center">
                    <Link href={link.href} className="text-[20px] leading-8 text-sonic-silver">
                      {link.text}
                    </Link>
                    {link.badge && (
                      <span className="ml-3 px-3 py-1 bg-medium-aquamarine text-oxford-blue text-xs font-bold rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}