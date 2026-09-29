import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";

const RootLayoutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default RootLayoutLayout;
