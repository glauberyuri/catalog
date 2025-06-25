import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconCart from "./IconCart";

const Navbar = ({numCartItems}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to="/">daisyUI</Link>
      </div>

      <div className="flex-none flex items-center gap-4">
        {/* Ícone do Carrinho */}
        <IconCart numCartItems={numCartItems} />

        {/* Se não estiver logado, mostra "Log in" */}
        {!isAuthenticated && (
          <Link to="/login" className="btn btn-outline btn-primary">
            Log in
          </Link>
        )}

        {/* Avatar do usuário (mostra apenas se autenticado) */}
        {isAuthenticated && (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="User Profile" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a className="justify-between">Profile <span className="badge">New</span></a></li>
              <li><a>Settings</a></li>
              <li><a onClick={() => setIsAuthenticated(false)}>Logout</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
