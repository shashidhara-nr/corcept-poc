import { ReactNode } from "react";
import AnnouncementBar from "../components/organisms/AnnouncementBar";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* <AnnouncementBar /> */}
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
