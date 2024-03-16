import Header from "@/components/Header";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default HomeLayout;
