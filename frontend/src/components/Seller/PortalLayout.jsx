import PortalSidebar from "./PortalSidebar";
import PortalHeader from "./PortalHeader";

const PortalLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50/50 flex w-full">
      <PortalSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <PortalHeader />

        <main className="flex-1 py-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PortalLayout;