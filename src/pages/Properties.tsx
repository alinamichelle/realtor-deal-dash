import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  Map, 
  Grid3x3, 
  List, 
  Search, 
  Home, 
  Building2, 
  KeyRound,
  TrendingUp,
  Calendar,
  DollarSign,
  MapPin,
  Target,
  Clock,
  AlertCircle
} from "lucide-react";
import { differenceInYears, differenceInMonths, parseISO } from "date-fns";

// Mock property data
const properties = [
  {
    id: "1",
    address: "1234 Maple Street, Austin, TX 78701",
    type: "homeowner",
    purchaseDate: "2023-06-15",
    purchasePrice: "$485,000",
    currentValue: "$520,000",
    owner: "Sarah Johnson",
    status: "Monitoring",
    goal: "Retain for future sale",
    daysMonitored: 365,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
  },
  {
    id: "2",
    address: "5678 Oak Avenue, Austin, TX 78702",
    type: "investment",
    purchaseDate: "2022-03-20",
    purchasePrice: "$650,000",
    currentValue: "$725,000",
    owner: "Michael Chen",
    status: "Active",
    goal: "Monitor for sale opportunity",
    daysMonitored: 580,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  },
  {
    id: "3",
    address: "910 Pine Lane, Austin, TX 78703",
    type: "renter",
    moveInDate: "2023-09-01",
    leaseEnd: "2025-08-31",
    monthlyRent: "$2,400",
    owner: "Emily Rodriguez",
    status: "Lease Active",
    goal: "Convert to buyer",
    daysMonitored: 180,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
  },
  {
    id: "4",
    address: "1122 Elm Street, Austin, TX 78704",
    type: "landlord",
    purchaseDate: "2021-11-10",
    purchasePrice: "$425,000",
    currentValue: "$475,000",
    monthlyRent: "$3,200",
    owner: "David Park",
    tenantLeaseEnd: "2025-12-15",
    status: "Rented",
    goal: "Maintain relationship",
    daysMonitored: 820,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
  },
  {
    id: "5",
    address: "2233 Willow Drive, Austin, TX 78705",
    type: "homeowner",
    purchaseDate: "2019-04-12",
    purchasePrice: "$395,000",
    currentValue: "$515,000",
    owner: "Jennifer Martinez",
    status: "Prime Window",
    goal: "5+ year sweet spot - likely to sell",
    daysMonitored: 1680,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde"
  },
  {
    id: "6",
    address: "4455 Cedar Court, Austin, TX 78706",
    type: "full-circle",
    purchaseDate: "2018-02-15",
    purchasePrice: "$385,000",
    becameLandlordDate: "2020-06-01",
    soldDate: "2024-10-20",
    salePrice: "$545,000",
    owner: "Robert Kim",
    status: "Completed",
    goal: "Full lifecycle client - Perfect retention story",
    totalLeases: 3,
    yearsAsLandlord: 4,
    daysMonitored: 2440,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6"
  },
];

// Calculate years and months from a date
const getTimeFromDate = (dateString: string) => {
  const date = parseISO(dateString);
  const now = new Date();
  const years = differenceInYears(now, date);
  const months = differenceInMonths(now, date) % 12;
  
  if (years === 0) {
    return `${months} month${months !== 1 ? 's' : ''}`;
  } else if (months === 0) {
    return `${years} year${years !== 1 ? 's' : ''}`;
  }
  return `${years} year${years !== 1 ? 's' : ''}, ${months} month${months !== 1 ? 's' : ''}`;
};

