import { ArrowLeft, Phone, Mail, MessageSquare, MoreVertical, Calendar, Home, TrendingUp, Users, MapPin, Cake, Globe, Tag, Star, ChevronDown, TrendingDown, Minus, Check, X, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

// Mock data
const contactData = {
  id: "1",
  firstName: "Brent",
  lastName: "Fannin",
  fullName: "Brent Fannin",
  email: "brent.fannin@example.com",
  phone: "(512) 555-0123",
  otherPhone: "(512) 555-0124",
  status: "Past Client",
  contactType: "VIP",
  leadSource: "Sphere",
  leadType: "Buyer",
  assignedAgent: "Happy Webberman",
  streetAddress: "123 Street Blvd",
  city: "Austin",
  state: "TX",
  zipcode: "78704",
  birthday: "2/13/1980",
  language: "English",
  kids: "2",
  homeAnniversary: "1/23/2017",
  pastClientType: "Purchase",
  notes: "CEO FIA Homes. Builder, Developer, Investor. Interested in architecture, interior design, and cat ownership.",
  tags: ["VIP", "Builder", "Investor", "Cat Owner"],
  referrerName: "Happy Webberman",
  propertyValue: "$455,000",
  propertyBeds: 4,
  propertyBaths: 3,
  propertySqft: "2,708 sqft",
  propertyType: "Duplex",
  propertyIsRental: true,
  purchaseDate: "1/23/2017",
  hausYears: 7,
  propertyValueChange: -7.2,
  propertyValueTrend: "down" as "up" | "down" | "same",
  emailEngagement: {
    hauswatch: { rate: 60, color: "hsl(217 91% 60%)" },
    propertyAlerts: { rate: 25, color: "hsl(142 71% 45%)" },
    hausiversaries: { rate: 15, color: "hsl(11 88% 55%)" },
  },
  neighbors: [
    { initials: "BE", color: "hsl(217 91% 60%)" },
    { initials: "PM", color: "hsl(38 92% 50%)" },
    { initials: "JK", color: "hsl(142 71% 45%)" },
  ],
  totalNeighbors: 12,
  viableCalls: 32,
  interactions: 21,
  referrals: 7,
  quarterlyCalls: [
    { date: "12/2/2024", time: "3:32 pm", quarter: "QC1", status: "Spoke", summary: "Great conversation" },
    { date: "12/2/2024", time: "9:45am", quarter: "QC2", status: "Voicemail", summary: "Left message" },
    { date: "12/2/2024", time: "1:12pm", quarter: "QC3", status: "No Answer", summary: "Try again" },
    { date: "12-Q2-2024", quarter: "QC4", status: "Scheduled", summary: "Upcoming call" },
  ],
  transactions: [
    { type: "Purchase", address: "123 Street Blvd", amount: "$455,000", date: "1/1/2019", closeDate: "July 20" },
    { type: "Lease - Landlord", address: "123 Street Blvd", amount: "$3,000", date: "1/1/2024", closeDate: "July 21" },
  ]
};

export default function ContactProfile() {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [showPropertyDetails, setShowPropertyDetails] = useState(false);

  const isPastClient = contactData.status === "Past Client";

  return (
    <div className="min-h-screen bg-background">
      {/* Clean Header */}
      <header className="border-b border-border bg-card">
        <div className="px-8 py-6 max-w-[1400px] mx-auto">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start gap-5">
              <Button variant="ghost" size="icon" className="rounded-full mt-1">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16 mt-1">
                  <AvatarFallback className="text-xl font-semibold bg-primary/10 text-primary">
                    {contactData.firstName[0]}{contactData.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold text-foreground">{contactData.fullName}</h1>
                    {contactData.contactType === "VIP" && (
                      <Badge variant="outline" className="bg-amber-500/10 text-amber-700 border-amber-500/20">
                        <Star className="h-3.5 w-3.5 mr-1.5 fill-amber-700" />
                        VIP
                      </Badge>
                    )}
                  </div>
                  
                  <div className="space-y-1.5 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span className="text-sm">{contactData.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">{contactData.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{contactData.city}, {contactData.state}</span>
                    </div>
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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Documents</DropdownMenuItem>
                  <DropdownMenuItem>Schedule Follow-up</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">Archive Contact</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Status Badge - Prominent */}
          <Badge variant="outline" className="bg-success/10 text-success border-success/20 px-3 py-1">
            <Check className="h-4 w-4 mr-2" />
            <span className="font-medium">Past Client • Purchased {contactData.hausYears} years ago</span>
          </Badge>
        </div>
      </header>

      {/* Main Content - Clean 2-Column */}
      <div className="px-8 py-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-5 gap-8">
          
          {/* Left Column - Key Info (2/5 width) */}
          <div className="col-span-2 space-y-6">
            
            {/* Contact Details */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-5">Contact Information</h2>
              
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-medium text-muted-foreground mb-1.5">Email</div>
                  <div className="text-sm">{contactData.email}</div>
                </div>
                <div>
                  <div className="text-xs font-medium text-muted-foreground mb-1.5">Primary Phone</div>
                  <div className="text-sm">{contactData.phone}</div>
                </div>
                <div>
                  <div className="text-xs font-medium text-muted-foreground mb-1.5">Other Phone</div>
                  <div className="text-sm">{contactData.otherPhone}</div>
                </div>
                <div>
                  <div className="text-xs font-medium text-muted-foreground mb-1.5">Address</div>
                  <div className="text-sm">
                    {contactData.streetAddress}<br />
                    {contactData.city}, {contactData.state} {contactData.zipcode}
                  </div>
                </div>
              </div>

              <Separator className="my-5" />

              <Collapsible open={showMoreInfo} onOpenChange={setShowMoreInfo}>
                <CollapsibleTrigger className="flex items-center justify-between w-full group">
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {showMoreInfo ? "Less Info" : "More Info"}
                  </span>
                  <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${showMoreInfo ? "rotate-180" : ""}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-4 space-y-4">
                  <div>
                    <div className="text-xs font-medium text-muted-foreground mb-1.5">Birthday</div>
                    <div className="text-sm flex items-center gap-2">
                      <Cake className="h-3.5 w-3.5 text-muted-foreground" />
                      {contactData.birthday}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-muted-foreground mb-1.5">Language</div>
                    <div className="text-sm flex items-center gap-2">
                      <Globe className="h-3.5 w-3.5 text-muted-foreground" />
                      {contactData.language}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-muted-foreground mb-1.5">Kids</div>
                    <div className="text-sm flex items-center gap-2">
                      <Users className="h-3.5 w-3.5 text-muted-foreground" />
                      {contactData.kids}
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div>
                    <div className="text-xs font-medium text-muted-foreground mb-1.5">Source</div>
                    <Badge variant="secondary" className="text-xs">{contactData.leadSource}</Badge>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-muted-foreground mb-1.5">Type</div>
                    <Badge variant="outline" className="text-xs">{contactData.leadType}</Badge>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-muted-foreground mb-1.5">Assigned Agent</div>
                    <div className="text-sm">{contactData.assignedAgent}</div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-muted-foreground mb-1.5">Referred By</div>
                    <div className="text-sm">{contactData.referrerName}</div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </Card>

            {/* Property Info */}
            {isPastClient && (
              <Card className="p-6">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h2 className="text-lg font-semibold">Property</h2>
                    <p className="text-sm text-muted-foreground mt-1">{contactData.streetAddress}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{contactData.propertyValue}</div>
                    <div className="flex items-center gap-1.5 justify-end mt-1">
                      {contactData.propertyValueTrend === "down" && (
                        <>
                          <TrendingDown className="h-4 w-4 text-destructive" />
                          <span className="text-sm font-medium text-destructive">{Math.abs(contactData.propertyValueChange)}%</span>
                        </>
                      )}
                      {contactData.propertyValueTrend === "up" && (
                        <>
                          <TrendingUp className="h-4 w-4 text-success" />
                          <span className="text-sm font-medium text-success">+{contactData.propertyValueChange}%</span>
                        </>
                      )}
                      {contactData.propertyValueTrend === "same" && (
                        <>
                          <Minus className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium text-muted-foreground">0%</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{contactData.propertyType}</span>
                    {contactData.propertyIsRental && (
                      <Badge variant="secondary" className="text-xs">Rental</Badge>
                    )}
                  </div>
                </div>

                <Collapsible open={showPropertyDetails} onOpenChange={setShowPropertyDetails}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full group mb-4">
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      Property Details
                    </span>
                    <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${showPropertyDetails ? "rotate-180" : ""}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-3">
                    <div className="grid grid-cols-3 gap-3 text-sm">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Beds</div>
                        <div className="font-medium">{contactData.propertyBeds}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Baths</div>
                        <div className="font-medium">{contactData.propertyBaths}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Sq Ft</div>
                        <div className="font-medium">{contactData.propertySqft}</div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Separator className="my-4" />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Purchase Date</span>
                    <span className="font-medium">{contactData.purchaseDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ownership</span>
                    <span className="font-medium">{contactData.hausYears} years</span>
                  </div>
                </div>
              </Card>
            )}

            {/* Neighbors */}
            {isPastClient && (
              <Card className="p-6">
                <h2 className="text-lg font-semibold mb-4">Neighbors</h2>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {contactData.neighbors.map((neighbor, idx) => (
                      <Avatar key={idx} className="h-9 w-9 border-2 border-card">
                        <AvatarFallback 
                          className="text-xs font-semibold text-white"
                          style={{ backgroundColor: neighbor.color }}
                        >
                          {neighbor.initials}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    +{contactData.totalNeighbors - contactData.neighbors.length} more nearby contacts
                  </span>
                </div>
              </Card>
            )}

            {/* Tags */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {contactData.tags.map((tag, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Notes */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-3">Notes</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {contactData.notes}
              </p>
            </Card>
          </div>

          {/* Right Column - Activity & Engagement (3/5 width) */}
          <div className="col-span-3 space-y-6">
            
            {/* Email Engagement */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-5">Email Engagement</h2>
              
              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium">Overall Open Rate</span>
                    <span className="text-2xl font-bold">60%</span>
                  </div>
                  
                  <div className="h-3 bg-muted rounded-full overflow-hidden flex">
                    <div 
                      className="h-full transition-all" 
                      style={{ 
                        width: `${contactData.emailEngagement.hauswatch.rate}%`,
                        backgroundColor: contactData.emailEngagement.hauswatch.color 
                      }}
                    />
                    <div 
                      className="h-full transition-all" 
                      style={{ 
                        width: `${contactData.emailEngagement.propertyAlerts.rate}%`,
                        backgroundColor: contactData.emailEngagement.propertyAlerts.color 
                      }}
                    />
                    <div 
                      className="h-full transition-all" 
                      style={{ 
                        width: `${contactData.emailEngagement.hausiversaries.rate}%`,
                        backgroundColor: contactData.emailEngagement.hausiversaries.color 
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-2">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: contactData.emailEngagement.hauswatch.color }}
                      />
                      <span className="text-xs font-medium text-muted-foreground">Hauswatch</span>
                    </div>
                    <div className="text-xl font-bold">{contactData.emailEngagement.hauswatch.rate}%</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: contactData.emailEngagement.propertyAlerts.color }}
                      />
                      <span className="text-xs font-medium text-muted-foreground">Property Alerts</span>
                    </div>
                    <div className="text-xl font-bold">{contactData.emailEngagement.propertyAlerts.rate}%</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: contactData.emailEngagement.hausiversaries.color }}
                      />
                      <span className="text-xs font-medium text-muted-foreground">Hausiversaries</span>
                    </div>
                    <div className="text-xl font-bold">{contactData.emailEngagement.hausiversaries.rate}%</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quarterly Calls */}
            {isPastClient && (
              <Card className="p-6">
                <h2 className="text-lg font-semibold mb-5">Quarterly Calls</h2>
                
                <div className="space-y-4">
                  {contactData.quarterlyCalls.map((call, idx) => {
                    const getStatusColor = (status: string) => {
                      switch (status) {
                        case "Spoke": return "text-success";
                        case "Voicemail": return "text-caution";
                        case "No Answer": return "text-muted-foreground";
                        case "Scheduled": return "text-info";
                        default: return "text-muted-foreground";
                      }
                    };

                    const getStatusIcon = (status: string) => {
                      switch (status) {
                        case "Spoke": return <Check className="h-4 w-4" />;
                        case "Voicemail": return <Mail className="h-4 w-4" />;
                        case "No Answer": return <X className="h-4 w-4" />;
                        case "Scheduled": return <Clock className="h-4 w-4" />;
                        default: return null;
                      }
                    };

                    return (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${getStatusColor(call.status)}`}>
                          {getStatusIcon(call.status)}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-3 mb-1">
                            <div className="flex items-center gap-3">
                              <span className="font-semibold">{call.quarter}</span>
                              <Badge variant="outline" className={getStatusColor(call.status)}>
                                {call.status}
                              </Badge>
                            </div>
                            <span className="text-sm text-muted-foreground whitespace-nowrap">
                              {call.date} {call.time && `• ${call.time}`}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{call.summary}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            )}

            {/* Engagement Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-5">
                <div className="text-sm text-muted-foreground mb-2">Viable Calls</div>
                <div className="text-3xl font-bold">{contactData.viableCalls}</div>
              </Card>
              <Card className="p-5">
                <div className="text-sm text-muted-foreground mb-2">Interactions</div>
                <div className="text-3xl font-bold">{contactData.interactions}</div>
              </Card>
              <Card className="p-5">
                <div className="text-sm text-muted-foreground mb-2">Referrals</div>
                <div className="text-3xl font-bold">{contactData.referrals}</div>
              </Card>
            </div>

            {/* Transaction History */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-5">Transaction History</h2>
              
              <div className="space-y-4">
                {contactData.transactions.map((transaction, idx) => (
                  <div key={idx} className="flex items-start justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="space-y-1">
                      <div className="font-semibold">{transaction.address}</div>
                      <div className="text-sm text-muted-foreground">{transaction.type}</div>
                      <div className="text-xs text-muted-foreground">Closed {transaction.closeDate}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold">{transaction.amount}</div>
                      <div className="text-xs text-muted-foreground">{transaction.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
