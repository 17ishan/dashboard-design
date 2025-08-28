import { ArrowUpDown, Star } from "lucide-react";
import React from "react";

const Products = () => {
const products = [
  {
    id: 1,
    image: "https://kinclimg2.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIAB0635V43_YAA18DIG6XXXXXXXX_ABCD00-PICS-00000-1024-47125.png", 
    name: "Bracelet",
    status: "Active",
    inventory: "3 in stock for 3 variants",
    type: "Jewellery",
    vendor: "How Commerce",
  },
  {
    id: 2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT4EZZWQKDscESqoRwC9txa-ct7AWEL4i6Qw&s",
    name: "Chateau Soorok Peach Soju",
    status: "Active",
    inventory: "5 in stock",
    type: "Beverage",
    vendor: "How Commerce",
  },
  {
    id: 3,
    image: "https://kinclimg2.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIAB0635V43_YAA18DIG6XXXXXXXX_ABCD00-PICS-00000-1024-47125.png",
    name: "Diamonds Bracelet",
    status: "Active",
    inventory: "3 in stock for 3 variants",
    type: "Jewellery",
    vendor: "How Commerce",
  },
  {
    id: 4,
    image: "https://minuman.com/cdn/shop/products/103947093_253299712783127_6389807087546503040_n_1024x.jpg?v=1699868894",
    name: "Premium Dry Gin",
    status: "Active",
    inventory: "2 in stock",
    type: "Beverage",
    vendor: "How Commerce",
  },
  {
    id: 5,
    image: "https://admin.mochishoes.com/product/19-2978/660/19-2978H23.jpg",
    name: "Premium Leather Shoes",
    status: "Active",
    inventory: "2 in stock",
    type: "Shoes",
    vendor: "How Commerce",
  },
  {
    id: 6,
    image: "https://png.pngtree.com/png-vector/20250509/ourlarge/pngtree-classic-wristwatch-png-image_16216747.png",
    name: "Classic Wristwatch",
    status: "Active",
    inventory: "4 in stock",
    type: "Accessories",
    vendor: "How Commerce",
  },
  {
    id: 7,
    image: "https://m.media-amazon.com/images/I/81hy7vKwHlL._UY1000_.jpg",
    name: "Designer Handbag",
    status: "Active",
    inventory: "6 in stock",
    type: "Bags",
    vendor: "How Commerce",
  },
  {
    id: 8,
    image: "https://shop.zebronics.com/cdn/shop/files/Zeb-Thunder-pic5.jpg?v=1702966217&width=1200",
    name: "Wireless Headphones",
    status: "Active",
    inventory: "8 in stock",
    type: "Electronics",
    vendor: "How Commerce",
  },
  {
    id: 9,
    image: "https://img.tatacliq.com/images/i17//437Wx649H/MP000000018869727_437Wx649H_202405170753331.jpeg",
    name: "Running Sneakers",
    status: "Active",
    inventory: "10 in stock",
    type: "Shoes",
    vendor: "How Commerce",
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    name: "Coffee Beans Pack",
    status: "Active",
    inventory: "15 in stock",
    type: "Beverage",
    vendor: "How Commerce",
  },
];


  return (
    <div className="p-6 mt-20 bg-[#F9FAFB] ">
      <h1 className="text-3xl font-semibold">Products</h1>
      <br />
      {/* Header Tabs */}
      <div className="border-b mb-4 ">
        <div className="flex space-x-6">
          <button className="pb-2 border-b-2 border-green-600 font-medium">
            All
          </button>
          <button className="pb-2 text-gray-500">Active</button>
          <button className="pb-2 text-gray-500">Draft</button>
          <button className="pb-2 text-gray-500">Archived</button>
        </div>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-wrap gap-2 mb-4 items-center ">
        <input
          type="text"
          placeholder="Filter products"
          className="border rounded-md px-3 py-2 w-115 border-gray-400"
        />
        <select className="border rounded-md px-3 py-2 border-gray-400 ">
          <option>Product vendor</option>
        </select>
        <select className="border rounded-md px-3 py-2 border-gray-400">
          <option>Tagged with</option>
        </select>
        <select className="border rounded-md px-3 py-2 border-gray-400">
          <option>Status</option>
        </select>
        <button className="border rounded-md px-3 py-2 border-gray-400">More filters</button>
        <button className="ml- border rounded-md px-3 py-2 border-gray-400 text-gray-400 flex gap-1"> <Star /> Saved</button>
        <button className="ml-auto border rounded-md px-3 py-2 flex gap-1 border-gray-400">  <ArrowUpDown className="w-5 h-5 text-[#1A1C2B]" />  Sort</button>
      </div>

      {/* Table */}
      <div className=" border border-gray-400 rounded-lg overflow-hidden bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-4 py-3">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Inventory</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Vendor</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id} className="border-b border-gray-400 hover:bg-gray-100">
                <td className="px-4 py-3">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-3 flex items-center space-x-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded object-cover "
                  />
                  <a href="#" className="hover:text-blue-600 hover:underline">
                    {item.name}
                  </a>
                </td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3">{item.inventory}</td>
                <td className="px-4 py-3">{item.type}</td>
                <td className="px-4 py-3">{item.vendor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
