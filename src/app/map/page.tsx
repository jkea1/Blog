'use client'
import MapSection from '../components/Map'

export default function MapPage() {
  return (
    <>
      <MapSection
        onLoad={() => {
          console.log('load!')
        }}
      />
    </>
  )
}
