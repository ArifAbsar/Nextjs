"use client";
import Layout from '../components/base_layout'; // Corrected path
import Requisition from '../modules/Requisition';

export default function RequisitionPage() {
  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Requisition List</h1>
        <Requisition />
      </div>
    </Layout>
  );
}
