import { ArrowLeft, Phone, Mail, MessageSquare, MoreVertical, Home, TrendingUp, TrendingDown, Minus, Check, X, Clock, Users } from "lucide-react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  hauswatchOpenRate: 60,
  propertyAlertsRate: 60,
  hausiversariesRate: 60,
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
    { date: "12/2/2024", time: "3:32 pm", quarter: "PC1", status: "Spoke", summary: "Summary >" },
    { date: "12/2/2024", time: "9:45am", quarter: "PC2", status: "Voicemail", summary: "Summary >" },
    { date: "12/2/2024", time: "1:12pm", quarter: "PC3", status: "No Answer", summary: "Summary >" },
    { date: "12-02-2024", quarter: "PC4", status: "Scheduled", summary: "" },
  ],
  transactions: [
    { type: "Lease - Landlord", address: "123 Street Blvd", amount: "$3,000", date: "1/1/2024", closeDate: "July 21", icon: "L" },
    { type: "Purchase", address: "123 Street Blvd", amount: "$455,000", date: "1/1/2019", closeDate: "July 20", icon: "P" },
  ]
};

export default function ContactProfile() {
  const [showPropertyDetails, setShowPropertyDetails] = useState(false);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const isPastClient = contactData.status === "Past Client";

  return (
    <div className="min-h-screen bg-background">
      {/* Simple Header */}
      <header className="border-b border-border bg-card px-6 py-3">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-semibold">Contact Profile</h1>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex">
        {/* Left Sidebar - Property Focus */}
        <div className="w-80 border-r border-border bg-card p-4 space-y-4 h-[calc(100vh-57px)] overflow-y-auto">
          
          {/* Profile Completion */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-muted-foreground">Complete Their Profile!</span>
              <span className="text-xs font-semibold">60%</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-caution w-[60%]" />
            </div>
          </div>

          {/* Property Image */}
          <div className="relative group cursor-pointer">
            <img 
              src="/placeholder.svg" 
              alt="Property" 
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-lg" />
          </div>

          {/* Property Address */}
          <div>
            <h3 className="font-semibold text-base">{contactData.streetAddress}</h3>
            <p className="text-sm text-muted-foreground">{contactData.city}, {contactData.state} {contactData.zipcode}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {contactData.propertyBeds} beds, {contactData.propertyBaths} baths, {contactData.propertySqft}
            </p>
            <div className="flex gap-2 mt-2">
              <Badge variant="secondary" className="text-xs">{contactData.propertyType}</Badge>
              <Badge variant="secondary" className="text-xs">Rental Property</Badge>
            </div>
          </div>

          {/* Property Stats */}
          <div className="flex items-center justify-between py-3">
            <div>
              <div className="text-xs text-muted-foreground mb-1">Purchased</div>
              <div className="font-semibold">{contactData.purchaseDate}</div>
            </div>
            <div className="flex items-center gap-2">
              <TrendingDown className="h-4 w-4 text-destructive" />
              <span className="font-semibold text-destructive">-7.2%</span>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1">Haus Year</div>
              <div className="font-semibold">{contactData.hausYears}</div>
            </div>
          </div>

          <Separator />

          {/* Email Engagement Bars - COMPACT */}
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-medium">Hauswatch Open Rate</span>
                <span className="text-xs font-semibold">{contactData.hauswatchOpenRate}%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all" 
                  style={{ width: `${contactData.hauswatchOpenRate}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-medium">Property Alerts</span>
                <span className="text-xs font-semibold">{contactData.propertyAlertsRate}%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all" 
                  style={{ width: `${contactData.propertyAlertsRate}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-medium">Hausiversaries</span>
                <span className="text-xs font-semibold">{contactData.hausiversariesRate}%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all" 
                  style={{ width: `${contactData.hausiversariesRate}%` }}
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Neighbors */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex -space-x-2">
                {contactData.neighbors.map((neighbor, idx) => (
                  <Avatar key={idx} className="h-10 w-10 border-2 border-card">
                    <AvatarFallback 
                      className="text-xs font-semibold text-white"
                      style={{ backgroundColor: neighbor.color }}
                    >
                      {neighbor.initials}
                    </AvatarFallback>
                  </Avatar>
                ))}
                <Avatar className="h-10 w-10 border-2 border-card">
                  <AvatarFallback className="text-xs font-semibold bg-muted text-muted-foreground">
                    +{contactData.totalNeighbors - contactData.neighbors.length}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full">
              View all Neighbors
            </Button>
          </div>

          <Separator />

          {/* Transactions */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-sm">Transactions</h3>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </Button>
            </div>
            <div className="space-y-3">
              {contactData.transactions.map((transaction, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary">{transaction.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="text-sm font-medium truncate">{transaction.type}</div>
                      <div className="text-sm font-semibold whitespace-nowrap">{transaction.amount}</div>
                    </div>
                    <div className="text-xs text-muted-foreground">{transaction.date}</div>
                    <div className="text-xs text-muted-foreground">{transaction.closeDate}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          {/* Tabs */}
          <Tabs defaultValue="overview" className="w-full">
            <div className="border-b border-border bg-card px-6">
              <TabsList className="h-auto p-0 bg-transparent">
                <TabsTrigger value="overview" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="communication" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                  Communication
                </TabsTrigger>
                <TabsTrigger value="tasks" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                  Tasks
                </TabsTrigger>
                <TabsTrigger value="plans" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                  Smart Plans
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="overview" className="m-0 p-6">
              <div className="grid grid-cols-3 gap-6">
                {/* Left 2 columns - Main content */}
                <div className="col-span-2 space-y-6">
                  {/* Contact Info Card */}
                  <Card className="p-5">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-xl font-bold">{contactData.fullName}</h2>
                        <p className="text-sm text-muted-foreground">
                          Referred by @{contactData.referrerName}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Phone className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Mail className="h-4 w-4" />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                            <DropdownMenuItem>View Documents</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">Archive</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm mb-4">
                      <div>
                        <span className="font-semibold">CEO FIA Homes</span>
                      </div>
                      <div className="text-muted-foreground">
                        Builder, Developer, Investor
                      </div>
                      <div className="text-muted-foreground">
                        Birthday: {contactData.birthday}
                      </div>
                    </div>

                    <div className="text-sm text-muted-foreground leading-relaxed">
                      {contactData.notes}
                    </div>

                    <Separator className="my-4" />

                    <Collapsible open={showMoreInfo} onOpenChange={setShowMoreInfo}>
                      <CollapsibleTrigger className="text-sm text-primary hover:underline">
                        {showMoreInfo ? "Less Info" : "More Info"}
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-4 space-y-3 text-sm">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-xs text-muted-foreground mb-1">Email</div>
                            <div>{contactData.email}</div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground mb-1">Phone</div>
                            <div>{contactData.phone}</div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground mb-1">Source</div>
                            <Badge variant="secondary" className="text-xs">{contactData.leadSource}</Badge>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground mb-1">Type</div>
                            <Badge variant="outline" className="text-xs">{contactData.leadType}</Badge>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground mb-1">Assigned Agent</div>
                            <div>{contactData.assignedAgent}</div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground mb-1">Referred By</div>
                            <div>{contactData.referrerName}</div>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>

                  {/* Hausiversary Alerts */}
                  <Card className="p-5 bg-info/5 border-info/20">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-info/10 flex items-center justify-center flex-shrink-0">
                        <Home className="h-5 w-5 text-info" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-info mb-1">Hausiversary in 8 Days</h3>
                        <p className="text-sm text-muted-foreground">
                          This was his first investment, ask about the new tenants. New kid was born ask about him
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-5 bg-info/5 border-info/20">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-info/10 flex items-center justify-center flex-shrink-0">
                        <Home className="h-5 w-5 text-info" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-info mb-1">Hausiversary in 8 Days</h3>
                        <p className="text-sm text-muted-foreground">
                          This was his first investment, ask about the new tenants. New kid was born ask about him
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Placeholder for chart/graph */}
                  <Card className="p-5 h-64 flex items-center justify-center bg-muted/30">
                    <p className="text-sm text-muted-foreground">Chart Area</p>
                  </Card>
                </div>

                {/* Right column - Stats & Calls */}
                <div className="space-y-6">
                  {/* Stats - AT THE TOP - Horizontal */}
                  <div className="grid grid-cols-3 gap-2">
                    <Card className="p-3 text-center">
                      <Phone className="h-4 w-4 mx-auto mb-1.5 text-primary" />
                      <div className="text-[10px] text-muted-foreground mb-0.5 whitespace-nowrap">Viable Calls</div>
                      <div className="text-xl font-bold">{contactData.viableCalls}</div>
                    </Card>
                    <Card className="p-3 text-center">
                      <MessageSquare className="h-4 w-4 mx-auto mb-1.5 text-primary" />
                      <div className="text-[10px] text-muted-foreground mb-0.5 whitespace-nowrap">Interactions</div>
                      <div className="text-xl font-bold">{contactData.interactions}</div>
                    </Card>
                    <Card className="p-3 text-center">
                      <Users className="h-4 w-4 mx-auto mb-1.5 text-primary" />
                      <div className="text-[10px] text-muted-foreground mb-0.5 whitespace-nowrap">Referrals</div>
                      <div className="text-xl font-bold">{contactData.referrals}</div>
                    </Card>
                  </div>

                  {/* Quarterly Calls - Clean List */}
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-4">QUARTERLY CALLS</h3>
                    <div className="space-y-3">
                      {contactData.quarterlyCalls.map((call, idx) => {
                        const getStatusColor = (status: string) => {
                          switch (status) {
                            case "Spoke": return "bg-success";
                            case "Voicemail": return "bg-caution";
                            case "No Answer": return "bg-destructive";
                            case "Scheduled": return "bg-muted";
                            default: return "bg-muted";
                          }
                        };

                        return (
                          <div key={idx} className="flex items-start gap-3 text-sm">
                            <div className="flex flex-col items-start gap-1 flex-shrink-0">
                              <div className="font-medium">{call.date}</div>
                              {call.time && <div className="text-xs text-muted-foreground">{call.time}</div>}
                            </div>
                            <div className={`h-2 w-2 rounded-full mt-1.5 flex-shrink-0 ${getStatusColor(call.status)}`} />
                            <div className="flex-1">
                              <div className="font-semibold">{call.quarter}: {call.status}</div>
                              {call.summary && <div className="text-xs text-primary cursor-pointer hover:underline">{call.summary}</div>}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Tasks Section */}
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-4">TASKS</h3>
                    <div className="space-y-3">
                      <Card className="p-3 bg-muted/30">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="text-sm font-medium">123 Street Hausiversary</div>
                          <Badge variant="outline" className="text-xs bg-success/10 text-success border-success/20">Done</Badge>
                        </div>
                        <div className="text-xs text-muted-foreground">Purchased 8 years ago</div>
                      </Card>

                      <Card className="p-3">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="text-sm font-medium">2425 Wilson</div>
                          <Badge variant="outline" className="text-xs bg-info/10 text-info border-info/20">Upcoming</Badge>
                        </div>
                        <div className="text-xs text-muted-foreground">Listing appointment</div>
                      </Card>

                      <Card className="p-3">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="text-sm font-medium">Quarterly Call 4 of 4</div>
                          <Badge variant="outline" className="text-xs bg-destructive/10 text-destructive border-destructive/20">Overdue</Badge>
                        </div>
                        <div className="text-xs text-muted-foreground">Last viable call 6 months ago</div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="communication" className="m-0 p-6">
              <p className="text-muted-foreground">Communication content</p>
            </TabsContent>

            <TabsContent value="tasks" className="m-0 p-6">
              <p className="text-muted-foreground">Tasks content</p>
            </TabsContent>

            <TabsContent value="plans" className="m-0 p-6">
              <p className="text-muted-foreground">Smart Plans content</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
