
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, DollarSign, Clock, Building, Search, Briefcase } from "lucide-react";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedExperience, setSelectedExperience] = useState("all");

  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Google",
      description: "Join our team to build scalable systems that serve billions of users worldwide. Work with cutting-edge technologies and solve complex problems.",
      location: "Mountain View, CA",
      salary: "$180,000 - $250,000",
      type: "Full-time",
      experience: "5+ years",
      skills: ["JavaScript", "Python", "Go", "Kubernetes"],
      posted: "2 days ago",
      applicants: "50+ applicants"
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Microsoft",
      description: "Lead product strategy and development for our cloud services. Collaborate with engineering teams to deliver exceptional user experiences.",
      location: "Seattle, WA",
      salary: "$150,000 - $200,000",
      type: "Full-time",
      experience: "3+ years",
      skills: ["Product Strategy", "Data Analysis", "Agile", "Leadership"],
      posted: "1 day ago",
      applicants: "30+ applicants"
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Amazon",
      description: "Work with large datasets to derive insights and build machine learning models that power our recommendation systems.",
      location: "New York, NY",
      salary: "$140,000 - $190,000",
      type: "Full-time",
      experience: "2+ years",
      skills: ["Python", "Machine Learning", "SQL", "Statistics"],
      posted: "3 days ago",
      applicants: "75+ applicants"
    },
    {
      id: 4,
      title: "Frontend Developer",
      company: "Meta",
      description: "Build responsive and interactive user interfaces for our social media platforms using React and modern web technologies.",
      location: "San Francisco, CA",
      salary: "$130,000 - $180,000",
      type: "Full-time",
      experience: "2+ years",
      skills: ["React", "TypeScript", "CSS", "Redux"],
      posted: "1 week ago",
      applicants: "100+ applicants"
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "Netflix",
      description: "Manage and optimize our cloud infrastructure to ensure high availability and performance of our streaming services.",
      location: "Los Gatos, CA",
      salary: "$160,000 - $210,000",
      type: "Full-time",
      experience: "4+ years",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
      posted: "5 days ago",
      applicants: "40+ applicants"
    },
    {
      id: 6,
      title: "UX Designer",
      company: "Apple",
      description: "Design intuitive and beautiful user experiences for our consumer products. Work closely with product teams to create innovative solutions.",
      location: "Cupertino, CA",
      salary: "$120,000 - $160,000",
      type: "Full-time",
      experience: "3+ years",
      skills: ["Figma", "Sketch", "Prototyping", "User Research"],
      posted: "4 days ago",
      applicants: "60+ applicants"
    },
    {
      id: 7,
      title: "Machine Learning Engineer",
      company: "Tesla",
      description: "Develop ML models for autonomous driving systems. Work with computer vision and deep learning technologies.",
      location: "Palo Alto, CA",
      salary: "$170,000 - $220,000",
      type: "Full-time",
      experience: "4+ years",
      skills: ["PyTorch", "TensorFlow", "Computer Vision", "C++"],
      posted: "2 days ago",
      applicants: "80+ applicants"
    },
    {
      id: 8,
      title: "Software Engineer Intern",
      company: "Spotify",
      description: "Summer internship opportunity to work on music recommendation algorithms and user-facing features.",
      location: "New York, NY",
      salary: "$8,000/month",
      type: "Internship",
      experience: "0-1 years",
      skills: ["Java", "Scala", "React", "Data Structures"],
      posted: "1 week ago",
      applicants: "200+ applicants"
    }
  ];

  const locations = ["all", "Mountain View, CA", "Seattle, WA", "New York, NY", "San Francisco, CA", "Los Gatos, CA", "Cupertino, CA", "Palo Alto, CA"];
  const types = ["all", "Full-time", "Part-time", "Contract", "Internship"];
  const experiences = ["all", "0-1 years", "2+ years", "3+ years", "4+ years", "5+ years"];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === "all" || job.location === selectedLocation;
    const matchesType = selectedType === "all" || job.type === selectedType;
    const matchesExperience = selectedExperience === "all" || job.experience === selectedExperience;
    
    return matchesSearch && matchesLocation && matchesType && matchesExperience;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time": return "text-green-600 border-green-600";
      case "Part-time": return "text-blue-600 border-blue-600";
      case "Contract": return "text-orange-600 border-orange-600";
      case "Internship": return "text-purple-600 border-purple-600";
      default: return "text-gray-600 border-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Job Opportunities</h1>
            <p className="text-xl text-green-100">
              Discover your next career opportunity with top companies worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto flex-1">
              <div className="relative flex-1 lg:max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent className="bg-white border shadow-lg">
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>
                      {location === "all" ? "All Locations" : location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent className="bg-white border shadow-lg">
                  {types.map(type => (
                    <SelectItem key={type} value={type}>
                      {type === "all" ? "All Types" : type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent className="bg-white border shadow-lg">
                  {experiences.map(experience => (
                    <SelectItem key={experience} value={experience}>
                      {experience === "all" ? "All Levels" : experience}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="text-gray-600">
              {filteredJobs.length} jobs found
            </div>
          </div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md bg-white">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <Badge variant="outline" className={getTypeColor(job.type)}>
                          {job.type}
                        </Badge>
                      </div>
                      <CardDescription className="text-gray-600 font-medium flex items-center gap-2 mb-2">
                        <Building className="h-4 w-4" />
                        {job.company}
                      </CardDescription>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {job.salary}
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {job.experience}
                        </div>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-sm text-gray-500 mb-1">{job.posted}</div>
                      <div className="text-sm text-gray-500">{job.applicants}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button className="bg-gradient-to-r from-green-600 to-blue-600 text-white flex-1">
                      Apply Now
                    </Button>
                    <Button variant="outline" className="flex-1 sm:flex-initial">
                      Save Job
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Briefcase className="h-16 w-16 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No jobs found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Jobs;
