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

  // State for form fields
  const [creatorName, setCreatorName] = useState("");
  const [requisitionDate, setRequisitionDate] = useState("");
  const [project, setProject] = useState("");
  const [business, setBusiness] = useState("");
  const [productName, setProductName] = useState("");
  const [unit, setUnit] = useState("");
  const [rate, setRate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitBag, setUnitBag] = useState("");
  const [noOfBag, setNoOfBag] = useState("");
  const [amount, setAmount] = useState("");
  const [vat, setVat] = useState("");
  const [vatAmount, setVatAmount] = useState("");
  const [expectedDeliveryDate, setExpectedDeliveryDate] = useState("");
  const [stockOnHand, setStockOnHand] = useState("");
  const [notes, setNotes] = useState("");
  const [memo, setMemo] = useState("");

  const closeDialog = () => {
    setIsOpen(false);
  };

  const handleSubmit = () => {
    const newRequisition = {
      date: requisitionDate,
      requisitionNo: `PR-${new Date().getFullYear()}-${Math.floor(Math.random() * 10000)}`,
      project,
      department: "Local",
      total: amount,
      memo,
      status: "waiting"
    };

    // Log the form data to the console
    console.log(newRequisition);

    
    closeDialog();
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
          <Input placeholder="Creator Name" value={creatorName} onChange={(e) => setCreatorName(e.target.value)} className="w-full" />
          <Input type="date" placeholder="Requisition Date" value={requisitionDate} onChange={(e) => setRequisitionDate(e.target.value)} className="w-full" />
          <Input placeholder="Project" value={project} onChange={(e) => setProject(e.target.value)} className="w-full" />
          <Input placeholder="Business" value={business} onChange={(e) => setBusiness(e.target.value)} className="w-full" />
          <Input placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} className="w-full" />
          <Input placeholder="Unit" value={unit} onChange={(e) => setUnit(e.target.value)} className="w-full" />
          <Input placeholder="Rate" value={rate} onChange={(e) => setRate(e.target.value)} className="w-full" />
          <Input placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="w-full" />
          <Input placeholder="Unit/Bag" value={unitBag} onChange={(e) => setUnitBag(e.target.value)} className="w-full" />
          <Input placeholder="No of Bag" value={noOfBag} onChange={(e) => setNoOfBag(e.target.value)} className="w-full" />
          <Input placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full" />
          <Input placeholder="VAT" value={vat} onChange={(e) => setVat(e.target.value)} className="w-full" />
          <Input placeholder="VAT Amount" value={vatAmount} onChange={(e) => setVatAmount(e.target.value)} className="w-full" />
          <Input placeholder="Expected Delivery Date" type="date" value={expectedDeliveryDate} onChange={(e) => setExpectedDeliveryDate(e.target.value)} className="w-full" />
          <Input placeholder="Stock On Hand" value={stockOnHand} onChange={(e) => setStockOnHand(e.target.value)} className="w-full" />
          <textarea placeholder="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full col-span-2 p-2 border rounded" />
        </div>
        <Button className="bg-blue-500 text-white p-2 rounded mb-4">Add New Product</Button>
        <textarea placeholder="Memo" value={memo} onChange={(e) => setMemo(e.target.value)} className="w-full p-2 border rounded mb-2" />
        <Button className="bg-blue-500 text-white p-2 rounded mb-4">Attachments</Button>
        <DialogFooter className="flex justify-end space-x-4 mt-4">
          <Button className="bg-green-500 text-white p-2 rounded" onClick={handleSubmit}>Submit</Button>
          <Button className="bg-red-500 text-white p-2 rounded" onClick={closeDialog}>Cancel</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
