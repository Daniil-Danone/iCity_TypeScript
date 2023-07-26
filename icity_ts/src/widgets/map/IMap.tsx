import React from 'react'
import { YMaps, Map } from '@pbe/react-yandex-maps'


const IMap: React.FC = () => {
  return (
    <>
        <YMaps
            query={{
                load: "Map",
            }}
            >
            <div>
                <Map
                width={window.innerWidth}
                height={window.innerHeight}
                defaultState={{ 
                    center: [54.969470126992405, 73.41684108497125],
                    zoom: 13,
                }}
                />
            </div>
        </YMaps>
    </>
  )
}

export default IMap;
