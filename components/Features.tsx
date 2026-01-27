import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  image: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, image }) => (
  <div className="glass-card relative overflow-hidden p-8 lg:p-12 group h-[500px] lg:h-[550px] flex flex-col justify-end">
    <img 
      src={image} 
      alt={title} 
      className="card-image-bg object-cover w-full h-full absolute inset-0 transition-transform duration-700 group-hover:scale-110" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
    <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
      <span className="material-symbols-outlined text-primary mb-6 lg:mb-8 text-5xl font-light">{icon}</span>
      <h4 className="text-2xl lg:text-3xl text-white font-serif mb-4 lg:mb-6">{title}</h4>
      <p className="text-base lg:text-lg text-white/60 leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity">
        {description}
      </p>
    </div>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      title: "Stable Minting",
      description: "Mathematical precision backed by vault-secured bullion reserves at scale.",
      icon: "account_balance",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUZn7CVjhGcgp9FjqntCsQ3tKQqZTs7NK4BmmIp027VBFda6T9YzR5Bb9IPcCrDp9ZU-GgA6EdmIYOFu6UgfUNzQJIyRzrcb8Ly9Qkc8MQP0nfmB0h4oHI8jcMY759GH3LHJuELjiLZOc2s6wRum5y12jt5jf1Luy5HmwDlP8TJcXiI6B586tO1mD5x9YDcg1KLKvMW21hqT8dF8xNRWVcqOp1jHSIpkq-h2UJOJXEQwNNKkyGWKk1UhUbneoElJCCFlElJDqojg"
    },
    {
      title: "Omnichain",
      description: "Fluid mobility across fragmented liquidity layers and legacy banking systems.",
      icon: "schema",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQbrXqZtpY8QpKl6y5n0AJZ0PX9-srdvwVjX4miaC9DAXCaBYGAj-EERdb1HgCyH1hsf4KRyikXCMezQb4VphPJ1MMaNE189tfTMYn7Cr0uv--hgg7WP6R-BijCuXmrur4iN1XEB_3ZN7eFwwxWG7G8ZEGFRU4gIRqfdl3c5RPlkNCRz6yuc4_jdUXOrqsxeqeAINbgLpLgp2qfRpekDJuCtiJjRM7UutWmNwmwNmlvuCEWPAb5oDExos_JhWaoHZQE7NqHxIOSQ"
    },
    {
      title: "Vertical Sharding",
      description: "Advanced scaling techniques optimized for high-frequency institutional settlement.",
      icon: "grid_view",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuelbvBQc_itq1zs6dKXQFk9o9iZ0exYknIMS9yLJ2zNgYIhH8GNrtWamGJDm42UJLCr4lGwMu6zDakmNS2GRx6gYoayfo3wGw_sBoyQf2oZTDixIb710H-3TTL9crpdQmI4R4Lq6cJR5MJiPZuhHPx1P3_rxWPrso72fo4kv1UerKRTI6cfessVjoFyf4D00dYCn17RdLwcRkfyMj86WC4L41O5VZxfa84i1GufitGoWGmniwVwomr5EobXaXlCXUqj_Lx9a-3Q"
    },
    {
      title: "Governance",
      description: "Community-driven adjustments within a fixed, sovereign legal framework.",
      icon: "gavel",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUZn7CVjhGcgp9FjqntCsQ3tKQqZTs7NK4BmmIp027VBFda6T9YzR5Bb9IPcCrDp9ZU-GgA6EdmIYOFu6UgfUNzQJIyRzrcb8Ly9Qkc8MQP0nfmB0h4oHI8jcMY759GH3LHJuELjiLZOc2s6wRum5y12jt5jf1Luy5HmwDlP8TJcXiI6B586tO1mD5x9YDcg1KLKvMW21hqT8dF8xNRWVcqOp1jHSIpkq-h2UJOJXEQwNNKkyGWKk1UhUbneoElJCCFlElJDqojg"
    }
  ];

  return (
    <section className="py-32 lg:py-48 px-8 bg-charcoal" id="institutional">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-24 lg:mb-32 text-center md:text-left">
          <h2 className="text-sm font-display tracking-[0.6em] text-primary uppercase mb-8 font-bold">Core Infrastructure</h2>
          <h3 className="text-4xl md:text-6xl lg:text-8xl font-serif text-white font-light">Institutional Foundation</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;