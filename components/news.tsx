"use client"

import { ChevronRight } from "lucide-react"

interface NewsItem {
  category: string
  categoryColor: string
  title: string
  description: string
  href: string
}

const newsItems: NewsItem[] = [
  {
    category: "Clinical Trial",
    categoryColor: "text-green-400",
    title: "AI Chatbot Cuts Depression & Anxiety",
    description: "Therabot trial shows 51% reduction in depression symptoms and 31% in anxiety after 8 weeks of use.",
    href: "https://www.apa.org/monitor/2026/01-02/trends-personalized-mental-health-care"
  },
  {
    category: "Survey 2026",
    categoryColor: "text-blue-400",
    title: "Mental Health Language Goes Mainstream",
    description: "51% of Americans now use mental health terms daily; 23% turn to AI chatbots for emotional support.",
    href: "https://www.cincinnati.com/press-release/story/41082/study-finds-51-use-mental-health-language-23-turn-to-ai-for-emotional-support/"
  },
  {
    category: "Ethics Alert",
    categoryColor: "text-red-400",
    title: "AI \"Therapy\" Chatbots Risky",
    description: "Brown University study identifies 15 risk categories including \"deceptive empathy\" and poor crisis handling.",
    href: "https://www.sciencedaily.com/releases/2026/03/260302030642.htm"
  },
  {
    category: "Trust Study",
    categoryColor: "text-yellow-400",
    title: "People Distrust AI Mental Health Bots",
    description: "Study finds participants trust \"human\" versions more even when responses are identical.",
    href: "https://news.utdallas.edu/health-medicine/study-chatbots-in-mental-health-study-2026/"
  },
  {
    category: "Workforce",
    categoryColor: "text-orange-400",
    title: "AI Anxiety in Mental Health Workforce",
    description: "Clinicians fear job displacement as AI tools are adopted for notes, scheduling, and triage.",
    href: "https://www.npr.org/2026/04/07/nx-s1-5771707/mental-health-care-workforce-artificial-intelligence-ai"
  },
  {
    category: "Conference",
    categoryColor: "text-purple-400",
    title: "Digital Mental Health Conferences 2026",
    description: "Major conferences focus on real-world AI implementation, ethics, and digital biomarkers from wearables.",
    href: "https://www.digitalmentalhealth2026.org"
  }
]

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
    >
      <p className={`text-xs font-bold uppercase mb-3 ${item.categoryColor}`}>{item.category}</p>
      <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
      <ChevronRight className="mt-4 text-muted-foreground group-hover:text-primary transition-colors" />
    </a>
  )
}

export function News() {
  return (
    <section id="news" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-10">
          <p className="text-primary font-bold text-xs sm:text-sm uppercase mb-2 tracking-widest">Mental Health & AI</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Latest News & Research</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {newsItems.map((item, index) => (
            <NewsCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
