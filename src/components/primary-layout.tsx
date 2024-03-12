import SiteNotification from "@/components/site-notification";
import Navbar from "@/components/site-navbar";
import Footer from "@/components/site-footer";

const PrimaryLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <SiteNotification />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default PrimaryLayout;
