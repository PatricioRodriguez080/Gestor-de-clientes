import React from 'react'
import "../Inicio/inicio.css"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonDatosInicio = () => {
    return (
        <>
            {Array(3).fill().map((_, index) => (
                <div key={index} className="container-datos">
                    <h2 className="text-center mb-4"><Skeleton width={`80%`} height={25} /></h2>
                    <h3 className="text-center"><Skeleton width={`60%`} height={20} /></h3>
                </div>
            ))}
        </>
    )
}

export default SkeletonDatosInicio