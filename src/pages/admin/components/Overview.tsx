import React from 'react';
import { 
  BarChart2, 
  Users, 
  Package, 
  DollarSign, 
  ChevronUp, 
  ChevronDown, 
  ShoppingBag, 
  Clock, 
  AlertCircle 
} from 'lucide-react';

const Overview: React.FC = () => {
  // Mock data for dashboard
  const stats = [
    {
      title: 'Total Sales',
      value: '$128,430',
      change: '+12.5%',
      isPositive: true,
      icon: <DollarSign className="h-5 w-5 text-primary-600" />,
    },
    {
      title: 'New Orders',
      value: '64',
      change: '+8.2%',
      isPositive: true,
      icon: <ShoppingBag className="h-5 w-5 text-green-600" />,
    },
    {
      title: 'Product Inventory',
      value: '1,253',
      change: '-3.1%',
      isPositive: false,
      icon: <Package className="h-5 w-5 text-indigo-600" />,
    },
    {
      title: 'Active Customers',
      value: '573',
      change: '+5.7%',
      isPositive: true,
      icon: <Users className="h-5 w-5 text-orange-600" />,
    },
  ];

  const recentOrders = [
    { id: 'ORD-7824', customer: 'Automotive Systems Inc.', date: '2 hours ago', amount: '$12,430', status: 'Processing' },
    { id: 'ORD-7823', customer: 'Precision Parts Ltd.', date: '5 hours ago', amount: '$8,752', status: 'Shipped' },
    { id: 'ORD-7822', customer: 'Medical Devices Co.', date: '8 hours ago', amount: '$23,900', status: 'Delivered' },
    { id: 'ORD-7821', customer: 'Electronics Manufacturing', date: '1 day ago', amount: '$4,276', status: 'Delivered' },
    { id: 'ORD-7820', customer: 'Consumer Tech Industries', date: '1 day ago', amount: '$15,820', status: 'Processing' },
  ];

  const lowStockItems = [
    { id: 'PRD-3456', name: 'Precision Bearings 52mm', stock: 12, reorderLevel: 15 },
    { id: 'PRD-2851', name: 'Injection Mold Nozzles', stock: 8, reorderLevel: 20 },
    { id: 'PRD-4327', name: 'High-Tensile Polymer Sheet', stock: 5, reorderLevel: 10 },
    { id: 'PRD-6542', name: 'Thermal Regulators', stock: 3, reorderLevel: 12 },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-gray-100">
                {stat.icon}
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-secondary-600">{stat.title}</h3>
                <p className="text-2xl font-semibold text-secondary-800">{stat.value}</p>
              </div>
            </div>
            <div className={`mt-4 flex items-center ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {stat.isPositive ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              <span className="ml-1 text-sm font-medium">{stat.change} from last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Sales Chart */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-secondary-800">Monthly Sales Overview</h2>
          <select className="p-1 border border-gray-300 rounded">
            <option>Last 6 Months</option>
            <option>Last 12 Months</option>
            <option>Year to Date</option>
          </select>
        </div>
        <div className="h-80 flex items-center justify-center">
          <div className="text-center">
            <BarChart2 className="h-16 w-16 text-primary-200 mx-auto" />
            <p className="mt-2 text-secondary-600">
              Sales chart visualization would be displayed here with data from your actual system.
            </p>
          </div>
        </div>
      </div>

      {/* Recent Orders and Low Stock */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-secondary-800">Recent Orders</h2>
            <a href="/admin/dashboard/orders" className="text-sm text-primary-600 hover:text-primary-700">
              View All
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-4 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentOrders.map((order, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3 text-sm font-medium text-secondary-900">
                      {order.id}
                    </td>
                    <td className="px-4 py-3 text-sm text-secondary-600">
                      {order.customer}
                    </td>
                    <td className="px-4 py-3 text-sm text-secondary-600">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-secondary-400" />
                        {order.date}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-secondary-900">
                      {order.amount}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        order.status === 'Processing' 
                          ? 'bg-yellow-100 text-yellow-800'
                          : order.status === 'Shipped'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Low Stock Items */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-secondary-800">Low Stock Items</h2>
            <a href="/admin/dashboard/products" className="text-sm text-primary-600 hover:text-primary-700">
              View Inventory
            </a>
          </div>
          <div className="space-y-4">
            {lowStockItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2" />
                  <div>
                    <h3 className="text-sm font-medium text-secondary-800">{item.name}</h3>
                    <p className="text-xs text-secondary-600">ID: {item.id}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-red-600">{item.stock} in stock</p>
                  <p className="text-xs text-secondary-600">Reorder level: {item.reorderLevel}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <button className="w-full px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-md hover:bg-primary-700 transition duration-300">
              Generate Purchase Orders
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;