import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Factory } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProductsMenu = () => {
    setIsProductsMenuOpen(!isProductsMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsProductsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    {
      name: 'Products',
      dropdownItems: [
        { name: 'Mold Solutions', path: '/mold-solutions' },
        { name: 'Raw Materials', path: '/raw-materials' },
        { name: 'Finished Products', path: '/products' },
      ],
    },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
                <Factory className="h-8 w-8 text-primary-600" />
                <span className="ml-2 text-2xl font-semibold text-secondary-800">
                  GlobalTech
                </span>
              </Link>
            </div>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            {navItems.map((item, index) => {
              if ('dropdownItems' in item) {
                return (
                  <div key={index} className="relative inline-block text-left">
                    <button
                      className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                        item.dropdownItems.some((subItem) => isActive(subItem.path))
                          ? 'text-primary-700'
                          : 'text-secondary-800 hover:text-primary-600'
                      }`}
                      onClick={toggleProductsMenu}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {isProductsMenuOpen && (
                      <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu" aria-orientation="vertical">
                          {item.dropdownItems.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              className={`block px-4 py-2 text-sm ${
                                isActive(subItem.path)
                                  ? 'bg-primary-50 text-primary-600'
                                  : 'text-secondary-800 hover:bg-primary-50 hover:text-primary-600'
                              }`}
                              onClick={closeMobileMenu}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              } else {
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className={`px-3 py-2 text-sm font-medium rounded-md ${
                      isActive(item.path)
                        ? 'text-primary-700'
                        : 'text-secondary-800 hover:text-primary-600'
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                );
              }
            })}
          </div>
          <div className="flex items-center md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary-800 hover:text-primary-600 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => {
              if ('dropdownItems' in item) {
                return (
                  <div key={index}>
                    <button
                      className="w-full flex items-center justify-between px-4 py-2 text-base font-medium text-secondary-800 hover:text-primary-600"
                      onClick={toggleProductsMenu}
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 h-4 w-4 ${isProductsMenuOpen ? 'transform rotate-180' : ''}`} />
                    </button>
                    {isProductsMenuOpen && (
                      <div className="pl-6 py-2 space-y-1">
                        {item.dropdownItems.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className={`block px-4 py-2 text-base font-medium ${
                              isActive(subItem.path)
                                ? 'text-primary-700'
                                : 'text-secondary-700 hover:text-primary-600'
                            }`}
                            onClick={closeMobileMenu}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              } else {
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className={`block px-4 py-2 text-base font-medium ${
                      isActive(item.path)
                        ? 'text-primary-700'
                        : 'text-secondary-800 hover:text-primary-600'
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                );
              }
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;