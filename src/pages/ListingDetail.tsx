import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import {
  ArrowLeft,
  Edit,
  ExternalLink,
  CheckCircle2,
  Clock,
  AlertCircle,
  Camera,
  Video,
  Lock,
  QrCode,
  MessageSquare,
  Megaphone,
  Monitor,
  Image as ImageIcon,
  Copy,
  ArrowRight,
} from "lucide-react";

// ── Mock data ──
const listing = {
  address: "2847 Oak Hill Dr",
  status: "Active",
  type: "Listing · Sale",
  mls: "2026-048291",
  client: "Park Family",
  agent: "Anthony Gibson",
  price: 675000,
  dom: 18,
  showings: 8,
  leads: 3,
};

const pipelineSteps = [
  { label: "Photos", status: "complete" },
  { label: "Staging", status: "complete" },
  { label: "Pricing", status: "complete" },
  { label: "Sign", status: "complete" },
  { label: "Lockbox", status: "complete" },
  { label: "Text Code", status: "complete" },
  { label: "Marketing", status: "complete" },
  { label: "Video", status: "scheduled" },
  { label: "Zillow", status: "not_started" },
];

const checklist = [
  { title: "Photos", subtitle: "Giraffe360 · 42 photos delivered", date: "Jan 18", done: true },
  { title: "Staging", subtitle: "Staged by Design · Full home", date: "Jan 16", done: true },
  { title: "Pricing", subtitle: "CMA complete · Listed at $675K", date: "Jan 20", done: true },
  { title: "Sign deployed", subtitle: "QR code #QR-0847 attached", date: "Jan 21", done: true },
  { title: "Lockbox assigned", subtitle: "LB-2847 · Supra · Code: 4821", date: "Jan 21", done: true },
  { title: "Text code active", subtitle: "HAUS2847 · 3 leads captured", date: "Jan 21", done: true },
  { title: "Marketing live", subtitle: "MLS, Zillow, social posted", date: "Jan 21", done: true },
  { title: "Video", subtitle: "Scheduled Feb 10 · Drone + walkthrough", date: null, done: false, action: "View details" },
  { title: "Zillow Showcase", subtitle: "Submit after video delivery", date: null, done: false, action: "Schedule" },
];

const inventory = [
  { id: "LB-2847", label: "Supra · Code: 4821", status: "Assigned", icon: Lock },
  { id: "Sign #S-0412", label: "Deployed Jan 21", status: "Deployed", icon: QrCode },
  { id: "QR #QR-0847", label: "Attached to Sign #S-0412", status: "Active", icon: QrCode },
  { id: "HAUS2847", label: "3 leads captured", status: "Active", icon: MessageSquare },
];

const media = [
  { label: "Photos", detail: "42 delivered", status: "Done" },
  { label: "3D Tour", detail: "Giraffe360", status: "Live" },
  { label: "Video", detail: "Feb 10", status: "Scheduled" },
  { label: "Listing Imgs", detail: "12 in gallery", status: "Ready" },
];

const activity = [
  { type: "showing", label: "Showing · Chen Family", detail: "Kim Realty · 2nd visit · 2 adults, 1 child", time: "Today 2p", comment: "Very interested in the backyard. Asking about seller timeline." },
  { type: "showing", label: "Showing · Martinez Family", detail: "ERA Realty · 1st visit · 2 adults", time: "Yesterday" },
  { type: "inquiry", label: "Agent Inquiry · Sarah Kim", detail: "Compass · Asking about seller concessions", time: "Feb 5" },
  { type: "open", label: "Open Haus", detail: "12 visitors · 4 potential buyers · 2 signed in", time: "Feb 2" },
];

const leads = [
  { name: "Rachel Johnson", source: "Text HAUS2847 · $500K buyer", assigned: "Anthony", pipeline: "Nurturing", contact: "Connected", contactTime: "2h response", color: "bg-destructive" },
  { name: "Kelly Park", source: "QR scan · Showing today 4:30p", assigned: "Anthony", pipeline: "Showing", contact: "Connected", contactTime: "45m response", color: "bg-caution" },
  { name: "Mike Rivera", source: "Text HAUS2847 · Browsing area", assigned: "Sarah P.", pipeline: "New", contact: "No contact", contactTime: "5d ago", color: "bg-success" },
  { name: "Jennifer Lee", source: "QR scan · Open Haus visitor", assigned: "Matt J.", pipeline: "Nurturing", contact: "Connected", contactTime: "15h response", color: "bg-info" },
  { name: "Sarah Kim · Compass", source: "Agent inquiry · Buyer $650-700K", assigned: "Lead Pond", pipeline: "Unassigned", contact: "No contact", contactTime: "3d ago", color: "bg-violet" },
];

