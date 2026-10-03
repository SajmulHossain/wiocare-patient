import { ECOSYSTEM_DATA } from "../_constant/ecosystem";
import { cn } from "cn";

export default function Ecosystem() {
  return (
    <section className="bg-primary/5 py-16 md:py-24">
      <div className="section">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            The WioCare Ecosystem
          </h4>
          <h2 className="mb-6 text-3xl font-light leading-tight text-foreground md:text-5xl">
            One platform for your complete
            <br className="hidden md:block" /> healthcare journey.
          </h2>
          <p className="text-base text-muted-foreground md:text-lg">
            From understanding your health to treatment and follow-up, WioCare
            keeps every step connected.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ECOSYSTEM_DATA.map((item, index) => (
            <div
              key={index}
              className={cn(
                "group flex min-h-75 flex-col justify-between rounded-[2rem] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                item.highlighted
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-foreground border shadow-sm hover:border-primary/30",
              )}
            >
              <div className="flex items-start justify-between">
                <span
                  className={cn(
                    "text-sm font-bold",
                    item.highlighted
                      ? "text-primary-foreground/80"
                      : "text-primary",
                  )}
                >
                  {item.number}
                </span>
                <div
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110",
                    item.highlighted
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-primary text-primary-foreground",
                  )}
                >
                  <item.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-8">
                <h3 className="mb-3 text-2xl font-light">{item.title}</h3>
                <p
                  className={cn(
                    "text-sm leading-relaxed",
                    item.highlighted
                      ? "text-primary-foreground/90"
                      : "text-muted-foreground",
                  )}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
