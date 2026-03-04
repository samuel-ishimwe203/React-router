import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanPhotoes() {
  const { currentVan } = useOutletContext()
    
  return (
    <img 
      src={currentVan.imageUrl} 
      className="h-[100px] rounded-[5px]" 
    />
  )
}

export default HostVanPhotoes