import { readFile } from 'fs/promises'
import path from 'path'

export type Location = {
  nid: number
  season: number
  episode: number
  characteristic: string
  name: string
  coordinates: [number, number]
  foodKind: string
  address: string
  phone: string
  images: string[]
  description: string
  menus: { name: string; price: string }[]
}

export async function getAllLocations(): Promise<Location[]> {
  const filePath = path.join(process.cwd(), 'data', 'locations.json')

  return readFile(filePath, 'utf-8').then<Location[]>(JSON.parse)
}
