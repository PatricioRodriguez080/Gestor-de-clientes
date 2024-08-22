import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonEditarCliente = () => {
  return (
    <>
      <SkeletonTheme baseColor='#E0E0E0'>
        <div className="container-icon-forms d-flex">
          <div className="cliente-icon-container d-flex align-items-center justify-content-center">
            <Skeleton width={160} height={180} />
          </div>
          <div className="container-forms">
            <div className="form-floating form-nombre mb-3">
              <Skeleton width={`100%`} height={70} />
            </div>
            <div>
              <div className="form-floating mb-3">
                <Skeleton width={`100%`} height={70} />
              </div>
            </div>
          </div>
        </div>
        <Skeleton width={160} height={50} className="mt-3"/>
      </SkeletonTheme>
    </>
  )
}

export default SkeletonEditarCliente