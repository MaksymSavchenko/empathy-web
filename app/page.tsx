import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AppScreenshots } from "@/components/app-screenshots"
import { Features } from "@/components/features"
import { Privacy } from "@/components/privacy"
import { News } from "@/components/news"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen relative">
      {/* Top fade to black */}
      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-40" />

      {/* Bottom fade to black */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-40" />

      <Navbar />
      <Hero />
      <AppScreenshots />
      <Features />
      <Privacy />
      <News />
      <Footer />
    </main>
  )
}
