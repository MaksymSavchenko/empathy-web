"use client"

import Image from "next/image"

const APP_STORE_URL = "https://apps.apple.com/us/search?term=empath"
const GOOGLE_PLAY_URL = "https://play.google.com/store/search?q=empath&c=apps"

export function AppStoreButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      {/* Apple App Store Button */}
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="rainbow-border rounded-lg transition-transform duration-300 hover:scale-105"
      >
        <Image
          src="/app-store-badge.svg"
          alt="Download on the App Store"
          width={136}
          height={40}
          className="rounded-lg"
        />
      </a>

      {/* Google Play Store Button */}
      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="rainbow-border rounded-lg transition-transform duration-300 hover:scale-105"
      >
        <Image
          src="/google-play-badge.svg"
          alt="Get it on Google Play"
          width={136}
          height={40}
          className="rounded-lg"
        />
      </a>
    </div>
  )
}
