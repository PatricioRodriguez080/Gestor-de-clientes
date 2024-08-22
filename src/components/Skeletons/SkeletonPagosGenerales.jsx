import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const SkeletonPagosGenerales = () => {
  return (
    <SkeletonTheme baseColor='#E0E0E0'>
      <div className="container">
        <Skeleton height={60} className="mb-4"/>
        <Skeleton height={300}/>
      </div>
    </SkeletonTheme>
  )
}

export default SkeletonPagosGenerales