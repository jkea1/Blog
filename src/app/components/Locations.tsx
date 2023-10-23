import { getAllLocations } from '@/service/locations'

export default async function Locations() {
  const locations = await getAllLocations()

  console.log('장소', locations)

  return <div>Locations</div>
}
