
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Trophy, Code, Briefcase, Users, Star, Calendar, MapPin, DollarSign, Clock, ChevronLeft, ChevronRight, Eye, Heart, User as UserIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const eventBanners = [
    {
      id: 1,
      title: "Amazon Customer Excellence (ACE) Challenge 2025 Launch Event",
      date: "Tuesday 22nd July | 6:00 - 7:00 PM",
      company: "Amazon",
      speakers: [
        { name: "Rohit Sattya", role: "Krishna Chakravedu", company: "Amazon" },
        { name: "Srikant Sree Ram", role: "Director & Head", company: "Amazon" },
        { name: "Varsha Pandit", role: "Director, Finance", company: "Amazon" },
        { name: "Shadan Anwar", role: "General Manager", company: "Amazon" },
      ],
      background: "bg-gradient-to-r from-gray-900 to-gray-700",
      logo: "amazon"
    },
    {
      id: 2,
      title: "Gen Z x Gen AI - Rewrite the Rules #YourEPICMove",
      company: "TCS Credit",
      background: "bg-gradient-to-r from-green-500 to-green-600",
      cta: "Register Now",
      logo: "tcs"
    }
  ];

  const featuredOpportunities = [
    {
      id: 1,
      title: "Bajaj Finserv HackRx 6.0 | Register Now",
      type: "Offline | Free",
      registered: "3,806 Registered",
      timeLeft: "26 days left",
      background: "bg-gradient-to-br from-blue-600 to-purple-600",
      logo: "bajaj"
    },
    {
      id: 2,
      title: "Accenture B-School Strategy Challenge Season 9",
      type: "Online | Free",
      registered: "1,307 Registered",
      timeLeft: "6 days left",
      background: "bg-gradient-to-br from-purple-600 to-pink-600",
      logo: "accenture"
    },
    {
      id: 3,
      title: "E.P.I.C Season 7",
      type: "Festival",
      registered: "15,541 Registered",
      competitions: "1 Competitions",
      background: "bg-gradient-to-br from-green-500 to-teal-500",
      logo: "epic"
    },
    {
      id: 4,
      title: "CTC upto 27 LPA! Register Now!",
      type: "Online | Free",
      registered: "1,62,567 Registered",
      timeLeft: "14 hours left",
      background: "bg-gradient-to-br from-gray-700 to-gray-900",
      logo: "company"
    }
  ];

  const competitionCards = [
    {
      id: 1,
      title: "LaunchGrid Institutional Startup Challenge 2025",
      university: "Presidency University (PU), Bangalore",
      applied: "41 Applied",
      status: "Offline | Free",
      background: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      id: 2,
      title: "Technovest - An Entrepreneurial Pitching Competition",
      university: "Institute of Technology, Nirma University",
      applied: "50 Applied",
      status: "Offline | Free",
      background: "bg-gradient-to-br from-pink-500 to-red-500"
    },
    {
      id: 3,
      title: "Robo Wars - A Robotic Face Off Competition",
      university: "Institute of Technology, Nirma University",
      applied: "9 Applied",
      status: "Offline | Free",
      background: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      id: 4,
      title: "Path Seeker - A Line Following Robot Competition",
      university: "Institute of Technology, Nirma University",
      applied: "8 Applied",
      status: "Offline | Free",
      background: "bg-gradient-to-br from-yellow-500 to-orange-500"
    }
  ];

  const internshipCards = [
    {
      id: 1,
      company: "WFH",
      background: "bg-gradient-to-br from-green-400 to-green-500",
      logo: "tech"
    },
    {
      id: 2,
      company: "WFH",
      background: "bg-gradient-to-br from-yellow-400 to-orange-500",
      logo: "design"
    },
    {
      id: 3,
      company: "WFH",
      background: "bg-gradient-to-br from-blue-400 to-blue-500",
      logo: "business"
    },
    {
      id: 4,
      company: "WFH",
      background: "bg-gradient-to-br from-pink-400 to-pink-500",
      logo: "marketing"
    }
  ];

  const opportunityTypes = [
    {
      title: "Quizzes",
      background: "bg-gradient-to-br from-blue-400 to-blue-600",
      icon: "📝"
    },
    {
      title: "Hackathons",
      background: "bg-gradient-to-br from-green-400 to-green-600",
      icon: "💻"
    },
    {
      title: "Scholarships",
      background: "bg-gradient-to-br from-purple-500 to-purple-700",
      icon: "🎓"
    },
    {
      title: "Conferences",
      background: "bg-gradient-to-br from-orange-300 to-orange-500",
      icon: "🎤"
    },
    {
      title: "College Festivals",
      background: "bg-gradient-to-br from-yellow-400 to-yellow-600",
      icon: "🏆"
    }
  ];

  const stats = [
    { label: "Active Users", value: "24M+", color: "text-blue-600" },
    { label: "Assessments", value: "22.3M+", color: "text-green-600" },
    { label: "Opportunities", value: "130K+", color: "text-purple-600" },
    { label: "Brands trust us", value: "800+", color: "text-orange-600" },
    { label: "Organisations", value: "42K+", color: "text-pink-600" },
    { label: "Countries", value: "78+", color: "text-indigo-600" }
  ];

  const activityTabs = [
    { name: "Recently Viewed", active: true },
    { name: "Watchlist", active: false },
    { name: "Registrations", active: false }
  ];

  const recentActivities = [
    {
      id: 1,
      title: "CodeRush- 3rd Weekly Coding Contest",
      company: "Codeunia",
      logo: "code"
    },
    {
      id: 2,
      title: "Adobe India Hackathon",
      company: "Adobe",
      logo: "adobe"
    },
    {
      id: 3,
      title: "Customer Service Representative",
      company: "Neelam",
      logo: "neelam"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6">
                <span className="text-blue-600">Unlock </span>Your Career
              </h1>
              <p className="text-lg text-gray-600 font-normal mb-8 leading-relaxed">
                Explore opportunities from across the globe to grow, showcase skills, <br/>
                gain CV points & get hired by your dream company.
              </p>
              
              {/* Profile Completion Card */}
              <div className="bg-white rounded-lg p-4 w-fit shadow-lg mb-8 border">
                <div className="flex items-start gap-4">
                 
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Get the best recommendations!
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Share your background and career <br/> goals for personalized recommendations!
                    </p>
                    <Button className="bg-blue-600 text-xs h-fit w-fit hover:bg-blue-700">
                      Complete my profile
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Opportunity Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              
                <Card className="bg-gradient-to-br  from-yellow-400 to-orange-500 rounded-xl text-white border-0">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Trophy className="h-5 w-5" />
                      <span className="text-sm font-medium">Internships</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs opacity-90 mb-1">Gain</p>
                    <p className="text-xs opacity-90">Practical Experience</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl text-white border-0">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5" />
                      <span className="text-sm font-medium">Jobs</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs opacity-90 mb-1">Explore</p>
                    <p className="text-xs opacity-90">Diverse Careers</p>
                  </CardContent>
                </Card>
             

             
                <Card className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl text-white border-0">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      <span className="text-sm font-medium">Mentorships</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs opacity-90 mb-1">Guidance</p>
                    <p className="text-xs opacity-90">From Top Mentors</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl text-white border-0">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      <span className="text-sm font-medium">Practice</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs opacity-90 mb-1">Refine</p>
                    <p className="text-xs opacity-90">Skills Daily</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl text-white border-0">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Trophy className="h-5 w-5" />
                      <span className="text-sm font-medium">Competitions</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs opacity-90 mb-1">Battle</p>
                    <p className="text-xs opacity-90">For Excellence</p>
                  </CardContent>
                </Card>

               <Card className="bg-gradient-to-br from-pink-400 to-pink-600 w-full rounded-xl text-white border-0">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5" />
                      <span className="text-sm font-medium">More</span>
                    </div>
                  </CardHeader>
                </Card>
              
            </div> 
          </div>
        </div>
      </section>

      {/* Event Banners Carousel */}
      {/* <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <Carousel className="w-full">
            <CarouselContent>
              {eventBanners.map((banner) => (
                <CarouselItem key={banner.id}>
                  <Card className={`${banner.background} text-white border-0 overflow-hidden`}>
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            {banner.logo === "amazon" && (
                              <div className="bg-white px-4 py-2 rounded">
                                <span className="text-black font-bold">amazon</span>
                              </div>
                            )}
                            {banner.logo === "tcs" && (
                              <div className="bg-white px-4 py-2 rounded">
                                <span className="text-black font-bold">TCS</span>
                              </div>
                            )}
                          </div>
                          <h2 className="text-2xl md:text-3xl font-bold mb-4">{banner.title}</h2>
                          {banner.date && (
                            <p className="text-lg mb-6 opacity-90">{banner.date}</p>
                          )}
                          {banner.speakers && (
                            <div className="flex gap-4 mb-6">
                              {banner.speakers.slice(0, 4).map((speaker, index) => (
                                <div key={index} className="text-center">
                                  <div className="w-12 h-12 bg-white/20 rounded-full mb-2"></div>
                                  <p className="text-xs font-medium">{speaker.name}</p>
                                  <p className="text-xs opacity-75">{speaker.role}</p>
                                </div>
                              ))}
                            </div>
                          )}
                          <Button className="bg-white text-gray-900 hover:bg-gray-100">
                            {banner.cta || "Register now"}
                          </Button>
                        </div>
                        {banner.id === 2 && (
                          <div className="hidden md:block">
                            <div className="text-4xl font-bold">7</div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </section> */}

      {/* My Activity Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Activity</h2>
            <p className="text-gray-600">
              Quickly revisit your recent actions on Collabium and pick up right where you left off.
            </p>
          </div>

          {/* Activity Tabs */}
          <div className="flex gap-4 mb-8">
            {activityTabs.map((tab, index) => (
              <Button
                key={index}
                variant={tab.active ? "default" : "outline"}
                className={tab.active ? "bg-blue-600 text-white" : ""}
              >
                <Clock className="h-4 w-4 mr-2" />
                {tab.name}
              </Button>
            ))}
            <div className="ml-auto">
              <Link to="/activity" className="text-blue-600 hover:underline flex items-center gap-1">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentActivities.map((activity) => (
              <Card key={activity.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gray-900 rounded flex items-center justify-center">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{activity.title}</h3>
                      <p className="text-sm text-gray-600">{activity.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                Featured Opportunities 
                <span className="text-2xl">🤖🏆</span>
              </h2>
              <p className="text-gray-600">
                Check out the curated opportunities handpicked for you from top organizations.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredOpportunities.map((opportunity) => (
              <Card key={opportunity.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`${opportunity.background} p-6 text-white relative`}>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="text-xs text-gray-700 bg-white">
                      {opportunity.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Heart className="h-5 w-5 text-white/70 hover:text-white cursor-pointer" />
                  </div>
                  <div className="mt-8 h-32 flex items-end">
                    <div className="w-full">
                      <div className="bg-white/20 rounded p-2 inline-block mb-4">
                        <Trophy className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-sm mb-3 line-clamp-2">{opportunity.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                    <UserIcon className="h-3 w-3" />
                    <span>{opportunity.registered}</span>
                    <ArrowRight className="h-3 w-3 ml-auto cursor-pointer" />
                  </div>
                  {opportunity.timeLeft && (
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Clock className="h-3 w-3" />
                      <span>{opportunity.timeLeft}</span>
                    </div>
                  )}
                  {opportunity.competitions && (
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Trophy className="h-3 w-3" />
                      <span>{opportunity.competitions}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competitions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Competitions</h2>
              <p className="text-gray-600">
                Explore the Competitions that are creating a buzz among your peers!
              </p>
            </div>
            <Link to="/competitions" className="text-blue-600 hover:underline flex items-center gap-1">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competitionCards.map((competition) => (
              <Card key={competition.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`${competition.background} p-6 text-white relative h-32`}>
                  <Badge variant="secondary" className="text-xs text-gray-700 bg-white">
                    {competition.status}
                  </Badge>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <Trophy className="h-4 w-4 text-gray-700" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-sm mb-2 line-clamp-2">{competition.title}</h3>
                  <p className="text-xs text-gray-600 mb-3">{competition.university}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-gray-600">
                      <UserIcon className="h-3 w-3" />
                      <span>{competition.applied}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 cursor-pointer hover:text-blue-600" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Internships</h2>
              <p className="text-gray-600">
                Find the internships that fit your career aspirations.
              </p>
            </div>
            <Link to="/internships" className="text-blue-600 hover:underline flex items-center gap-1">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {internshipCards.map((internship) => (
              <Card key={internship.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`${internship.background} p-6 text-white relative h-32`}>
                  <Badge variant="secondary" className="text-xs text-gray-700 bg-white">
                    {internship.company}
                  </Badge>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <Briefcase className="h-4 w-4 text-gray-700" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pick The Right Opportunity */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Pick The Right Opportunity!</h2>
              <p className="text-gray-600">
                Explore opportunities that best suits your skills and interests!
              </p>
            </div>
            <Link to="/explore" className="text-blue-600 hover:underline flex items-center gap-1">
              Explore all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {opportunityTypes.map((type, index) => (
              <Card key={index} className={`${type.background} text-white border-0 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer`}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-lg font-bold">{type.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* App Download and Refer & Win */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Download App */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Download</h3>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Collabium App</h3>
                <div className="flex justify-center items-center gap-4 mb-6">
                  <div className="w-24 h-24 bg-white rounded-lg shadow-md flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-2xl">A</span>
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <span>📱</span> Play Store
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <span>🍎</span> App Store
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Refer & Win */}
            <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 border-0 overflow-hidden">
              <CardContent className="p-8 relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Refer & Win</h3>
                <p className="text-gray-700 mb-4">
                  MacBook, iPhone, Apple Watch, AirPods, Cash Rewards and more!
                </p>
                <Button className="bg-gray-900 text-white hover:bg-gray-800">
                  Get Started
                </Button>
                <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-yellow-400 to-transparent rounded-l-full opacity-50"></div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="text-6xl">🏆</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Numbers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Numbers</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who's using Collabium */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Who's using Collabium?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Students and Professionals</h3>
                <p className="text-gray-600 text-sm">
                  <strong>Unlock Your Potential:</strong> Compete, Build Resume, Grow and get Hired!
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Briefcase className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Companies and Recruiters</h3>
                <p className="text-gray-600 text-sm">
                  <strong>Discover Right Talent:</strong> Hire, Engage, and Brand Like Never Before!
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Trophy className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Colleges</h3>
                <p className="text-gray-600 text-sm">
                  <strong>Bridge Academia and Industry:</strong> Empower Students with Real-World Opportunities!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our community of achievers and unlock unlimited opportunities for growth and success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Get Started Free
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
