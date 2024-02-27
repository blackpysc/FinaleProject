import SideBar from "@/components/SideBar";

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen relative flex-col md:flex-row md:overflow-hidden">
      <div className="w-20 flex-none lg:w-64 md:border-r">
        <SideBar />
      </div>
      <div className="flex-grow mt-12 md:mt-0 flex-1 w-full md:overflow-y-auto sm:p-6 md:p-2 max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
}
