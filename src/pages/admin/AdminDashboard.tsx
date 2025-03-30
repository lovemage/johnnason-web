import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  FileText, 
  Users, 
  Settings, 
  Truck, 
  BarChart, 
  LogOut, 
  Menu, 
  X, 
  Factory,
  Bell,
  Search
} from 'lucide-react';

// Admin Dashboard Components
import Overview from './components/Overview';
import Products from './components/Products';
import Orders from './components/Orders';
import Customers from './components/Customers';
import Blog from './components/Blog';
import SettingsComponent from './components/Settings';

const AdminDashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    // Check if user is authenticated (in a real app, you would verify the token with your backend)
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/admin');
    }
    
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [navigate, location]);
  
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/admin');
  };
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const navigationItems = [
    { name: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" />, path: '/admin/dashboard' },
    { name: 'Products', icon: <Package className="h-5 w-5" />, path: '/admin/dashboard/products' },
    { name: 'Orders', icon: <Truck className="h-5 w-5" />, path: '/admin/dashboard/orders' },
    { name: 'Customers', icon: <Users className="h-5 w-5" />, path: '/admin/dashboard/customers' },
    { name: 'Blog', icon: <FileText className="h-5 w-5" />, path: '/admin/dashboard/blog' },
    { name: 'Analytics', icon: <BarChart className="h-5 w-5" />, path: '/admin/dashboard/analytics' },
    { name: 'Settings', icon: <Settings className="h-5 w-5" />, path: '/admin/dashboard/settings' },
  ];
  
  const isActive = (path: string) => {
    if (path === '/admin/dashboard' && location.pathname === '/admin/dashboard') {
      return true;
    }
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top Bar - Mobile */}
      <div className="bg-white shadow-sm lg:hidden">
        <div className="px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-secondary-700 hover:bg-gray-100 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <Link to="/admin/dashboard" className="flex items-center ml-2">
              <Factory className="h-6 w-6 text-primary-600" />
              <span className="ml-2 font-semibold text-secondary-800">GlobalTech Admin</span>
            </Link>
          </div>
          <div className="flex items-center">
            <button className="p-2 rounded-md text-secondary-700 hover:bg-gray-100 focus:outline-none relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 z-20 lg:hidden" onClick={toggleMobileMenu}></div>
      )}
      
      <div className={`fixed inset-y-0 left-0 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 z-30 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out lg:static lg:inset-0`}>
        <div className="h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="h-16 flex items-center px-4 border-b border-gray-200">
            <Link to="/admin/dashboard" className="flex items-center">
              <Factory className="h-7 w-7 text-primary-600" />
              <span className="ml-2 text-xl font-semibold text-secondary-800">GlobalTech</span>
            </Link>
            <button
              onClick={toggleSidebar}
              className="ml-auto p-2 rounded-md text-secondary-700 hover:bg-gray-100 focus:outline-none hidden lg:block"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4 px-3">
            <ul className="space-y-1">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                      isActive(item.path)
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-secondary-700 hover:bg-gray-100 hover:text-secondary-900'
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Logout */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-3 py-2 text-sm font-medium text-red-600 rounded-md hover:bg-red-50"
            >
              <LogOut className="h-5 w-5 mr-3" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Desktop Header */}
        <header className="bg-white shadow-sm hidden lg:block">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-semibold text-secondary-800">
                  {location.pathname === '/admin/dashboard' && 'Dashboard Overview'}
                  {location.pathname === '/admin/dashboard/products' && 'Products Management'}
                  {location.pathname === '/admin/dashboard/orders' && 'Orders Management'}
                  {location.pathname === '/admin/dashboard/customers' && 'Customer Management'}
                  {location.pathname === '/admin/dashboard/blog' && 'Blog Management'}
                  {location.pathname === '/admin/dashboard/analytics' && 'Analytics & Reports'}
                  {location.pathname === '/admin/dashboard/settings' && 'System Settings'}
                </h1>
              </div>
              <div className="flex items-center">
                <div className="relative mx-4">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <button className="p-2 rounded-md text-secondary-700 hover:bg-gray-100 focus:outline-none relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
                </button>
                <div className="ml-4 flex items-center">
                  <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-medium">
                    A
                  </div>
                  <span className="ml-2 text-sm font-medium text-secondary-800">Admin User</span>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4 sm:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/analytics" element={
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-secondary-800 mb-4">Analytics Dashboard</h3>
                <p className="text-secondary-600">
                  Analytics module is under development. Check back soon for detailed reports and insights.
                </p>
              </div>
            } />
            <Route path="/settings" element={<SettingsComponent />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;