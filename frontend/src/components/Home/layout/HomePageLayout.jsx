import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ContactForm from "../Forms/ContactForm";
import Footer from "../Footer/Footer";
import GoToTop from "../GoToTop/GoToTop";
import Banner from "../Banner/Banner";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { ReactLenis } from "lenis/react";

const HomePageLayout = () => {
  const [openContactForm, setOpenContactForm] = useState(false);

  const updateContactFormState = () => {
    setOpenContactForm((prev) => !prev);
  };

  return (
    <ReactLenis root options={{ smoothWheel: true, duration: 2 }}>
      <div className="min-h-screen">
        <main className="flex flex-col min-h-screen relative w-screen">
          <Navbar updateContactFormState={updateContactFormState} />
          <div className="w-full">
            <Outlet />
          </div>

          <Banner title={"Secure"} subtitle={"Your Child's Future."} />
          <div></div>
          {/* Footer */}
          <Footer />
          <MessengerCustomerChat
            pageId="1036734299809129"
            appId=" 315808918101657"
          />

          {/* Contact form */}
          <ContactForm
            openContactForm={openContactForm}
            updateContactFormState={updateContactFormState}
          />
        </main>{" "}
        {/* Go to top button */}
        <GoToTop />{" "}
      </div>
    </ReactLenis>
  );
};

export default HomePageLayout;
