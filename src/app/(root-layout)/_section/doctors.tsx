import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  RiStarFill,
  RiMapPinLine,
  RiVerifiedBadgeFill,
} from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

export default function Doctors() {
  const doctors = [
    {
      name: "Dr. Shafiqul Islam",
      specialty: "Cardiology",
      degrees: "MBBS, MD (Cardiology), FCPS",
      experience: "15+ Years",
      patients: "2000+",
      rating: 4.9,
      reviews: 128,
      location: "Labaid Cardiac Hospital",
      fee: "৳ 1500",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=400",
    },
    {
      name: "Dr. Hasan Mahmud",
      specialty: "Dermatology",
      degrees: "MBBS, DDV, MCPS (Dermatology)",
      experience: "10+ Years",
      patients: "1500+",
      rating: 4.8,
      reviews: 93,
      location: "Square Hospital, Dhaka",
      fee: "৳ 1200",
      image:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400&h=400",
    },
    {
      name: "Dr. Tariq Rahman",
      specialty: "Pediatrics",
      degrees: "MBBS, FCPS (Pediatrics), MD",
      experience: "12+ Years",
      patients: "3000+",
      rating: 5.0,
      reviews: 215,
      location: "Evercare Hospital",
      fee: "৳ 1000",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=400",
    },
    {
      name: "Dr. Mahmudul Hasan",
      specialty: "Neurology",
      degrees: "MBBS, MD (Neurology), PhD",
      experience: "18+ Years",
      patients: "1200+",
      rating: 4.7,
      reviews: 84,
      location: "Dhaka Medical College",
      fee: "৳ 2000",
      image:
        "https://images.unsplash.com/photo-1612276529731-4b21494e6d71?auto=format&fit=crop&q=80&w=400&h=400",
    },
  ];

  return (
    <section id="doctors" className="bg-muted/30">
      <div className="section">
        <div className="flex justify-between items-end mb-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight mb-3">
              Book an Appointment
            </h2>
            <p className="text-muted-foreground text-lg">
              Consult with Bangladesh's top-rated specialists for personalized care.
            </p>
          </div>
          <Button variant="outline" asChild className="hidden sm:inline-flex rounded-full px-6">
            <Link href="/doctors">View All Doctors</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, idx) => (
            <Card
              key={idx}
              className="relative flex flex-col bg-card hover:shadow-xl transition-all duration-300 border border-border/60 rounded-2xl overflow-hidden group hover:border-primary/50"
            >
              <Link href={`/doctors/${idx}`} className="absolute inset-0 z-10">
                <span className="sr-only">View {doctor.name}</span>
              </Link>

              <CardHeader className="p-5 pb-4">
                <div className="flex gap-4 items-start">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 border-2 border-primary/20 p-0.5">
                    <div className="w-full h-full rounded-full overflow-hidden relative bg-muted">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full z-20"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-tight flex items-center gap-1 group-hover:text-primary transition-colors">
                      {doctor.name}
                      <RiVerifiedBadgeFill className="w-4 h-4 text-blue-500 shrink-0" />
                    </h3>
                    <p className="text-primary font-medium text-sm mt-1">
                      {doctor.specialty}
                    </p>
                    <p className="text-muted-foreground text-xs mt-1 line-clamp-2 leading-relaxed">
                      {doctor.degrees}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-5 pt-0 text-sm text-muted-foreground grid grid-cols-2 gap-y-4 gap-x-2">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70 mb-1">
                    Experience
                  </span>
                  <span className="font-semibold text-foreground">
                    {doctor.experience}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70 mb-1">
                    Patients
                  </span>
                  <span className="font-semibold text-foreground flex items-center gap-1">
                    {doctor.patients}
                  </span>
                </div>

                <div className="col-span-2 bg-muted/40 rounded-xl p-3 mt-1 flex items-start gap-2.5">
                  <RiMapPinLine className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="font-medium text-foreground text-xs leading-snug">
                    Working in <br />
                    <span className="font-bold">{doctor.location}</span>
                  </span>
                </div>
              </CardContent>

              <CardFooter className="p-5 pt-0 flex-col gap-4 mt-auto relative z-20 pointer-events-none">
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-1 bg-yellow-400/20 text-yellow-700 px-2.5 py-1 rounded-md text-xs font-bold">
                    <RiStarFill className="w-3.5 h-3.5 text-yellow-600" />
                    {doctor.rating}
                    <span className="font-medium opacity-70 ml-0.5">
                      ({doctor.reviews})
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5">
                      Consultation Fee
                    </div>
                    <div className="font-extrabold text-lg text-primary leading-none">
                      {doctor.fee}
                    </div>
                  </div>
                </div>
                <Button
                  className="w-full rounded-xl font-semibold shadow-sm hover:shadow-md transition-all group-hover:bg-primary group-hover:text-primary-foreground pointer-events-auto"
                >
                  Book Appointment
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button variant="outline" asChild className="w-full rounded-full">
            <Link href="/doctors">View All Doctors</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
