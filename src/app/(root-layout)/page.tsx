import Hero from "./_section/hero";
import Services from "./_section/services";
import Ecosystem from "./_section/ecosystem";
import Hospitals from "./_section/hospitals";
import Doctors from "./_section/doctors";
import MedicalTests from "./_section/medical-tests";
import Medicines from "./_section/medicines";
import CTA from "./_section/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Ecosystem />
      <Doctors />
      <MedicalTests />
      <Medicines />
      <Hospitals />
      <CTA />
    </>
  );
}