// Get contextual insight based on property type and duration
const getPropertyInsight = (property: any) => {
  const relevantDate = property.purchaseDate || property.moveInDate;
  if (!relevantDate) return null;
  
  const years = differenceInYears(new Date(), parseISO(relevantDate));
  
  switch (property.type) {
    case "full-circle":
      return {
        type: "success",
        message: `🎯 Complete journey! Bought ${parseISO(property.purchaseDate).getFullYear()} → Landlord (${property.totalLeases} leases) → Sold ${parseISO(property.soldDate).getFullYear()} with you. Total relationship: ${differenceInYears(parseISO(property.soldDate), parseISO(property.purchaseDate))} years!`
      };
    
    case "homeowner":
      if (years >= 5 && years <= 7) {
        return {
          type: "hot",
          message: "Prime selling window! Average homeowner sells after 5-7 years. High conversion potential."
        };
      } else if (years >= 3 && years < 5) {
        return {
          type: "warm",
          message: "Building equity. Approaching typical 5-year selling window."
        };
      } else if (years > 7) {
        return {
          type: "info",
          message: "Long-term owner. May be ready for upgrade or downsize."
        };
      } else {
        return {
          type: "info",
          message: "Recent purchase. Build relationship for future opportunities."
        };
      }
    
    case "renter":
      if (years >= 2) {
        return {
          type: "hot",
          message: `Renting ${years}+ years - prime conversion opportunity! They've paid significant rent.`
        };
      } else if (years >= 1) {
        return {
          type: "warm",
          message: "Over 1 year renting. Start buyer conversion conversations."
        };
      } else {
        return {
          type: "info",
          message: "New renter. Build relationship and assess buyer potential."
        };
      }
    
    case "investment":
      if (years >= 5) {
        return {
          type: "hot",
          message: "5+ year hold. Excellent ROI window - may consider exit strategy."
        };
      } else if (years >= 3) {
        return {
          type: "warm",
          message: "Mid-term hold. Monitor for portfolio rebalancing opportunities."
        };
      } else {
        return {
          type: "info",
          message: "Recent acquisition. Watch for portfolio expansion needs."
        };
      }
    
    case "landlord":
      if (years >= 5) {
        return {
          type: "info",
          message: "Experienced landlord. Opportunity for portfolio growth or 1031 exchange."
        };
      } else {
        return {
          type: "info",
          message: "Newer landlord. Stay engaged for additional investment opportunities."
        };
      }
    
    default:
      return null;
  }
};

const getPropertyTypeInfo = (type: string) => {
  switch (type) {
    case "homeowner":
      return { icon: Home, label: "Homeowner", color: "bg-blue-500" };
    case "investment":
      return { icon: TrendingUp, label: "Investment", color: "bg-green-500" };
    case "renter":
      return { icon: KeyRound, label: "Renter", color: "bg-purple-500" };
    case "landlord":
      return { icon: Building2, label: "Landlord", color: "bg-orange-500" };
    case "full-circle":
      return { icon: Target, label: "Full Circle", color: "bg-gradient-to-r from-green-500 to-blue-500" };
    default:
      return { icon: Home, label: "Property", color: "bg-gray-500" };
  }
};

