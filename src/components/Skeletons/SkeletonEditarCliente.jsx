import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonEditarCliente = () => {
  return (
    <>
      <div className="container-icon-forms d-flex">
        <div className="cliente-icon-container d-flex align-items-center justify-content-center">
          <Skeleton width={160} height={200}/>
        </div>
        <div className="container-forms">
          <div className="form-floating form-nombre mb-3">
            <Skeleton width={`100%`} height={70}/>
          </div>
          <div>
            <div className="form-floating mb-3">
              <Skeleton width={`100%`} height={70} />
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex align-items-center justify-content-center">
        <Skeleton width={160} height={80}/>
      </div>
    </>
  )
}

export default SkeletonEditarCliente