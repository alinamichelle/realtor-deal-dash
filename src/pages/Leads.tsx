import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  UserPlus,
  Plus,
  Search,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Clock,
  User,
  Flag,
  TrendingUp,
  Users,
  AlertCircle,
  LayoutGrid,
  List,
} from "lucide-react";
import { useState } from "react";

// Mock data
const leads = [
  {
    id: 1,
    first_name: "Sarah",
    last_name: "Johnson",
    email: "sarah.j@email.com",
    phone: "(512) 555-0123",
    status: "new",
    lead_type: "buyer",
    source: "Website",
    price_point: "$400K - $500K",
    zip_code: "78701",
    routed_agent: "John Smith",
    registered_at: "2024-12-10T14:30:00",
    notes: "Looking for 3BR in downtown area",
    flagged: false,
    tags: ["hot_lead", "first_time_buyer"],
  },
  {
    id: 2,
    first_name: "Michael",
    last_name: "Chen",
    email: "m.chen@email.com",
    phone: "(512) 555-0456",
    status: "contacted",
    lead_type: "seller",
    source: "Referral",
    price_point: "$600K - $700K",
    zip_code: "78702",
    routed_agent: "Emma Davis",
    registered_at: "2024-12-09T10:15:00",
    notes: "Referred by past client, wants to list in spring",
    flagged: true,
    tags: ["referral", "high_value"],
  },
  {
    id: 3,
    first_name: "Jennifer",
    last_name: "Martinez",
    email: "jen.martinez@email.com",
    phone: "(512) 555-0789",
    status: "nurturing",
    lead_type: "buyer",
    source: "Social Media",
    price_point: "$300K - $400K",
    zip_code: "78681",
    routed_agent: "John Smith",
    registered_at: "2024-12-05T16:45:00",
    notes: "Interested in Round Rock area, timeline 3-6 months",
    flagged: false,
    tags: ["social_media", "long_timeline"],
  },
  {
    id: 4,
    first_name: "David",
    last_name: "Thompson",
    email: "david.t@email.com",
    phone: "(512) 555-0321",
    status: "qualified",
    lead_type: "buyer",
    source: "Open House",
    price_point: "$500K - $600K",
    zip_code: "78734",
    routed_agent: "Emma Davis",
    registered_at: "2024-12-08T13:20:00",
    notes: "Pre-approved, ready to move quickly",
    flagged: false,
    tags: ["qualified", "pre_approved"],
  },
  {
    id: 5,
    first_name: "Lisa",
    last_name: "Anderson",
    email: "lisa.a@email.com",
    phone: "(512) 555-0654",
    status: "new",
    lead_type: "investor",
    source: "Google Ads",
    price_point: "$200K - $300K",
    zip_code: "78704",
    routed_agent: "John Smith",
    registered_at: "2024-12-11T09:30:00",
    notes: "Looking for investment properties, cash buyer",
    flagged: true,
    tags: ["investor", "cash_buyer"],
  },
];

