import React from "react";
import DarkHeaders from "../../components/header/DarkHeaders";
import ContactLayoutOne from "./contactSections/ContactLayoutOne";
import ContactLayoutTwo from "./contactSections/ContactLayoutTwo";
import Footer from "../../components/footer/Footer";

export default function ContactUs() {
  return (
    <>
      <DarkHeaders />
      <section class="google-map py-0">
        <div id="map" class="height-500"></div>
        <script src="assets/js/google-map.js"></script>
        <script
          src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
          async
          defer></script>
      </section>
      <ContactLayoutOne />
      <ContactLayoutTwo />
      <Footer />
    </>
  );
}
