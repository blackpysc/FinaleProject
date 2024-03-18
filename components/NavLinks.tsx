"use client";

import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  Clapperboard,
  Compass,
  Heart,
  Home,
  MessageCircle,
  PlusSquare,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/homepage", icon: Home },
  {
    name: "Search",
    href: "/homepage/search",
    icon: Search,
    hideOnMobile: true,
  },
  {
    name: "Explore",
    href: "/homepage/explore",
    icon: Compass,
  },
  {
    name: "Create",
    href: "/homepage/create",
    icon: PlusSquare,
  },
  {
    name: "Messages",
    href: "/homepage/messages",
    icon: MessageCircle,
  },
  {
    name: "Notifications",
    href: "/homepage/notifications",
    icon: Heart,
    hideOnMobile: true,
  },
  {
    name: "Reels",
    href: "/homepage/reels",
    icon: Clapperboard,
    hideOnMobile: true,
  },
];

function NavLinks() {
  const pathName = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathName === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={buttonVariants({
              variant: isActive ? "secondary" : "ghost",
              className: cn("navLink", { "hidden md:flex": link.hideOnMobile }),
              size: "lg",
            })}
          >
            <LinkIcon className="w-6" />
            <p
              className={`${cn("hidden lg:block", {
                "font-extrabold": isActive,
              })}`}
            >
              {link.name}
            </p>
          </Link>
        );
      })}
    </>
  );
}

export default NavLinks;
