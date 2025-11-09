import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft,
  Home,
  MapPin,
  Ruler,
  Bed,
  Bath,
  Calendar,
  DollarSign,
  Users,
  FileText,
  Edit,
  TrendingUp,
  Building2,
  School,
  Hammer,
  Eye,
  Target,
  Clock,
  AlertCircle,
  CheckCircle,
  Tag,
  Layers,
  Link as LinkIcon,
  History
} from "lucide-react";
import { differenceInYears, differenceInMonths, parseISO, format } from "date-fns";

// Mock property data - replace with actual API call
const mockProperty = {
  id: "1",
  
  // Address & Location
  street_address: "1234 Maple Street",
  city: "Austin",
  state: "TX",
  zip_code: "78701",
  unit: "",
  lat: 30.2672,
  lng: -97.7431,
  neighborhood: "Downtown",
  county: "Travis County",
  subdivision: "Maple Heights",
  
  // Property Specifications
  beds: 3,
  baths: 2.5,
  sq_ft: 2100,
  property_type: "Single Family",
  year_built: 2015,
  lot_size: "0.25 acres",
  
  // School & Area
  mls_area: "Central Austin",
  school_district: "Austin ISD",
  school_district_rating: "8/10",
  
  // Property Features
  countertops_material: "Granite",
  flooring_material: "Hardwood",
  roof_material: "Architectural Shingle",
  has_pool: "Yes",
  has_fireplace: "Yes",
  primary_bedroom_main_floor: true,
  total_main_floor_bedrooms: 2,
  
  // Property Characteristics
  location_strength: "Excellent",
  visual_appeal: "High",
  has_updates: true,
  updates_list: "Kitchen remodel (2022), New HVAC (2023), Fresh paint throughout",
  recent_updates: "Replaced water heater (Jan 2024), New garage door opener (Feb 2024)",
  house_features: "Open floor plan, High ceilings, Crown molding, Walk-in closets",
  appliances_conveying: "Refrigerator, Washer, Dryer, All kitchen appliances",
  
  // Descriptions & Notes
  description: "Beautiful modern home in the heart of downtown Austin. Features an open concept living space with abundant natural light, recently updated kitchen with granite countertops, and spacious master suite. The backyard oasis includes a sparkling pool perfect for entertaining.",
  notes: "Client prefers showings after 5pm. Pool service scheduled weekly on Thursdays.",
  
  // Structured Data
  features: {
    interior: ["Hardwood floors", "Granite counters", "Stainless appliances"],
    exterior: ["Pool", "Covered patio", "Sprinkler system"],
    community: ["HOA", "Park access", "Walking trails"]
  },
  services_needed: {
    immediate: ["Pool inspection", "HVAC maintenance"],
    upcoming: ["Roof inspection (due in 6 months)"]
  },
  inventory_needed: ["Professional photos", "Drone footage", "3D tour"],
  
  // Ownership
  current_owner_type: "Homeowner",
  haus_year: "2023",
  haus_year_source_date: "2023-06-15",
  ownership_start_date: "2023-06-15",
  haus_watch_label: "Prime Window",
  
  // MLS Integration
  mls_listing_id: "ML12345678",
  mls_property_id: "MP87654321",
  mls_last_updated: "2024-11-01T10:30:00Z",
  validation_status: 1,
  last_verified_source: "MLS Sync",
  
  // Timestamps
  created_at: "2023-06-16T09:00:00Z",
  updated_at: "2024-11-08T14:22:00Z",
  
  // Additional context
  current_primary_client_id: "client-001",
  current_primary_client_name: "Sarah Johnson",
  purchase_price: "$485,000",
  current_value: "$520,000",
  image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  
  // Related transactions
  transactions: [
    {
      id: "txn-001",
      type: "Purchase",
      date: "2023-06-15",
      price: "$485,000",
      status: "Closed"
    }
  ]
};

