import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  RiTestTubeLine,
  RiFlaskLine,
  RiTimerLine,
  RiHomeHeartLine,
} from "@remixicon/react";
import Link from "next/link";

export default function MedicalTests() {
  const tests = [
    {
      title: "Comprehensive Health Panel",
      testsCount: 65,
      price: "$99",
      originalPrice: "$150",
      fasting: "10-12 Hrs",
      reportTime: "24 Hrs",
      icon: <RiFlaskLine className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Basic Blood Test",
      testsCount: 24,
      price: "$49",
      originalPrice: "$80",
      fasting: "8 Hrs",
      reportTime: "12 Hrs",
      icon: <RiTestTubeLine className="w-6 h-6 text-red-500" />,
    },
    {
      title: "Diabetes Screening",
      testsCount: 12,
      price: "$39",
      originalPrice: "$60",
      fasting: "Not required",
      reportTime: "24 Hrs",
      icon: <RiTestTubeLine className="w-6 h-6 text-green-500" />,
    },
  ];

  return (
    <section id="medical-tests" className="bg-background">
      <div className="section">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              Book Medical Tests
            </h2>
            <p className="text-muted-foreground text-lg">
              Get tested from the comfort of your home. Free sample collection
              by trained professionals.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/tests">Explore All Tests</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tests.map((test, idx) => (
            <Card
              key={idx}
              className="flex flex-col hover:border-primary/50 hover:shadow-md transition-all"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4">
                  {test.icon}
                </div>
                <CardTitle className="text-xl">{test.title}</CardTitle>
                <p className="text-sm text-primary font-medium">
                  Includes {test.testsCount} tests
                </p>
              </CardHeader>
              <CardContent className="pb-4 flex-grow">
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <RiTimerLine className="w-4 h-4" />
                    <span>Report in {test.reportTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RiTestTubeLine className="w-4 h-4" />
                    <span>Fasting: {test.fasting}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RiHomeHeartLine className="w-4 h-4" />
                    <span>Free Home Collection</span>
                  </div>
                </div>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-foreground">
                    {test.price}
                  </span>
                  <span className="text-sm line-through text-muted-foreground">
                    {test.originalPrice}
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full rounded-full" asChild>
                  <Link href={`/tests/${idx}`}>Book Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
