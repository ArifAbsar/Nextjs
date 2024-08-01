// pages/index.js
"use client";
import Layout from './components/base_layout';
import Requisition from './modules/Requisition';
export default function Home() {
  return (
    <Layout>
     <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Requisition List</h1>
      <Requisition />
    </div>
    </Layout>
  );
}
