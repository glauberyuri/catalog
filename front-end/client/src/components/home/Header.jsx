import React from 'react'

const Header = () => {
  return (
    <div className="hero bg-base-200 min-h-[50vh] flex flex-col items-center">
      {/* Logo redonda */}
      <div className="mt-6 mb-4">
        <img
          src="https://via.placeholder.com/100"
          alt="Logo"
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>
      
      {/* Conteúdo */}
      <div className="hero-content text-center w-full px-4">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold">Bem-vindo</h1>
          <p className="py-4">
            Explore nossa variedade de produtos e encontre exatamente o que você precisa!
          </p>
          
          {/* Campo de pesquisa/categorias */}
          <select className="select select-primary w-full max-w-xs">
            <option disabled selected>Selecione uma categoria</option>
            <option>Eletrônicos</option>
            <option>Roupas</option>
            <option>Casa & Jardim</option>
            <option>Esportes</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Header