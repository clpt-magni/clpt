'use client'

import dynamic from 'next/dynamic'
import config from '@/../sanity/sanity.config'

const NextStudio = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { ssr: false }
)

export default function StudioPage() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white">
      <NextStudio config={config} />
    </div>
  )
}
