import React from 'react'
import HomeCard from './homeCard'

const CardContainer = () => {
  return (
    <div className="bg-gray-50 py-12 sm:py-24">
      <div className="mx-auto max-w-2xl px-2 lg:px-6 lg:max-w-7xl lg:px-8">
        <h5 className="text-center text-base/7 font-semibold text-indigo-600">Destaques</h5>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
          Nossos Produtos
        </p>
        <div className="mt-10">
          <HomeCard />
        </div>
      </div>
    </div>
  )
}

export default CardContainer