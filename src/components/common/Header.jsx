import { Button } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';
import ModalB from './Modal';
import Signup from '../Signup';

const Header = () => {
  const { modal2Open, setModal2Open } = useModal();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="Header sticky top-0 z-50 flex items-center justify-between px-6 py-4 md:px-20 md:py-5 bg-white shadow-md">
      <Link to="/">
        <img src="/assets/images/logo.svg" alt="Logo" className="w-24 md:w-36" />
      </Link>

      <div className="flex items-center">
        <button
          className="md:hidden block text-xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        <ul className="hidden md:flex items-center gap-6 text-md">
          <Link to="/contact">
            <li className="hover:text-blue-600">Contact</li>
          </Link>
          <Link to="/product">
            <li className="hover:text-blue-600">Product</li>
          </Link>
          <Link to="/search">
            <li className="hover:text-blue-600">Search</li>
          </Link>

          <Button
            onClick={() => setModal2Open(true)}
            className="bg-blue-500 text-white hover:bg-blue-600"
          >
            SignUp
          </Button>

          <div>
            <ModalB data={{ modal2Open, setModal2Open }}>
              <Signup />
            </ModalB>
          </div>
        </ul>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden z-50 absolute top-16 left-0 w-full bg-white shadow-lg py-4 px-6">
          <ul className="flex flex-col gap-4 text-lg">
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <li className="hover:text-blue-600">Contact</li>
            </Link>
            <Link to="/product" onClick={() => setIsMobileMenuOpen(false)}>
              <li className="hover:text-blue-600">Product</li>
            </Link>
            <Link to="/search" onClick={() => setIsMobileMenuOpen(false)}>
              <li className="hover:text-blue-600">Search</li>
            </Link>

            <Button
              onClick={() => {
                setModal2Open(true);
                setIsMobileMenuOpen(false);
              }}
              className="bg-blue-500 text-white hover:bg-blue-600"
            >
              SignUp
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
