import { ArrowLeft, Phone, Mail, MessageSquare, MoreVertical, Home, TrendingUp, TrendingDown, Check, MapPin, Star, Calendar, Users, DollarSign, Building2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Mock data
const contactData = {
  id: "1",
  firstName: "Brent",
  lastName: "Fannin",
  fullName: "Brent Fannin",
  email: "brent.fannin@example.com",
  phone: "(512) 555-0123",
  status: "Past Client",
  contactType: "VIP",
  leadSource: "Sphere",
  assignedAgent: "Happy Webberman",
  streetAddress: "123 Street Blvd",
  city: "Austin",
  state: "TX",
  zipcode: "78704",
  birthday: "February 13, 1980",
  homeAnniversary: "January 23, 2017",
  notes: "CEO FIA Homes. Builder, Developer, Investor. Interested in architecture, interior design, and cat ownership.",
  tags: ["VIP", "Builder", "Investor", "Cat Owner"],
  propertyValue: "$455,000",
  propertyBeds: 4,
  propertyBaths: 3,
  propertySqft: "2,708 sqft",
  propertyType: "Duplex",
  purchaseDate: "January 23, 2017",
  hausYears: 7,
  propertyValueChange: -7.2,
  hauswatchOpenRate: 82,
  propertyAlertsRate: 74,
  hausiversariesRate: 91,
  viableCalls: 32,
  interactions: 21,
  referrals: 7,
  totalTransactions: 2,
  totalRevenue: "$458,000",
  lifetimeValue: "$32,400",
};

export default function ContactProfile() {
  const navigate = useNavigate();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        
        <main className="flex-1 bg-gradient-to-b from-silver to-muted/30">
          {/* Header */}
          <header className="border-b border-border bg-card/80 backdrop-blur-xl sticky top-0 z-20">
            <div className="max-w-[1400px] mx-auto px-8 py-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-5">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="rounded-xl hover:bg-muted/50 h-10 w-10 mt-1" 
                    onClick={() => navigate('/clients')}
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  
                  <Avatar className="h-16 w-16 ring-2 ring-border">
                    <AvatarFallback className="text-xl font-bold bg-primary/10 text-primary">
                      {contactData.firstName[0]}{contactData.lastName[0]}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-[28px] font-semibold tracking-[-0.02em] text-foreground">{contactData.fullName}</h1>
                      <Badge className="bg-success/10 text-success border-success/20 text-xs font-medium h-6 px-2.5">
                        <Check className="h-3 w-3 mr-1" />
                        Past Client
                      </Badge>
                      {contactData.contactType === "VIP" && (
                        <Badge className="bg-caution/10 text-caution border-caution/20 text-xs font-medium h-6 px-2.5">
                          <Star className="h-3 w-3 mr-1 fill-caution" />
                          VIP
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4 text-[13px] text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5" />
                        {contactData.email}
                      </span>
                      <span className="text-border">•</span>
                      <span className="flex items-center gap-1.5">
                        <Phone className="h-3.5 w-3.5" />
                        {contactData.phone}
                      </span>
                      <span className="text-border">•</span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {contactData.city}, {contactData.state}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-9 text-[13px] font-medium gap-2">
                    <Phone className="h-3.5 w-3.5" />
                    Call
                  </Button>
                  <Button variant="outline" size="sm" className="h-9 text-[13px] font-medium gap-2">
                    <MessageSquare className="h-3.5 w-3.5" />
                    Text
                  </Button>
                  <Button variant="outline" size="sm" className="h-9 text-[13px] font-medium gap-2">
                    <Mail className="h-3.5 w-3.5" />
                    Email
                  </Button>
                  <Button size="sm" className="h-9 text-[13px] font-medium bg-charcoal hover:bg-charcoal/90">
                    Edit Profile
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon" className="h-9 w-9">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-card border-border">
                      <DropdownMenuItem>View Documents</DropdownMenuItem>
                      <DropdownMenuItem>Schedule Follow-up</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Archive Contact</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </header>

          <div className="max-w-[1400px] mx-auto px-8 py-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <Card className="p-5 hover:shadow-md transition-shadow duration-200 border-border">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <DollarSign className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <div className="text-[13px] text-muted-foreground font-medium mb-1">Lifetime Value</div>
                <div className="text-[24px] font-bold tracking-tight text-foreground">{contactData.lifetimeValue}</div>
                <div className="text-[11px] text-muted-foreground mt-1">{contactData.totalTransactions} transactions</div>
              </Card>

              <Card className="p-5 hover:shadow-md transition-shadow duration-200 border-border">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 bg-success/10 rounded-lg">
                    <Calendar className="h-4 w-4 text-success" />
                  </div>
                </div>
                <div className="text-[13px] text-muted-foreground font-medium mb-1">Client Since</div>
                <div className="text-[24px] font-bold tracking-tight text-foreground">{contactData.hausYears} years</div>
                <div className="text-[11px] text-muted-foreground mt-1">Since {contactData.purchaseDate}</div>
              </Card>

              <Card className="p-5 hover:shadow-md transition-shadow duration-200 border-border">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 bg-info/10 rounded-lg">
                    <Users className="h-4 w-4 text-info" />
                  </div>
                </div>
                <div className="text-[13px] text-muted-foreground font-medium mb-1">Referrals</div>
                <div className="text-[24px] font-bold tracking-tight text-foreground">{contactData.referrals}</div>
                <div className="text-[11px] text-muted-foreground mt-1">{contactData.interactions} total interactions</div>
              </Card>

              <Card className="p-5 hover:shadow-md transition-shadow duration-200 border-border">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 bg-caution/10 rounded-lg">
                    <MessageSquare className="h-4 w-4 text-caution" />
                  </div>
                </div>
                <div className="text-[13px] text-muted-foreground font-medium mb-1">Viable Calls</div>
                <div className="text-[24px] font-bold tracking-tight text-foreground">{contactData.viableCalls}</div>
                <div className="text-[11px] text-muted-foreground mt-1">Engagement score</div>
              </Card>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-3 gap-6">
              {/* Left Column - 2/3 */}
              <div className="col-span-2 space-y-6">
                {/* Property Card */}
                <Card className="p-6 border-border">
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <h2 className="text-[18px] font-bold text-foreground tracking-tight mb-1">Property Information</h2>
                      <p className="text-[13px] text-muted-foreground">Current ownership details</p>
                    </div>
                    <Button variant="outline" size="sm" className="text-[12px] gap-2">
                      <ExternalLink className="h-3 w-3" />
                      View Full Details
                    </Button>
                  </div>

                  <div className="relative group cursor-pointer mb-5">
                    <img 
                      src="/placeholder.svg" 
                      alt="Property" 
                      className="w-full h-64 object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-xl" />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-[17px] font-semibold text-foreground mb-1">{contactData.streetAddress}</h3>
                      <p className="text-[13px] text-muted-foreground">{contactData.city}, {contactData.state} {contactData.zipcode}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Badge variant="secondary" className="text-xs font-medium">{contactData.propertyType}</Badge>
                      <Badge variant="secondary" className="text-xs font-medium">Rental Property</Badge>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                      <div>
                        <div className="text-[11px] text-muted-foreground font-medium mb-1 uppercase tracking-wider">Property Value</div>
                        <div className="text-[20px] font-bold text-foreground tracking-tight">{contactData.propertyValue}</div>
                        <div className="flex items-center gap-1 mt-1">
                          <TrendingDown className="h-3 w-3 text-destructive" />
                          <span className="text-[12px] font-semibold text-destructive">{contactData.propertyValueChange}%</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-[11px] text-muted-foreground font-medium mb-1 uppercase tracking-wider">Bedrooms / Baths</div>
                        <div className="text-[20px] font-bold text-foreground tracking-tight">{contactData.propertyBeds} / {contactData.propertyBaths}</div>
                        <div className="text-[11px] text-muted-foreground mt-1">{contactData.propertySqft}</div>
                      </div>
                      <div>
                        <div className="text-[11px] text-muted-foreground font-medium mb-1 uppercase tracking-wider">Purchase Date</div>
                        <div className="text-[14px] font-semibold text-foreground">{contactData.purchaseDate}</div>
                        <div className="text-[11px] text-muted-foreground mt-1">{contactData.hausYears} years ago</div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Contact Details */}
                <Card className="p-6 border-border">
                  <h2 className="text-[18px] font-bold text-foreground tracking-tight mb-5">Contact Details</h2>
                  
                  <div className="space-y-5">
                    <div>
                      <div className="text-[12px] text-muted-foreground font-medium mb-2 uppercase tracking-wider">Biography</div>
                      <p className="text-[14px] text-foreground leading-relaxed">{contactData.notes}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 pt-4 border-t border-border">
                      <div>
                        <div className="text-[12px] text-muted-foreground font-medium mb-2 uppercase tracking-wider">Birthday</div>
                        <div className="text-[14px] font-semibold text-foreground">{contactData.birthday}</div>
                      </div>
                      <div>
                        <div className="text-[12px] text-muted-foreground font-medium mb-2 uppercase tracking-wider">Home Anniversary</div>
                        <div className="text-[14px] font-semibold text-foreground">{contactData.homeAnniversary}</div>
                      </div>
                      <div>
                        <div className="text-[12px] text-muted-foreground font-medium mb-2 uppercase tracking-wider">Lead Source</div>
                        <div className="text-[14px] font-semibold text-foreground">{contactData.leadSource}</div>
                      </div>
                      <div>
                        <div className="text-[12px] text-muted-foreground font-medium mb-2 uppercase tracking-wider">Assigned Agent</div>
                        <div className="text-[14px] font-semibold text-foreground">{contactData.assignedAgent}</div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="text-[12px] text-muted-foreground font-medium mb-3 uppercase tracking-wider">Tags</div>
                      <div className="flex flex-wrap gap-2">
                        {contactData.tags.map((tag, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs font-medium px-3 py-1">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Right Column - 1/3 */}
              <div className="space-y-6">
                {/* Engagement Metrics */}
                <Card className="p-6 border-border">
                  <h3 className="text-[15px] font-bold text-foreground tracking-tight mb-5">Engagement Metrics</h3>
                  
                  <div className="space-y-5">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[12px] font-medium text-foreground">Hauswatch Open Rate</span>
                        <span className="text-[13px] font-bold text-foreground">{contactData.hauswatchOpenRate}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-success transition-all" 
                          style={{ width: `${contactData.hauswatchOpenRate}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[12px] font-medium text-foreground">Property Alerts</span>
                        <span className="text-[13px] font-bold text-foreground">{contactData.propertyAlertsRate}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-info transition-all" 
                          style={{ width: `${contactData.propertyAlertsRate}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[12px] font-medium text-foreground">Hausiversaries</span>
                        <span className="text-[13px] font-bold text-foreground">{contactData.hausiversariesRate}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary transition-all" 
                          style={{ width: `${contactData.hausiversariesRate}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Quick Actions */}
                <Card className="p-6 border-border">
                  <h3 className="text-[15px] font-bold text-foreground tracking-tight mb-4">Quick Actions</h3>
                  
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start text-[13px] font-medium gap-3 h-10">
                      <Calendar className="h-4 w-4" />
                      Schedule Follow-up
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-[13px] font-medium gap-3 h-10">
                      <Mail className="h-4 w-4" />
                      Send Campaign
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-[13px] font-medium gap-3 h-10">
                      <Building2 className="h-4 w-4" />
                      View Properties
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-[13px] font-medium gap-3 h-10">
                      <Users className="h-4 w-4" />
                      View Referrals
                    </Button>
                  </div>
                </Card>

                {/* Important Dates */}
                <Card className="p-6 border-border">
                  <h3 className="text-[15px] font-bold text-foreground tracking-tight mb-4">Important Dates</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-caution/10 rounded-lg">
                        <Calendar className="h-4 w-4 text-caution" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[13px] font-semibold text-foreground">Birthday</div>
                        <div className="text-[12px] text-muted-foreground mt-0.5">{contactData.birthday}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-success/10 rounded-lg">
                        <Home className="h-4 w-4 text-success" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[13px] font-semibold text-foreground">Home Anniversary</div>
                        <div className="text-[12px] text-muted-foreground mt-0.5">{contactData.homeAnniversary}</div>
                        <div className="text-[11px] text-muted-foreground mt-1">{contactData.hausYears} years</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
