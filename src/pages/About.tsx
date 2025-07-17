
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Globe, Heart, Lightbulb } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Active Users", value: "2M+", icon: Users },
    { label: "Competitions Hosted", value: "10K+", icon: Award },
    { label: "Countries Reached", value: "150+", icon: Globe },
    { label: "Success Stories", value: "100K+", icon: Heart }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from the competitions we host to the opportunities we provide."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a strong, supportive community where everyone can learn, grow, and succeed together."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Fostering innovation and creativity through challenging competitions and cutting-edge opportunities."
    },
    {
      icon: Heart,
      title: "Empowerment",
      description: "Empowering individuals to reach their full potential through skill development and career advancement."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      description: "Former Google engineer with 10+ years in tech leadership.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      description: "Ex-Microsoft architect passionate about educational technology.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Community",
      description: "Community building expert with background in developer relations.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "David Kim",
      role: "Head of Partnerships",
      description: "Former venture capitalist with deep industry connections.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Collabium</h1>
            <p className="text-xl text-blue-100 mb-8">
              Empowering the next generation of innovators through competitions, hackathons, and career opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              At Collabium, we believe that talent exists everywhere, but opportunities don't. Our mission is to bridge this gap by creating a platform where students and professionals can discover, participate in, and excel through competitive programming, hackathons, and career opportunities.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're not just a platform – we're a community of dreamers, innovators, and achievers working together to build a better future through technology and collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Making a difference in the lives of millions worldwide</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-4">
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate individuals behind Collabium</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                Collabium was born from a simple observation: while talent is distributed equally around the world, opportunities are not. Our founders, having experienced this firsthand during their own careers, decided to build a platform that would democratize access to competitions, hackathons, and career opportunities.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                What started as a small project in 2020 has grown into a global community of over 2 million active users. We've hosted thousands of competitions, facilitated countless hackathons, and helped hundreds of thousands of individuals advance their careers.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Today, Collabium continues to evolve, always staying true to our core mission: empowering individuals to showcase their skills, learn from others, and build the careers they've always dreamed of.
              </p>
              <p className="text-lg leading-relaxed">
                But this is just the beginning. We're constantly working on new features, partnerships, and opportunities to serve our community better. Join us on this journey as we continue to Collabium potential worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Collabium Your Potential?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join millions of innovators, creators, and achievers in our global community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/register" 
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-blue-600 bg-white rounded-lg hover:bg-gray-100 transition-colors"
            >
              Join Our Community
            </a>
            <a 
              href="/competitions" 
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Opportunities
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
