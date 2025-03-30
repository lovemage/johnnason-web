import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Truck, 
  CheckCircle, 
  Clock, 
  XCircle,
  Calendar
} from 'lucide-react';

const Orders: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [dateFilter, setDateFilter] = useState('All Time');
  
  // Order list - would come from API in real app
  const orders = [
    {
      id: 'ORD-7824',
      customer: 'Automotive Systems Inc.',
      date: '2025-06-10',
      amount: 12430,
      items: 8,
      status: 'Processing'
    },
    {
      id: 'ORD-7823',
      customer: 'Precision Parts Ltd.',
      date: '2025-06-10',
      amount: 8752,
      items: 12,
      status: 'Shipped'
    },
    {
      id: 'ORD-7822',
      customer: 'Medical Devices Co.',
      date: '2025-06-09',
      amount: 23900,
      items: 24,
      status: 'Delivered'
    },
    {
      id: 'ORD-7821',
      customer: 'Electronics Manufacturing',
      date: '2025-06-09',
      amount: 4276,
      items: 6,
      status: 'Delivered'
    },
    {
      id: 'ORD-7820',
      customer: 'Consumer Tech Industries',
      date: '2025-06-09',
      amount: 15820,
      items: 18,
      status: 'Processing'
    },
    {
      id: 'ORD-7819',
      customer: 'Aerospace Components Inc.',
      date: '2025-06-08',
      amount: 32560,
      items: 14,
      status: 'Shipped'
    },
    {
      id: 'ORD-7818',
      customer: 'Industrial Solutions Co.',
      date: '2025-06-08',
      amount: 9875,
      items: 10,
      status: 'Delivered'
    },
    {
      id: 'ORD-7817',
      customer: 'Automotive Excellence',
      date: '2025-06-07',
      amount: 18430,
      items: 22,
      status: 'Cancelled'
    },
    {
      id: 'ORD-7816',
      customer: 'Medical Innovations Ltd.',
      date: '2025-06-07',
      amount: 7650,
      items: 8,
      status: 'Delivered'
    },
    {
      id: 'ORD-7815',
      customer: 'Tech Manufacturing Group',
      date: '2025-06-06',
      amount: 12750,
      items: 15,
      status: 'Delivered'
    }
  ];
  
  const statusOptions = ['All', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];
  const dateOptions = ['All Time', 'Today', 'Yesterday', 'Last 7 Days', 'Last 30 Days', 'Custom Range'];
  
  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
    
    // Simple date filtering (in a real app, you would implement actual date filtering logic)
    let matchesDate = true;
    if (dateFilter === 'Today') {
      matchesDate = order.date === '2025-06-10';
    } else if (dateFilter === 'Yesterday') {
      matchesDate = order.date === '2025-06-09';
    } else if (dateFilter === 'Last 7 Days') {
      matchesDate = ['2025-06-10', '2025-06-09', '2025-06-08', '2025-06-07', '2025-06-06', '2025-06-05', '2025-06-04'].includes(order.date);
    }
    
    return matchesSearch && matchesStatus && matchesDate;
  });
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Processing':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'Shipped':
        return <Truck className="h-5 w-5 text-blue-500" />;
      case 'Delivered':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'Cancelled':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };
  
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'Shipped':
        return 'bg-blue-100 text-blue-800';
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <h1 className="text-2xl font-semibold text-secondary-800">Orders Management</h1>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
          <Download className="h-4 w-4 mr-2" />
          Export Orders
        </button>
      </div>
      
      {/* Search & Filter */}
      <div className="flex flex-wrap gap-4 bg-white p-4 rounded-lg shadow-md">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search orders by ID or customer..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Filter className="h-4 w-4 text-secondary-600 mr-2" />
            <span className="text-sm text-secondary-600 mr-2">Status:</span>
            <select
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
            >
              {statusOptions.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 text-secondary-600 mr-2" />
            <span className="text-sm text-secondary-600 mr-2">Date:</span>
            <select
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
              value={dateFilter}
              onChange={e => setDateFilter(e.target.value)}
            >
              {dateOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* Orders Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-blue-100">
              <Filter className="h-5 w-5 text-blue-600" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-secondary-600">Total Orders</h3>
              <p className="text-2xl font-semibold text-secondary-800">{orders.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-yellow-100">
              <Clock className="h-5 w-5 text-yellow-600" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-secondary-600">Processing</h3>
              <p className="text-2xl font-semibold text-secondary-800">
                {orders.filter(order => order.status === 'Processing').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-blue-100">
              <Truck className="h-5 w-5 text-blue-600" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-secondary-600">Shipped</h3>
              <p className="text-2xl font-semibold text-secondary-800">
                {orders.filter(order => order.status === 'Shipped').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-green-100">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-secondary-600">Delivered</h3>
              <p className="text-2xl font-semibold text-secondary-800">
                {orders.filter(order => order.status === 'Delivered').length}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Items
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-secondary-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-600">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-600">
                    {new Date(order.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-secondary-900">
                    ${order.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-600">
                    {order.items}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getStatusIcon(order.status)}
                      <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-900">
                      <Eye className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredOrders.length === 0 && (
          <div className="p-8 text-center">
            <div className="mx-auto h-12 w-12 text-gray-400">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="mt-2 text-sm font-medium text-secondary-800">No orders found</h3>
            <p className="mt-1 text-sm text-secondary-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>
      
      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-secondary-600">
          Showing <span className="font-medium">{filteredOrders.length}</span> of <span className="font-medium">{orders.length}</span> orders
        </p>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-secondary-600 hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-1 bg-primary-600 text-white rounded-md text-sm">
            1
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-secondary-600 hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-secondary-600 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;