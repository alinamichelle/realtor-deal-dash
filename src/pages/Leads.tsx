import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
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
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="contacted">Contacted</SelectItem>
                  <SelectItem value="qualified">Qualified</SelectItem>
                  <SelectItem value="nurturing">Nurturing</SelectItem>
                  <SelectItem value="converted">Converted</SelectItem>
                  <SelectItem value="lost">Lost</SelectItem>
                </SelectContent>
              </Select>
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
            </div>

            {/* Leads Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredLeads.map((lead) => (
                <Card key={lead.id} className="p-6 hover:shadow-lg transition-all relative">
                  {lead.flagged && (
                    <div className="absolute top-4 right-4">
                      <Flag className="h-5 w-5 text-destructive fill-destructive" />
                    </div>
                  )}

                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {lead.first_name} {lead.last_name}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge className={getStatusColor(lead.status)}>
                              {lead.status}
                            </Badge>
                            <Badge className={getLeadTypeColor(lead.lead_type)} variant="outline">
                              {lead.lead_type}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Mail className="h-3 w-3" />
                          <span>{lead.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Phone className="h-3 w-3" />
                          <span>{lead.phone}</span>
                        </div>
                      </div>

                      {/* Lead Details */}
                      <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-border">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Source</p>
                          <p className="text-sm font-medium text-foreground">{lead.source}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Price Point</p>
                          <p className="text-sm font-medium text-foreground">{lead.price_point}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Location</p>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 text-muted-foreground" />
                            <p className="text-sm font-medium text-foreground">{lead.zip_code}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Agent</p>
                          <p className="text-sm font-medium text-foreground">{lead.routed_agent}</p>
                        </div>
                      </div>

                      {/* Notes */}
                      {lead.notes && (
                        <div className="mb-4">
                          <p className="text-sm text-muted-foreground italic">
                            "{lead.notes}"
                          </p>
                        </div>
                      )}

                      {/* Tags */}
                      {lead.tags && lead.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {lead.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag.replace("_", " ")}
                            </Badge>
                          ))}
                        </div>
                      )}

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{getTimeSince(lead.registered_at)}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="gap-2">
                            <Phone className="h-3 w-3" />
                            Call
                          </Button>
                          <Button variant="outline" size="sm" className="gap-2">
                            <Mail className="h-3 w-3" />
                            Email
                          </Button>
                          <Button size="sm" asChild>
                            <NavLink to={`/lead/${lead.id}`}>
                              View Details
                            </NavLink>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {filteredLeads.length === 0 && (
              <Card className="p-12 text-center">
                <UserPlus className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  No leads found
                </h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters or add a new lead
                </p>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Lead
                </Button>
              </Card>
            )}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Leads;
