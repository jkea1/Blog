'use client'
import Map from '../components/Map'

export default function MapPage() {
  return (
    <Map
      onLoad={() => {
        console.log('load!')
      }}
    />
  )
}
