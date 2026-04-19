export default function SupportPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-16">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">Support</h1>
        <p className="text-muted-foreground leading-relaxed">
          Need help with Empath? Reach out to our team at
          {" "}
          <a className="text-primary hover:underline" href="mailto:support@empath.app">
            support@empath.app
          </a>
          {" "}
          and include your device model, OS version, and a short description of the issue.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          If you are in immediate danger or experiencing a mental health crisis, contact local
          emergency services or your regional crisis line right away.
        </p>
      </div>
    </main>
  )
}
