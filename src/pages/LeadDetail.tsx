import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NavLink } from "@/components/NavLink";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  DollarSign,
  Calendar,
  Edit,
  Flag,
  MessageSquare,
  Clock,
  CheckCircle2,
  Users,
  TrendingUp,
  FileText,
  Tag,
} from "lucide-react";

const LeadDetail = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />

        <main className="flex-1 overflow-auto">
          <div className="max-w-[1600px] mx-auto px-8 py-10">
            {/* Navigation */}
            <Button variant="ghost" size="sm" asChild className="mb-8 -ml-2">
              <NavLink to="/leads">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Leads
              </NavLink>
            </Button>

            {/* Header */}
            <div className="mb-10">
              <div className="flex items-start justify-between">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <h1 className="text-4xl font-semibold tracking-tight text-foreground">
                        Sarah Johnson
                      </h1>
                      <Flag className="h-5 w-5 text-destructive fill-destructive cursor-pointer" />
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-info text-info-foreground rounded-full px-3">New</Badge>
                      <Badge className="bg-primary/10 text-primary rounded-full px-3" variant="outline">
                        Buyer
                      </Badge>
                      <Badge variant="secondary" className="rounded-full px-3">Website</Badge>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        <span>sarah.j@email.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        <span>(512) 555-0123</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>78701</span>
                      </div>
                    </div>
                  </div>

                  {/* Lead Info & Score */}
                  <div className="flex items-start gap-8">
                    <div className="flex items-start gap-12">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Assigned Agent</p>
                        <p className="text-sm font-medium text-foreground">John Smith</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Price Point</p>
                        <p className="text-sm font-medium text-foreground">$400K - $500K</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Registered</p>
                        <p className="text-sm font-medium text-foreground">Dec 10, 2024</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 pl-8 border-l">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10">
                        <span className="text-2xl font-bold text-success">85</span>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Lead Score</p>
                        <p className="text-sm font-semibold text-success">High Priority</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="default" className="rounded-full">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  <Button size="default" className="rounded-full">Convert to Client</Button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
              <Button variant="outline" className="justify-start gap-4 h-20 rounded-2xl border-2">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold">Call Lead</p>
                  <p className="text-xs text-muted-foreground">Quick dial</p>
                </div>
              </Button>
              <Button variant="outline" className="justify-start gap-4 h-20 rounded-2xl border-2">
                <div className="p-3 bg-success/10 rounded-xl">
                  <Mail className="h-5 w-5 text-success" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold">Send Email</p>
                  <p className="text-xs text-muted-foreground">Compose message</p>
                </div>
              </Button>
              <Button variant="outline" className="justify-start gap-4 h-20 rounded-2xl border-2">
                <div className="p-3 bg-info/10 rounded-xl">
                  <MessageSquare className="h-5 w-5 text-info" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold">Send SMS</p>
                  <p className="text-xs text-muted-foreground">Text message</p>
                </div>
              </Button>
              <Button variant="outline" className="justify-start gap-4 h-20 rounded-2xl border-2">
                <div className="p-3 bg-caution/10 rounded-xl">
                  <Calendar className="h-5 w-5 text-caution" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold">Schedule Meeting</p>
                  <p className="text-xs text-muted-foreground">Book appointment</p>
                </div>
              </Button>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="space-y-8">
              <TabsList className="bg-muted/50 p-1 rounded-xl">
                <TabsTrigger value="overview" className="rounded-lg">Overview</TabsTrigger>
                <TabsTrigger value="activity" className="rounded-lg">Activity</TabsTrigger>
                <TabsTrigger value="notes" className="rounded-lg">Notes</TabsTrigger>
                <TabsTrigger value="documents" className="rounded-lg">Documents</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Lead Details */}
                  <Card className="p-8 rounded-2xl border-2 shadow-sm">
                    <h3 className="text-xl font-semibold text-foreground mb-6">
                      Lead Details
                    </h3>
                    <div className="space-y-5">
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Status</p>
                        <Select defaultValue="new">
                          <SelectTrigger className="rounded-lg">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New</SelectItem>
                            <SelectItem value="contacted">Contacted</SelectItem>
                            <SelectItem value="qualified">Qualified</SelectItem>
                            <SelectItem value="nurturing">Nurturing</SelectItem>
                            <SelectItem value="converted">Converted</SelectItem>
                            <SelectItem value="lost">Lost</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Interest</p>
                        <p className="text-sm text-foreground leading-relaxed">
                          Looking for 3BR in downtown area
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-3">Tags</p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="rounded-full">hot_lead</Badge>
                          <Badge variant="secondary" className="rounded-full">first_time_buyer</Badge>
                          <Button variant="ghost" size="sm" className="h-7 rounded-full">
                            <Tag className="h-3 w-3 mr-1" />
                            Add Tag
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Stats */}
                  <Card className="p-8 rounded-2xl border-2 shadow-sm">
                    <h3 className="text-xl font-semibold text-foreground mb-6">
                      Activity Stats
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm text-muted-foreground">Emails Sent</span>
                        <span className="text-lg font-semibold text-foreground">0</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm text-muted-foreground">Calls Made</span>
                        <span className="text-lg font-semibold text-foreground">0</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm text-muted-foreground">Meetings</span>
                        <span className="text-lg font-semibold text-foreground">0</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm text-muted-foreground">Properties Viewed</span>
                        <span className="text-lg font-semibold text-foreground">0</span>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Next Steps */}
                <Card className="p-8 rounded-2xl border-2 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    Next Steps
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-5 bg-info/5 rounded-xl border border-info/20">
                      <div className="p-3 bg-info/10 rounded-xl">
                        <Clock className="h-5 w-5 text-info" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground mb-1">
                          Initial Contact
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Reach out within 24 hours of lead registration
                        </p>
                      </div>
                      <Button size="default" className="rounded-full">Complete</Button>
                    </div>
                    <div className="flex items-center gap-4 p-5 bg-muted/30 rounded-xl border border-border/50">
                      <div className="p-3 bg-muted rounded-xl">
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground mb-1">
                          Schedule Consultation
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Set up buyer consultation call
                        </p>
                      </div>
                      <Button size="default" variant="outline" className="rounded-full">Schedule</Button>
                    </div>
                  </div>
                </Card>

                {/* Timeline */}
                <Card className="p-8 rounded-2xl border-2 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    Timeline
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-sm font-semibold text-foreground mb-1">Lead Registered</p>
                        <p className="text-xs text-muted-foreground">Dec 10, 2:30 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-sm font-semibold text-foreground mb-1">Auto-assigned</p>
                        <p className="text-xs text-muted-foreground">Dec 10, 2:31 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-muted rounded-xl">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-sm font-semibold text-foreground mb-1">Awaiting Contact</p>
                        <p className="text-xs text-muted-foreground">Pending</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Activity Tab */}
              <TabsContent value="activity" className="space-y-6">
                <Card className="p-8 rounded-2xl border-2 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    Activity History
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-5 rounded-xl">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground mb-1">Lead registered from website</p>
                        <p className="text-xs text-muted-foreground">Dec 10, 2024 at 2:30 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-xl">
                      <div className="p-3 bg-success/10 rounded-xl">
                        <Users className="h-5 w-5 text-success" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground mb-1">Assigned to John Smith</p>
                        <p className="text-xs text-muted-foreground">Dec 10, 2024 at 2:31 PM</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Notes Tab */}
              <TabsContent value="notes" className="space-y-6">
                <Card className="p-8 rounded-2xl border-2 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    Add Note
                  </h3>
                  <Textarea
                    placeholder="Add a note about this lead..."
                    className="mb-4 min-h-[140px] rounded-xl"
                  />
                  <Button className="rounded-full">Save Note</Button>
                </Card>

                <Card className="p-8 rounded-2xl border-2 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    Previous Notes
                  </h3>
                  <div className="space-y-4">
                    <div className="p-5 bg-muted/30 rounded-xl">
                      <div className="flex items-start justify-between mb-3">
                        <p className="text-sm font-semibold text-foreground">Initial Contact Note</p>
                        <span className="text-xs text-muted-foreground">Dec 10, 3:00 PM</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Looking for 3BR in downtown area. Budget appears solid. 
                        Interested in viewing properties this weekend.
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Documents Tab */}
              <TabsContent value="documents" className="space-y-6">
                <Card className="p-8 rounded-2xl border-2 shadow-sm">
                  <div className="text-center py-12">
                    <div className="inline-flex p-4 bg-muted/50 rounded-2xl mb-4">
                      <FileText className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      No documents yet
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
                      Upload documents related to this lead
                    </p>
                    <Button className="rounded-full">Upload Document</Button>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default LeadDetail;
