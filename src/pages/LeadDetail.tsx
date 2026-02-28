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

        <main className="flex-1 bg-background overflow-y-auto">
          <div className="max-w-[1600px] mx-auto px-7 py-6">
            {/* Navigation */}
            <Button variant="ghost" size="sm" asChild className="mb-6 -ml-2 text-muted-foreground">
              <NavLink to="/leads">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Leads
              </NavLink>
            </Button>

            {/* Header */}
            <div className="mb-6">
              <div className="flex items-start justify-between">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-[22px] font-normal tracking-tight text-foreground">
                        Sarah Johnson
                      </h1>
                      <Flag className="h-4 w-4 text-destructive fill-destructive cursor-pointer" />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-info/10 text-info border border-info/20 rounded-full px-2.5 text-[10px]">New</Badge>
                      <Badge className="bg-surface-cream text-foreground rounded-full px-2.5 text-[10px]" variant="outline">
                        Buyer
                      </Badge>
                      <Badge variant="secondary" className="rounded-full px-2.5 text-[10px]">Website</Badge>
                    </div>
                    <div className="flex items-center gap-5 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5" />
                        <span>sarah.j@email.com</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Phone className="h-3.5 w-3.5" />
                        <span>(512) 555-0123</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>78701</span>
                      </div>
                    </div>
                  </div>

                  {/* Lead Info & Score */}
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-8">
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Agent</p>
                        <p className="text-xs font-medium text-foreground mt-0.5">John Smith</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Price</p>
                        <p className="text-xs font-medium font-mono text-foreground mt-0.5">$400K–$500K</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Registered</p>
                        <p className="text-xs font-medium text-foreground mt-0.5">Dec 10, 2024</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 pl-6 border-l border-border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-success/10 border border-success/20">
                        <span className="text-lg font-semibold font-mono text-success">85</span>
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Score</p>
                        <p className="text-xs font-semibold text-success mt-0.5">High</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-3.5 w-3.5 mr-1.5" />
                    Edit
                  </Button>
                  <Button size="sm">Convert to Client</Button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              <Button variant="outline" className="justify-start gap-3 h-14 rounded-xl border">
                <div className="p-2 bg-surface-cream rounded-lg">
                  <Phone className="h-4 w-4 text-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-[13px] font-medium">Call</p>
                </div>
              </Button>
              <Button variant="outline" className="justify-start gap-3 h-14 rounded-xl border">
                <div className="p-2 bg-surface-cream rounded-lg">
                  <Mail className="h-4 w-4 text-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-[13px] font-medium">Email</p>
                </div>
              </Button>
              <Button variant="outline" className="justify-start gap-3 h-14 rounded-xl border">
                <div className="p-2 bg-surface-cream rounded-lg">
                  <MessageSquare className="h-4 w-4 text-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-[13px] font-medium">SMS</p>
                </div>
              </Button>
              <Button variant="outline" className="justify-start gap-3 h-14 rounded-xl border">
                <div className="p-2 bg-surface-cream rounded-lg">
                  <Calendar className="h-4 w-4 text-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-[13px] font-medium">Schedule</p>
                </div>
              </Button>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="space-y-5">
              <TabsList className="bg-surface-cream p-1 rounded-lg">
                <TabsTrigger value="overview" className="rounded-md text-xs">Overview</TabsTrigger>
                <TabsTrigger value="activity" className="rounded-md text-xs">Activity</TabsTrigger>
                <TabsTrigger value="notes" className="rounded-md text-xs">Notes</TabsTrigger>
                <TabsTrigger value="documents" className="rounded-md text-xs">Documents</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Lead Details */}
                  <Card className="p-5 rounded-xl border">
                    <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-4">
                      Lead Details
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1.5">Status</p>
                        <Select defaultValue="new">
                          <SelectTrigger className="rounded-lg h-9 text-xs">
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
                        <p className="text-xs text-muted-foreground mb-1">Interest</p>
                        <p className="text-[13px] text-foreground">
                          Looking for 3BR in downtown area
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-2">Tags</p>
                        <div className="flex flex-wrap gap-1.5">
                          <Badge variant="secondary" className="rounded-full text-[10px] px-2">hot_lead</Badge>
                          <Badge variant="secondary" className="rounded-full text-[10px] px-2">first_time_buyer</Badge>
                          <Button variant="ghost" size="sm" className="h-6 text-[10px] rounded-full px-2">
                            <Tag className="h-3 w-3 mr-1" />
                            Add
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Stats */}
                  <Card className="p-5 rounded-xl border">
                    <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-4">
                      Activity Stats
                    </h3>
                    <div className="space-y-2">
                      {[["Emails Sent", "0"], ["Calls Made", "0"], ["Meetings", "0"], ["Properties Viewed", "0"]].map(([label, val]) => (
                        <div key={label} className="flex justify-between items-center py-1.5 border-b border-border-sub last:border-0">
                          <span className="text-xs text-muted-foreground">{label}</span>
                          <span className="text-sm font-semibold font-mono text-foreground">{val}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Next Steps */}
                <Card className="p-5 rounded-xl border">
                  <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-4">
                    Next Steps
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-info/5 rounded-lg border border-info/10">
                      <div className="p-2 bg-info/10 rounded-lg">
                        <Clock className="h-4 w-4 text-info" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[13px] font-medium text-foreground">Initial Contact</p>
                        <p className="text-[11px] text-muted-foreground">Reach out within 24 hours</p>
                      </div>
                      <Button size="sm">Complete</Button>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-surface-cream rounded-lg border border-border-sub">
                      <div className="p-2 bg-muted rounded-lg">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[13px] font-medium text-foreground">Schedule Consultation</p>
                        <p className="text-[11px] text-muted-foreground">Set up buyer consultation call</p>
                      </div>
                      <Button size="sm" variant="outline">Schedule</Button>
                    </div>
                  </div>
                </Card>

                {/* Timeline */}
                <Card className="p-5 rounded-xl border">
                  <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-4">
                    Timeline
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-success/10 rounded-lg shrink-0">
                        <CheckCircle2 className="h-4 w-4 text-success" />
                      </div>
                      <div className="pt-0.5">
                        <p className="text-[13px] font-medium text-foreground">Lead Registered</p>
                        <p className="text-[11px] text-muted-foreground">Dec 10, 2:30 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-success/10 rounded-lg shrink-0">
                        <CheckCircle2 className="h-4 w-4 text-success" />
                      </div>
                      <div className="pt-0.5">
                        <p className="text-[13px] font-medium text-foreground">Auto-assigned</p>
                        <p className="text-[11px] text-muted-foreground">Dec 10, 2:31 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-surface-cream rounded-lg shrink-0">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="pt-0.5">
                        <p className="text-[13px] font-medium text-foreground">Awaiting Contact</p>
                        <p className="text-[11px] text-muted-foreground">Pending</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Activity Tab */}
              <TabsContent value="activity" className="space-y-4">
                <Card className="p-5 rounded-xl border">
                  <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-4">
                    Activity History
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg">
                      <div className="p-2 bg-surface-cream rounded-lg shrink-0">
                        <Users className="h-4 w-4 text-foreground" />
                      </div>
                      <div>
                        <p className="text-[13px] font-medium text-foreground">Lead registered from website</p>
                        <p className="text-[11px] text-muted-foreground">Dec 10, 2024 at 2:30 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg">
                      <div className="p-2 bg-success/10 rounded-lg shrink-0">
                        <Users className="h-4 w-4 text-success" />
                      </div>
                      <div>
                        <p className="text-[13px] font-medium text-foreground">Assigned to John Smith</p>
                        <p className="text-[11px] text-muted-foreground">Dec 10, 2024 at 2:31 PM</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Notes Tab */}
              <TabsContent value="notes" className="space-y-4">
                <Card className="p-5 rounded-xl border">
                  <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-4">
                    Add Note
                  </h3>
                  <Textarea
                    placeholder="Add a note about this lead..."
                    className="mb-3 min-h-[120px] rounded-lg text-[13px]"
                  />
                  <Button size="sm">Save Note</Button>
                </Card>

                <Card className="p-5 rounded-xl border">
                  <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-4">
                    Previous Notes
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-surface-cream rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <p className="text-[13px] font-medium text-foreground">Initial Contact Note</p>
                        <span className="text-[10px] text-muted-foreground">Dec 10, 3:00 PM</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Looking for 3BR in downtown area. Budget appears solid. 
                        Interested in viewing properties this weekend.
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Documents Tab */}
              <TabsContent value="documents" className="space-y-4">
                <Card className="p-5 rounded-xl border">
                  <div className="text-center py-10">
                    <div className="inline-flex p-3 bg-surface-cream rounded-xl mb-3">
                      <FileText className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">
                      No documents yet
                    </h3>
                    <p className="text-xs text-muted-foreground mb-4 max-w-xs mx-auto">
                      Upload documents related to this lead
                    </p>
                    <Button size="sm">Upload Document</Button>
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
