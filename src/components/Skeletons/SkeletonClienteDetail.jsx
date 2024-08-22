import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonClienteDetail = () => {
    return (
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
                <div className="cliente-pagos-skeleton mt-5">
                    <h2><Skeleton /></h2>
                    <Skeleton height={200} />
                </div>
            </div>
        </SkeletonTheme>
    )
}

export default SkeletonClienteDetail