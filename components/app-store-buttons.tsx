"use client"

import Image from "next/image"

export function AppStoreButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      {/* Apple App Store Button */}
      <a
        href="https://apps.apple.com"
        target="_blank"
        rel="noopener noreferrer"
        className="rainbow-border rounded-lg transition-transform duration-300 hover:scale-105"
      >
        <Image
          src="/app-store-badge.svg"
          alt="Download on the App Store"
          width={120}
          height={40}
          className="h-[40px] w-auto"
        />
      </a>

      {/* Google Play Store Button */}
      <a
        href="https://play.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="rainbow-border rounded-lg transition-transform duration-300 hover:scale-105"
      >
        <Image
          src="/google-play-badge.svg"
          alt="Get it on Google Play"
          width={135}
          height={40}
          className="h-[40px] w-auto"
        />
      </a>
    </div>
  )
}
