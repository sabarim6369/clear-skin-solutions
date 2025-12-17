import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MobileCTA } from "./MobileCTA";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16 md:pt-20 pb-16 md:pb-0">{children}</main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
