import Script from 'next/script'
import { useEffect, useRef } from 'react'
import { INITIAL_CENTER, INITIAL_ZOOM } from '../hooks/useMap'
import { NaverMap } from '../types/map'
import { Coordinates } from '../types/store'

type Props = {
  mapId?: string
  initialCenter?: Coordinates
  initialZoom?: number
  onLoad?: (map: NaverMap) => void
}

export default function MapSection({
  mapId = 'map',
  initialCenter = INITIAL_CENTER,
  initialZoom = INITIAL_ZOOM,
  onLoad,
}: Props) {
  const mapRef = useRef<NaverMap | null>(null)

  const initializeMap = () => {
    const mapOptions = {
      center: new window.naver.maps.LatLng(...initialCenter),
      zoom: initialZoom,
      minZoom: 9,
      scaleControl: false,
      mapDataControl: false,
      logoControlOption: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    }

    const map = new window.naver.maps.Map(mapId, mapOptions)
    mapRef.current = map

    // 원하는 위치 마커 찍기
    new naver.maps.Marker({
      position: new naver.maps.LatLng(37.50948837278171, 127.03812595602298),
      map: map,
    })

    // 현재 위치 가져오기

    if (onLoad) {
      onLoad(map)
    }
  }

  useEffect(() => {
    // unmount시
    return () => {
      mapRef.current?.destroy()
    }
  }, [])

  return (
    <>
      <Script
        strategy='afterInteractive'
        type='text/javascript'
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
        onReady={initializeMap}
      />
      <div id={mapId} className='w-full h-full' />
    </>
  )
}
