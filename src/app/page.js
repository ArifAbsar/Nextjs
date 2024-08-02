"use client";
import { ActiveSectionProvider,useActiveSection } from './ActiveSectionContext';
import Layout from './components/base_layout';
import Requisition from './modules/Requisition';
import Dashboard from './dashboard/page';
import VendorSelection from './vendor-selection/page';
import PurchaseOrder from './purchase-order/page';
import FundRequisition from './fund-requisition/page';
import OverseasPurchase from './overseas-purchase/page';

export default function Home() {
  return (
    <ActiveSectionProvider>
      <HomeContent />
    </ActiveSectionProvider>
  );
}

function HomeContent() {
  const { activeSection } = useActiveSection();

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard': return <Dashboard />;
      case 'requisition': return <Requisition />;
      case 'vendor-selection': return <VendorSelection />;
      case 'purchase-order': return <PurchaseOrder />;
      case 'fund-requisition': return <FundRequisition />;
      case 'overseas-purchase': return <OverseasPurchase />;
      default: return <Dashboard />;
    }
  };

  return (
    <Layout>
      <div className="p-4">
        {renderSection()}
      </div>
    </Layout>
  );
}
