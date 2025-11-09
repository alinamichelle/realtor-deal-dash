import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { 
  Plus,
  Search,
  Filter,
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  Home,
  Building2
} from "lucide-react";
import { Input } from "@/components/ui/input";

const IntakeForms = () => {
  // Mock data for intake forms list
  const intakeForms = [
    {
      id: "2173",
      address: "123 Main Street #4B",
      city: "Austin, TX 78701",
      transactionType: "Listing",
      status: "in_progress",
      targetLiveDate: "Jan 22, 2025",
      created: "Jan 15, 2025",
      client: "Michael Wilson",
      agent: "John Doe",
      propertyType: "Single Family",
      listPrice: "$750,000",
      currentStep: 4,
      totalSteps: 6,
      paperworkCompleted: false
    },
    {
      id: "2174",
      address: "456 Oak Avenue",
      city: "Austin, TX 78704",
      transactionType: "Buyer",
      status: "draft",
      targetLiveDate: "Feb 01, 2025",
      created: "Jan 16, 2025",
      client: "Sarah Johnson",
      agent: "Sarah Martinez",
      propertyType: "Condo",
      listPrice: "$425,000",
      currentStep: 2,
      totalSteps: 6,
      paperworkCompleted: false
    },
    {
      id: "2175",
      address: "789 Sunset Blvd",
      city: "Austin, TX 78731",
      transactionType: "Lease",
      status: "complete",
      targetLiveDate: "Jan 18, 2025",
      created: "Jan 10, 2025",
      client: "Robert Chen",
      agent: "John Doe",
      propertyType: "Townhome",
      listPrice: "$2,800/mo",
      currentStep: 6,
      totalSteps: 6,
      paperworkCompleted: true
    },
    {
      id: "2176",
      address: "321 River Road",
      city: "Austin, TX 78703",
      transactionType: "Listing",
      status: "pending_review",
      targetLiveDate: "Jan 25, 2025",
      created: "Jan 17, 2025",
      client: "Emily Davis",
      agent: "Sarah Martinez",
      propertyType: "Single Family",
      listPrice: "$895,000",
      currentStep: 5,
      totalSteps: 6,
      paperworkCompleted: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'complete':
        return 'bg-[hsl(var(--success))] text-white';
      case 'in_progress':
        return 'bg-[hsl(var(--coral))] text-white';
      case 'draft':
        return 'bg-[hsl(var(--caution))] text-white';
      case 'pending_review':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'complete':
        return 'Complete';
      case 'in_progress':
        return 'In Progress';
      case 'draft':
        return 'Draft';
      case 'pending_review':
        return 'Pending Review';
      default:
        return status;
    }
  };

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'Listing':
        return <Home className="w-4 h-4" />;
      case 'Buyer':
        return <Building2 className="w-4 h-4" />;
      case 'Lease':
        return <FileText className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        
        <main className="flex-1 bg-gradient-to-b from-[hsl(var(--silver))] to-gray-100">
          {/* Header */}
          <header className="sticky top-0 z-10 bg-white border-b border-[hsl(var(--silver))] shadow-sm">
            <div className="max-w-[1400px] mx-auto px-8 py-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-4">
                  <h1 className="text-[28px] font-semibold text-[hsl(var(--charcoal))] leading-none">
                    Intake Forms
                  </h1>
                  <Badge variant="secondary" className="text-xs font-medium px-3 py-1">
                    {intakeForms.length} Total
                  </Badge>
                </div>
                <Button className="h-10 px-4 text-[13px] font-semibold">
                  <Plus className="w-4 h-4 mr-2" />
                  New Intake Form
                </Button>
              </div>
              
              {/* Search and Filter Bar */}
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input 
                    placeholder="Search by address, client, or transaction ID..." 
                    className="pl-10 h-10"
                  />
                </div>
                <Button variant="outline" className="h-10 px-4 text-[13px] font-semibold">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="max-w-[1400px] mx-auto px-8 py-6">
            <div className="space-y-4">
              {intakeForms.map((form) => (
                <NavLink key={form.id} to={`/intake/${form.id}`}>
                  <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-[hsl(var(--coral))]/20">
                    <div className="flex items-start justify-between gap-6">
                      {/* Left Section - Property Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="text-lg font-semibold text-[hsl(var(--charcoal))]">
                            {form.address}
                          </div>
                          <Badge className={`${getStatusColor(form.status)} px-2.5 py-0.5 text-[11px] font-medium uppercase`}>
                            {getStatusLabel(form.status)}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-600 mb-3">{form.city}</div>
                        
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2">
                            {getTransactionIcon(form.transactionType)}
                            <span className="text-xs text-gray-600">{form.transactionType}</span>
                          </div>
                          <div className="text-xs text-gray-600">
                            <span className="text-gray-400">Property Type:</span> {form.propertyType}
                          </div>
                          <div className="text-xs text-gray-600">
                            <span className="text-gray-400">List Price:</span> {form.listPrice}
                          </div>
                        </div>
                      </div>

                      {/* Middle Section - Progress */}
                      <div className="w-[200px]">
                        <div className="text-[11px] text-gray-400 mb-1.5 uppercase tracking-wide">
                          Progress
                        </div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-[hsl(var(--coral))] transition-all"
                              style={{ width: `${(form.currentStep / form.totalSteps) * 100}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-600 font-medium">
                            {form.currentStep}/{form.totalSteps}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          {form.paperworkCompleted ? (
                            <>
                              <CheckCircle2 className="w-3 h-3 text-[hsl(var(--success))]" />
                              <span className="text-xs text-[hsl(var(--success))]">Paperwork Complete</span>
                            </>
                          ) : (
                            <>
                              <Clock className="w-3 h-3 text-[hsl(var(--caution))]" />
                              <span className="text-xs text-[hsl(var(--caution))]">Paperwork Pending</span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Right Section - Details */}
                      <div className="w-[220px] space-y-2">
                        <div>
                          <div className="text-[11px] text-gray-400 uppercase tracking-wide">Client</div>
                          <div className="text-[13px] text-[hsl(var(--charcoal))] font-medium">{form.client}</div>
                        </div>
                        <div>
                          <div className="text-[11px] text-gray-400 uppercase tracking-wide">Agent</div>
                          <div className="text-[13px] text-[hsl(var(--charcoal))] font-medium">{form.agent}</div>
                        </div>
                        <div className="flex gap-4 pt-1">
                          <div>
                            <div className="text-[11px] text-gray-400 uppercase tracking-wide">Created</div>
                            <div className="text-xs text-gray-600">{form.created}</div>
                          </div>
                          <div>
                            <div className="text-[11px] text-gray-400 uppercase tracking-wide">Target Live</div>
                            <div className="text-xs text-gray-600">{form.targetLiveDate}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>

            {/* Empty State (if needed) */}
            {intakeForms.length === 0 && (
              <div className="bg-white rounded-xl p-12 text-center">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[hsl(var(--charcoal))] mb-2">
                  No Intake Forms Yet
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Create your first intake form to get started with a new transaction.
                </p>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  New Intake Form
                </Button>
              </div>
            )}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default IntakeForms;
