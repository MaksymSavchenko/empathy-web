import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AppScreenshots } from "@/components/app-screenshots"
import { Features } from "@/components/features"
import { News } from "@/components/news"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AppScreenshots />
      <Features />
      <News />
      <Footer />
    </main>
  )
}
