import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  User, 
  Mail, 
  Phone, 
  MapPin,
  Building,
  Eye,
  Edit,
  UserPlus
} from 'lucide-react';

const Customers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);
  
  // Customers list - would come from API in real app
  const customers = [
    {
      id: 'CUST-1001',
      name: 'Automotive Systems Inc.',
      type: 'Corporate',
      email: 'purchasing@autosystems.com',
      phone: '+1 (313) 555-7890',
      location: 'Detroit, MI, USA',
      totalOrders: 37,
      totalSpent: 284650
    },
    {
      id: 'CUST-1002',
      name: 'Precision Parts Ltd.',
      type: 'Corporate',
      email: 'orders@precisionparts.co.uk',
      phone: '+44 20 7946 0892',
      location: 'London, UK',
      totalOrders: 25,
      totalSpent: 198750
    },
    {
      id: 'CUST-1003',
      name: 'Medical Devices Co.',
      type: 'Corporate',
      email: 'procurement@medicaldevices.com',
      phone: '+1 (612) 555-3421',
      location: 'Minneapolis, MN, USA',
      totalOrders: 42,
      totalSpent: 356800
    },
    {
      id: 'CUST-1004',
      name: 'Electronics Manufacturing',
      type: 'Corporate',
      email: 'supply@electronicsmanufacturing.com',
      phone: '+1 (408) 555-9876',
      location: 'San Jose, CA, USA',
      totalOrders: 31,
      totalSpent: 245300
    },
    {
      id: 'CUST-1005',
      name: 'Consumer Tech Industries',
      type: 'Corporate',
      email: 'purchasing@consumertech.com',
      phone: '+1 (206) 555-4321',
      location: 'Seattle, WA, USA',
      totalOrders: 29,
      totalSpent: 187500
    },
    {
      id: 'CUST-1006',
      name: 'Aerospace Components Inc.',
      type: 'Corporate',
      email: 'procurement@aerospacecomp.com',
      phone: '+1 (316) 555-8765',
      location: 'Wichita, KS, USA',
      totalOrders: 18,
      totalSpent: 427800
    },
    {
      id: 'CUST-1007',
      name: 'Industrial Solutions Co.',
      type: 'Corporate',
      email: 'orders@industrialsolutions.de',
      phone: '+49 30 8765 4321',
      location: 'Berlin, Germany',
      totalOrders: 22,
      totalSpent: 176400
    },
    {
      id: 'CUST-1008',
      name: 'Schmidt Manufacturing',
      type: 'Individual',
      email: 'h.schmidt@schmidtmfg.de',
      phone: '+49 89 1234 5678',
      location: 'Munich, Germany',
      totalOrders: 7,
      totalSpent: 43200
    },
    {
      id: 'CUST-1009',
      name: 'Chen Industries',
      type: 'Individual',
      email: 'lchen@chenindustries.cn',
      phone: '+86 21 5678 9012',
      location: 'Shanghai, China',
      totalOrders: 14,
      totalSpent: 126500
    },
    {
      id: 'CUST-1010',
      name: 'Johnson Prototyping',
      type: 'Individual',
      email: 'tjohnson@johnsonproto.com',
      phone: '+1 (415) 555-2345',
      location: 'San Francisco, CA, USA',
      totalOrders: 8,
      totalSpent: 56700
    }
  ];
  
  const customerTypes = ['All', 'Corporate', 'Individual'];
  
  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          customer.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'All' || customer.type === typeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <h1 className="text-2xl font-semibold text-secondary-800">Customer Management</h1>
        <div className="flex gap-3">
          <button className="bg-secondary-800 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
          <button 
            className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center"
            onClick={() => setShowAddModal(true)}
          >
            <UserPlus className="h-4 w-4 mr-2" />
            Add Customer
          </button>
        </div>
      </div>
      
      {/* Search & Filter */}
      <div className="flex flex-wrap gap-4 bg-white p-4 rounded-lg shadow-md">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search customers by name, email, or ID..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <Filter className="h-4 w-4 text-secondary-600 mr-2" />
          <span className="text-sm text-secondary-600 mr-2">Type:</span>
          <select
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
            value={typeFilter}
            onChange={e => setTypeFilter(e.target.value)}
          >
            {customerTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Customer Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-blue-100">
              <User className="h-5 w-5 text-blue-600" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-secondary-600">Total Customers</h3>
              <p className="text-2xl font-semibold text-secondary-800">{customers.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-purple-100">
              <Building className="h-5 w-5 text-purple-600" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-secondary-600">Corporate</h3>
              <p className="text-2xl font-semibold text-secondary-800">
                {customers.filter(customer => customer.type === 'Corporate').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-green-100">
              <User className="h-5 w-5 text-green-600" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-secondary-600">Individual</h3>
              <p className="text-2xl font-semibold text-secondary-800">
                {customers.filter(customer => customer.type === 'Individual').length}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Customers Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Contact Info
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Orders
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Total Spent
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        {customer.type === 'Corporate' ? (
                          <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                            <Building className="h-5 w-5 text-purple-600" />
                          </div>
                        ) : (
                          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                            <User className="h-5 w-5 text-green-600" />
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-secondary-900">{customer.name}</div>
                        <div className="text-sm text-secondary-500">{customer.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center text-sm text-secondary-600">
                        <Mail className="h-4 w-4 text-secondary-400 mr-2" />
                        {customer.email}
                      </div>
                      <div className="flex items-center text-sm text-secondary-600">
                        <Phone className="h-4 w-4 text-secondary-400 mr-2" />
                        {customer.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-secondary-600">
                      <MapPin className="h-4 w-4 text-secondary-400 mr-2" />
                      {customer.location}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-600">
                    {customer.totalOrders}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-secondary-900">
                    ${customer.totalSpent.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-900 mr-3">
                      <Eye className="h-5 w-5" />
                    </button>
                    <button className="text-primary-600 hover:text-primary-900">
                      <Edit className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredCustomers.length === 0 && (
          <div className="p-8 text-center">
            <div className="mx-auto h-12 w-12 text-gray-400">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="mt-2 text-sm font-medium text-secondary-800">No customers found</h3>
            <p className="mt-1 text-sm text-secondary-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>
      
      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-secondary-600">
          Showing <span className="font-medium">{filteredCustomers.length}</span> of <span className="font-medium">{customers.length}</span> customers
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
      
      {/* Add Customer Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-secondary-800">Add New Customer</h3>
                <button 
                  className="text-secondary-500 hover:text-secondary-700"
                  onClick={() => setShowAddModal(false)}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">
                    Customer Type*
                  </label>
                  <div className="flex space-x-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="corporate"
                        name="customerType"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                        defaultChecked
                      />
                      <label htmlFor="corporate" className="ml-2 text-sm text-secondary-700">
                        Corporate
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="individual"
                        name="customerType"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                      />
                      <label htmlFor="individual" className="ml-2 text-sm text-secondary-700">
                        Individual
                      </label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">
                    Customer Name / Company Name*
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">
                      City*
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">
                      Country*
                    </label>
                    <select
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select a country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="CN">China</option>
                      <option value="JP">Japan</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">
                    Address
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                  ></textarea>
                </div>
                
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-secondary-700 hover:bg-gray-50"
                    onClick={() => setShowAddModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700"
                  >
                    Add Customer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customers;