import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";
import careersTeam from "@/assets/careers-team.jpg";
import careersWork from "@/assets/careers-work.jpg";

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
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-vibrant bg-clip-text text-transparent">
            Join Our Creative Team
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Help us craft the future of visual storytelling. We're looking for 
            talented, passionate individuals who want to push creative boundaries.
          </p>
        </div>
      </section>

      {/* Team Image */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={careersTeam} 
              alt="Creative team brainstorming together"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Why SoutheastMedia?</h2>
          <div className="grid md:grid-cols-2 gap-8">
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
              <div key={index} className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Environment Image */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={careersWork} 
              alt="Creative professional at work"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Benefits & Perks</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border border-border"
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Open Positions</h2>
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                  <Button className="whitespace-nowrap">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <p className="text-muted-foreground">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Role?</h2>
          <p className="text-muted-foreground mb-8">
            We're always looking for exceptional talent. Send us your portfolio and 
            let's explore how we can work together.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Send Your Portfolio
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;