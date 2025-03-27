import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-800">
      <main className="flex-grow flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="mb-4 text-8xl tracking-tight font-extrabold text-blue-600 dark:text-blue-400">
            404
          </h1>
          <p className="mb-4 text-2xl tracking-tight font-bold text-gray-800 md:text-3xl dark:text-white">
            Algo está faltando.
          </p>
          <p className="mb-6 text-lg font-light text-gray-600 dark:text-gray-400">
            Desculpe, não conseguimos encontrar essa página. Você encontrará muitas coisas para explorar na página inicial.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900 my-4"
          >
            Voltar para a Página Inicial
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFoundPage;
