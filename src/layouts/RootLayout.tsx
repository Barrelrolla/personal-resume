import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col items-center pt-12">
      <Navbar />
      <main className="mb-6 w-full max-w-(--max-width) flex-1 overflow-x-clip p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
