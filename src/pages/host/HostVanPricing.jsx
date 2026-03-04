import React from 'react'
import { useOutletContext } from 'react-router-dom'


function HostVanPricing() {
  const { currentVan } = useOutletContext()

  return (
    <h3 className="text-[24px] font-medium">
      ${currentVan.price}
      <span className="text-[16px] text-[#4D4D4D]">/day</span>
    </h3>
  )
}

export default HostVanPricing