export default function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  
  const property = mockProperty; // Replace with actual data fetch

  const getTimeOwned = () => {
    if (!property.ownership_start_date) return "N/A";
    const years = differenceInYears(new Date(), parseISO(property.ownership_start_date));
    const months = differenceInMonths(new Date(), parseISO(property.ownership_start_date)) % 12;
    if (years === 0) return `${months} month${months !== 1 ? 's' : ''}`;
    return `${years} year${years !== 1 ? 's' : ''}${months > 0 ? `, ${months} month${months !== 1 ? 's' : ''}` : ''}`;
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex-1 bg-background">
          {/* Header */}
          <div className="border-b border-border bg-card px-8 py-6">
            <div className="flex items-center gap-4 mb-4">
              <Button variant="ghost" size="icon" onClick={() => navigate("/properties")}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-bold text-foreground">
                    {property.street_address}
                  </h1>
                  <Badge variant="outline">{property.property_type}</Badge>
                  <Badge className="bg-blue-500 text-white">{property.current_owner_type}</Badge>
                </div>
                <p className="text-muted-foreground mt-1">
                  {property.city}, {property.state} {property.zip_code}
                </p>
              </div>
              <Button>
                <Edit className="mr-2 h-4 w-4" />
                Edit Property
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <Bed className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{property.beds} beds</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{property.baths} baths</span>
              </div>
              <div className="flex items-center gap-2">
                <Ruler className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{property.sq_ft?.toLocaleString()} sq ft</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Built {property.year_built}</span>
              </div>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Owned {getTimeOwned()}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Property Image */}
                <Card className="overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.street_address}
                    className="w-full h-96 object-cover"
                  />
                </Card>

                {/* Tabs */}
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="ownership">Ownership</TabsTrigger>
                    <TabsTrigger value="mls">MLS</TabsTrigger>
                    <TabsTrigger value="history">History</TabsTrigger>
                  </TabsList>

                  {/* Overview Tab */}
                  <TabsContent value="overview" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Property Description</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{property.description}</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Home className="h-5 w-5" />
                          Property Specifications
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Property Type</p>
                            <p className="font-medium">{property.property_type}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Lot Size</p>
                            <p className="font-medium">{property.lot_size}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Square Footage</p>
                            <p className="font-medium">{property.sq_ft?.toLocaleString()} sq ft</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Year Built</p>
                            <p className="font-medium">{property.year_built}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Bedrooms</p>
                            <p className="font-medium">{property.beds}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Bathrooms</p>
                            <p className="font-medium">{property.baths}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Main Floor Bedrooms</p>
                            <p className="font-medium">{property.total_main_floor_bedrooms}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Primary on Main</p>
                            <p className="font-medium">{property.primary_bedroom_main_floor ? "Yes" : "No"}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <MapPin className="h-5 w-5" />
                          Location Details
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Neighborhood</p>
                            <p className="font-medium">{property.neighborhood}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">County</p>
                            <p className="font-medium">{property.county}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Subdivision</p>
                            <p className="font-medium">{property.subdivision}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">MLS Area</p>
                            <p className="font-medium">{property.mls_area}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Location Strength</p>
                            <Badge variant="outline">{property.location_strength}</Badge>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Visual Appeal</p>
                            <Badge variant="outline">{property.visual_appeal}</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <School className="h-5 w-5" />
                          School Information
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">School District</p>
                            <p className="font-medium">{property.school_district}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">District Rating</p>
                            <p className="font-medium">{property.school_district_rating}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Features Tab */}
                  <TabsContent value="features" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Layers className="h-5 w-5" />
                          Interior Features
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Countertops</p>
                            <p className="font-medium">{property.countertops_material}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Flooring</p>
                            <p className="font-medium">{property.flooring_material}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Fireplace</p>
                            <p className="font-medium">{property.has_fireplace}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Roof Material</p>
                            <p className="font-medium">{property.roof_material}</p>
                          </div>
                        </div>
                        
                        <Separator className="my-4" />
                        
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">House Features</p>
                          <p className="text-sm">{property.house_features}</p>
                        </div>
                        
                        <Separator className="my-4" />
                        
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Appliances Conveying</p>
                          <p className="text-sm">{property.appliances_conveying}</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Home className="h-5 w-5" />
                          Exterior Features
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Pool</p>
                            <p className="font-medium">{property.has_pool}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Lot Size</p>
                            <p className="font-medium">{property.lot_size}</p>
                          </div>
                        </div>
                        
                        {property.features && (
                          <>
                            <Separator className="my-4" />
                            <div className="space-y-3">
                              {property.features.exterior && (
                                <div>
                                  <p className="text-sm font-medium mb-2">Exterior Amenities</p>
                                  <div className="flex flex-wrap gap-2">
                                    {property.features.exterior.map((feature: string, idx: number) => (
                                      <Badge key={idx} variant="secondary">{feature}</Badge>
                                    ))}
                                  </div>
                                </div>
                              )}
                              {property.features.community && (
                                <div>
                                  <p className="text-sm font-medium mb-2">Community Features</p>
                                  <div className="flex flex-wrap gap-2">
                                    {property.features.community.map((feature: string, idx: number) => (
                                      <Badge key={idx} variant="secondary">{feature}</Badge>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Hammer className="h-5 w-5" />
                          Updates & Improvements
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <p className="text-sm font-medium">Has Updates</p>
                          </div>
                          <p className="text-sm text-muted-foreground">{property.updates_list}</p>
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <p className="text-sm font-medium mb-2">Recent Updates</p>
                          <p className="text-sm text-muted-foreground">{property.recent_updates}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Ownership Tab */}
                  <TabsContent value="ownership" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Users className="h-5 w-5" />
                          Ownership Information
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Owner Type</p>
                            <p className="font-medium">{property.current_owner_type}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Primary Client</p>
                            <p className="font-medium">{property.current_primary_client_name}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Ownership Start</p>
                            <p className="font-medium">
                              {format(parseISO(property.ownership_start_date), "MMM d, yyyy")}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Time Owned</p>
                            <p className="font-medium">{getTimeOwned()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Haus Year</p>
                            <p className="font-medium">{property.haus_year}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">HausWatch Label</p>
                            <Badge>{property.haus_watch_label}</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <DollarSign className="h-5 w-5" />
                          Financial Information
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Purchase Price</p>
                            <p className="font-medium text-lg">{property.purchase_price}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Current Value</p>
                            <p className="font-medium text-lg">{property.current_value}</p>
                          </div>
                          <div className="col-span-2">
                            <p className="text-sm text-muted-foreground">Estimated Equity</p>
                            <p className="font-medium text-lg text-green-600">
                              ${(parseInt(property.current_value.replace(/[$,]/g, '')) - parseInt(property.purchase_price.replace(/[$,]/g, ''))).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Agent Notes</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{property.notes}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* MLS Tab */}
                  <TabsContent value="mls" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <LinkIcon className="h-5 w-5" />
                          MLS Integration
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">MLS Listing ID</p>
                            <p className="font-medium font-mono">{property.mls_listing_id}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">MLS Property ID</p>
                            <p className="font-medium font-mono">{property.mls_property_id}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Last Updated</p>
                            <p className="font-medium">
                              {format(parseISO(property.mls_last_updated), "MMM d, yyyy h:mm a")}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Validation Status</p>
                            <Badge variant={property.validation_status === 1 ? "default" : "secondary"}>
                              {property.validation_status === 1 ? "Verified" : "Pending"}
                            </Badge>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Last Verified Source</p>
                            <p className="font-medium">{property.last_verified_source}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Tag className="h-5 w-5" />
                          Services & Inventory
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <p className="text-sm font-medium mb-2">Services Needed</p>
                          {property.services_needed.immediate && (
                            <div className="mb-3">
                              <p className="text-xs text-muted-foreground mb-1">Immediate:</p>
                              <div className="flex flex-wrap gap-2">
                                {property.services_needed.immediate.map((service: string, idx: number) => (
                                  <Badge key={idx} variant="destructive">{service}</Badge>
                                ))}
                              </div>
                            </div>
                          )}
                          {property.services_needed.upcoming && (
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Upcoming:</p>
                              <div className="flex flex-wrap gap-2">
                                {property.services_needed.upcoming.map((service: string, idx: number) => (
                                  <Badge key={idx} variant="secondary">{service}</Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <p className="text-sm font-medium mb-2">Inventory Needed</p>
                          <div className="flex flex-wrap gap-2">
                            {property.inventory_needed.map((item: string, idx: number) => (
                              <Badge key={idx} variant="outline">{item}</Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* History Tab */}
                  <TabsContent value="history" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <History className="h-5 w-5" />
                          Transaction History
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {property.transactions.map((txn, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-4 border border-border rounded-lg">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <p className="font-medium">{txn.type}</p>
                                  <Badge variant="outline">{txn.status}</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  {format(parseISO(txn.date), "MMMM d, yyyy")}
                                </p>
                              </div>
                              <p className="font-bold text-lg">{txn.price}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Clock className="h-5 w-5" />
                          System Information
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Created</p>
                            <p className="font-medium">
                              {format(parseISO(property.created_at), "MMM d, yyyy h:mm a")}
                            </p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Last Updated</p>
                            <p className="font-medium">
                              {format(parseISO(property.updated_at), "MMM d, yyyy h:mm a")}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      HausWatch Status
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Badge className="mb-2">{property.haus_watch_label}</Badge>
                        <p className="text-sm text-muted-foreground">
                          Monitoring for {differenceInMonths(new Date(), parseISO(property.ownership_start_date))} months
                        </p>
                      </div>
                      
                      <Separator />
                      
                      <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-blue-500 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium mb-1">Retention Strategy</p>
                            <p className="text-xs text-muted-foreground">
                              Homeowner in year 1. Build relationship for future sale opportunity.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Primary Client
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-medium">
                        {property.current_primary_client_name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{property.current_primary_client_name}</p>
                        <p className="text-sm text-muted-foreground">Homeowner</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full" onClick={() => navigate(`/contact/${property.current_primary_client_id}`)}>
                      View Profile
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="mr-2 h-4 w-4" />
                      Generate CMA
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <TrendingUp className="mr-2 h-4 w-4" />
                      Market Analysis
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Eye className="mr-2 h-4 w-4" />
                      Schedule Showing
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
