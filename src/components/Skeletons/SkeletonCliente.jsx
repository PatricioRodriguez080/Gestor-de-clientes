import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCliente = () => {
    return (
        <>
            {Array(6).fill().map((_, index) => (
                <div className="col-12 col-clientes" key={index}>
                    <div className="card card-clientes">
                        <div className="row g-0">
                            <div className="col-md-2 d-flex align-items-center justify-content-center">
                                <Skeleton circle={true} height={50} width={50} />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h5 className="card-title"><Skeleton width={`80%`} height={25} /></h5>
                                    <p className="card-text"><Skeleton width={`60%`} height={20} /></p>
                                    <p className="card-text"><Skeleton width={`90%`} height={20} /></p>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex align-items-center justify-content-center">
                                <Skeleton width={30} height={30} />
                                <Skeleton width={30} height={30} style={{ marginLeft: 10, marginRight: 10 }} />
                                <Skeleton width={30} height={30} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default SkeletonCliente