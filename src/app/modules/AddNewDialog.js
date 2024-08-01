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
} from "../../components/ui/dialog"; // Corrected import path
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

export default function AddNewDialog() {
  const [isOpen, setIsOpen] = useState(false);

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-black text-white p-2 rounded ml-4">Add New</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-screen overflow-auto p-4">
        <DialogHeader>
          <DialogTitle>Add New Requisition</DialogTitle>
          <DialogDescription>
            Create an order list that products are needed
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <Input placeholder="Creator Name" className="w-full" />
          <Input type="date" placeholder="Requisition Date" className="w-full" />
          <Input placeholder="Project" className="w-full" />
          <Input placeholder="Business" className="w-full" />
          <Input placeholder="Product Name" className="w-full" />
          <Input placeholder="Unit" className="w-full" />
          <Input placeholder="Rate" className="w-full" />
          <Input placeholder="Quantity" className="w-full" />
          <Input placeholder="Unit/Bag" className="w-full" />
          <Input placeholder="No of Bag" className="w-full" />
          <Input placeholder="Amount" className="w-full" />
          <Input placeholder="VAT" className="w-full" />
          <Input placeholder="VAT Amount" className="w-full" />
          <Input placeholder="Expected Delivery Date" type="date" className="w-full" />
          <Input placeholder="Stock On Hand" className="w-full" />
          <textarea placeholder="Notes" className="w-full col-span-2 p-2 border rounded" />
        </div>
        <Button className="bg-blue-500 text-white p-2 rounded mb-4">Add New Product</Button>
        <textarea placeholder="Memo" className="w-full p-2 border rounded mb-2" />
        <Button className="bg-blue-500 text-white p-2 rounded mb-4">Attachments</Button>
        <DialogFooter className="flex justify-end space-x-4 mt-4">
          <Button className="bg-green-500 text-white p-2 rounded">Submit</Button>
          <Button className="bg-red-500 text-white p-2 rounded" onClick={closeDialog}>Cancel</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
