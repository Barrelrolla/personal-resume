import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col pt-16">
      <Navbar />
      <main className="mx-auto mb-6 max-w-(--max-width) flex-1 overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