const Leads = () => {
  const [statusFilter, setStatusFilter] = useState("all");
  const [leadTypeFilter, setLeadTypeFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"kanban" | "list">("kanban");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-info text-info-foreground";
      case "contacted":
        return "bg-primary text-primary-foreground";
      case "qualified":
        return "bg-success text-success-foreground";
      case "nurturing":
        return "bg-caution text-caution-foreground";
      case "converted":
        return "bg-success text-success-foreground";
      case "lost":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const getLeadTypeColor = (type: string) => {
    switch (type) {
      case "buyer":
        return "bg-primary/10 text-primary";
      case "seller":
        return "bg-success/10 text-success";
      case "investor":
        return "bg-caution/10 text-caution";
      default:
        return "bg-secondary/10 text-foreground";
    }
  };

  const getTimeSince = (date: string) => {
    const now = new Date();
    const registered = new Date(date);
    const diffMs = now.getTime() - registered.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffDays > 0) return `${diffDays}d ago`;
    if (diffHours > 0) return `${diffHours}h ago`;
    return "Just now";
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    const matchesType = leadTypeFilter === "all" || lead.lead_type === leadTypeFilter;
    const matchesSearch =
      lead.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.phone.includes(searchQuery);
    return matchesStatus && matchesType && matchesSearch;
  });

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />

        <main className="flex-1 bg-gradient-to-b from-silver to-muted/30">
          <div className="max-w-[1600px] mx-auto px-6 py-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Leads
                </h1>
                <p className="text-muted-foreground">
                  Manage and nurture your incoming leads
                </p>
              </div>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Add Lead
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">New</p>
                    <p className="text-2xl font-bold text-info">2</p>
                  </div>
                  <div className="p-2 bg-info/10 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-info" />
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Contacted</p>
                    <p className="text-2xl font-bold text-primary">1</p>
                  </div>
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Qualified</p>
                    <p className="text-2xl font-bold text-success">1</p>
                  </div>
                  <div className="p-2 bg-success/10 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-success" />
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Nurturing</p>
                    <p className="text-2xl font-bold text-caution">1</p>
                  </div>
                  <div className="p-2 bg-caution/10 rounded-lg">
                    <Clock className="h-5 w-5 text-caution" />
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total</p>
                    <p className="text-2xl font-bold text-foreground">5</p>
                  </div>
                  <div className="p-2 bg-muted rounded-lg">
                    <Users className="h-5 w-5 text-foreground" />
                  </div>
                </div>
              </Card>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search leads..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={leadTypeFilter} onValueChange={setLeadTypeFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Lead Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="buyer">Buyer</SelectItem>
                  <SelectItem value="seller">Seller</SelectItem>
                  <SelectItem value="investor">Investor</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "kanban" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("kanban")}
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Pipeline Tabs */}
            <Tabs defaultValue="all" className="space-y-4">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="all" className="gap-2">
                  All <Badge variant="secondary" className="ml-1">{leads.length}</Badge>
                </TabsTrigger>
                <TabsTrigger value="new" className="gap-2">
                  New <Badge variant="secondary" className="ml-1">{leads.filter((l) => l.status === "new").length}</Badge>
                </TabsTrigger>
                <TabsTrigger value="contacted" className="gap-2">
                  Contacted <Badge variant="secondary" className="ml-1">{leads.filter((l) => l.status === "contacted").length}</Badge>
                </TabsTrigger>
                <TabsTrigger value="qualified" className="gap-2">
                  Qualified <Badge variant="secondary" className="ml-1">{leads.filter((l) => l.status === "qualified").length}</Badge>
                </TabsTrigger>
                <TabsTrigger value="nurturing" className="gap-2">
                  Nurturing <Badge variant="secondary" className="ml-1">{leads.filter((l) => l.status === "nurturing").length}</Badge>
                </TabsTrigger>
                <TabsTrigger value="converted" className="gap-2">
                  Converted <Badge variant="secondary" className="ml-1">{leads.filter((l) => l.status === "converted").length}</Badge>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-0">

            {/* Kanban View */}
            {viewMode === "kanban" && (
              <div className="flex gap-4 overflow-x-auto pb-4">
              {/* New Pipeline */}
              <div className="flex-shrink-0 w-[320px]">
                <div className="bg-info/10 rounded-lg p-3 mb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-info" />
                      <h3 className="font-semibold text-foreground">New</h3>
                    </div>
                    <Badge className="bg-info text-info-foreground">
                      {leads.filter((l) => l.status === "new").length}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-3">
                  {leads
                    .filter((l) => l.status === "new")
                    .map((lead) => (
                      <Card key={lead.id} className="p-4 hover:shadow-md transition-all cursor-pointer relative">
                        {lead.flagged && (
                          <Flag className="absolute top-2 right-2 h-4 w-4 text-destructive fill-destructive" />
                        )}
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <User className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-foreground text-sm truncate">
                              {lead.first_name} {lead.last_name}
                            </h4>
                            <Badge className={`${getLeadTypeColor(lead.lead_type)} text-xs mt-1`} variant="outline">
                              {lead.lead_type}
                            </Badge>
                          </div>
                        </div>
                        <div className="space-y-2 mb-3">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Mail className="h-3 w-3" />
                            <span className="truncate">{lead.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Phone className="h-3 w-3" />
                            <span>{lead.phone}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs mb-3">
                          <span className="text-muted-foreground">{lead.source}</span>
                          <span className="text-muted-foreground">{lead.price_point}</span>
                        </div>
                        {lead.notes && (
                          <p className="text-xs text-muted-foreground italic mb-3 line-clamp-2">
                            "{lead.notes}"
                          </p>
                        )}
                        <div className="flex items-center justify-between pt-3 border-t border-border">
                          <span className="text-xs text-muted-foreground">
                            {getTimeSince(lead.registered_at)}
                          </span>
                          <Button size="sm" variant="ghost" asChild className="h-7 text-xs">
                            <NavLink to={`/lead/${lead.id}`}>View</NavLink>
                          </Button>
                        </div>
                      </Card>
                    ))}
                </div>
              </div>

              {/* Contacted Pipeline */}
              <div className="flex-shrink-0 w-[320px]">
                <div className="bg-primary/10 rounded-lg p-3 mb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <h3 className="font-semibold text-foreground">Contacted</h3>
                    </div>
                    <Badge className="bg-primary text-primary-foreground">
                      {leads.filter((l) => l.status === "contacted").length}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-3">
                  {leads
                    .filter((l) => l.status === "contacted")
                    .map((lead) => (
                      <Card key={lead.id} className="p-4 hover:shadow-md transition-all cursor-pointer relative">
                        {lead.flagged && (
                          <Flag className="absolute top-2 right-2 h-4 w-4 text-destructive fill-destructive" />
                        )}
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <User className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-foreground text-sm truncate">
                              {lead.first_name} {lead.last_name}
                            </h4>
                            <Badge className={`${getLeadTypeColor(lead.lead_type)} text-xs mt-1`} variant="outline">
                              {lead.lead_type}
                            </Badge>
                          </div>
                        </div>
                        <div className="space-y-2 mb-3">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Mail className="h-3 w-3" />
                            <span className="truncate">{lead.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Phone className="h-3 w-3" />
                            <span>{lead.phone}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs mb-3">
                          <span className="text-muted-foreground">{lead.source}</span>
                          <span className="text-muted-foreground">{lead.price_point}</span>
                        </div>
                        {lead.notes && (
                          <p className="text-xs text-muted-foreground italic mb-3 line-clamp-2">
                            "{lead.notes}"
                          </p>
                        )}
                        <div className="flex items-center justify-between pt-3 border-t border-border">
                          <span className="text-xs text-muted-foreground">
                            {getTimeSince(lead.registered_at)}
                          </span>
                          <Button size="sm" variant="ghost" asChild className="h-7 text-xs">
                            <NavLink to={`/lead/${lead.id}`}>View</NavLink>
                          </Button>
                        </div>
                      </Card>
                    ))}
                </div>
              </div>

              {/* Qualified Pipeline */}
              <div className="flex-shrink-0 w-[320px]">
                <div className="bg-success/10 rounded-lg p-3 mb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-success" />
                      <h3 className="font-semibold text-foreground">Qualified</h3>
                    </div>
                    <Badge className="bg-success text-success-foreground">
                      {leads.filter((l) => l.status === "qualified").length}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-3">
                  {leads
                    .filter((l) => l.status === "qualified")
                    .map((lead) => (
                      <Card key={lead.id} className="p-4 hover:shadow-md transition-all cursor-pointer relative">
                        {lead.flagged && (
                          <Flag className="absolute top-2 right-2 h-4 w-4 text-destructive fill-destructive" />
                        )}
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <User className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-foreground text-sm truncate">
                              {lead.first_name} {lead.last_name}
                            </h4>
                            <Badge className={`${getLeadTypeColor(lead.lead_type)} text-xs mt-1`} variant="outline">
                              {lead.lead_type}
                            </Badge>
                          </div>
                        </div>
                        <div className="space-y-2 mb-3">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Mail className="h-3 w-3" />
                            <span className="truncate">{lead.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Phone className="h-3 w-3" />
                            <span>{lead.phone}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs mb-3">
                          <span className="text-muted-foreground">{lead.source}</span>
                          <span className="text-muted-foreground">{lead.price_point}</span>
                        </div>
                        {lead.notes && (
                          <p className="text-xs text-muted-foreground italic mb-3 line-clamp-2">
                            "{lead.notes}"
                          </p>
                        )}
                        <div className="flex items-center justify-between pt-3 border-t border-border">
                          <span className="text-xs text-muted-foreground">
                            {getTimeSince(lead.registered_at)}
                          </span>
                          <Button size="sm" variant="ghost" asChild className="h-7 text-xs">
                            <NavLink to={`/lead/${lead.id}`}>View</NavLink>
                          </Button>
                        </div>
                      </Card>
                    ))}
                </div>
              </div>

              {/* Nurturing Pipeline */}
              <div className="flex-shrink-0 w-[320px]">
                <div className="bg-caution/10 rounded-lg p-3 mb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-caution" />
                      <h3 className="font-semibold text-foreground">Nurturing</h3>
                    </div>
                    <Badge className="bg-caution text-caution-foreground">
                      {leads.filter((l) => l.status === "nurturing").length}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-3">
                  {leads
                    .filter((l) => l.status === "nurturing")
                    .map((lead) => (
                      <Card key={lead.id} className="p-4 hover:shadow-md transition-all cursor-pointer relative">
                        {lead.flagged && (
                          <Flag className="absolute top-2 right-2 h-4 w-4 text-destructive fill-destructive" />
                        )}
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <User className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-foreground text-sm truncate">
                              {lead.first_name} {lead.last_name}
                            </h4>
                            <Badge className={`${getLeadTypeColor(lead.lead_type)} text-xs mt-1`} variant="outline">
                              {lead.lead_type}
                            </Badge>
                          </div>
                        </div>
                        <div className="space-y-2 mb-3">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Mail className="h-3 w-3" />
                            <span className="truncate">{lead.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Phone className="h-3 w-3" />
                            <span>{lead.phone}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs mb-3">
                          <span className="text-muted-foreground">{lead.source}</span>
                          <span className="text-muted-foreground">{lead.price_point}</span>
                        </div>
                        {lead.notes && (
                          <p className="text-xs text-muted-foreground italic mb-3 line-clamp-2">
                            "{lead.notes}"
                          </p>
                        )}
                        <div className="flex items-center justify-between pt-3 border-t border-border">
                          <span className="text-xs text-muted-foreground">
                            {getTimeSince(lead.registered_at)}
                          </span>
                          <Button size="sm" variant="ghost" asChild className="h-7 text-xs">
                            <NavLink to={`/lead/${lead.id}`}>View</NavLink>
                          </Button>
                        </div>
                      </Card>
                    ))}
                </div>
              </div>

              {/* Converted Pipeline */}
              <div className="flex-shrink-0 w-[320px]">
                <div className="bg-success/10 rounded-lg p-3 mb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-success" />
                      <h3 className="font-semibold text-foreground">Converted</h3>
                    </div>
                    <Badge className="bg-success text-success-foreground">
                      {leads.filter((l) => l.status === "converted").length}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-3">
                  {leads
                    .filter((l) => l.status === "converted")
                    .map((lead) => (
                      <Card key={lead.id} className="p-4 hover:shadow-md transition-all cursor-pointer relative">
                        {lead.flagged && (
                          <Flag className="absolute top-2 right-2 h-4 w-4 text-destructive fill-destructive" />
                        )}
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <User className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-foreground text-sm truncate">
                              {lead.first_name} {lead.last_name}
                            </h4>
                            <Badge className={`${getLeadTypeColor(lead.lead_type)} text-xs mt-1`} variant="outline">
                              {lead.lead_type}
                            </Badge>
                          </div>
                        </div>
                        <div className="space-y-2 mb-3">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Mail className="h-3 w-3" />
                            <span className="truncate">{lead.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Phone className="h-3 w-3" />
                            <span>{lead.phone}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs mb-3">
                          <span className="text-muted-foreground">{lead.source}</span>
                          <span className="text-muted-foreground">{lead.price_point}</span>
                        </div>
                        {lead.notes && (
                          <p className="text-xs text-muted-foreground italic mb-3 line-clamp-2">
                            "{lead.notes}"
                          </p>
                        )}
                        <div className="flex items-center justify-between pt-3 border-t border-border">
                          <span className="text-xs text-muted-foreground">
                            {getTimeSince(lead.registered_at)}
                          </span>
                          <Button size="sm" variant="ghost" asChild className="h-7 text-xs">
                            <NavLink to={`/lead/${lead.id}`}>View</NavLink>
                          </Button>
                        </div>
                      </Card>
                    ))}
                </div>
              </div>
              </div>
            )}

            {/* List View */}
            {viewMode === "list" && (
              <div className="bg-card rounded-lg border border-border overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 px-4 py-3 bg-muted/50 border-b border-border text-xs font-medium text-muted-foreground">
                  <div className="col-span-3">Contact</div>
                  <div className="col-span-2">Type</div>
                  <div className="col-span-2">Source</div>
                  <div className="col-span-2">Price Point</div>
                  <div className="col-span-2">Agent</div>
                  <div className="col-span-1 text-right">Actions</div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-border">
                  {filteredLeads.map((lead) => (
                    <div
                      key={lead.id}
                      className="grid grid-cols-12 gap-4 px-4 py-3 hover:bg-muted/30 transition-colors cursor-pointer items-center"
                      onClick={() => window.location.href = `/lead/${lead.id}`}
                    >
                      {/* Contact */}
                      <div className="col-span-3 flex items-center gap-2 min-w-0">
                        {lead.flagged && (
                          <Flag className="h-3 w-3 text-destructive fill-destructive shrink-0" />
                        )}
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">
                            {lead.first_name} {lead.last_name}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">{lead.email}</p>
                        </div>
                      </div>

                      {/* Type */}
                      <div className="col-span-2">
                        <Badge className={`${getLeadTypeColor(lead.lead_type)} text-xs`} variant="outline">
                          {lead.lead_type}
                        </Badge>
                      </div>

                      {/* Source */}
                      <div className="col-span-2">
                        <p className="text-sm text-foreground">{lead.source}</p>
                      </div>

                      {/* Price Point */}
                      <div className="col-span-2">
                        <p className="text-sm text-foreground">{lead.price_point}</p>
                      </div>

                      {/* Agent */}
                      <div className="col-span-2">
                        <p className="text-sm text-muted-foreground">{lead.routed_agent}</p>
                      </div>

                      {/* Actions */}
                      <div className="col-span-1 flex justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          <Phone className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          <Mail className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

              </TabsContent>

              {/* New Tab */}
              <TabsContent value="new" className="space-y-0">
                {viewMode === "list" && (
                  <div className="bg-card rounded-lg border border-border overflow-hidden">
                    <div className="grid grid-cols-12 gap-4 px-4 py-3 bg-muted/50 border-b border-border text-xs font-medium text-muted-foreground">
                      <div className="col-span-3">Contact</div>
                      <div className="col-span-2">Type</div>
                      <div className="col-span-2">Source</div>
                      <div className="col-span-2">Price Point</div>
                      <div className="col-span-2">Agent</div>
                      <div className="col-span-1 text-right">Actions</div>
                    </div>
                    <div className="divide-y divide-border">
                      {leads.filter((l) => l.status === "new").map((lead) => (
                        <div key={lead.id} className="grid grid-cols-12 gap-4 px-4 py-3 hover:bg-muted/30 transition-colors cursor-pointer items-center" onClick={() => window.location.href = `/lead/${lead.id}`}>
                          <div className="col-span-3 flex items-center gap-2 min-w-0">
                            {lead.flagged && <Flag className="h-3 w-3 text-destructive fill-destructive shrink-0" />}
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-foreground truncate">{lead.first_name} {lead.last_name}</p>
                              <p className="text-xs text-muted-foreground truncate">{lead.email}</p>
                            </div>
                          </div>
                          <div className="col-span-2">
                            <Badge className={`${getLeadTypeColor(lead.lead_type)} text-xs`} variant="outline">{lead.lead_type}</Badge>
                          </div>
                          <div className="col-span-2"><p className="text-sm text-foreground">{lead.source}</p></div>
                          <div className="col-span-2"><p className="text-sm text-foreground">{lead.price_point}</p></div>
                          <div className="col-span-2"><p className="text-sm text-muted-foreground">{lead.routed_agent}</p></div>
                          <div className="col-span-1 flex justify-end gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={(e) => e.stopPropagation()}><Phone className="h-3 w-3" /></Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={(e) => e.stopPropagation()}><Mail className="h-3 w-3" /></Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>

              {/* Contacted Tab */}
              <TabsContent value="contacted" className="space-y-0">
                {viewMode === "list" && (
                  <div className="bg-card rounded-lg border border-border overflow-hidden">
                    <div className="grid grid-cols-12 gap-4 px-4 py-3 bg-muted/50 border-b border-border text-xs font-medium text-muted-foreground">
                      <div className="col-span-3">Contact</div>
                      <div className="col-span-2">Type</div>
                      <div className="col-span-2">Source</div>
                      <div className="col-span-2">Price Point</div>
                      <div className="col-span-2">Agent</div>
                      <div className="col-span-1 text-right">Actions</div>
                    </div>
                    <div className="divide-y divide-border">
                      {leads.filter((l) => l.status === "contacted").map((lead) => (
                        <div key={lead.id} className="grid grid-cols-12 gap-4 px-4 py-3 hover:bg-muted/30 transition-colors cursor-pointer items-center" onClick={() => window.location.href = `/lead/${lead.id}`}>
                          <div className="col-span-3 flex items-center gap-2 min-w-0">
                            {lead.flagged && <Flag className="h-3 w-3 text-destructive fill-destructive shrink-0" />}
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-foreground truncate">{lead.first_name} {lead.last_name}</p>
                              <p className="text-xs text-muted-foreground truncate">{lead.email}</p>
                            </div>
                          </div>
                          <div className="col-span-2">
                            <Badge className={`${getLeadTypeColor(lead.lead_type)} text-xs`} variant="outline">{lead.lead_type}</Badge>
                          </div>
                          <div className="col-span-2"><p className="text-sm text-foreground">{lead.source}</p></div>
                          <div className="col-span-2"><p className="text-sm text-foreground">{lead.price_point}</p></div>
                          <div className="col-span-2"><p className="text-sm text-muted-foreground">{lead.routed_agent}</p></div>
                          <div className="col-span-1 flex justify-end gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={(e) => e.stopPropagation()}><Phone className="h-3 w-3" /></Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={(e) => e.stopPropagation()}><Mail className="h-3 w-3" /></Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>

              {/* Qualified Tab */}
              <TabsContent value="qualified" className="space-y-0">
                {viewMode === "list" && (
                  <div className="bg-card rounded-lg border border-border overflow-hidden">
                    <div className="grid grid-cols-12 gap-4 px-4 py-3 bg-muted/50 border-b border-border text-xs font-medium text-muted-foreground">
                      <div className="col-span-3">Contact</div>
                      <div className="col-span-2">Type</div>
                      <div className="col-span-2">Source</div>
                      <div className="col-span-2">Price Point</div>
                      <div className="col-span-2">Agent</div>
                      <div className="col-span-1 text-right">Actions</div>
                    </div>
                    <div className="divide-y divide-border">
                      {leads.filter((l) => l.status === "qualified").map((lead) => (
                        <div key={lead.id} className="grid grid-cols-12 gap-4 px-4 py-3 hover:bg-muted/30 transition-colors cursor-pointer items-center" onClick={() => window.location.href = `/lead/${lead.id}`}>
                          <div className="col-span-3 flex items-center gap-2 min-w-0">
                            {lead.flagged && <Flag className="h-3 w-3 text-destructive fill-destructive shrink-0" />}
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-foreground truncate">{lead.first_name} {lead.last_name}</p>
                              <p className="text-xs text-muted-foreground truncate">{lead.email}</p>
                            </div>
                          </div>
                          <div className="col-span-2">
                            <Badge className={`${getLeadTypeColor(lead.lead_type)} text-xs`} variant="outline">{lead.lead_type}</Badge>
                          </div>
                          <div className="col-span-2"><p className="text-sm text-foreground">{lead.source}</p></div>
                          <div className="col-span-2"><p className="text-sm text-foreground">{lead.price_point}</p></div>
                          <div className="col-span-2"><p className="text-sm text-muted-foreground">{lead.routed_agent}</p></div>
                          <div className="col-span-1 flex justify-end gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={(e) => e.stopPropagation()}><Phone className="h-3 w-3" /></Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={(e) => e.stopPropagation()}><Mail className="h-3 w-3" /></Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>

              {/* Nurturing Tab */}
              <TabsContent value="nurturing" className="space-y-0">
                {viewMode === "list" && (
                  <div className="bg-card rounded-lg border border-border overflow-hidden">
                    <div className="grid grid-cols-12 gap-4 px-4 py-3 bg-muted/50 border-b border-border text-xs font-medium text-muted-foreground">
                      <div className="col-span-3">Contact</div>
                      <div className="col-span-2">Type</div>
                      <div className="col-span-2">Source</div>
                      <div className="col-span-2">Price Point</div>
                      <div className="col-span-2">Agent</div>
                      <div className="col-span-1 text-right">Actions</div>
                    </div>
                    <div className="divide-y divide-border">
                      {leads.filter((l) => l.status === "nurturing").map((lead) => (
                        <div key={lead.id} className="grid grid-cols-12 gap-4 px-4 py-3 hover:bg-muted/30 transition-colors cursor-pointer items-center" onClick={() => window.location.href = `/lead/${lead.id}`}>
                          <div className="col-span-3 flex items-center gap-2 min-w-0">
                            {lead.flagged && <Flag className="h-3 w-3 text-destructive fill-destructive shrink-0" />}
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-foreground truncate">{lead.first_name} {lead.last_name}</p>
                              <p className="text-xs text-muted-foreground truncate">{lead.email}</p>
                            </div>
                          </div>
                          <div className="col-span-2">
                            <Badge className={`${getLeadTypeColor(lead.lead_type)} text-xs`} variant="outline">{lead.lead_type}</Badge>
                          </div>
                          <div className="col-span-2"><p className="text-sm text-foreground">{lead.source}</p></div>
                          <div className="col-span-2"><p className="text-sm text-foreground">{lead.price_point}</p></div>
                          <div className="col-span-2"><p className="text-sm text-muted-foreground">{lead.routed_agent}</p></div>
                          <div className="col-span-1 flex justify-end gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={(e) => e.stopPropagation()}><Phone className="h-3 w-3" /></Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={(e) => e.stopPropagation()}><Mail className="h-3 w-3" /></Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>

              {/* Converted Tab */}
              <TabsContent value="converted" className="space-y-0">
                {viewMode === "list" && (
                  <div className="bg-card rounded-lg border border-border overflow-hidden">
                    <div className="grid grid-cols-12 gap-4 px-4 py-3 bg-muted/50 border-b border-border text-xs font-medium text-muted-foreground">
                      <div className="col-span-3">Contact</div>
                      <div className="col-span-2">Type</div>
                      <div className="col-span-2">Source</div>
                      <div className="col-span-2">Price Point</div>
                      <div className="col-span-2">Agent</div>
                      <div className="col-span-1 text-right">Actions</div>
                    </div>
                    <div className="divide-y divide-border">
                      {leads.filter((l) => l.status === "converted").map((lead) => (
                        <div key={lead.id} className="grid grid-cols-12 gap-4 px-4 py-3 hover:bg-muted/30 transition-colors cursor-pointer items-center" onClick={() => window.location.href = `/lead/${lead.id}`}>
                          <div className="col-span-3 flex items-center gap-2 min-w-0">
                            {lead.flagged && <Flag className="h-3 w-3 text-destructive fill-destructive shrink-0" />}
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-foreground truncate">{lead.first_name} {lead.last_name}</p>
                              <p className="text-xs text-muted-foreground truncate">{lead.email}</p>
                            </div>
                          </div>
                          <div className="col-span-2">
                            <Badge className={`${getLeadTypeColor(lead.lead_type)} text-xs`} variant="outline">{lead.lead_type}</Badge>
                          </div>
                          <div className="col-span-2"><p className="text-sm text-foreground">{lead.source}</p></div>
                          <div className="col-span-2"><p className="text-sm text-foreground">{lead.price_point}</p></div>
                          <div className="col-span-2"><p className="text-sm text-muted-foreground">{lead.routed_agent}</p></div>
                          <div className="col-span-1 flex justify-end gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={(e) => e.stopPropagation()}><Phone className="h-3 w-3" /></Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={(e) => e.stopPropagation()}><Mail className="h-3 w-3" /></Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Leads;
