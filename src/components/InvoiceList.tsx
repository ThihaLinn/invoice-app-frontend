import React, { useState } from "react";
import { getInvoiceList } from "../api/invoice";
import { Invoice } from "../types/Invoice";

const InvoiceList = () => {

    const [data,setDate] = useState<Invoice[]>([])

    if(data.length==0){
    getInvoiceList().then(res => setDate(res.data)).catch(error => console.log(error))

    }



  return (
    <div className="w-[85%] mx-auto mt-10">
      <div className="grid grid-cols-5 gap-4">
        <input
          type="text"
          className="focus:border-none focus:ring-0 py-2 px-3 border-none col-span-4 ring-1 ring-gray-500"
          placeholder=" Search with invoice number or casherNumber"
        />
        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Search
        </button>
      </div>
      
      <table className="min-w-full divide-y divide-gray-200 mt-5">
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Invoice No</th>
                  <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Casher Number</th>
                  <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Township</th>
                  <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Remark</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.map((invoice) => (
                  <tr key={invoice.invoiceId}>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-gray-800">{invoice.invoiceId}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{invoice.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-gray-800">{invoice.casherNumber}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{invoice.township}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{invoice.remark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
    </div>
  );
};

export default InvoiceList;
