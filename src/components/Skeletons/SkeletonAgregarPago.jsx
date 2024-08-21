import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonAgregarPago = () => {
    return (
        <>
            <div className="cliente-detail-container">
                <div className="cliente-detail">
                    <div className="cliente-icon">
                        <Skeleton circle={true} height={40} width={40} />
                    </div>
                    <div className="cliente-info">
                        <h5><Skeleton width={120} /></h5>
                        <p><Skeleton width={180} /></p>
                        <p><small className="text-muted"><Skeleton width={100} /></small></p>
                    </div>
                </div>
                <div className="cliente-pagos">
                    <h2><Skeleton width={80} /></h2>
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
        </>
    )
}

export default SkeletonAgregarPago