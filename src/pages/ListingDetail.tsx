import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NavLink } from "@/components/NavLink";
import {
  ArrowLeft,
  Home,
  MapPin,
  DollarSign,
  Calendar,
  Eye,
  Edit,
  Camera,
  Video,
  Lock,
  CheckCircle2,
  Clock,
  AlertCircle,
  ExternalLink,
  Image as ImageIcon,
  FileText,
  Users,
  TrendingUp,
} from "lucide-react";

const ListingDetail = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />

        <main className="flex-1 bg-gradient-to-b from-silver to-muted/30">
          <div className="max-w-[1400px] mx-auto px-6 py-8">
            {/* Header */}
            <div className="mb-6">
              <Button variant="ghost" size="sm" asChild className="mb-4">
                <NavLink to="/listings">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Listings
                </NavLink>
              </Button>
              
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Home className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">
                      Luxury Estate on Oak Hills
                    </h1>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>456 Maple Avenue, Austin, TX 78701</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className="bg-success text-success-foreground">Active</Badge>
                      <Badge variant="outline">MLS: MLX123456</Badge>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  <Button size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View Public
                  </Button>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">List Price</p>
                    <p className="text-2xl font-bold text-primary">$485,000</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-primary/30" />
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Days on Market</p>
                    <p className="text-2xl font-bold text-foreground">27</p>
                  </div>
                  <Clock className="h-8 w-8 text-muted-foreground/30" />
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Views</p>
                    <p className="text-2xl font-bold text-foreground">1,247</p>
                  </div>
                  <Eye className="h-8 w-8 text-muted-foreground/30" />
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Inquiries</p>
                    <p className="text-2xl font-bold text-foreground">23</p>
                  </div>
                  <Users className="h-8 w-8 text-muted-foreground/30" />
                </div>
              </Card>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="coordination">Coordination</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Property Details */}
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Property Details
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Bedrooms</span>
                        <span className="font-medium text-foreground">4</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Bathrooms</span>
                        <span className="font-medium text-foreground">3.5</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Square Feet</span>
                        <span className="font-medium text-foreground">3,250</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Property Type</span>
                        <span className="font-medium text-foreground">Single Family</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Year Built</span>
                        <span className="font-medium text-foreground">2018</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-muted-foreground">Lot Size</span>
                        <span className="font-medium text-foreground">0.5 acres</span>
                      </div>
                    </div>
                  </Card>

                  {/* Important Dates */}
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Important Dates
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Calendar className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">List Date</p>
                          <p className="text-sm text-muted-foreground">November 15, 2024</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-info/10 rounded-lg">
                          <Camera className="h-4 w-4 text-info" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">Photos Date</p>
                          <p className="text-sm text-muted-foreground">November 10, 2024</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-success/10 rounded-lg">
                          <ImageIcon className="h-4 w-4 text-success" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">Staging Date</p>
                          <p className="text-sm text-muted-foreground">November 12, 2024</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-caution/10 rounded-lg">
                          <Video className="h-4 w-4 text-caution" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">Video Shoot</p>
                          <p className="text-sm text-muted-foreground">December 18, 2024</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Description */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Description
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Stunning luxury estate nestled in the prestigious Oak Hills neighborhood. 
                    This meticulously maintained home features an open-concept floor plan with 
                    high ceilings, custom finishes throughout, and floor-to-ceiling windows that 
                    flood the space with natural light. The gourmet kitchen boasts top-of-the-line 
                    appliances, quartz countertops, and a large center island perfect for entertaining. 
                    The expansive master suite offers a spa-like bathroom and walk-in closet. 
                    Outside, enjoy the beautifully landscaped backyard with covered patio, 
                    outdoor kitchen, and sparkling pool.
                  </p>
                </Card>

                {/* Links & Resources */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Links & Resources
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Button variant="outline" className="justify-start gap-2">
                      <ExternalLink className="h-4 w-4" />
                      3D Virtual Tour
                    </Button>
                    <Button variant="outline" className="justify-start gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Drive Folder
                    </Button>
                    <Button variant="outline" className="justify-start gap-2">
                      <ExternalLink className="h-4 w-4" />
                      MLS Listing
                    </Button>
                    <Button variant="outline" className="justify-start gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Property Website
                    </Button>
                  </div>
                </Card>
              </TabsContent>

              {/* Coordination Tab */}
              <TabsContent value="coordination" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Coordination Checklist
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-success" />
                          <span className="font-medium text-foreground">Photos</span>
                        </div>
                        <Badge variant="outline" className="bg-background">Complete</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-success" />
                          <span className="font-medium text-foreground">Staging</span>
                        </div>
                        <Badge variant="outline" className="bg-background">Complete</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-caution/10 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Clock className="h-5 w-5 text-caution" />
                          <span className="font-medium text-foreground">Marketing Materials</span>
                        </div>
                        <Badge variant="outline" className="bg-background">In Progress</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-success" />
                          <span className="font-medium text-foreground">Lockbox</span>
                        </div>
                        <Badge variant="outline" className="bg-background">Installed</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-info/10 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Calendar className="h-5 w-5 text-info" />
                          <span className="font-medium text-foreground">Video</span>
                        </div>
                        <Badge variant="outline" className="bg-background">Scheduled</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Services & Inventory
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-foreground mb-2">Services Needed</p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">Professional Staging</Badge>
                          <Badge variant="secondary">Photography</Badge>
                          <Badge variant="secondary">Drone Video</Badge>
                          <Badge variant="secondary">Virtual Tour</Badge>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground mb-2">Inventory Items</p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Sign</Badge>
                          <Badge variant="outline">Lockbox</Badge>
                          <Badge variant="outline">Brochures</Badge>
                          <Badge variant="outline">Business Cards</Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>

              {/* Marketing Tab */}
              <TabsContent value="marketing" className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Marketing Status
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-success/10 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-success mb-2" />
                      <p className="text-sm font-medium text-foreground">MLS Posted</p>
                      <p className="text-xs text-muted-foreground mt-1">Nov 15, 2024</p>
                    </div>
                    <div className="p-4 bg-success/10 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-success mb-2" />
                      <p className="text-sm font-medium text-foreground">Social Media</p>
                      <p className="text-xs text-muted-foreground mt-1">Posted on FB & IG</p>
                    </div>
                    <div className="p-4 bg-caution/10 rounded-lg">
                      <Clock className="h-5 w-5 text-caution mb-2" />
                      <p className="text-sm font-medium text-foreground">Email Campaign</p>
                      <p className="text-xs text-muted-foreground mt-1">Scheduled Dec 18</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Marketing Copy
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">
                        MLS Description
                      </p>
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm text-foreground">
                          Stunning luxury estate nestled in prestigious Oak Hills. 
                          4BR/3.5BA with open concept, gourmet kitchen, spa-like master suite...
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">
                        Social Media Caption
                      </p>
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm text-foreground">
                          🏡 NEW LISTING ALERT! Luxury living at its finest in Oak Hills. 
                          This stunning 4-bed home is a must-see! 📍 Austin, TX | 💰 $485K...
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Activity Tab */}
              <TabsContent value="activity" className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Recent Activity
                  </h3>
                  <div className="space-y-4">
                    {[
                      { action: "Listing updated", time: "2 hours ago", icon: Edit },
                      { action: "New showing scheduled", time: "5 hours ago", icon: Calendar },
                      { action: "Photos uploaded", time: "1 day ago", icon: Camera },
                      { action: "Price adjustment", time: "3 days ago", icon: DollarSign },
                      { action: "Listing created", time: "27 days ago", icon: Home },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 hover:bg-muted/50 rounded-lg transition-colors">
                        <div className="p-2 bg-muted rounded-lg">
                          <item.icon className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{item.action}</p>
                          <p className="text-xs text-muted-foreground">{item.time}</p>
                        </div>
                      </div>
                    ))}
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

export default ListingDetail;
