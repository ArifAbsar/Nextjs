"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";

export default function ViewRequisitionDialog({ requisition }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-500 text-white p-2 rounded">View</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-screen overflow-auto p-4">
        <DialogHeader>
          <DialogTitle>Requisition: {requisition.requisitionNo}</DialogTitle>
          <DialogDescription>
            Order list that products are needed for approval
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <div>
            <p><strong>Creator Name:</strong> {requisition.creatorName}</p>
            <p><strong>Requisition Date:</strong> {requisition.date}</p>
            <p><strong>Project:</strong> {requisition.project}</p>
            <p><strong>Department:</strong> {requisition.department}</p>
            <p><strong>Business:</strong> {requisition.business}</p>
          </div>
          <div>
            <p><strong>Product Name:</strong> {requisition.productName}</p>
            <p><strong>Unit:</strong> {requisition.unit}</p>
            <p><strong>Rate:</strong> {requisition.rate}</p>
            <p><strong>Quantity:</strong> {requisition.quantity}</p>
            <p><strong>Unit/Bag:</strong> {requisition.unitBag}</p>
            <p><strong>No of Bag:</strong> {requisition.noOfBag}</p>
            <p><strong>Amount:</strong> {requisition.amount}</p>
            <p><strong>VAT:</strong> {requisition.vat}</p>
            <p><strong>VAT Amount:</strong> {requisition.vatAmount}</p>
            <p><strong>Expected Delivery Date:</strong> {requisition.expectedDeliveryDate}</p>
            <p><strong>Stock On Hand:</strong> {requisition.stockOnHand}</p>
            <p><strong>Notes:</strong> {requisition.notes}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <textarea placeholder="Remarks or update" className="w-full p-2 border rounded" />
          <div className="flex space-x-2">
            <Button className="bg-blue-500 text-white p-2 rounded">Attachments</Button>
            <Button className="bg-green-500 text-white p-2 rounded">Accept</Button>
            <Button className="bg-yellow-500 text-white p-2 rounded">Correction</Button>
            <Button className="bg-red-500 text-white p-2 rounded" onClick={closeDialog}>Reject</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
