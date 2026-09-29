import Hero from "./_section/hero";
import Doctors from "./_section/doctors";
import MedicalTests from "./_section/medical-tests";
import Medicines from "./_section/medicines";
import CTA from "./_section/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Doctors />
      <MedicalTests />
      <Medicines />
      <CTA />
    </>
  );
}
