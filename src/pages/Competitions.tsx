
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Trophy, Users, Search, Filter } from "lucide-react";

const Competitions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const competitions = [
    {
      id: 1,
      title: "Global Coding Championship 2024",
      company: "TechCorp",
      description: "The ultimate coding competition featuring algorithmic challenges and data structure problems.",
      prize: "$50,000",
      participants: "25,000+",
      deadline: "Dec 15, 2024",
      difficulty: "Advanced",
      category: "Programming",
      tags: ["Algorithms", "Data Structures", "Problem Solving"],
      status: "Open"
    },
    {
      id: 2,
      title: "AI Innovation Challenge",
      company: "AI Labs",
      description: "Build innovative AI solutions to solve real-world problems using machine learning.",
      prize: "$30,000",
      participants: "15,000+",
      deadline: "Jan 20, 2025",
      difficulty: "Intermediate",
      category: "AI/ML",
      tags: ["Machine Learning", "AI", "Innovation"],
      status: "Open"
    },
    {
      id: 3,
      title: "Web Development Sprint",
      company: "WebFlow Inc",
      description: "Create stunning web applications using modern frameworks and technologies.",
      prize: "$20,000",
      participants: "18,000+",
      deadline: "Dec 30, 2024",
      difficulty: "Beginner",
      category: "Web Development",
      tags: ["React", "Node.js", "Full Stack"],
      status: "Open"
    },
    {
      id: 4,
      title: "Mobile App Design Contest",
      company: "MobileTech",
      description: "Design and develop mobile applications with outstanding user experience.",
      prize: "$25,000",
      participants: "12,000+",
      deadline: "Jan 15, 2025",
      difficulty: "Intermediate",
      category: "Mobile Development",
      tags: ["React Native", "Flutter", "UI/UX"],
      status: "Open"
    },
    {
      id: 5,
      title: "Cybersecurity Challenge",
      company: "SecureNet",
      description: "Test your cybersecurity skills in penetration testing and security analysis.",
      prize: "$40,000",
      participants: "8,000+",
      deadline: "Feb 5, 2025",
      difficulty: "Advanced",
      category: "Cybersecurity",
      tags: ["Penetration Testing", "Security", "Ethical Hacking"],
      status: "Open"
    },
    {
      id: 6,
      title: "Data Science Olympics",
      company: "DataCorp",
      description: "Analyze complex datasets and build predictive models to solve business problems.",
      prize: "$35,000",
      participants: "20,000+",
      deadline: "Jan 30, 2025",
      difficulty: "Advanced",
      category: "Data Science",
      tags: ["Python", "R", "Machine Learning"],
      status: "Open"
    }
  ];

  const categories = ["all", "Programming", "AI/ML", "Web Development", "Mobile Development", "Cybersecurity", "Data Science"];
  const difficulties = ["all", "Beginner", "Intermediate", "Advanced"];

  const filteredCompetitions = competitions.filter(competition => {
    const matchesSearch = competition.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         competition.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         competition.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || competition.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "all" || competition.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "text-green-600 border-green-600";
      case "Intermediate": return "text-yellow-600 border-yellow-600";
      case "Advanced": return "text-red-600 border-red-600";
      default: return "text-gray-600 border-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Competitions</h1>
            <p className="text-xl text-blue-100">
              Participate in exciting competitions and showcase your skills to the world
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
                  placeholder="Search competitions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-white border shadow-lg">
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent className="bg-white border shadow-lg">
                  {difficulties.map(difficulty => (
                    <SelectItem key={difficulty} value={difficulty}>
                      {difficulty === "all" ? "All Levels" : difficulty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="text-gray-600">
              {filteredCompetitions.length} competitions found
            </div>
          </div>
        </div>
      </section>

      {/* Competitions Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCompetitions.map((competition) => (
              <Card key={competition.id} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md bg-white">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className={getDifficultyColor(competition.difficulty)}>
                      {competition.difficulty}
                    </Badge>
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      {competition.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">{competition.title}</CardTitle>
                  <CardDescription className="text-gray-600 font-medium">
                    by {competition.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{competition.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Trophy className="h-4 w-4 mr-1" />
                        Prize Pool
                      </div>
                      <div className="text-lg font-bold text-green-600">{competition.prize}</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-1" />
                        Participants
                      </div>
                      <div className="text-sm font-medium">{competition.participants}</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        Deadline
                      </div>
                      <div className="text-sm font-medium">{competition.deadline}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {competition.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCompetitions.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Filter className="h-16 w-16 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No competitions found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Competitions;
