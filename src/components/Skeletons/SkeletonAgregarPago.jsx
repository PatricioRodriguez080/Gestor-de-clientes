import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonAgregarPago = () => {
    return (
        <>
            <SkeletonTheme baseColor='#E0E0E0'>
                <div className="cliente-detail-container">
                    <div className="cliente-detail">
                        <div className="cliente-icon">
                            <Skeleton circle={true} height={60} width={60} />
                        </div>
                        <div className="cliente-info">
                            <h5><Skeleton /></h5>
                            <p><Skeleton /></p>
                            <p><small className="text-muted"><Skeleton width={100} /></small></p>
                        </div>
                    </div>
                    <div className="cliente-pagos-skeleton mt-5 mb-4">
                        <h2><Skeleton /></h2>
                        <Skeleton height={100} />
                    </div>
                </div>
                <div className="container-info-skeleton">
                    <Skeleton height={60} />
                    <Skeleton height={200} />
                    <div className="container d-flex align-items-center justify-content-center mt-3">
                        <Skeleton width={160} height={70} />
                    </div>
                </div>
            </SkeletonTheme>
        </>
    )
}

export default SkeletonAgregarPago