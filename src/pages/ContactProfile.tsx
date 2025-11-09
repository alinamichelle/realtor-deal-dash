import { ArrowLeft, Phone, Mail, MessageSquare, MoreVertical, Calendar, Home, TrendingUp, Users, FileText, Clock, MapPin, Cake, Globe, Tag, UserCheck, AlertCircle, CheckCircle2, Star, ChevronDown, ChevronUp, TrendingDown, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

// Mock data - in real app this would come from props/API
const contactData = {
  // Core Identity
  id: "1",
  firstName: "Brent",
  lastName: "Fannin",
  fullName: "Brent Fannin",
  
  // Contact Info
  email: "brent.fannin@example.com",
  phone: "(512) 555-0123",
  otherPhone: "(512) 555-0124",
  
  // Status & Journey
  status: "Past Client", // "New Lead" | "Contacted" | "Nurturing" | "Under Contract" | "Past Client"
  contactType: "VIP",
  leadSource: "Sphere",
  leadType: "Buyer",
  pipeline: "Closed Won",
  
  // Assignment
  assignedAgent: "Happy Webberman",
  assignedAgentId: "agent_1",
  
  // Address
  streetAddress: "123 Street Blvd",
  city: "Austin",
  state: "TX",
  zipcode: "78704",
  
  // Personal Details
  birthday: "2/13/1980",
  language: "English",
  kids: "2",
  leaseExpiration: null,
  homeAnniversary: "1/23/2017",
  pastClientType: "Purchase",
  
  // Notes & Tags
  notes: "CEO FIA Homes. Builder, Developer, Investor. Interested in architecture, interior design, and cat ownership.",
  tags: ["VIP", "Builder", "Investor", "Cat Owner"],
  agentTags: ["Hot Lead", "High Value"],
  hausWatchLabels: ["Property Alerts: 60%", "Hausiversaries: 60%"],
  
  // Referral
  referrerName: "Happy Webberman",
  
  // Dates
  createdAt: "2017-01-15",
  registeredAt: "2017-01-15",
  daysInSystem: 2854,
  
  // Property Data (for Past Clients)
  propertyImage: "/placeholder.svg",
  propertyValue: "$455,000",
  propertyBeds: 4,
  propertyBaths: 3,
  propertySqft: "2,708 sqft",
  propertyType: "Duplex",
  propertyIsRental: true,
  purchaseDate: "1/23/2017",
  hausYears: 7,
  hauswatchOpenRate: 60,
  propertyAlerts: 60,
  propertyValueChange: -7.2, // percentage change
  propertyValueTrend: "down" as "up" | "down" | "same",
  
  // Email engagement breakdown
  emailEngagement: {
    hauswatch: { rate: 60, color: "hsl(217 91% 60%)" },
    propertyAlerts: { rate: 25, color: "hsl(142 71% 45%)" },
    hausiversaries: { rate: 15, color: "hsl(11 88% 55%)" },
  },
  
  // Neighbors data
  neighbors: [
    { initials: "BE", color: "hsl(217 91% 60%)" },
    { initials: "PM", color: "hsl(38 92% 50%)" },
    { initials: "JK", color: "hsl(142 71% 45%)" },
  ],
  totalNeighbors: 12,
  
  // Engagement Metrics
  viableCalls: 32,
  interactions: 21,
  referrals: 7,
  
  // Quarterly Calls (for Past Clients)
  quarterlyCalls: [
    { date: "12/2/2024", time: "3:32 pm", quarter: "QC1", status: "Spoke", summary: "Great conversation" },
    { date: "12/2/2024", time: "9:45am", quarter: "QC2", status: "Voicemail", summary: "Left message" },
    { date: "12/2/2024", time: "1:12pm", quarter: "QC3", status: "No Answer", summary: "Try again" },
    { date: "12-Q2-2024", quarter: "QC4", status: "Scheduled", summary: "Upcoming call" },
  ],
  
  // Tasks
  tasks: [
    { title: "123 Street Hausiversary", date: "Purchased 8 years ago", status: "Done", type: "anniversary" },
    { title: "2425 Wilson", date: "Listing appointment", status: "Upcoming", type: "appointment" },
    { title: "Quarterly Call 4 of 4", date: "Last viable call 6 months ago", status: "Overdue", type: "call" },
  ],
  
  // Hausiversaries
  hausiversaries: [
    { address: "123 Street", date: "In 8 Days", message: "This was his first investment, ask about the new tenants. New kid was born ask about him" }
  ],
  
  // Transactions
  transactions: [
    { type: "Purchase", address: "123 Street Blvd", amount: "$455,000", date: "1/1/2019", closeDate: "July 20" },
    { type: "Lease - Landlord", address: "123 Street Blvd", amount: "$3,000", date: "1/1/2024", closeDate: "July 21" },
  ]
};

export default function ContactProfile() {
  const [showPropertyDetails, setShowPropertyDetails] = useState(false);
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Past Client": return "bg-success/10 text-success border-success/20";
      case "Under Contract": return "bg-info/10 text-info border-info/20";
      case "Nurturing": return "bg-caution/10 text-caution border-caution/20";
      case "Contacted": return "bg-purple-500/10 text-purple-700 border-purple-500/20";
      case "New Lead": return "bg-slate/50 text-charcoal border-slate";
      default: return "bg-muted text-muted-foreground";
    }
  };
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Past Client": return <CheckCircle2 className="h-4 w-4" />;
      case "Under Contract": return <FileText className="h-4 w-4" />;
      case "Nurturing": return <TrendingUp className="h-4 w-4" />;
      case "Contacted": return <UserCheck className="h-4 w-4" />;
      case "New Lead": return <AlertCircle className="h-4 w-4" />;
      default: return null;
    }
  };

  const isPastClient = contactData.status === "Past Client";
  const isUnderContract = contactData.status === "Under Contract";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border bg-card/95 backdrop-blur-sm">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
                    {contactData.firstName[0]}{contactData.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h1 className="text-2xl font-bold text-foreground">{contactData.fullName}</h1>
                    <Badge variant="outline" className={getStatusColor(contactData.status)}>
                      {getStatusIcon(contactData.status)}
                      <span className="ml-1.5">{contactData.status}</span>
                    </Badge>
                    {contactData.contactType === "VIP" && (
                      <Badge variant="outline" className="bg-amber-500/10 text-amber-700 border-amber-500/20">
                        <Star className="h-3 w-3 mr-1 fill-amber-700" />
                        VIP
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5" />
                      {contactData.email}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5" />
                      {contactData.phone}
                    </span>
                    {contactData.city && (
                      <>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          {contactData.city}, {contactData.state}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="h-4 w-4" />
                Call
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <MessageSquare className="h-4 w-4" />
                Text
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Mail className="h-4 w-4" />
                Email
              </Button>
              <Button size="sm" className="gap-2">
                Edit Profile
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Documents</DropdownMenuItem>
                  <DropdownMenuItem>Add to Campaign</DropdownMenuItem>
                  <DropdownMenuItem>Schedule Follow-up</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">Archive Contact</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Journey Progress Bar - Only for non-past clients */}
        {!isPastClient && (
          <div className="px-6 pb-4">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-muted-foreground">Contact Journey</span>
                  <span className="text-xs font-semibold text-foreground">
                    {contactData.status === "New Lead" && "Step 1 of 4"}
                    {contactData.status === "Contacted" && "Step 2 of 4"}
                    {contactData.status === "Nurturing" && "Step 3 of 4"}
                    {contactData.status === "Under Contract" && "Step 4 of 4"}
                  </span>
                </div>
                <Progress 
                  value={
                    contactData.status === "New Lead" ? 25 :
                    contactData.status === "Contacted" ? 50 :
                    contactData.status === "Nurturing" ? 75 :
                    contactData.status === "Under Contract" ? 100 : 0
                  } 
                  className="h-2"
                />
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className={contactData.status === "New Lead" ? "font-semibold text-foreground" : "text-muted-foreground"}>New Lead</span>
                <span className="text-muted-foreground">→</span>
                <span className={contactData.status === "Contacted" ? "font-semibold text-foreground" : "text-muted-foreground"}>Contacted</span>
                <span className="text-muted-foreground">→</span>
                <span className={contactData.status === "Nurturing" ? "font-semibold text-foreground" : "text-muted-foreground"}>Nurturing</span>
                <span className="text-muted-foreground">→</span>
                <span className={contactData.status === "Under Contract" ? "font-semibold text-foreground" : "text-muted-foreground"}>Under Contract</span>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 3-Column Layout */}
      <div className="grid grid-cols-12 gap-6 p-6 max-w-[1600px] mx-auto">
        {/* Left Sidebar - Contact Info */}
        <div className="col-span-3 space-y-4">
          {/* Contact Details Card - ALWAYS FIRST */}
          <Card className="p-5 space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                <UserCheck className="h-4 w-4 text-primary" />
                Contact Details
              </h3>
              <div className="space-y-3">
                {contactData.email && (
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Email</div>
                    <div className="text-sm font-medium text-foreground">{contactData.email}</div>
                  </div>
                )}
                {contactData.phone && (
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Phone</div>
                    <div className="text-sm font-medium text-foreground">{contactData.phone}</div>
                  </div>
                )}
                {contactData.otherPhone && (
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Other Phone</div>
                    <div className="text-sm font-medium text-foreground">{contactData.otherPhone}</div>
                  </div>
                )}
                {contactData.streetAddress && (
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Address</div>
                    <div className="text-sm font-medium text-foreground">
                      {contactData.streetAddress}<br />
                      {contactData.city}, {contactData.state} {contactData.zipcode}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Personal Info</h3>
              <div className="space-y-2.5">
                {contactData.birthday && (
                  <div className="flex items-center gap-2">
                    <Cake className="h-3.5 w-3.5 text-muted-foreground" />
                    <div className="text-sm">
                      <span className="text-muted-foreground">Birthday:</span>{" "}
                      <span className="font-medium">{contactData.birthday}</span>
                    </div>
                  </div>
                )}
                {contactData.language && (
                  <div className="flex items-center gap-2">
                    <Globe className="h-3.5 w-3.5 text-muted-foreground" />
                    <div className="text-sm">
                      <span className="text-muted-foreground">Language:</span>{" "}
                      <span className="font-medium">{contactData.language}</span>
                    </div>
                  </div>
                )}
                {contactData.kids && (
                  <div className="flex items-center gap-2">
                    <Users className="h-3.5 w-3.5 text-muted-foreground" />
                    <div className="text-sm">
                      <span className="text-muted-foreground">Kids:</span>{" "}
                      <span className="font-medium">{contactData.kids}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Lead Info</h3>
              <div className="space-y-2.5">
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">Source</div>
                  <Badge variant="secondary" className="text-xs">{contactData.leadSource}</Badge>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">Type</div>
                  <Badge variant="outline" className="text-xs">{contactData.leadType}</Badge>
                </div>
                {contactData.assignedAgent && (
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">Assigned Agent</div>
                    <div className="text-sm font-medium">{contactData.assignedAgent}</div>
                  </div>
                )}
                {contactData.referrerName && (
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">Referred By</div>
                    <div className="text-sm font-medium">{contactData.referrerName}</div>
                  </div>
                )}
              </div>
            </div>
            
            {contactData.tags.length > 0 && (
              <>
                <Separator />
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Tag className="h-3.5 w-3.5" />
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {contactData.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </>
            )}
          </Card>

          {/* Property Card - Only for Past Clients */}
          {isPastClient && (
            <Card className="overflow-hidden border-success/20 bg-gradient-to-br from-success/5 to-background">
              <div className="aspect-video bg-muted relative">
                <img src={contactData.propertyImage} alt="Property" className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm text-xs">
                    {contactData.propertyType}
                  </Badge>
                  {contactData.propertyIsRental && (
                    <Badge variant="secondary" className="bg-info/90 text-white backdrop-blur-sm text-xs">
                      Rental Property
                    </Badge>
                  )}
                </div>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">{contactData.streetAddress}</h3>
                  <p className="text-sm text-muted-foreground">{contactData.city}, {contactData.state} {contactData.zipcode}</p>
                </div>
                
                <div className="flex items-center justify-between py-3 px-4 bg-success/10 rounded-lg border border-success/20">
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">Current Value</div>
                    <div className="text-2xl font-bold text-foreground">{contactData.propertyValue}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    {contactData.propertyValueTrend === "up" && (
                      <>
                        <TrendingUp className="h-5 w-5 text-success" />
                        <span className="text-success font-semibold">+{Math.abs(contactData.propertyValueChange)}%</span>
                      </>
                    )}
                    {contactData.propertyValueTrend === "down" && (
                      <>
                        <TrendingDown className="h-5 w-5 text-destructive" />
                        <span className="text-destructive font-semibold">{contactData.propertyValueChange}%</span>
                      </>
                    )}
                    {contactData.propertyValueTrend === "same" && (
                      <>
                        <Minus className="h-5 w-5 text-muted-foreground" />
                        <span className="text-muted-foreground font-semibold">0%</span>
                      </>
                    )}
                  </div>
                </div>
                
                <Collapsible open={showPropertyDetails} onOpenChange={setShowPropertyDetails}>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-full justify-between text-muted-foreground hover:text-foreground">
                      <span className="text-xs font-medium">Property Details</span>
                      {showPropertyDetails ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-2">
                    <div className="grid grid-cols-3 gap-3 px-2">
                      <div className="text-center p-2 bg-muted/30 rounded-lg">
                        <div className="text-xs text-muted-foreground mb-1">Beds</div>
                        <div className="text-lg font-semibold text-foreground">{contactData.propertyBeds}</div>
                      </div>
                      <div className="text-center p-2 bg-muted/30 rounded-lg">
                        <div className="text-xs text-muted-foreground mb-1">Baths</div>
                        <div className="text-lg font-semibold text-foreground">{contactData.propertyBaths}</div>
                      </div>
                      <div className="text-center p-2 bg-muted/30 rounded-lg">
                        <div className="text-xs text-muted-foreground mb-1">Sqft</div>
                        <div className="text-sm font-semibold text-foreground">{contactData.propertySqft}</div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="text-center p-3 bg-muted/20 rounded-lg">
                    <div className="text-xs text-muted-foreground mb-1">Purchased</div>
                    <div className="text-sm font-semibold text-foreground">{contactData.purchaseDate}</div>
                  </div>
                  <div className="text-center p-3 bg-muted/20 rounded-lg">
                    <div className="text-xs text-muted-foreground mb-1">Haus Year</div>
                    <div className="text-sm font-semibold text-foreground">{contactData.hausYears}</div>
                  </div>
                </div>
                
                <Separator />
                
                {/* Stacked Email Engagement Bar */}
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-foreground">Email Engagement</span>
                      <span className="text-sm font-bold text-foreground">60%</span>
                    </div>
                    <div className="h-3 bg-muted/30 rounded-full overflow-hidden flex">
                      <div 
                        className="transition-all duration-500"
                        style={{ 
                          width: `${contactData.emailEngagement.hauswatch.rate}%`,
                          backgroundColor: contactData.emailEngagement.hauswatch.color 
                        }}
                      />
                      <div 
                        className="transition-all duration-500"
                        style={{ 
                          width: `${contactData.emailEngagement.propertyAlerts.rate}%`,
                          backgroundColor: contactData.emailEngagement.propertyAlerts.color 
                        }}
                      />
                      <div 
                        className="transition-all duration-500"
                        style={{ 
                          width: `${contactData.emailEngagement.hausiversaries.rate}%`,
                          backgroundColor: contactData.emailEngagement.hausiversaries.color 
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: contactData.emailEngagement.hauswatch.color }} />
                      <span className="text-muted-foreground">Hauswatch {contactData.emailEngagement.hauswatch.rate}%</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: contactData.emailEngagement.propertyAlerts.color }} />
                      <span className="text-muted-foreground">Alerts {contactData.emailEngagement.propertyAlerts.rate}%</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: contactData.emailEngagement.hausiversaries.color }} />
                      <span className="text-muted-foreground">Anniv. {contactData.emailEngagement.hausiversaries.rate}%</span>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                {/* Neighbors Section */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground">Neighbors</h4>
                  <div className="flex items-center justify-center gap-3 py-4">
                    {contactData.neighbors.map((neighbor, idx) => (
                      <Avatar 
                        key={idx} 
                        className="h-14 w-14 border-2 border-background shadow-md"
                        style={{ 
                          backgroundColor: neighbor.color,
                          transform: `translateX(${idx * -8}px)`,
                          zIndex: contactData.neighbors.length - idx 
                        }}
                      >
                        <AvatarFallback className="text-white font-semibold" style={{ backgroundColor: neighbor.color }}>
                          {neighbor.initials}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                    <Avatar className="h-14 w-14 border-2 border-background shadow-md bg-muted" style={{ transform: 'translateX(-24px)', zIndex: 0 }}>
                      <AvatarFallback className="text-muted-foreground font-semibold bg-muted">
                        +{contactData.totalNeighbors - contactData.neighbors.length}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <Button variant="outline" className="w-full bg-primary/5 border-primary/20 text-primary hover:bg-primary/10">
                    View all Neighbors
                  </Button>
                </div>
              </div>
            </Card>
          )}


          {/* System Info Card */}
          <Card className="p-4">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              System Info
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Days in System</span>
                <span className="font-medium">{contactData.daysInSystem} days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Created</span>
                <span className="font-medium">{contactData.createdAt}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Contact ID</span>
                <span className="font-mono text-xs">{contactData.id}</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content Area */}
        <div className="col-span-6 space-y-6">
          {/* Engagement Stats - Only for Past Clients */}
          {isPastClient && (
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Phone className="h-5 w-5 text-success" />
                  <TrendingUp className="h-4 w-4 text-success" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{contactData.viableCalls}</div>
                <div className="text-sm text-muted-foreground">Viable Calls</div>
              </Card>
              
              <Card className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <MessageSquare className="h-5 w-5 text-info" />
                  <TrendingUp className="h-4 w-4 text-info" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{contactData.interactions}</div>
                <div className="text-sm text-muted-foreground">Interactions</div>
              </Card>
              
              <Card className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Users className="h-5 w-5 text-caution" />
                  <TrendingUp className="h-4 w-4 text-caution" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{contactData.referrals}</div>
                <div className="text-sm text-muted-foreground">Referrals</div>
              </Card>
            </div>
          )}

          {/* Main Content Tabs */}
          <Card>
            <Tabs defaultValue="overview" className="w-full">
              <div className="border-b border-border px-6 pt-4">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                  <TabsTrigger value="notes">Notes</TabsTrigger>
                  {isPastClient && <TabsTrigger value="transactions">Transactions</TabsTrigger>}
                  {!isPastClient && <TabsTrigger value="pipeline">Pipeline</TabsTrigger>}
                </TabsList>
              </div>

              <TabsContent value="overview" className="p-6 space-y-6">
                {/* Notes Section */}
                {contactData.notes && (
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-3">About</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{contactData.notes}</p>
                  </div>
                )}

                {/* Hausiversaries - Only for Past Clients */}
                {isPastClient && contactData.hausiversaries.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Home className="h-4 w-4 text-primary" />
                      Upcoming Hausiversaries
                    </h3>
                    <div className="space-y-3">
                      {contactData.hausiversaries.map((item, idx) => (
                        <Card key={idx} className="p-4 bg-primary/5 border-primary/20">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <Home className="h-4 w-4 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="font-semibold text-foreground">{item.address}</h4>
                                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                                  {item.date}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{item.message}</p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quarterly Calls - Only for Past Clients */}
                {isPastClient && (
                  <div>
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                      Quarterly Calls
                    </h3>
                    <div className="space-y-0.5">
                      {contactData.quarterlyCalls.map((call, idx) => {
                        const statusConfig = {
                          "Spoke": { 
                            dotColor: "bg-success",
                            textColor: "text-success"
                          },
                          "Voicemail": { 
                            dotColor: "bg-caution",
                            textColor: "text-caution"
                          },
                          "No Answer": { 
                            dotColor: "bg-destructive",
                            textColor: "text-destructive"
                          },
                          "Scheduled": { 
                            dotColor: "bg-muted-foreground",
                            textColor: "text-muted-foreground"
                          }
                        };
                        const config = statusConfig[call.status as keyof typeof statusConfig];
                        
                        return (
                          <div 
                            key={idx} 
                            className="flex items-center justify-between py-3 px-1 hover:bg-muted/30 -mx-1 rounded-lg transition-colors cursor-pointer group"
                          >
                            <div className="flex items-center gap-4 flex-1">
                              <div className="text-sm font-medium text-foreground min-w-[100px]">
                                {call.date}
                              </div>
                              {call.time && (
                                <div className="text-sm text-muted-foreground">
                                  {call.time}
                                </div>
                              )}
                              <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${config.dotColor}`} />
                                <span className={`text-sm font-medium ${config.textColor}`}>
                                  {call.quarter}: {call.status}
                                </span>
                              </div>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              className="text-xs text-muted-foreground group-hover:text-foreground"
                            >
                              Summary &gt;
                            </Button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="activity" className="p-6">
                <div className="space-y-4">
                  <div className="text-center py-8 text-muted-foreground">
                    <Clock className="h-12 w-12 mx-auto mb-3 opacity-50" />
                    <p>Activity timeline will appear here</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="notes" className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold mb-3">Contact Notes</h3>
                    <p className="text-sm text-muted-foreground">{contactData.notes}</p>
                  </div>
                  <Button variant="outline" className="w-full">
                    <FileText className="h-4 w-4 mr-2" />
                    Add New Note
                  </Button>
                </div>
              </TabsContent>

              {isPastClient && (
                <TabsContent value="transactions" className="p-6">
                  <div className="space-y-3">
                    {contactData.transactions.map((transaction, idx) => (
                      <Card key={idx} className="p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <div className={`p-2 rounded-lg ${transaction.type.includes("Purchase") ? "bg-success/10" : "bg-info/10"}`}>
                              <FileText className={`h-4 w-4 ${transaction.type.includes("Purchase") ? "text-success" : "text-info"}`} />
                            </div>
                            <div>
                              <div className="font-semibold text-foreground mb-1">{transaction.address}</div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Badge variant="secondary" className="text-xs">{transaction.type}</Badge>
                                <span>•</span>
                                <span>{transaction.date}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-success">{transaction.amount}</div>
                            <div className="text-xs text-muted-foreground">{transaction.closeDate}</div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              )}

              {!isPastClient && (
                <TabsContent value="pipeline" className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold mb-3">Pipeline Stage</h3>
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <div className="text-lg font-semibold text-foreground mb-1">{contactData.pipeline}</div>
                        <div className="text-sm text-muted-foreground">Current stage in pipeline</div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              )}
            </Tabs>
          </Card>
        </div>

        {/* Right Sidebar - Tasks & Reminders */}
        <div className="col-span-3 space-y-4">
          {/* Tasks Card */}
          <Card className="p-4">
            <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              Tasks & Reminders
            </h3>
            <div className="space-y-3">
              {contactData.tasks.map((task, idx) => {
                const statusColors = {
                  "Done": "bg-success/10 text-success border-success/20",
                  "Upcoming": "bg-info/10 text-info border-info/20",
                  "Overdue": "bg-destructive/10 text-destructive border-destructive/20"
                };
                return (
                  <div key={idx} className="p-3 bg-muted/30 rounded-lg space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="font-medium text-sm text-foreground mb-1">{task.title}</div>
                        <div className="text-xs text-muted-foreground">{task.date}</div>
                      </div>
                      <Badge variant="outline" className={`text-xs ${statusColors[task.status as keyof typeof statusColors]}`}>
                        {task.status}
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>
            <Button variant="outline" className="w-full mt-4">
              <Calendar className="h-4 w-4 mr-2" />
              Add Task
            </Button>
          </Card>

          {/* Quick Actions Card */}
          <Card className="p-4">
            <h3 className="text-sm font-semibold text-foreground mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Appointment
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Generate Report
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Mail className="h-4 w-4 mr-2" />
                Send Campaign
              </Button>
              {isPastClient && (
                <Button variant="outline" className="w-full justify-start">
                  <Home className="h-4 w-4 mr-2" />
                  Add Property
                </Button>
              )}
            </div>
          </Card>

          {/* Opportunities Card */}
          <Card className="p-4 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              Opportunities
            </h3>
            <div className="space-y-3 text-sm">
              {isPastClient ? (
                <>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                    <p className="text-muted-foreground">Home anniversary coming up - great time for a check-in call</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                    <p className="text-muted-foreground">Hauswatch open rate declining - consider sending personalized content</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                    <p className="text-muted-foreground">Builder/investor profile - may have referrals in network</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                    <p className="text-muted-foreground">High engagement - consider moving to next pipeline stage</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                    <p className="text-muted-foreground">No contact in 14 days - schedule follow-up call</p>
                  </div>
                </>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