export default function Properties() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<"map" | "list" | "grid">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProperties = properties.filter(property =>
    property.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.owner.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
         <div className="flex-1 bg-background overflow-y-auto">
          {/* Header */}
          <div className="border-b border-border bg-card px-7 py-5">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h1 className="text-[22px] font-normal tracking-tight text-foreground">HausWatch</h1>
                <p className="text-xs text-muted-foreground mt-0.5">Monitor properties and nurture client relationships</p>
              </div>
              <Button>
                <MapPin className="mr-2 h-4 w-4" />
                Add Property
              </Button>
            </div>

            {/* Search and View Controls */}
            <div className="flex items-center gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by address or owner..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center gap-2 border border-border rounded-lg p-1">
                <Button
                  variant={viewMode === "map" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("map")}
                >
                  <Map className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3x3 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Properties</p>
                      <p className="text-2xl font-bold">{properties.length}</p>
                    </div>
                    <Home className="h-8 w-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Homeowners</p>
                      <p className="text-2xl font-bold">{properties.filter(p => p.type === "homeowner").length}</p>
                    </div>
                    <Home className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Renters to Convert</p>
                      <p className="text-2xl font-bold">{properties.filter(p => p.type === "renter").length}</p>
                    </div>
                    <KeyRound className="h-8 w-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Landlords</p>
                      <p className="text-2xl font-bold">{properties.filter(p => p.type === "landlord").length}</p>
                    </div>
                    <Building2 className="h-8 w-8 text-orange-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Views */}
            {viewMode === "map" && (
              <Card>
                <CardContent className="p-0">
                  <div className="h-[600px] bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Map className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Map view coming soon</p>
                      <p className="text-sm text-muted-foreground mt-2">Properties will be displayed on an interactive map</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {viewMode === "list" && (
              <div className="space-y-4">
                {filteredProperties.map((property) => {
                  const typeInfo = getPropertyTypeInfo(property.type);
                  const TypeIcon = typeInfo.icon;
                  const relevantDate = property.purchaseDate || property.moveInDate;
                  const timeLabel = property.type === "renter" ? "Renting For" : "Owned For";
                  const insight = getPropertyInsight(property);
                  
                  return (
                    <Card 
                      key={property.id} 
                      className="hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => navigate(`/property/${property.id}`)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-6">
                          <img 
                            src={property.image} 
                            alt={property.address}
                            className="w-32 h-32 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="font-semibold text-lg">{property.address}</h3>
                                <p className="text-muted-foreground">{property.owner}</p>
                              </div>
                              <Badge className={`${typeInfo.color} text-white`}>
                                <TypeIcon className="h-3 w-3 mr-1" />
                                {typeInfo.label}
                              </Badge>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
                              {property.type === "full-circle" ? (
                                <>
                                  <div>
                                    <p className="text-xs text-muted-foreground">Purchased</p>
                                    <p className="font-medium">{property.purchasePrice}</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-muted-foreground">Sold</p>
                                    <p className="font-medium">{property.salePrice}</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-muted-foreground">Total Profit</p>
                                    <p className="font-medium text-green-600">
                                      ${(parseInt(property.salePrice.replace(/[$,]/g, '')) - parseInt(property.purchasePrice.replace(/[$,]/g, ''))).toLocaleString()}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-muted-foreground">Leases</p>
                                    <p className="font-medium">{property.totalLeases} managed</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-muted-foreground">Journey</p>
                                    <p className="font-medium">{differenceInYears(parseISO(property.soldDate), parseISO(property.purchaseDate))} years</p>
                                  </div>
                                </>
                              ) : property.type === "renter" ? (
                                <>
                                  <div>
                                    <p className="text-xs text-muted-foreground">Monthly Rent</p>
                                    <p className="font-medium">{property.monthlyRent}</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-muted-foreground">Lease Ends</p>
                                    <p className="font-medium">{property.leaseEnd}</p>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <p className="text-xs text-muted-foreground">Purchase Price</p>
                                    <p className="font-medium">{property.purchasePrice}</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-muted-foreground">Current Value</p>
                                    <p className="font-medium">{property.currentValue}</p>
                                  </div>
                                </>
                              )}
                              {relevantDate && (
                                <div>
                                  <p className="text-xs text-muted-foreground">{timeLabel}</p>
                                  <p className="font-medium">{getTimeFromDate(relevantDate)}</p>
                                </div>
                              )}
                              <div>
                                <p className="text-xs text-muted-foreground">Status</p>
                                <Badge variant="outline">{property.status}</Badge>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground">Monitoring</p>
                                <p className="font-medium">{property.daysMonitored} days</p>
                              </div>
                            </div>

                            {insight && (
                              <div className={`mt-4 p-3 rounded-lg flex items-start gap-2 ${
                                insight.type === 'success' ? 'bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30' :
                                insight.type === 'hot' ? 'bg-orange-500/10 border border-orange-500/20' :
                                insight.type === 'warm' ? 'bg-yellow-500/10 border border-yellow-500/20' :
                                'bg-blue-500/10 border border-blue-500/20'
                              }`}>
                                <AlertCircle className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                                  insight.type === 'success' ? 'text-green-600' :
                                  insight.type === 'hot' ? 'text-orange-500' :
                                  insight.type === 'warm' ? 'text-yellow-500' :
                                  'text-blue-500'
                                }`} />
                                <p className="text-sm">{insight.message}</p>
                              </div>
                            )}

                            <div className="mt-3 p-3 bg-muted rounded-lg flex items-center gap-2">
                              <Target className="h-4 w-4 text-primary" />
                              <p className="text-sm"><strong>Goal:</strong> {property.goal}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}

            {viewMode === "grid" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.map((property) => {
                  const typeInfo = getPropertyTypeInfo(property.type);
                  const TypeIcon = typeInfo.icon;
                  const relevantDate = property.purchaseDate || property.moveInDate;
                  const timeLabel = property.type === "renter" ? "Renting For" : "Owned For";
                  const insight = getPropertyInsight(property);
                  
                  return (
                    <Card 
                      key={property.id} 
                      className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
                      onClick={() => navigate(`/property/${property.id}`)}
                    >
                      <div className="relative h-48">
                        <img 
                          src={property.image} 
                          alt={property.address}
                          className="w-full h-full object-cover"
                        />
                        <Badge className={`absolute top-3 right-3 ${typeInfo.color} text-white`}>
                          <TypeIcon className="h-3 w-3 mr-1" />
                          {typeInfo.label}
                        </Badge>
                        {relevantDate && (
                          <Badge className="absolute top-3 left-3 bg-background/90 text-foreground">
                            <Clock className="h-3 w-3 mr-1" />
                            {getTimeFromDate(relevantDate)}
                          </Badge>
                        )}
                      </div>
                      
                      <CardHeader>
                        <CardTitle className="text-base">{property.address}</CardTitle>
                        <p className="text-sm text-muted-foreground">{property.owner}</p>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="space-y-3">
                          {property.type === "full-circle" ? (
                            <>
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Purchased</span>
                                <span className="font-medium">{property.purchasePrice}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Sold</span>
                                <span className="font-medium">{property.salePrice}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Profit</span>
                                <span className="font-medium text-green-600">
                                  ${(parseInt(property.salePrice.replace(/[$,]/g, '')) - parseInt(property.purchasePrice.replace(/[$,]/g, ''))).toLocaleString()}
                                </span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Leases Managed</span>
                                <span className="font-medium">{property.totalLeases} leases</span>
                              </div>
                            </>
                          ) : property.type === "renter" ? (
                            <>
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Monthly Rent</span>
                                <span className="font-medium">{property.monthlyRent}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Lease Ends</span>
                                <span className="font-medium">{property.leaseEnd}</span>
                              </div>
                            </>
                          ) : property.type === "landlord" ? (
                            <>
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Current Value</span>
                                <span className="font-medium">{property.currentValue}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Monthly Rent</span>
                                <span className="font-medium">{property.monthlyRent}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Tenant Lease</span>
                                <span className="font-medium">{property.tenantLeaseEnd}</span>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Purchase</span>
                                <span className="font-medium">{property.purchasePrice}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Current Value</span>
                                <span className="font-medium">{property.currentValue}</span>
                              </div>
                            </>
                          )}
                          
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Status</span>
                            <Badge variant="outline" className="text-xs">{property.status}</Badge>
                          </div>
                          
                          {insight && (
                            <div className={`p-2 rounded text-xs ${
                              insight.type === 'success' ? 'bg-gradient-to-r from-green-500/10 to-blue-500/10 text-green-700 dark:text-green-300 border border-green-500/30' :
                              insight.type === 'hot' ? 'bg-orange-500/10 text-orange-700 dark:text-orange-300 border border-orange-500/20' :
                              insight.type === 'warm' ? 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-300 border border-yellow-500/20' :
                              'bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20'
                            }`}>
                              <div className="flex items-start gap-1">
                                <AlertCircle className="h-3 w-3 mt-0.5 flex-shrink-0" />
                                <span>{insight.message}</span>
                              </div>
                            </div>
                          )}
                          
                          <div className="pt-2 border-t">
                            <div className="flex items-center gap-2 text-xs">
                              <Target className="h-3 w-3 text-primary flex-shrink-0" />
                              <p className="text-muted-foreground">{property.goal}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
