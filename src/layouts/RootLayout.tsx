import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function RootLayout() {
  return (
    <div className="flex items-center min-h-screen flex-col pt-16">
      <Navbar />
      <main className="mb-6 p-4 max-w-(--max-width) flex-1 w-full overflow-x-clip">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
