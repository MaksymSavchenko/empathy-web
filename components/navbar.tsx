"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { AppStoreButtons } from "@/components/app-store-buttons"
import { useState } from "react"
import { Sparkles, Newspaper, Shield, Download } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("features")

  const menuItems = [
    { id: "features", label: "Features", icon: Sparkles, href: "#features" },
    { id: "news", label: "News", icon: Newspaper, href: "#news" },
    { id: "privacy", label: "Privacy", icon: Shield, href: "#privacy" },
    { id: "download", label: "Download", icon: Download, action: () => setIsOpen(true) },
  ]

  return (
    <>
      {/* Mobile Top Header with Logo */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center px-6 py-3 rounded-2xl">
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
          </div>
        </div>
      </nav>

      {/* Desktop Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:block hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between px-6 py-3 rounded-2xl bg-card/50 backdrop-blur-lg border border-border">
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

            {/* Navigation Links */}
            <div className="flex items-center gap-6">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#news" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Latest News
              </a>
              <a href="#privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
            </div>

            {/* CTA Button */}
            <Button
              size="sm"
              className="rainbow-border rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              Download Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation - iPhone Style */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
          <div className="flex items-center justify-center pb-safe pt-3 px-2">
            <div className="flex items-center gap-2 px-2 py-2 rounded-[3rem] border border-white/30 shadow-2xl">
                {menuItems.map((item) => {
                  const Icon = item.icon
                  const isActive = activeTab === item.id
                  if (item.href) {
                    return (
                      <a
                        key={item.id}
                        href={item.href}
                        onClick={() => setActiveTab(item.id)}
                        className={`relative flex flex-col items-center gap-1.5 px-4 py-2 rounded-[2rem] transition-all no-underline ${
                          isActive
                            ? "bg-primary/20 shadow-lg shadow-primary/30 border border-primary/40"
                            : "bg-white/10 hover:bg-white/20"
                        }`}
                        style={
                          isActive
                            ? {
                                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                              }
                            : {}
                        }
                      >
                        <Icon
                          className={`w-6 h-6 ${
                            isActive ? "text-primary" : "text-white/70"
                          }`}
                          strokeWidth={2}
                        />
                        <span
                          className={`text-xs font-medium ${
                            isActive ? "text-primary" : "text-white/50"
                          }`}
                        >
                          {item.label}
                        </span>
                      </a>
                    )
                  } else {
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setActiveTab(item.id)
                          if (item.action) {
                            item.action()
                          }
                        }}
                        className={`relative flex flex-col items-center gap-1.5 px-4 py-2 rounded-[2rem] transition-all ${
                          isActive
                            ? "bg-primary/20 shadow-lg shadow-primary/30 border border-primary/40"
                            : "bg-white/10 hover:bg-white/20"
                        }`}
                        style={
                          isActive
                            ? {
                                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                              }
                            : {}
                        }
                      >
                        <Icon
                          className={`w-6 h-6 ${
                            isActive ? "text-primary" : "text-white/70"
                          }`}
                          strokeWidth={2}
                        />
                        <span
                          className={`text-xs font-medium ${
                            isActive ? "text-primary" : "text-white/50"
                          }`}
                        >
                          {item.label}
                        </span>
                      </button>
                    )
                  }
                })}
              </div>
            </div>
        </nav>

      {/* Mobile Download Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Download Empath</DialogTitle>
            <DialogDescription>
              Choose your platform to download the app
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4 py-4">
            <AppStoreButtons />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
