import Image from "next/image"

const screenshots = [
  {
    src: "/screenshots/home.png",
    alt: "Home - Daily Check-in",
    label: "Home"
  },
  {
    src: "/screenshots/companion.png",
    alt: "AI Companion",
    label: "Companion"
  },
  {
    src: "/screenshots/library.png",
    alt: "Library - Wellness Tools",
    label: "Library"
  },
  {
    src: "/screenshots/tools.png",
    alt: "All Tools",
    label: "Tools"
  },
  {
    src: "/screenshots/settings.png",
    alt: "Settings",
    label: "Settings"
  },
]

export function AppScreenshots() {
  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need for
            <span className="text-primary"> Mental Wellness</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            From daily check-ins to guided exercises, Empath provides the tools you need to understand and nurture your emotional health.
          </p>
        </div>

        {/* Screenshots carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pt-8 pb-8 snap-x snap-mandatory scrollbar-hide">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-center first:pl-4 last:pr-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative group">
                  {/* Phone frame */}
                  <div className="relative w-64 md:w-72 rounded-[2.5rem] border-[8px] border-secondary bg-card shadow-2xl transition-transform duration-500 hover:scale-105 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    {/* Screenshot */}
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      width={1206}
                      height={2622}
                      sizes="(min-width: 768px) 18rem, 16rem"
                      className="w-full h-auto rounded-[2rem] object-contain block"
                    />
                  </div>

                  {/* Label */}
                  <div className="mt-4 text-center">
                    <span className="text-sm font-medium text-muted-foreground">{screenshot.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient overlays for scroll indication */}
          <div className="absolute left-0 top-0 bottom-8 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-8 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
