"use client";

"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ClientThemeToggle } from "./ClientThemeToggle";

const navLinks = [
  { href: "/assessment", label: "Assessment" },
  { href: "/guide", label: "Labor Code Guide" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQs" },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="py-4 px-6 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary shrink-0">
          PH Labor Code
        </Link>
        <nav className="hidden lg:flex gap-4">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              <Button variant="ghost">{link.label}</Button>
            </Link>
          ))}
        </nav>
        <div className="lg:hidden">
          <ClientThemeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link href={link.href} key={link.href}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {link.label}
                    </Button>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden lg:flex">
          <ClientThemeToggle />
        </div>
      </div>
    </header>
  );
}
