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
  User,
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
      <div className="min-h-screen flex w-full">
        <AppSidebar />

        <main className="flex-1 bg-gradient-to-b from-silver to-muted/30">
          <div className="max-w-[1400px] mx-auto px-6 py-8">
            {/* Header */}
            <div className="mb-6">
              <Button variant="ghost" size="sm" asChild className="mb-4">
                <NavLink to="/leads">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Leads
                </NavLink>
              </Button>
              
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-3xl font-bold text-foreground">
                        Sarah Johnson
                      </h1>
                      <Flag className="h-5 w-5 text-destructive fill-destructive cursor-pointer hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className="bg-info text-info-foreground">New</Badge>
                      <Badge className="bg-primary/10 text-primary" variant="outline">
                        Buyer
                      </Badge>
                      <Badge variant="secondary">Website</Badge>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        <span>sarah.j@email.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        <span>(512) 555-0123</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  <Button size="sm">Convert to Client</Button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Button variant="outline" className="justify-start gap-3 h-auto py-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium">Call Lead</p>
                  <p className="text-xs text-muted-foreground">Quick dial</p>
                </div>
              </Button>
              <Button variant="outline" className="justify-start gap-3 h-auto py-4">
                <div className="p-2 bg-success/10 rounded-lg">
                  <Mail className="h-4 w-4 text-success" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium">Send Email</p>
                  <p className="text-xs text-muted-foreground">Compose message</p>
                </div>
              </Button>
              <Button variant="outline" className="justify-start gap-3 h-auto py-4">
                <div className="p-2 bg-info/10 rounded-lg">
                  <MessageSquare className="h-4 w-4 text-info" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium">Send SMS</p>
                  <p className="text-xs text-muted-foreground">Text message</p>
                </div>
              </Button>
              <Button variant="outline" className="justify-start gap-3 h-auto py-4">
                <div className="p-2 bg-caution/10 rounded-lg">
                  <Calendar className="h-4 w-4 text-caution" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium">Schedule Meeting</p>
                  <p className="text-xs text-muted-foreground">Book appointment</p>
                </div>
              </Button>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Lead Information */}
                  <div className="lg:col-span-2 space-y-6">
                    <Card className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">
                        Lead Information
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Status</p>
                            <Select defaultValue="new">
                              <SelectTrigger>
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
                            <p className="text-sm text-muted-foreground mb-1">Lead Type</p>
                            <p className="text-sm font-medium text-foreground">Buyer</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Source</p>
                            <p className="text-sm font-medium text-foreground">Website</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Registered</p>
                            <p className="text-sm font-medium text-foreground">Dec 10, 2024</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Assigned Agent</p>
                            <Select defaultValue="john">
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="john">John Smith</SelectItem>
                                <SelectItem value="emma">Emma Davis</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Price Point</p>
                            <p className="text-sm font-medium text-foreground">$400K - $500K</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Location</p>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3 text-muted-foreground" />
                              <p className="text-sm font-medium text-foreground">78701</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">
                        Lead Details
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium text-foreground mb-2">Interest</p>
                          <p className="text-sm text-muted-foreground">
                            Looking for 3BR in downtown area
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground mb-2">Tags</p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">hot_lead</Badge>
                            <Badge variant="secondary">first_time_buyer</Badge>
                            <Button variant="ghost" size="sm" className="h-6">
                              <Tag className="h-3 w-3 mr-1" />
                              Add Tag
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">
                        Next Steps
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 bg-info/10 rounded-lg">
                          <Clock className="h-5 w-5 text-info mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-foreground">
                              Initial Contact
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Reach out within 24 hours of lead registration
                            </p>
                          </div>
                          <Button size="sm">Complete</Button>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                          <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-foreground">
                              Schedule Consultation
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Set up buyer consultation call
                            </p>
                          </div>
                          <Button size="sm" variant="outline">Schedule</Button>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    <Card className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">
                        Lead Score
                      </h3>
                      <div className="text-center mb-4">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-success/10 mb-2">
                          <span className="text-3xl font-bold text-success">85</span>
                        </div>
                        <p className="text-sm text-muted-foreground">High Priority</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Engagement</span>
                          <span className="font-medium text-foreground">High</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Response Time</span>
                          <span className="font-medium text-foreground">Fast</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Budget Match</span>
                          <span className="font-medium text-foreground">Good</span>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">
                        Timeline
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-foreground">Lead Registered</p>
                            <p className="text-xs text-muted-foreground">Dec 10, 2:30 PM</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-foreground">Auto-assigned</p>
                            <p className="text-xs text-muted-foreground">Dec 10, 2:31 PM</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-muted rounded-lg">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-foreground">Awaiting Contact</p>
                            <p className="text-xs text-muted-foreground">Pending</p>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">
                        Stats
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Emails Sent</span>
                          <span className="text-sm font-medium text-foreground">0</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Calls Made</span>
                          <span className="text-sm font-medium text-foreground">0</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Meetings</span>
                          <span className="text-sm font-medium text-foreground">0</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Properties Viewed</span>
                          <span className="text-sm font-medium text-foreground">0</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Activity Tab */}
              <TabsContent value="activity" className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Activity History
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 hover:bg-muted/50 rounded-lg transition-colors">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">Lead registered from website</p>
                        <p className="text-xs text-muted-foreground mt-1">Dec 10, 2024 at 2:30 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 hover:bg-muted/50 rounded-lg transition-colors">
                      <div className="p-2 bg-success/10 rounded-lg">
                        <Users className="h-4 w-4 text-success" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">Assigned to John Smith</p>
                        <p className="text-xs text-muted-foreground mt-1">Dec 10, 2024 at 2:31 PM</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Notes Tab */}
              <TabsContent value="notes" className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Notes
                  </h3>
                  <Textarea
                    placeholder="Add a note about this lead..."
                    className="mb-4 min-h-[120px]"
                  />
                  <Button>Save Note</Button>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Previous Notes
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <p className="text-sm font-medium text-foreground">Initial Contact Note</p>
                        <span className="text-xs text-muted-foreground">Dec 10, 3:00 PM</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Looking for 3BR in downtown area. Budget appears solid. 
                        Interested in viewing properties this weekend.
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Documents Tab */}
              <TabsContent value="documents" className="space-y-6">
                <Card className="p-6">
                  <div className="text-center py-8">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      No documents yet
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Upload documents related to this lead
                    </p>
                    <Button>Upload Document</Button>
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
