import { useState } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import {
  ArrowLeft,
  Edit,
  ExternalLink,
  CheckCircle2,
  Clock,
  AlertCircle,
  Camera,
  Lock,
  QrCode,
  MessageSquare,
  Copy,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Eye,
  User,
  Send,
  Home,
} from "lucide-react";

// ── Mock data ──
const listing = {
  address: "2847 Oak Hill Dr",
  city: "Austin, TX 78745",
  neighborhood: "Oak Hill",
  status: "Active",
  type: "Listing · Sale",
  mls: "2026-048291",
  client: "Park Family",
  agent: "Anthony Gibson",
  price: 675000,
  dom: 18,
  showings: 8,
  leads: 3,
  commissionPct: 3.0,
  commissionCoopPct: 2.5,
  beds: 4,
  baths: 3,
  sqft: 2526,
  yearBuilt: 2018,
  lotSize: "0.28 acres",
  propertyType: "single_family",
};

const people = [
  { name: "Anthony Gibson", role: "Agent", initials: "AG" },
  { name: "Park Family", role: "Contact", initials: "PF" },
];

const marketingHighlights = {
  schoolDistrict: "Top Rated",
  locationStrength: "Good Location",
  visualAppeal: "Standard",
  opportunityType: "Rental/Income Property",
  buyerType: ["Family Home", "First Time Buyer", "Investor"],
  servicesComments: null as string | null,
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
  { title: "Video", subtitle: "Scheduled Feb 10 · Drone + walkthrough", date: null, done: false, overdue: false, action: "View details" },
  { title: "Zillow Showcase", subtitle: "Submit after video delivery", date: null, done: false, overdue: false, action: "Schedule" },
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

const showings = [
  { id: 1, label: "Showing · Chen Family", detail: "Kim Realty · 2nd visit · 2 adults, 1 child", time: "Today 2p", comment: "Very interested in the backyard. Asking about seller timeline.", agent: "Kim Lee", phone: "(512) 555-0192" },
  { id: 2, label: "Showing · Martinez Family", detail: "ERA Realty · 1st visit · 2 adults", time: "Yesterday", comment: "", agent: "Jose Martinez", phone: "(512) 555-0301" },
  { id: 3, label: "Showing · Thompson", detail: "RE/MAX · 1st visit · 1 adult", time: "Feb 4", comment: "Liked layout, concerned about price.", agent: "Amy Thompson", phone: "(512) 555-0444" },
];

const leads = [
  { id: 1, name: "Rachel Johnson", source: "Text HAUS2847 · $500K buyer", assigned: "Anthony", pipeline: "Nurturing", contact: "Connected", contactTime: "2h response", color: "bg-destructive", phone: "(512) 555-1234", email: "rachel@email.com", loftyId: "LF-29481" },
  { id: 2, name: "Kelly Park", source: "QR scan · Showing today 4:30p", assigned: "Anthony", pipeline: "Showing", contact: "Connected", contactTime: "45m response", color: "bg-caution", phone: "(512) 555-5678", email: "kelly@email.com", loftyId: "LF-29502" },
  { id: 3, name: "Mike Rivera", source: "Text HAUS2847 · Browsing area", assigned: "Sarah P.", pipeline: "New", contact: "No contact", contactTime: "5d ago", color: "bg-success", phone: "(512) 555-9012", email: "mike@email.com", loftyId: "LF-29510" },
];

const keyDates = [
  { label: "Video", date: "Feb 10 (sched)", upcoming: true },
  { label: "Target Live", date: "Jan 21", upcoming: false },
  { label: "List Date", date: "Jan 21", upcoming: false },
  { label: "Photos", date: "Jan 18", upcoming: false },
  { label: "Staging", date: "Jan 16", upcoming: false },
  { label: "Sign Deploy", date: "Jan 21", upcoming: false },
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
  const [showingDrawerOpen, setShowingDrawerOpen] = useState(false);
  const [selectedShowing, setSelectedShowing] = useState<typeof showings[0] | null>(null);
  const [allShowingsOpen, setAllShowingsOpen] = useState(false);
  const [leadDrawerOpen, setLeadDrawerOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState<typeof leads[0] | null>(null);
  const [checklistDrawerOpen, setChecklistDrawerOpen] = useState(false);
  const [selectedChecklistItem, setSelectedChecklistItem] = useState<typeof checklist[0] | null>(null);
  const [inventoryDrawerOpen, setInventoryDrawerOpen] = useState(false);
  const [selectedInventory, setSelectedInventory] = useState<typeof inventory[0] | null>(null);
  const [completedOpen, setCompletedOpen] = useState(false);
  const [pastDatesOpen, setPastDatesOpen] = useState(false);

  const completedItems = checklist.filter(c => c.done);
  const pendingItems = checklist.filter(c => !c.done);
  const mostRecentShowing = showings[0];
  const mostRecentLead = leads[0];
  const upcomingDates = keyDates.filter(d => d.upcoming);
  const pastDates = keyDates.filter(d => !d.upcoming);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />

        <main className="flex-1 bg-background overflow-y-auto">
          {/* ═══ White Header ═══ */}
          <div className="bg-card border-b border-border">
            <div className="max-w-[1400px] mx-auto px-7 py-5">
              <Button variant="ghost" size="sm" asChild className="mb-3 -ml-2">
                <NavLink to="/listings">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Listings
                </NavLink>
              </Button>

              <div className="flex items-start justify-between mb-5">
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

              {/* Pipeline */}
              <div className="flex items-center gap-0 overflow-x-auto pb-1">
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
            </div>
          </div>

          {/* ═══ Content ═══ */}
          <div className="max-w-[1400px] mx-auto px-7 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
              {/* ═══ Left Column ═══ */}
              <div className="space-y-6">
                {/* Launch Checklist – TOP */}
                <Card className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Launch Checklist</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{completedItems.length} of {checklist.length} complete</span>
                  </div>

                  {pendingItems.length > 0 && (
                    <div className="space-y-0 divide-y divide-border-sub">
                      {pendingItems.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 py-3 cursor-pointer hover:bg-muted/30 rounded-lg px-2 -mx-2 transition-colors"
                          onClick={() => { setSelectedChecklistItem(item); setChecklistDrawerOpen(true); }}
                        >
                          {item.overdue ? (
                            <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                          ) : (
                            <Clock className="h-5 w-5 text-caution shrink-0 mt-0.5" />
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground">{item.title}</p>
                            <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                          </div>
                          {item.action && (
                            <Button variant="ghost" size="sm" className="text-xs text-success shrink-0 h-auto py-0">
                              {item.action}
                            </Button>
                          )}
                          <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />
                        </div>
                      ))}
                    </div>
                  )}

                  {completedItems.length > 0 && (
                    <Collapsible open={completedOpen} onOpenChange={setCompletedOpen}>
                      <CollapsibleTrigger className="flex items-center gap-2 w-full pt-3 mt-3 border-t border-border text-left">
                        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${completedOpen ? "" : "-rotate-90"}`} />
                        <span className="text-xs text-muted-foreground">{completedItems.length} completed</span>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="space-y-0 divide-y divide-border-sub mt-2">
                          {completedItems.map((item, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-3 py-3 cursor-pointer hover:bg-muted/30 rounded-lg px-2 -mx-2 transition-colors"
                              onClick={() => { setSelectedChecklistItem(item); setChecklistDrawerOpen(true); }}
                            >
                              <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-foreground">{item.title}</p>
                                <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                              </div>
                              {item.date && <span className="text-xs text-muted-foreground shrink-0">{item.date}</span>}
                              <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />
                            </div>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  )}
                </Card>

                {/* Showings */}
                <Card className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4 text-muted-foreground" />
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Showings</span>
                      <Badge variant="outline" className="text-[10px]">{showings.length}</Badge>
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs text-muted-foreground h-auto py-0" onClick={() => setAllShowingsOpen(true)}>
                      View all
                    </Button>
                  </div>
                  <div
                    className="flex items-start gap-3 py-3 cursor-pointer hover:bg-muted/30 rounded-lg px-2 -mx-2 transition-colors"
                    onClick={() => { setSelectedShowing(mostRecentShowing); setShowingDrawerOpen(true); }}
                  >
                    <div className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-info" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-medium text-foreground">{mostRecentShowing.label}</p>
                        <span className="text-xs text-muted-foreground shrink-0">{mostRecentShowing.time}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{mostRecentShowing.detail}</p>
                      {mostRecentShowing.comment && (
                        <div className="mt-2 px-3 py-2 bg-muted/50 rounded-lg">
                          <p className="text-xs text-muted-foreground italic">"{mostRecentShowing.comment}"</p>
                        </div>
                      )}
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />
                  </div>

                  {/* Most Recent Lead */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-3">Most Recent Lead</span>
                    <div
                      className="flex items-center gap-3 cursor-pointer hover:bg-muted/30 rounded-lg px-2 py-2 -mx-2 transition-colors"
                      onClick={() => { setSelectedLead(mostRecentLead); setLeadDrawerOpen(true); }}
                    >
                      <div className={`w-7 h-7 rounded-full ${mostRecentLead.color} flex items-center justify-center text-[10px] font-bold text-white shrink-0`}>
                        {mostRecentLead.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">{mostRecentLead.name}</p>
                        <p className="text-[11px] text-muted-foreground">{mostRecentLead.source}</p>
                      </div>
                      <Badge variant="outline" className="text-[10px]">{mostRecentLead.pipeline}</Badge>
                      <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                    </div>
                  </div>
                </Card>

                {/* Marketing Highlights */}
                <Card className="p-5">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-4">Marketing Highlights</span>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">School District</span>
                      <Badge variant="secondary" className="text-[10px]">{marketingHighlights.schoolDistrict}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Location Strength</span>
                      <Badge variant="secondary" className="text-[10px]">{marketingHighlights.locationStrength}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Visual Appeal</span>
                      <Badge variant="secondary" className="text-[10px]">{marketingHighlights.visualAppeal}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Opportunity Type</span>
                      <span className="text-xs font-medium text-foreground">{marketingHighlights.opportunityType}</span>
                    </div>
                    <div className="flex items-start justify-between col-span-2">
                      <span className="text-xs text-muted-foreground shrink-0 mt-0.5">Buyer Type</span>
                      <div className="flex flex-wrap gap-1 justify-end">
                        {marketingHighlights.buyerType.map(t => (
                          <span key={t} className="text-xs text-foreground">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between col-span-2">
                      <span className="text-xs text-muted-foreground">Services / Marketing Comments</span>
                      <span className="text-xs text-muted-foreground">{marketingHighlights.servicesComments || "—"}</span>
                    </div>
                  </div>
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
                  </div>
                </Card>
              </div>

              {/* ═══ Right Sidebar ═══ */}
              <div className="space-y-5">
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
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-2">Commission</span>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Listing side</span>
                      <span className="text-sm font-mono font-medium text-foreground">{listing.commissionPct}%</span>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-muted-foreground">Co-op</span>
                      <span className="text-sm font-mono font-medium text-foreground">{listing.commissionCoopPct}%</span>
                    </div>
                    <div className="flex items-center justify-between mt-1 pt-1 border-t border-border-sub">
                      <span className="text-xs text-muted-foreground">Total</span>
                      <span className="text-sm font-mono font-medium text-foreground">{listing.commissionPct + listing.commissionCoopPct}%</span>
                    </div>
                  </div>
                </Card>

                {/* People */}
                <Card className="p-5">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-4">People</span>
                  <div className="space-y-3">
                    {people.map((p, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-[11px] font-semibold text-secondary-foreground shrink-0">
                          {p.initials}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{p.name}</p>
                          <p className="text-[11px] text-muted-foreground">{p.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Property Details – collapsible */}
                <Card className="p-5">
                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                      <div className="flex items-center gap-2">
                        <Home className="h-4 w-4 text-muted-foreground" />
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Property Details</span>
                      </div>
                      <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center justify-between py-1">
                          <span className="text-xs text-muted-foreground">Address</span>
                          <span className="text-xs font-medium text-foreground">{listing.address}</span>
                        </div>
                        <div className="flex items-center justify-between py-1">
                          <span className="text-xs text-muted-foreground">City</span>
                          <span className="text-xs font-medium text-foreground">{listing.city}</span>
                        </div>
                        <div className="flex items-center justify-between py-1">
                          <span className="text-xs text-muted-foreground">Neighborhood</span>
                          <span className="text-xs font-medium text-foreground">{listing.neighborhood}</span>
                        </div>
                        <div className="flex items-center justify-between py-1">
                          <span className="text-xs text-muted-foreground">Beds / Baths</span>
                          <span className="text-xs font-medium text-foreground">{listing.beds} bd · {listing.baths} ba</span>
                        </div>
                        <div className="flex items-center justify-between py-1">
                          <span className="text-xs text-muted-foreground">Sq Ft</span>
                          <span className="text-xs font-medium font-mono text-foreground">{listing.sqft.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between py-1">
                          <span className="text-xs text-muted-foreground">Year Built</span>
                          <span className="text-xs font-medium text-foreground">{listing.yearBuilt}</span>
                        </div>
                        <div className="flex items-center justify-between py-1">
                          <span className="text-xs text-muted-foreground">Lot Size</span>
                          <span className="text-xs font-medium text-foreground">{listing.lotSize}</span>
                        </div>
                        <div className="flex items-center justify-between py-1">
                          <span className="text-xs text-muted-foreground">Type</span>
                          <span className="text-xs font-medium text-foreground">{listing.propertyType}</span>
                        </div>
                      </div>
                      <NavLink to="/properties/1" className="flex items-center gap-1 text-xs text-foreground mt-3 hover:underline">
                        View full property <ArrowRight className="h-3 w-3" />
                      </NavLink>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>

                {/* Key Dates – collapsible */}
                <Card className="p-5">
                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Key Dates</span>
                      <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="mt-4">
                        {upcomingDates.length > 0 && (
                          <div className="space-y-2 mb-3">
                            {upcomingDates.map((d, i) => (
                              <div key={i} className="flex items-center justify-between py-1.5">
                                <span className="text-xs text-muted-foreground">{d.label}</span>
                                <span className="text-xs font-medium text-caution">{d.date}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        {pastDates.length > 0 && (
                          <Collapsible open={pastDatesOpen} onOpenChange={setPastDatesOpen}>
                            <CollapsibleTrigger className="flex items-center gap-2 w-full text-left border-t border-border pt-2">
                              <ChevronDown className={`h-3.5 w-3.5 text-muted-foreground transition-transform ${pastDatesOpen ? "" : "-rotate-90"}`} />
                              <span className="text-[11px] text-muted-foreground">{pastDates.length} past dates</span>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <div className="space-y-2 mt-2">
                                {pastDates.map((d, i) => (
                                  <div key={i} className="flex items-center justify-between py-1.5">
                                    <span className="text-xs text-muted-foreground">{d.label}</span>
                                    <span className="text-xs font-medium text-foreground">{d.date}</span>
                                  </div>
                                ))}
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        )}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>

                {/* Media */}
                <Card className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Media</span>
                    <span className="text-xs text-muted-foreground">Giraffe360</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {media.map((item, i) => (
                      <div key={i} className="border border-border rounded-lg p-3 text-center bg-card">
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

                {/* Inventory */}
                <Card className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Inventory</span>
                    <Button variant="ghost" size="sm" className="text-xs text-muted-foreground h-auto py-0">Manage</Button>
                  </div>
                  <div className="space-y-3">
                    {inventory.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 cursor-pointer hover:bg-muted/30 rounded-lg px-2 py-2 -mx-2 transition-colors"
                        onClick={() => { setSelectedInventory(item); setInventoryDrawerOpen(true); }}
                      >
                        <item.icon className="h-4 w-4 text-muted-foreground shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground">{item.id}</p>
                          <p className="text-[11px] text-muted-foreground">{item.label}</p>
                        </div>
                        <Badge variant="outline" className="text-[10px] bg-success/10 text-success border-success/20 shrink-0">
                          {item.status}
                        </Badge>
                        <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* ═══ DRAWERS ═══ */}

      {/* Showing Detail Drawer */}
      <Sheet open={showingDrawerOpen} onOpenChange={setShowingDrawerOpen}>
        <SheetContent className="sm:max-w-md">
          <SheetHeader>
            <SheetTitle>{selectedShowing?.label}</SheetTitle>
            <SheetDescription>{selectedShowing?.detail}</SheetDescription>
          </SheetHeader>
          {selectedShowing && (
            <div className="mt-6 space-y-5">
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">{selectedShowing.time}</p>
                <p className="text-sm text-foreground">Agent: {selectedShowing.agent}</p>
                <p className="text-sm text-muted-foreground">{selectedShowing.phone}</p>
              </div>
              {selectedShowing.comment && (
                <div className="px-3 py-2 bg-muted/50 rounded-lg">
                  <p className="text-xs text-muted-foreground italic">"{selectedShowing.comment}"</p>
                </div>
              )}
              <div>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-2">Add Comment</span>
                <Textarea placeholder="Add a note about this showing..." className="text-sm" rows={3} />
                <Button size="sm" className="mt-2 gap-2">
                  <Send className="h-3.5 w-3.5" /> Save
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>

      {/* All Showings Drawer */}
      <Sheet open={allShowingsOpen} onOpenChange={setAllShowingsOpen}>
        <SheetContent className="sm:max-w-md">
          <SheetHeader>
            <SheetTitle>All Showings</SheetTitle>
            <SheetDescription>{showings.length} showings for {listing.address}</SheetDescription>
          </SheetHeader>
          <div className="mt-6 space-y-0 divide-y divide-border">
            {showings.map((s) => (
              <div
                key={s.id}
                className="flex items-start gap-3 py-3 cursor-pointer hover:bg-muted/30 rounded-lg px-2 -mx-2 transition-colors"
                onClick={() => { setAllShowingsOpen(false); setSelectedShowing(s); setShowingDrawerOpen(true); }}
              >
                <div className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-info" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-medium text-foreground">{s.label}</p>
                    <span className="text-xs text-muted-foreground shrink-0">{s.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{s.detail}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      {/* Lead Detail Drawer */}
      <Sheet open={leadDrawerOpen} onOpenChange={setLeadDrawerOpen}>
        <SheetContent className="sm:max-w-md">
          <SheetHeader>
            <SheetTitle>{selectedLead?.name}</SheetTitle>
            <SheetDescription>{selectedLead?.source}</SheetDescription>
          </SheetHeader>
          {selectedLead && (
            <div className="mt-6 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Pipeline</span>
                  <Badge variant="outline" className="text-[10px]">{selectedLead.pipeline}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Assigned</span>
                  <span className="text-sm text-foreground">{selectedLead.assigned}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Contact</span>
                  <span className="text-sm text-foreground">{selectedLead.contact}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Phone</span>
                  <span className="text-sm text-foreground">{selectedLead.phone}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Email</span>
                  <span className="text-sm text-foreground">{selectedLead.email}</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full gap-2">
                <User className="h-3.5 w-3.5" />
                Open in Lofty · {selectedLead.loftyId}
              </Button>
              <div>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-2">Add Comment</span>
                <Textarea placeholder="Add a note about this lead..." className="text-sm" rows={3} />
                <Button size="sm" className="mt-2 gap-2">
                  <Send className="h-3.5 w-3.5" /> Save
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>

      {/* Checklist Item Drawer */}
      <Sheet open={checklistDrawerOpen} onOpenChange={setChecklistDrawerOpen}>
        <SheetContent className="sm:max-w-md">
          <SheetHeader>
            <SheetTitle>{selectedChecklistItem?.title}</SheetTitle>
            <SheetDescription>{selectedChecklistItem?.subtitle}</SheetDescription>
          </SheetHeader>
          {selectedChecklistItem && (
            <div className="mt-6 space-y-5">
              <div className="flex items-center gap-2">
                {selectedChecklistItem.done ? (
                  <Badge className="bg-success text-success-foreground text-[10px]">Completed</Badge>
                ) : (
                  <Badge variant="outline" className="text-[10px] text-caution border-caution/20">Pending</Badge>
                )}
                {selectedChecklistItem.date && (
                  <span className="text-xs text-muted-foreground">{selectedChecklistItem.date}</span>
                )}
              </div>
              <div>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-2">Add Comment</span>
                <Textarea placeholder="Add a note about this task..." className="text-sm" rows={3} />
                <Button size="sm" className="mt-2 gap-2">
                  <Send className="h-3.5 w-3.5" /> Save
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>

      {/* Inventory Item Drawer */}
      <Sheet open={inventoryDrawerOpen} onOpenChange={setInventoryDrawerOpen}>
        <SheetContent className="sm:max-w-md">
          <SheetHeader>
            <SheetTitle>{selectedInventory?.id}</SheetTitle>
            <SheetDescription>{selectedInventory?.label}</SheetDescription>
          </SheetHeader>
          {selectedInventory && (
            <div className="mt-6 space-y-5">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-[10px] bg-success/10 text-success border-success/20">
                  {selectedInventory.status}
                </Badge>
              </div>
              <div>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-2">Add Comment</span>
                <Textarea placeholder="Add a note about this item..." className="text-sm" rows={3} />
                <Button size="sm" className="mt-2 gap-2">
                  <Send className="h-3.5 w-3.5" /> Save
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </SidebarProvider>
  );
};

export default ListingDetail;
