import Link from "next/link";
import { services } from "../_constant/services";

export default function Services() {
  return (
    <section className="section">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <h2 className="text-3xl md:text-4xl text-foreground font-light tracking-tight">
          What do you <span className="text-primary font-medium">need</span>
          <br />
          <span className="text-primary font-medium">today?</span>
        </h2>
        <p className="text-muted-foreground text-sm md:text-base pb-1">
          Start your care in just a few steps.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.href}
            className="group flex flex-col rounded-2xl border bg-card p-5 transition-all hover:shadow-md hover:border-primary/30"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform group-hover:scale-105">
              <service.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-1.5 text-sm font-semibold text-foreground">
              {service.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
