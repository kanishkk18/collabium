
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Trophy, Users, Clock, Search } from "lucide-react";

const Hackathons = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");

  const hackathons = [
    {
      id: 1,
      title: "Global Innovation Hackathon 2024",
      organizer: "Innovation Hub",
      description: "48-hour hackathon focusing on sustainable technology solutions for environmental challenges.",
      prize: "$100,000",
      participants: "5,000+",
      startDate: "Dec 20, 2024",
      endDate: "Dec 22, 2024",
      duration: "48 hours",
      type: "Online",
      location: "Virtual",
      tags: ["Sustainability", "Environment", "Innovation"],
      status: "Open",
      teamSize: "2-4 members"
    },
    {
      id: 2,
      title: "FinTech Revolution Hackathon",
      organizer: "FinTech Corp",
      description: "Build the next generation of financial technology solutions and payment systems.",
      prize: "$75,000",
      participants: "3,500+",
      startDate: "Jan 10, 2025",
      endDate: "Jan 12, 2025",
      duration: "48 hours",
      type: "Hybrid",
      location: "San Francisco, CA",
      tags: ["FinTech", "Blockchain", "Payments"],
      status: "Open",
      teamSize: "2-5 members"
    },
    {
      id: 3,
      title: "HealthTech Innovation Challenge",
      organizer: "MedTech Solutions",
      description: "Create innovative healthcare solutions using AI and IoT technologies.",
      prize: "$60,000",
      participants: "2,800+",
      startDate: "Jan 25, 2025",
      endDate: "Jan 26, 2025",
      duration: "24 hours",
      type: "In-person",
      location: "Boston, MA",
      tags: ["HealthTech", "AI", "IoT"],
      status: "Open",
      teamSize: "3-6 members"
    },
    {
      id: 4,
      title: "EdTech Future Summit",
      organizer: "Education First",
      description: "Develop educational technologies that enhance learning experiences for students worldwide.",
      prize: "$50,000",
      participants: "4,200+",
      startDate: "Feb 8, 2025",
      endDate: "Feb 10, 2025",
      duration: "72 hours",
      type: "Online",
      location: "Virtual",
      tags: ["EdTech", "Learning", "Innovation"],
      status: "Open",
      teamSize: "2-4 members"
    },
    {
      id: 5,
      title: "Gaming & VR Experience Hack",
      organizer: "GameDev Studios",
      description: "Create immersive gaming experiences using VR/AR technologies and modern game engines.",
      prize: "$40,000",
      participants: "1,500+",
      startDate: "Feb 15, 2025",
      endDate: "Feb 16, 2025",
      duration: "36 hours",
      type: "In-person",
      location: "Los Angeles, CA",
      tags: ["Gaming", "VR/AR", "Unity"],
      status: "Open",
      teamSize: "2-5 members"
    },
    {
      id: 6,
      title: "Smart City Solutions Hackathon",
      organizer: "Urban Tech",
      description: "Design smart city solutions for traffic management, energy efficiency, and urban planning.",
      prize: "$80,000",
      participants: "6,000+",
      startDate: "Mar 1, 2025",
      endDate: "Mar 3, 2025",
      duration: "48 hours",
      type: "Hybrid",
      location: "New York, NY",
      tags: ["Smart Cities", "IoT", "Urban Planning"],
      status: "Coming Soon",
      teamSize: "3-6 members"
    }
  ];

  const types = ["all", "Online", "In-person", "Hybrid"];
  const durations = ["all", "24 hours", "36 hours", "48 hours", "72 hours"];

  const filteredHackathons = hackathons.filter(hackathon => {
    const matchesSearch = hackathon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hackathon.organizer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hackathon.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || hackathon.type === selectedType;
    const matchesDuration = selectedDuration === "all" || hackathon.duration === selectedDuration;
    
    return matchesSearch && matchesType && matchesDuration;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return "bg-green-100 text-green-800 border-green-200";
      case "Coming Soon": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Closed": return "bg-gray-100 text-gray-800 border-gray-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Online": return "text-blue-600 border-blue-600";
      case "In-person": return "text-green-600 border-green-600";
      case "Hybrid": return "text-purple-600 border-purple-600";
      default: return "text-gray-600 border-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Hackathons</h1>
            <p className="text-xl text-purple-100">
              Join collaborative coding events and build innovative solutions with like-minded developers
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
                  placeholder="Search hackathons..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent className="bg-white border shadow-lg">
                  {types.map(type => (
                    <SelectItem key={type} value={type}>
                      {type === "all" ? "All Types" : type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent className="bg-white border shadow-lg">
                  {durations.map(duration => (
                    <SelectItem key={duration} value={duration}>
                      {duration === "all" ? "All Durations" : duration}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="text-gray-600">
              {filteredHackathons.length} hackathons found
            </div>
          </div>
        </div>
      </section>

      {/* Hackathons Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHackathons.map((hackathon) => (
              <Card key={hackathon.id} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md bg-white">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className={getTypeColor(hackathon.type)}>
                      {hackathon.type}
                    </Badge>
                    <Badge className={getStatusColor(hackathon.status)}>
                      {hackathon.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">{hackathon.title}</CardTitle>
                  <CardDescription className="text-gray-600 font-medium">
                    by {hackathon.organizer}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{hackathon.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Trophy className="h-4 w-4 mr-1" />
                        Prize Pool
                      </div>
                      <div className="text-lg font-bold text-green-600">{hackathon.prize}</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-1" />
                        Participants
                      </div>
                      <div className="text-sm font-medium">{hackathon.participants}</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        Duration
                      </div>
                      <div className="text-sm font-medium">{hackathon.duration}</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        Dates
                      </div>
                      <div className="text-sm font-medium text-right">
                        {hackathon.startDate}<br />
                        to {hackathon.endDate}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        Location
                      </div>
                      <div className="text-sm font-medium">{hackathon.location}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-1">Team Size: {hackathon.teamSize}</div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {hackathon.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button 
                    className={`w-full ${
                      hackathon.status === "Open" 
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" 
                        : "bg-gray-300 text-gray-600 cursor-not-allowed"
                    }`}
                    disabled={hackathon.status !== "Open"}
                  >
                    {hackathon.status === "Open" ? "Register Now" : "Coming Soon"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredHackathons.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Calendar className="h-16 w-16 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No hackathons found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Hackathons;
