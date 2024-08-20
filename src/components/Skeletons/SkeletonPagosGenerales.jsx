import React from 'react'
import Skeleton from 'react-loading-skeleton'

const SkeletonPagosGenerales = () => {
  return (
    <div className="container">
      <Skeleton height={60} className="mb-4"/>
      <Skeleton height={300}/>
    </div>
  )
}

export default SkeletonPagosGenerales