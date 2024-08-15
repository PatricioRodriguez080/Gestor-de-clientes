import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonClienteDetail = () => {
    return (
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
                <Skeleton count={3} height={30} />
            </div>
        </div>
    )
}

export default SkeletonClienteDetail