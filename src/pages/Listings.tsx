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
  Home,
  Plus,
  Search,
  Calendar,
  DollarSign,
  Eye,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Camera,
  Video,
  Lock,
  Image as ImageIcon,
} from "lucide-react";
import { useState } from "react";

// Mock data
const listings = [
  {
    id: 1,
    listing_name: "Luxury Estate on Oak Hills",
    status: "active",
    property_address: "456 Maple Avenue, Austin, TX 78701",
    list_price: 485000,
    list_date: "2024-11-15",
    target_live_date: "2024-12-01",
    dom: 27,
    mls_id: "MLX123456",
    listing_coordinator_status: "complete",
    photos_status: "complete",
    staging_status: "complete",
    marketing_status: "in_progress",
    lockbox_status: "installed",
    video_status: "scheduled",
    tour_3d_url: "https://example.com/tour",
    beds: 4,
    baths: 3.5,
  },
  {
    id: 2,
    listing_name: "Modern Downtown Condo",
    status: "coming_soon",
    property_address: "789 Pine Street, Austin, TX 78702",
    list_price: 595000,
    target_live_date: "2024-12-15",
    photos_date: "2024-12-10",
    staging_date: "2024-12-12",
    mls_id: "MLX789012",
    listing_coordinator_status: "in_progress",
    photos_status: "scheduled",
    staging_status: "scheduled",
    marketing_status: "not_started",
    lockbox_status: "pending",
    video_status: "not_started",
    beds: 2,
    baths: 2,
  },
  {
    id: 3,
    listing_name: "Charming Suburban Home",
    status: "active",
    property_address: "321 Oak Drive, Round Rock, TX 78681",
    list_price: 425000,
    list_date: "2024-10-20",
    dom: 52,
    mls_id: "MLX345678",
    listing_coordinator_status: "complete",
    photos_status: "complete",
    staging_status: "complete",
    marketing_status: "complete",
    lockbox_status: "installed",
    video_status: "complete",
    tour_3d_url: "https://example.com/tour2",
    beds: 3,
    baths: 2,
  },
  {
    id: 4,
    listing_name: "Waterfront Property",
    status: "pre_listing",
    property_address: "555 Lake View Dr, Lake Travis, TX 78734",
    list_price: 1250000,
    target_live_date: "2025-01-10",
    listing_coordinator_status: "not_started",
    photos_status: "not_started",
    staging_status: "pending",
    marketing_status: "not_started",
    lockbox_status: "not_started",
    video_status: "not_started",
    beds: 5,
    baths: 4.5,
  },
];

const Listings = () => {
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-success text-success-foreground";
      case "coming_soon":
        return "bg-info text-info-foreground";
      case "pre_listing":
        return "bg-caution text-caution-foreground";
      case "pending":
        return "bg-primary text-primary-foreground";
      case "closed":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const getTaskStatusIcon = (status: string) => {
    switch (status) {
      case "complete":
        return <CheckCircle2 className="h-4 w-4 text-success" />;
      case "in_progress":
        return <Clock className="h-4 w-4 text-caution" />;
      case "scheduled":
        return <Calendar className="h-4 w-4 text-info" />;
      case "not_started":
      case "pending":
        return <AlertCircle className="h-4 w-4 text-muted-foreground" />;
      default:
        return <AlertCircle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const filteredListings = listings.filter((listing) => {
    const matchesStatus = statusFilter === "all" || listing.status === statusFilter;
    const matchesSearch =
      listing.listing_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.property_address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
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
                  Listings
                </h1>
                <p className="text-muted-foreground">
                  Manage your active listings, coordination, and marketing
                </p>
              </div>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                New Listing
              </Button>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search listings..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="pre_listing">Pre-Listing</SelectItem>
                  <SelectItem value="coming_soon">Coming Soon</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active</p>
                    <p className="text-2xl font-bold text-foreground">2</p>
                  </div>
                  <div className="p-2 bg-success/10 rounded-lg">
                    <Home className="h-5 w-5 text-success" />
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Coming Soon</p>
                    <p className="text-2xl font-bold text-foreground">1</p>
                  </div>
                  <div className="p-2 bg-info/10 rounded-lg">
                    <Clock className="h-5 w-5 text-info" />
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Pre-Listing</p>
                    <p className="text-2xl font-bold text-foreground">1</p>
                  </div>
                  <div className="p-2 bg-caution/10 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-caution" />
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Value</p>
                    <p className="text-2xl font-bold text-primary">$2.8M</p>
                  </div>
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </Card>
            </div>

            {/* Listings Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredListings.map((listing) => (
                <Card key={listing.id} className="p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Home className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground">
                            {listing.listing_name}
                          </h3>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                            <MapPin className="h-3 w-3" />
                            {listing.property_address}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge className={getStatusColor(listing.status)}>
                      {listing.status.replace("_", " ")}
                    </Badge>
                  </div>

                  {/* Property Details */}
                  <div className="flex items-center gap-6 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">
                        {listing.beds}
                      </span>
                      <span className="text-muted-foreground">beds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">
                        {listing.baths}
                      </span>
                      <span className="text-muted-foreground">baths</span>
                    </div>
                    {listing.mls_id && (
                      <Badge variant="outline" className="text-xs">
                        MLS: {listing.mls_id}
                      </Badge>
                    )}
                  </div>

                  {/* Price & DOM */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">List Price</p>
                      <p className="text-2xl font-bold text-primary">
                        {formatCurrency(listing.list_price)}
                      </p>
                    </div>
                    {listing.dom !== undefined && (
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground mb-1">Days on Market</p>
                        <p className="text-2xl font-bold text-foreground">{listing.dom}</p>
                      </div>
                    )}
                  </div>

                  {/* Status Indicators */}
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-medium text-foreground mb-2">
                      Coordination Status
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2 text-xs">
                        {getTaskStatusIcon(listing.photos_status)}
                        <span className="text-muted-foreground">Photos</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        {getTaskStatusIcon(listing.staging_status)}
                        <span className="text-muted-foreground">Staging</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        {getTaskStatusIcon(listing.marketing_status)}
                        <span className="text-muted-foreground">Marketing</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        {getTaskStatusIcon(listing.lockbox_status)}
                        <span className="text-muted-foreground">Lockbox</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        {getTaskStatusIcon(listing.video_status)}
                        <span className="text-muted-foreground">Video</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        {getTaskStatusIcon(listing.listing_coordinator_status)}
                        <span className="text-muted-foreground">Coordination</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex items-center gap-2 pt-4 border-t border-border">
                    {listing.tour_3d_url && (
                      <Button variant="outline" size="sm" className="gap-2">
                        <Eye className="h-3 w-3" />
                        3D Tour
                      </Button>
                    )}
                    <Button variant="outline" size="sm" asChild className="gap-2">
                      <NavLink to={`/listing/${listing.id}`}>
                        <Eye className="h-3 w-3" />
                        View Details
                      </NavLink>
                    </Button>
                    <Button variant="ghost" size="sm" className="ml-auto">
                      Edit
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {filteredListings.length === 0 && (
              <Card className="p-12 text-center">
                <Home className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  No listings found
                </h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters or create a new listing
                </p>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  New Listing
                </Button>
              </Card>
            )}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Listings;
