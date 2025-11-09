import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  FileText, 
  User, 
  Building2, 
  Calendar,
  DollarSign,
  Clock,
  CheckCircle2
} from "lucide-react";

const stages = [
  { id: 1, name: "Intake", completed: true },
  { id: 2, name: "Listing", completed: true },
  { id: 3, name: "Under Contract", completed: true },
  { id: 4, name: "Closing", completed: false },
  { id: 5, name: "Completed", completed: false },
];

export default function TransactionDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const completedStages = stages.filter(s => s.completed).length;
  const progressPercentage = (completedStages / stages.length) * 100;

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex-1 bg-background">
          {/* Header */}
          <div className="border-b border-border bg-card">
            <div className="px-8 py-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="rounded-full"
                    onClick={() => navigate('/transactions')}
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-3xl font-bold">Transaction #{id}</h1>
                      <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                        Active
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Badge variant="secondary" className="font-normal">Purchase</Badge>
                      <span>2644 Gwendolyn Lane</span>
                      <span>•</span>
                      <span>Created Sep 28, 2025 · 41 days old</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Phone className="h-4 w-4" />
                    Call Client
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Mail className="h-4 w-4" />
                    Email Client
                  </Button>
                  <Button className="gap-2 bg-primary hover:bg-primary/90">
                    Edit Transaction
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            {/* Progress Timeline */}
            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Transaction Progress</h3>
                  <span className="text-sm text-muted-foreground">{progressPercentage}% Complete</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
                <div className="flex justify-between mt-6">
                  {stages.map((stage, idx) => (
                    <div key={stage.id} className="flex flex-col items-center gap-2 relative flex-1">
                      {idx !== 0 && (
                        <div 
                          className={`absolute right-1/2 top-5 w-full h-0.5 -z-10 ${
                            stages[idx - 1].completed && stage.completed
                              ? 'bg-primary'
                              : 'bg-muted'
                          }`}
                        />
                      )}
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                          stage.completed
                            ? 'bg-primary border-primary text-primary-foreground'
                            : 'bg-background border-muted text-muted-foreground'
                        }`}
                      >
                        {stage.completed ? (
                          <CheckCircle2 className="h-5 w-5" />
                        ) : (
                          <span className="text-sm font-semibold">{stage.id}</span>
                        )}
                      </div>
                      <span className={`text-xs font-medium text-center ${
                        stage.completed ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {stage.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Transaction Details */}
                <Card className="p-6">
                  <Tabs defaultValue="info" className="w-full">
                    <TabsList className="bg-muted">
                      <TabsTrigger value="financial" className="gap-2">
                        <DollarSign className="h-4 w-4" />
                        Financial
                      </TabsTrigger>
                      <TabsTrigger value="info" className="gap-2">
                        <FileText className="h-4 w-4" />
                        Details
                      </TabsTrigger>
                      <TabsTrigger value="dates" className="gap-2">
                        <Calendar className="h-4 w-4" />
                        Dates
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="financial" className="space-y-4 mt-6">
                      <div className="space-y-3">
                        <div className="flex justify-between py-3 border-b border-border">
                          <span className="text-muted-foreground">Purchase Price</span>
                          <span className="font-semibold">—</span>
                        </div>
                        <div className="flex justify-between py-3 border-b border-border">
                          <span className="text-muted-foreground">Commission Rate</span>
                          <span className="font-semibold">—</span>
                        </div>
                        <div className="flex justify-between py-3">
                          <span className="text-muted-foreground">Estimated Commission</span>
                          <span className="font-semibold">—</span>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="info" className="space-y-4 mt-6">
                      <div className="space-y-3">
                        <div className="flex justify-between py-3 border-b border-border">
                          <span className="text-muted-foreground">Status</span>
                          <span className="font-semibold">Active</span>
                        </div>
                        <div className="flex justify-between py-3 border-b border-border">
                          <span className="text-muted-foreground">Type</span>
                          <span className="font-semibold">Purchase</span>
                        </div>
                        <div className="flex justify-between py-3">
                          <span className="text-muted-foreground">Property</span>
                          <span className="font-semibold">2644 Gwendolyn Lane</span>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="dates" className="space-y-4 mt-6">
                      <div className="space-y-3">
                        <div className="flex justify-between py-3 border-b border-border">
                          <span className="text-muted-foreground">Created Date</span>
                          <span className="font-semibold">Sep 28, 2025</span>
                        </div>
                        <div className="flex justify-between py-3 border-b border-border">
                          <span className="text-muted-foreground">Expected Close</span>
                          <span className="font-semibold">—</span>
                        </div>
                        <div className="flex justify-between py-3">
                          <span className="text-muted-foreground">Days Active</span>
                          <span className="font-semibold">41 days</span>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </Card>

                {/* Activity */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 pb-4 border-b border-border">
                      <div className="p-2 bg-muted rounded-lg mt-0.5">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div>
                        <div className="font-medium">Transaction created</div>
                        <div className="text-sm text-muted-foreground mt-1">Sep 28 at 8:54 PM</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Actions */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button className="w-full justify-start gap-3 bg-primary hover:bg-primary/90">
                      <Mail className="h-4 w-4" />
                      Email Client
                    </Button>
                    <Button className="w-full justify-start gap-3 bg-success hover:bg-success/90">
                      <Phone className="h-4 w-4" />
                      Call Client
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-3">
                      <FileText className="h-4 w-4" />
                      Generate Contract
                    </Button>
                  </div>
                </Card>

                {/* Related */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Related</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/30 transition-colors cursor-pointer">
                      <div className="p-2 rounded-lg bg-blue-100">
                        <User className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Primary Agent</div>
                        <div className="font-medium text-sm">Colin Beatt</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/30 transition-colors cursor-pointer">
                      <div className="p-2 rounded-lg bg-green-100">
                        <User className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Client</div>
                        <div className="font-medium text-sm">Rylee Whited</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/30 transition-colors cursor-pointer">
                      <div className="p-2 rounded-lg bg-purple-100">
                        <Building2 className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Property</div>
                        <div className="font-medium text-sm">2644 Gwendolyn Lane</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
