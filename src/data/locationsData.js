// Locations and branch details
import { businessDetails } from '../config/businessDetails';

export const locationsData = [
  {
    slug: "ahmedabad",
    name: "Sarvamangal IVF Ahmedabad",
    title: "IVF Centre in Ahmedabad",
    address: businessDetails.address,
    phone: businessDetails.phone,
    whatsapp: businessDetails.whatsapp,
    hours: businessDetails.openingHours,
    mapEmbedUrl: businessDetails.googleMapsEmbedUrl,
    directionsUrl: businessDetails.mapsLink,
    description: "Our primary, state-of-the-art clinic in Ahmedabad, equipped with a comprehensive embryology laboratory, warm consultation rooms, and comfortable recovery areas. We offer full diagnostic and fertility treatments under one roof.",
    highlights: [
      "Full-service Embryology Lab",
      "Private Consultation Rooms",
      "Dedicated Infertility Counselling",
      "Centrally Located with Easy Parking"
    ]
  },
  {
    slug: "shyamal",
    name: "Sarvamangal IVF Shyamal",
    title: "IVF Centre in Shyamal",
    address: "Jyoti Complex, NH228, Shyamal Cross Road, Near Shyamal Flyover, Shyamal, Ahmedabad, Gujarat 380013",
    phone: businessDetails.phone,
    whatsapp: businessDetails.whatsapp,
    hours: businessDetails.openingHours,
    mapEmbedUrl: businessDetails.googleMapsEmbedUrl,
    directionsUrl: businessDetails.mapsLink,
    description: "Centrally positioned near the Shyamal Flyover, our Shyamal branch provides premium consultation services, fertility testing, IUI procedures, and continuous pregnancy monitoring in a warm, welcoming environment.",
    highlights: [
      "Convenient Location near Shyamal Flyover",
      "IUI and Monitoring Unit",
      "Comfortable Consultation Suite",
      "Homelike Patient Waiting Lounge"
    ]
  }
];
