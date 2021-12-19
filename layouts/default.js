import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="main-set">
        <main className="min-page">{children}</main>
      </div>
      <Footer />
    </>
  );
}
