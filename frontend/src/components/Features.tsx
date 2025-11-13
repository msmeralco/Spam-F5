import { PieChart, Crown, Users } from "lucide-react";

const features = [
  {
    icon: PieChart,
    title: "Real-Time Insights Preview",
    description: "Get instant visibility into your energy consumption and savings with live analytics.",
    detail: "See your own numbers live.",
  },
  {
    icon: Crown,
    title: "Rewards & Token System",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo ornare.",
    detail: "Start earning tokens today.",
  },
  {
    icon: Users,
    title: "Community Impact Tracker",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo ornare.",
    detail: "Join households building a low-carbon future.",
  },
];

const Features = () => {
  return (
    <section className="relative py-24 px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sinag-dark via-sinag-dark-secondary to-sinag-dark" />
      
      <div className="relative z-10 container mx-auto">
        {/* Section Header */}
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-b from-sinag-text via-sinag-text/90 to-sinag-text/80 bg-clip-text text-transparent">
          Light up your world with<br />
          Sinag's core features
        </h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative h-72 rounded-2xl backdrop-blur-md bg-glass-bg/5 border border-glass-border/10 p-8 hover:bg-glass-bg/10 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex p-3 rounded-lg bg-sinag-orange-start/10">
                  <feature.icon className="w-6 h-6 text-sinag-orange-start" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-sinag-text mb-4">
                {feature.title}
              </h3>
              <p className="text-sm text-sinag-text-muted/60 mb-6">
                {feature.description}
              </p>
              <p className="text-sm text-sinag-text-muted/80">
                {feature.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
