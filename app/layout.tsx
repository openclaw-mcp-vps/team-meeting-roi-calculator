import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MeetingROI — Calculate the True Cost of Every Meeting',
  description: 'Track meeting duration, attendee salaries, and outcome value to generate ROI reports and optimization recommendations for your team.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8a1443c3-4117-4662-9383-2fed3f7ba4ae"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
