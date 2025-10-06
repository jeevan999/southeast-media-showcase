import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Users, Award, Globe, Zap } from "lucide-react";
import aboutCollaboration from "@/assets/about-collaboration.jpg";
import aboutStudio from "@/assets/about-studio.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-vibrant bg-clip-text text-transparent uppercase">
            About SoutheastMedia
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're a cutting-edge media studio combining the art of animation, 
            the power of visual effects, and the intelligence of AI to create 
            extraordinary visual experiences.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={aboutCollaboration} 
              alt="SoutheastMedia creative team collaborating"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h2 className="text-3xl font-bold mb-4 text-primary">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To transform creative visions into reality through innovative 
                technology and artistic excellence. We push the boundaries of 
                what's possible in visual storytelling, making the impossible 
                look effortless.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h2 className="text-3xl font-bold mb-4 text-primary">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the global leader in intelligent media production, where 
                human creativity and artificial intelligence work in perfect 
                harmony to create experiences that captivate, inspire, and 
                transform industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 uppercase">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Innovation",
                description: "Constantly pushing creative and technical boundaries"
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Delivering world-class quality in every project"
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "Working together to achieve extraordinary results"
              },
              {
                icon: Globe,
                title: "Impact",
                description: "Creating work that makes a meaningful difference"
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 group"
              >
                <value.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workspace Image */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={aboutStudio} 
              alt="Modern creative studio workspace"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Creative Professionals" },
              { number: "200+", label: "Projects Completed" },
              { number: "15+", label: "Years Experience" },
              { number: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-5xl font-bold bg-gradient-vibrant bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center uppercase">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded in 2010, SoutheastMedia began as a small animation studio 
              with a big dream: to create visual experiences that would leave 
              audiences breathless. What started with a team of five passionate 
              artists has grown into a powerhouse of over 50 creative professionals.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Over the years, we've evolved from traditional animation to embracing 
              cutting-edge technologies like real-time rendering, AI-assisted 
              production, and virtual production techniques. Our journey has been 
              marked by constant innovation and a refusal to settle for "good enough."
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we're proud to serve clients across the globe, from indie 
              creators to Fortune 500 companies, helping them tell their stories 
              in ways that captivate and inspire. But our mission remains the same: 
              to push the boundaries of what's possible in visual storytelling.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;