import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";
import careersCelebrate from "@/assets/careers-celebrate.jpg";
import careersFocused from "@/assets/careers-focused.jpg";

const jobOpenings = [
  {
    title: "Senior 3D Animator",
    department: "Animation",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Lead character animation projects and mentor junior animators. Bring stories to life with your exceptional animation skills."
  },
  {
    title: "VFX Compositor",
    department: "Visual Effects",
    location: "On-site",
    type: "Full-time",
    description: "Create stunning visual effects composites for film and advertising. Master of Nuke or After Effects required."
  },
  {
    title: "AI/ML Engineer",
    department: "AI Solutions",
    location: "Remote",
    type: "Full-time",
    description: "Develop AI-powered tools for content generation and automation. Shape the future of media production."
  },
  {
    title: "Motion Graphics Designer",
    department: "Motion Graphics",
    location: "Hybrid",
    type: "Full-time",
    description: "Design and animate compelling motion graphics for brands and entertainment. Strong design sense essential."
  },
  {
    title: "Technical Director",
    department: "Pipeline",
    location: "On-site",
    type: "Full-time",
    description: "Build and maintain our production pipeline. Python, Houdini, and problem-solving expertise required."
  },
  {
    title: "Junior Animator (Internship)",
    department: "Animation",
    location: "On-site",
    type: "Internship",
    description: "Learn from industry veterans and contribute to real projects. Perfect for recent graduates passionate about animation."
  }
];

const benefits = [
  "Competitive salary and equity options",
  "Health, dental, and vision insurance",
  "Flexible work arrangements",
  "Professional development budget",
  "Latest creative tools and hardware",
  "Collaborative studio environment",
  "Regular team events and workshops",
  "Unlimited creative coffee ☕"
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-vibrant bg-clip-text text-transparent uppercase">
            Join Our Creative Team
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-2">
            Help us craft the future of visual storytelling. We're looking for 
            talented, passionate individuals who want to push creative boundaries.
          </p>
        </div>
      </section>

      {/* Team Image */}
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={careersCelebrate} 
              alt="Creative team celebrating together"
              className="w-full h-64 sm:h-80 md:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 uppercase">Why SoutheastMedia?</h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "Work on Amazing Projects",
                description: "From blockbuster films to innovative startups, our projects span the spectrum of creative challenges."
              },
              {
                title: "Cutting-Edge Technology",
                description: "Access to the latest tools, software, and hardware. We invest in technology so you can focus on creativity."
              },
              {
                title: "Growth & Learning",
                description: "Continuous learning opportunities, mentorship programs, and support for your professional development."
              },
              {
                title: "Creative Freedom",
                description: "We value your ideas and give you the autonomy to experiment, innovate, and contribute to our collective success."
              }
            ].map((item, index) => (
              <div key={index} className="p-5 sm:p-6 rounded-lg sm:rounded-xl bg-card border border-border">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-primary">{item.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Environment Image */}
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={careersFocused} 
              alt="Creative professional focused at work"
              className="w-full h-64 sm:h-80 md:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 uppercase">Benefits & Perks</h2>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg bg-muted/50 border border-border"
              >
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 uppercase">Open Positions</h2>
          <div className="space-y-4 sm:space-y-6">
            {jobOpenings.map((job, index) => (
              <div 
                key={index}
                className="p-5 sm:p-6 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
                        {job.department}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                  <Button className="whitespace-nowrap text-sm sm:text-base w-full lg:w-auto">
                    Apply Now
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                  </Button>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Don't See Your Role?</h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 px-2">
            We're always looking for exceptional talent. Send us your portfolio and 
            let's explore how we can work together.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-sm sm:text-base">
            Send Your Portfolio
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;