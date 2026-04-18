"use client"

import Image from "next/image"
import { AppStoreButtons } from "./app-store-buttons"

export function Footer() {
  return (
    <footer id="privacy" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto text-pretty">
            Download Empath and take the first step towards better emotional health. Free to try, private by design.
          </p>
          <AppStoreButtons />
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Empath logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-lg font-semibold text-foreground">Empath</span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#news" className="hover:text-foreground transition-colors">Latest News</a>
              <a href="#privacy" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Support</a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © 2026 Empath. All rights reserved.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground text-center mt-8 max-w-2xl mx-auto">
          Empath is a wellness and self-reflection app. It does not provide diagnosis or treatment and is not a substitute for professional mental health care.
        </p>
      </div>
    </footer>
  )
}
