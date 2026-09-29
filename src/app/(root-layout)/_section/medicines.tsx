import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  RiShoppingBag3Line,
  RiTruckLine,
  RiShieldCheckLine,
} from "@remixicon/react";
import Link from "next/link";
import Image from "next/image";

export default function Medicines() {
  const medicines = [
    {
      name: "Napa 500mg Tablet",
      brand: "Beximco Pharma",
      price: "৳ 12.00",
      oldPrice: "৳ 15.00",
      discount: "20% OFF",
      type: "OTC",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=200&h=200",
    },
    {
      name: "Seclo 20mg Capsule",
      brand: "Square Pharma",
      price: "৳ 60.00",
      oldPrice: "৳ 70.00",
      discount: "14% OFF",
      type: "Rx",
      image:
        "https://images.unsplash.com/photo-1550572017-edb7342fb6e2?auto=format&fit=crop&q=80&w=200&h=200",
    },
    {
      name: "Fexo 120mg Tablet",
      brand: "Square Pharma",
      price: "৳ 80.00",
      oldPrice: "",
      discount: "",
      type: "OTC",
      image:
        "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=200&h=200",
    },
    {
      name: "Maxpro 20mg Tablet",
      brand: "Renata Limited",
      price: "৳ 70.00",
      oldPrice: "৳ 85.00",
      discount: "17% OFF",
      type: "Rx",
      image:
        "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=200&h=200",
    },
  ];

  return (
    <section id="medicines" className="bg-muted/30">
      <div className="section">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              Order Medicines Online
            </h2>
            <div className="flex flex-wrap items-center gap-5 text-muted-foreground text-sm font-medium mt-3">
              <div className="flex items-center gap-1.5">
                <RiShieldCheckLine className="w-5 h-5 text-green-500" />
                100% Genuine Medicines
              </div>
              <div className="flex items-center gap-1.5">
                <RiTruckLine className="w-5 h-5 text-blue-500" />
                Super Fast Delivery
              </div>
            </div>
          </div>
          <Button variant="outline" asChild className="rounded-full px-6">
            <Link href="/pharmacy">Go to Pharmacy</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {medicines.map((medicine, idx) => (
            <Card
              key={idx}
              className="flex flex-col border border-border/50 hover:border-primary/50 bg-background/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 overflow-hidden group relative"
            >
              {medicine.discount && (
                <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider shadow-sm">
                  {medicine.discount}
                </div>
              )}
              <div className="absolute top-3 right-3 z-10 bg-muted text-muted-foreground text-[10px] font-bold px-2 py-0.5 rounded-sm">
                {medicine.type}
              </div>

              <div className="relative h-44 w-full bg-white flex items-center justify-center p-6 group-hover:bg-primary/5 transition-colors duration-500">
                <Image
                  src={medicine.image}
                  alt={medicine.name}
                  fill
                  className="object-contain p-6 group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
                />
              </div>

              <CardHeader className="p-4 pb-2 border-t border-border/40 flex-grow bg-background">
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                  {medicine.brand}
                </p>
                <h3 className="font-bold text-sm sm:text-base leading-snug line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                  {medicine.name}
                </h3>
              </CardHeader>

              <CardContent className="p-4 pt-0 bg-background">
                <div className="flex items-center gap-2 mt-1">
                  <p className="font-extrabold text-lg sm:text-xl text-primary">
                    {medicine.price}
                  </p>
                  {medicine.oldPrice && (
                    <p className="text-xs sm:text-sm text-muted-foreground line-through font-medium">
                      {medicine.oldPrice}
                    </p>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0 bg-background">
                <Button
                  className="w-full rounded-lg font-semibold shadow-sm group-hover:shadow-md transition-all flex items-center justify-center gap-2"
                  size="sm"
                  asChild
                >
                  <Link href={`/pharmacy/${idx}`}>
                    <RiShoppingBag3Line className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
