import React from 'react'

const HomeCard = () => {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="relative bg-white rounded-lg overflow-hidden w-full"
        >
          <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-r-lg uppercase">
            Novo
          </div>
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Produto"
              className="w-full h-56 object-cover"
            />
          </figure>

          <div className="p-2 lg:p-4">
            <h2 className="text-lg font-bold">Nome do Produto</h2>
            <p className="text-gray-600">R$ 29,81</p>
            <p className="text-sm text-gray-500">Loja Exemplo</p>
          </div>

          <div className="absolute top-2 right-2 flex space-x-2">
            <button className="bg-white p-2 rounded-full shadow">📊</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HomeCard