const keyDates = [
  { label: "Target Live", date: "Jan 21" },
  { label: "List Date", date: "Jan 21" },
  { label: "Photos", date: "Jan 18" },
  { label: "Staging", date: "Jan 16" },
  { label: "Sign Deploy", date: "Jan 21" },
  { label: "Video", date: "Feb 10 (sched)", highlight: true },
];

const formatCurrency = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 }).format(n);

const stepDotColor = (status: string) => {
  if (status === "complete") return "bg-success";
  if (status === "scheduled") return "bg-caution";
  return "bg-muted-foreground/30";
};

const stepLineColor = (status: string) => {
  if (status === "complete") return "bg-success/40";
  return "bg-border";
};

const ListingDetail = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />

        <main className="flex-1 bg-background overflow-y-auto">
          <div className="max-w-[1400px] mx-auto px-7 py-6">
            {/* Back */}
            <Button variant="ghost" size="sm" asChild className="mb-3 -ml-2">
              <NavLink to="/listings">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Listings
              </NavLink>
            </Button>

            {/* ═══ Header ═══ */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-2xl font-semibold text-foreground mb-2">
                  {listing.address}
                </h1>
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge className="bg-success text-success-foreground">
                    {listing.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{listing.type}</span>
                  <span className="text-sm text-muted-foreground">MLS# {listing.mls}</span>
                  <span className="text-sm text-muted-foreground">{listing.client}</span>
                  <span className="text-sm text-muted-foreground">{listing.agent}</span>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <Button size="sm" className="gap-2">
                    <Edit className="h-3.5 w-3.5" />
                    Edit listing
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="h-3.5 w-3.5" />
                    MLS
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ArrowRight className="h-3.5 w-3.5" />
                    Transaction
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="h-3.5 w-3.5" />
                    Drive
                  </Button>
                </div>
              </div>
              <div className="flex items-start gap-6 text-right shrink-0">
                <div>
                  <p className="text-2xl font-semibold font-mono text-foreground">{formatCurrency(listing.price)}</p>
                  <p className="text-xs text-muted-foreground">List Price</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold font-mono text-foreground">{listing.dom}</p>
                  <p className="text-xs text-muted-foreground">DOM</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold font-mono text-foreground">{listing.showings}</p>
                  <p className="text-xs text-muted-foreground">Showings</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold font-mono text-foreground">{listing.leads}</p>
                  <p className="text-xs text-muted-foreground">Leads</p>
                </div>
              </div>
            </div>

            {/* ═══ Progress Pipeline ═══ */}
            <div className="flex items-center gap-0 mb-8 overflow-x-auto pb-2">
              {pipelineSteps.map((step, i) => (
                <div key={step.label} className="flex items-center">
                  <div className="flex flex-col items-center gap-1.5">
                    <div className={`w-3 h-3 rounded-full ${stepDotColor(step.status)}`} />
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{step.label}</span>
                  </div>
                  {i < pipelineSteps.length - 1 && (
                    <div className={`w-10 h-0.5 mx-1 mt-[-14px] ${stepLineColor(pipelineSteps[i + 1].status)}`} />
                  )}
                </div>
              ))}
            </div>

            {/* ═══ Main Grid ═══ */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Launch Checklist */}
                <Card className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Launch Checklist</span>
                    </div>
                    <span className="text-xs text-muted-foreground">7 of 9 complete</span>
                  </div>
                  <div className="space-y-0 divide-y divide-border-sub">
                    {checklist.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 py-3">
                        {item.done ? (
                          <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        ) : item.action === "View details" ? (
                          <Clock className="h-5 w-5 text-caution shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-muted-foreground/40 shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground">{item.title}</p>
                          <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                        </div>
                        {item.date && (
                          <span className="text-xs text-muted-foreground shrink-0">{item.date}</span>
                        )}
                        {item.action && (
                          <Button variant="ghost" size="sm" className="text-xs text-success shrink-0 h-auto py-0">
                            {item.action}
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Activity */}
                <Card className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Activity</span>
                    <Button variant="ghost" size="sm" className="text-xs text-muted-foreground h-auto py-0">All activity</Button>
                  </div>

                  {/* Activity Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    <div className="border border-border rounded-lg p-3 text-center">
                      <p className="text-xl font-semibold font-mono text-foreground">8</p>
                      <p className="text-xs text-muted-foreground">Showings</p>
                      <p className="text-[10px] text-success">↑3 this week</p>
                    </div>
                    <div className="border border-border rounded-lg p-3 text-center">
                      <p className="text-xl font-semibold font-mono text-foreground">1</p>
                      <p className="text-xs text-muted-foreground">Open Haus</p>
                      <p className="text-[10px] text-muted-foreground">12 visitors</p>
                    </div>
                    <div className="border border-border rounded-lg p-3 text-center">
                      <p className="text-xl font-semibold font-mono text-foreground">2</p>
                      <p className="text-xs text-muted-foreground">Agent Inquiries</p>
                      <p className="text-[10px] text-muted-foreground">This week</p>
                    </div>
                  </div>

                  {/* Activity Feed */}
                  <div className="space-y-0 divide-y divide-border-sub">
                    {activity.map((item, i) => (
                      <div key={i} className="py-3">
                        <div className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                            item.type === "showing" ? "bg-info" : item.type === "inquiry" ? "bg-violet" : "bg-success"
                          }`} />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <p className="text-sm font-medium text-foreground">{item.label}</p>
                              <span className="text-xs text-muted-foreground shrink-0">{item.time}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">{item.detail}</p>
                            {item.comment && (
                              <div className="mt-2 px-3 py-2 bg-muted/50 rounded-lg">
                                <p className="text-xs text-muted-foreground italic">"{item.comment}"</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Lead Attribution */}
                <Card className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Lead Attribution</span>
                    <Button variant="ghost" size="sm" className="text-xs text-muted-foreground h-auto py-0">All leads</Button>
                  </div>

                  {/* Lead Source Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    <div className="border border-border rounded-lg p-3 text-center">
                      <p className="text-xl font-semibold font-mono text-success">2</p>
                      <p className="text-xs text-muted-foreground">QR Scans</p>
                    </div>
                    <div className="border border-border rounded-lg p-3 text-center">
                      <p className="text-xl font-semibold font-mono text-success">3</p>
                      <p className="text-xs text-muted-foreground">Text Code</p>
                    </div>
                    <div className="border border-border rounded-lg p-3 text-center">
                      <p className="text-xl font-semibold font-mono text-success">1</p>
                      <p className="text-xs text-muted-foreground">Agent Inquiry</p>
                    </div>
                  </div>

                  {/* Leads Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left text-[10px] font-bold text-muted-foreground uppercase tracking-wider py-2">Lead</th>
                          <th className="text-left text-[10px] font-bold text-muted-foreground uppercase tracking-wider py-2">Assigned</th>
                          <th className="text-left text-[10px] font-bold text-muted-foreground uppercase tracking-wider py-2">Pipeline</th>
                          <th className="text-left text-[10px] font-bold text-muted-foreground uppercase tracking-wider py-2">Contact</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border-sub">
                        {leads.map((lead, i) => (
                          <tr key={i} className="hover:bg-muted/30 transition-colors">
                            <td className="py-3">
                              <div className="flex items-center gap-2">
                                <div className={`w-7 h-7 rounded-full ${lead.color} flex items-center justify-center text-[10px] font-bold text-white shrink-0`}>
                                  {lead.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-foreground">{lead.name}</p>
                                  <p className="text-[11px] text-muted-foreground">{lead.source}</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 text-xs text-muted-foreground">{lead.assigned}</td>
                            <td className="py-3">
                              <Badge variant="outline" className="text-[10px]">{lead.pipeline}</Badge>
                            </td>
                            <td className="py-3 text-right">
                              <p className="text-xs text-foreground">{lead.contact}</p>
                              <p className="text-[10px] text-muted-foreground">{lead.contactTime}</p>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Lead Summary Stats */}
                  <div className="grid grid-cols-4 gap-3 mt-4 pt-4 border-t border-border">
                    <div className="text-center">
                      <p className="text-lg font-semibold font-mono text-foreground">3</p>
                      <p className="text-[10px] text-muted-foreground">Connected</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold font-mono text-destructive">2</p>
                      <p className="text-[10px] text-muted-foreground">No contact</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold font-mono text-foreground">2.1h</p>
                      <p className="text-[10px] text-muted-foreground">Avg response</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold font-mono text-destructive">1</p>
                      <p className="text-[10px] text-muted-foreground">Lead Pond</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* ═══ Right Sidebar ═══ */}
              <div className="space-y-5">
                {/* Inventory */}
                <Card className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Inventory</span>
                    <Button variant="ghost" size="sm" className="text-xs text-muted-foreground h-auto py-0">Manage</Button>
                  </div>
                  <div className="space-y-3">
                    {inventory.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <item.icon className="h-4 w-4 text-muted-foreground shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground">{item.id}</p>
                          <p className="text-[11px] text-muted-foreground">{item.label}</p>
                        </div>
                        <Badge variant="outline" className="text-[10px] bg-success/10 text-success border-success/20 shrink-0">
                          {item.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Media */}
                <Card className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Media</span>
                    <span className="text-xs text-muted-foreground">Giraffe360</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {media.map((item, i) => (
                      <div key={i} className="border border-border rounded-lg p-3 text-center">
                        <Camera className="h-5 w-5 text-muted-foreground mx-auto mb-2" />
                        <p className="text-xs font-medium text-foreground">{item.label}</p>
                        <p className="text-[10px] text-muted-foreground">{item.detail}</p>
                        <Badge variant="outline" className={`text-[9px] mt-1 ${
                          item.status === "Done" || item.status === "Live" || item.status === "Ready" 
                            ? "bg-success/10 text-success border-success/20" 
                            : "bg-caution/10 text-caution border-caution/20"
                        }`}>
                          {item.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-3">
                    Last Giraffe360 sync: 2h ago · <span className="text-success cursor-pointer">Sync now</span>
                  </p>
                </Card>

                {/* Marketing Copy */}
                <Card className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Marketing Copy</span>
                    <Button variant="ghost" size="sm" className="text-xs text-muted-foreground h-auto py-0">Edit</Button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">MLS Description</p>
                      <p className="text-xs text-foreground leading-relaxed">
                        Stunning 4-bed, 3-bath home in desirable Oak Hill. Recently updated kitchen with quartz counters, open floor plan, and large backyard with mature oaks. Minutes from...
                      </p>
                      <button className="flex items-center gap-1 text-[11px] text-success mt-2">
                        <Copy className="h-3 w-3" /> Copy
                      </button>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">Social Caption</p>
                      <p className="text-xs text-foreground leading-relaxed">
                        🏡 Just listed in Oak Hill! 4BD/3BA with a backyard that'll make your jaw drop 🟢 DM for details or text HAUS2847 to 512-xxx-xxxx
                      </p>
                      <button className="flex items-center gap-1 text-[11px] text-success mt-2">
                        <Copy className="h-3 w-3" /> Copy
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-[10px]">Visual: High</Badge>
                      <Badge variant="outline" className="text-[10px]">Location: Strong</Badge>
                      <Badge variant="outline" className="text-[10px]">Buyer: Family</Badge>
                    </div>
                  </div>
                </Card>

                {/* Key Dates */}
                <Card className="p-5">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-4">Key Dates</span>
                  <div className="space-y-2">
                    {keyDates.map((d, i) => (
                      <div key={i} className="flex items-center justify-between py-1.5">
                        <span className="text-xs text-muted-foreground">{d.label}</span>
                        <span className={`text-xs font-medium ${d.highlight ? "text-caution" : "text-foreground"}`}>{d.date}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Price History */}
                <Card className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Price History</span>
                    <Button variant="ghost" size="sm" className="text-xs text-muted-foreground h-auto py-0">Audit log</Button>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold font-mono text-foreground">{formatCurrency(listing.price)}</span>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-success text-success-foreground text-[10px]">Current</Badge>
                        <span className="text-xs text-muted-foreground">Jan 21</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold font-mono text-foreground">$695,000</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-[10px] text-destructive border-destructive/20">-$20K</Badge>
                        <span className="text-xs text-muted-foreground">Jan 21 (orig)</span>
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
};

export default ListingDetail;
