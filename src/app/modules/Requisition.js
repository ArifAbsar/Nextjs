"use client";
import { useEffect, useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import AddNewDialog from "../modules/AddNewDialog";
import ViewRequisitionDialog from "../modules/ViewRequisition";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Requisition() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/requisitionData.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const printRequisition = (item) => {
    const pdfContent = `
      <div>
        <h2>Requisition: ${item.requisitionNo}</h2>
        <p>Creator Name: ${item.creatorName}</p>
        <p>Requisition Date: ${item.date}</p>
        <p>Project: ${item.project}</p>
        <p>Department: ${item.department}</p>
        <p>Product Name: ${item.productName}</p>
        <p>Unit: ${item.unit}</p>
        <p>Rate: ${item.rate}</p>
        <p>Quantity: ${item.quantity}</p>
        <p>Unit/Bag: ${item.unitBag}</p>
        <p>No of Bag: ${item.noOfBag}</p>
        <p>Amount: ${item.amount}</p>
        <p>VAT: ${item.vat}</p>
        <p>VAT Amount: ${item.vatAmount}</p>
        <p>Expected Delivery Date: ${item.expectedDeliveryDate}</p>
        <p>Stock On Hand: ${item.stockOnHand}</p>
        <p>Notes: ${item.notes}</p>
      </div>
    `;
    
    const pdf = new jsPDF();
    pdf.html(pdfContent, {
      callback: function (doc) {
        doc.save(`${item.requisitionNo}.pdf`);
      },
      x: 10,
      y: 10
    });
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div>
          <Input type="text" placeholder="Search" className="bg-gray-300 p-2 rounded" />
        </div>
        <AddNewDialog />
      </div>
      <div className="flex items-center mb-4">
        <label className="mr-2">From:</label>
        <input type="date" className="border p-2 rounded mr-4" />
        <label className="mr-2">To:</label>
        <input type="date" className="border p-2 rounded mr-4" />
        <Button className="bg-green-500 text-white p-2 rounded">GO</Button>
      </div>
      {data.length > 0 ? (
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 p-2">Requisition Date</th>
              <th className="border border-gray-200 p-2">Requisition NO</th>
              <th className="border border-gray-200 p-2">Project</th>
              <th className="border border-gray-200 p-2">Department</th>
              <th className="border border-gray-200 p-2">Total</th>
              <th className="border border-gray-200 p-2">Memo</th>
              <th className="border border-gray-200 p-2">Status</th>
              <th className="border border-gray-200 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-200 p-2">{item.date}</td>
                <td className="border border-gray-200 p-2">{item.requisitionNo}</td>
                <td className="border border-gray-200 p-2">{item.project}</td>
                <td className="border border-gray-200 p-2">{item.department}</td>
                <td className="border border-gray-200 p-2">{item.total}</td>
                <td className="border border-gray-200 p-2">{item.memo}</td>
                <td className="border border-gray-200 p-2">{item.status}</td>
                <td className="border border-gray-200 p-2 flex space-x-2">
                  <ViewRequisitionDialog requisition={item} />
                  <Button className="bg-blue-500 text-white p-2 rounded" onClick={() => printRequisition(item)}>Print</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500">No data available</p>
      )}
      <div className="mt-4 flex justify-end">
        <Button className="bg-green-500 text-white p-2 rounded">Batch Print</Button>
      </div>
    </div>
  );
}
