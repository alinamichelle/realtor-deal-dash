import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  FileText, 
  Flag,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

const Index = () => {
  // Enhanced transaction data - Steven's complete information architecture
  const transaction = {
    id: "2173",
    address: "123 Main Street",
    unit: "#4B",
    city: "Austin, TX 78701",
    status: "In Progress",
    type: "Listing",
    occupancy: "Vacant",
    dates: {
      created: "Jan 15, 2025",
      targetLive: "Jan 22, 2025",
      signDate: "Jan 20, 2025",
      contractDate: "Feb 01, 2025",
      closeDate: "Mar 15, 2025"
    },
    pricing: {
      listPrice: "$750,000",
      contractPrice: "$740,000"
    },
    daysToLaunch: 7,
    property: {
      beds: 3,
      baths: 2.5,
      sqft: 2450,
      yearBuilt: 2018,
      type: "Single Family",
      lotSize: "0.25 acres",
      mlsNumber: "ATX-2024-9876"
    },
    features: [
      { name: "Pool", active: true },
      { name: "Fireplace", active: true },
      { name: "Primary Main", active: false },
      { name: "Updates", active: true },
      { name: "HOA", active: true },
      { name: "Green Energy", active: false },
      { name: "Security", active: true },
      { name: "Laundry", active: true }
    ],
    details: {
      schoolDistrict: "Austin ISD - Excellent",
      mainFloorBeds: "2 Bedrooms",
      flooring: "Hardwood & Tile",
      roof: "Composite Shingle",
      countertops: "Quartz",
      exterior: "Brick & Stone",
      locationStrength: "Premium Location",
      visualAppeal: "Excellent Curb Appeal"
    },
    instructions: {
      showing: "Call listing agent 30 minutes before showing. Lockbox on front door. Please remove shoes. Do not let pets out.",
      special: "Sellers prefer morning showings. Kitchen renovation completed Dec 2024. All appliances convey.",
      appliances: "Refrigerator, dishwasher, microwave, washer, dryer, all staying with property",
      updates: "New HVAC (2023), Kitchen remodel (2024), Master bath renovation (2024), New roof (2022)",
      hoaIncludes: "Landscaping, community pool, gym access, gated security"
    },
    documents: [
      { name: "Listing Agreement", status: "complete" },
      { name: "Seller Disclosure", status: "complete" },
      { name: "Wire Fraud Warning", status: "pending" },
      { name: "IABS", status: "complete" }
    ],
    parties: [
      {
        name: "John Doe",
        initials: "JD",
        role: "Primary Agent",
        color: "bg-info",
        email: "john.doe@realtyhaus.com",
        phone: "(512) 555-0123"
      },
      {
        name: "Sarah Martinez",
        initials: "SM",
        role: "Secondary Agent",
        color: "bg-purple-500",
        email: "sarah.m@realtyhaus.com",
        phone: "(512) 555-0456"
      },
      {
        name: "Michael Wilson",
        initials: "MW",
        role: "Seller",
        color: "bg-success",
        email: "michael.wilson@email.com",
        phone: "(512) 555-7890"
      },
      {
        name: "Jennifer Wilson",
        initials: "JW",
        role: "Co-Seller",
        color: "bg-cyan-500",
        email: "jennifer.wilson@email.com",
        phone: "(512) 555-7891",
        relationship: "Spouse"
      }
    ],
    financial: {
      listingCommission: "3.0%",
      buyerCommission: "2.5%",
      clientSource: "Referral",
      gunnReferral: "Yes - $2,500",
      paperworkStatus: "Complete"
    },
    services: [
      "Photography",
      "Staging",
      "3D Tour",
      "Floor Plans"
    ],
    servicesNote: "Prefer morning photo shoot, staging team has key",
    inventory: [
      "Lockbox",
      "Yard Sign",
      "QR Code",
      "Brochures"
    ],
    targetMarket: {
      buyerTypes: ["First-Time Buyers", "Young Families", "Move-Up Buyers"],
      opportunityTypes: ["Great Schools", "Pool Home", "Recent Updates"]
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        
        <main className="flex-1 bg-gradient-to-b from-[hsl(var(--silver))] to-gray-100">
          {/* Enhanced Header - Rauno: All critical info at a glance */}
          <header className="sticky top-0 z-10 bg-white border-b border-[hsl(var(--silver))] shadow-sm">
            <div className="max-w-[1400px] mx-auto px-8 py-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-5">
                  <h1 className="text-[28px] font-semibold text-[hsl(var(--charcoal))] leading-none">
                    {transaction.address}
                  </h1>
                  <span className="border border-blue-200 bg-blue-50/50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                    {transaction.type}
                  </span>
                </div>
                <span className="border border-[hsl(var(--coral))]/30 bg-[hsl(var(--coral))] text-white px-4 py-1.5 rounded-full text-[13px] font-medium">
                  {transaction.status}
                </span>
              </div>
              
              {/* Enhanced Timeline - Paco: Clean, minimal metrics bar */}
              <div className="border border-gray-200 rounded-lg px-4 py-3 flex justify-between items-center">
                <div className="flex gap-8">
                  <div>
                    <div className="text-[11px] text-gray-500 mb-0.5 uppercase tracking-wide">Created</div>
                    <div className="text-[13px] text-[hsl(var(--charcoal))] font-medium">{transaction.dates.created}</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 mb-0.5 uppercase tracking-wide">Target Live</div>
                    <div className="text-[13px] text-[hsl(var(--charcoal))] font-medium">{transaction.dates.targetLive}</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 mb-0.5 uppercase tracking-wide">List Price</div>
                    <div className="text-[13px] text-[hsl(var(--charcoal))] font-medium">{transaction.pricing.listPrice}</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 mb-0.5 uppercase tracking-wide">Contract Price</div>
                    <div className="text-[13px] text-[hsl(var(--charcoal))] font-medium">{transaction.pricing.contractPrice}</div>
                  </div>
                </div>
                <div className="border border-[hsl(var(--coral))]/30 bg-[hsl(var(--coral))]/5 text-[hsl(var(--coral))] px-3 py-1 rounded-full text-xs font-medium">
                  {transaction.daysToLaunch} days to launch
                </div>
              </div>
            </div>
          </header>

          {/* Content - Steven: Smart hierarchy, complete information */}
          <div className="max-w-[1400px] mx-auto px-8 py-6">
            <div className="flex gap-6">
              
              {/* Left Column - Comprehensive property details */}
              <div className="flex-1 space-y-5">
                
                {/* Property Details - Emil: Polished, well-organized */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
                    Property Details
                  </h2>
                  
                  {/* Address with Occupancy */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="text-xl font-semibold text-[hsl(var(--charcoal))]">
                        {transaction.address}
                        <span className="text-gray-500 font-normal"> {transaction.unit}</span>
                      </div>
                      <span className="border border-green-200 bg-green-50/50 text-green-700 px-2.5 py-0.5 rounded-lg text-[11px] font-medium uppercase">
                        {transaction.occupancy}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">{transaction.city}</div>
                  </div>
                  
                  {/* 4-Column Specs Grid - Paco: Minimal borders, no heavy backgrounds */}
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                      <div className="text-2xl font-semibold text-[hsl(var(--charcoal))]">{transaction.property.beds}</div>
                      <div className="text-[11px] text-gray-500 uppercase tracking-wide">Beds</div>
                    </div>
                    <div className="text-center p-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                      <div className="text-2xl font-semibold text-[hsl(var(--charcoal))]">{transaction.property.baths}</div>
                      <div className="text-[11px] text-gray-500 uppercase tracking-wide">Baths</div>
                    </div>
                    <div className="text-center p-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                      <div className="text-2xl font-semibold text-[hsl(var(--charcoal))]">{transaction.property.sqft.toLocaleString()}</div>
                      <div className="text-[11px] text-gray-500 uppercase tracking-wide">Sq Ft</div>
                    </div>
                    <div className="text-center p-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                      <div className="text-2xl font-semibold text-[hsl(var(--charcoal))]">{transaction.property.yearBuilt}</div>
                      <div className="text-[11px] text-gray-500 uppercase tracking-wide">Built</div>
                    </div>
                  </div>
                  
                  {/* Features Grid - Paco: Minimal, only show active with subtle styling */}
                  <div className="mb-6">
                    <h3 className="text-xs font-semibold text-gray-600 uppercase mb-3">Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {transaction.features.filter(f => f.active).map((feature, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-md hover:border-gray-300 transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--success))]" />
                          <span className="text-xs text-[hsl(var(--charcoal))]">
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Property Details */}
                  <div className="grid grid-cols-3 gap-5 mb-6">
                    <div>
                      <div className="text-[11px] text-gray-400 mb-1 uppercase tracking-wide">Property Type</div>
                      <div className="text-[13px] text-[hsl(var(--charcoal))]">{transaction.property.type}</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-gray-400 mb-1 uppercase tracking-wide">School District</div>
                      <div className="text-[13px] text-[hsl(var(--charcoal))]">{transaction.details.schoolDistrict}</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-gray-400 mb-1 uppercase tracking-wide">Main Floor Beds</div>
                      <div className="text-[13px] text-[hsl(var(--charcoal))]">{transaction.details.mainFloorBeds}</div>
                    </div>
                  </div>

                  {/* Materials Grid */}
                  <div className="grid grid-cols-2 gap-5 mb-6">
                    <div>
                      <div className="text-[11px] text-gray-400 mb-1 uppercase tracking-wide">Flooring</div>
                      <div className="text-[13px] text-[hsl(var(--charcoal))]">{transaction.details.flooring}</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-gray-400 mb-1 uppercase tracking-wide">Roof</div>
                      <div className="text-[13px] text-[hsl(var(--charcoal))]">{transaction.details.roof}</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-gray-400 mb-1 uppercase tracking-wide">Countertops</div>
                      <div className="text-[13px] text-[hsl(var(--charcoal))]">{transaction.details.countertops}</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-gray-400 mb-1 uppercase tracking-wide">Exterior</div>
                      <div className="text-[13px] text-[hsl(var(--charcoal))]">{transaction.details.exterior}</div>
                    </div>
                  </div>

                  {/* Property Ratings */}
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <div className="text-[11px] text-gray-400 mb-1 uppercase tracking-wide">Location Strength</div>
                      <div className="text-[13px] text-[hsl(var(--charcoal))]">{transaction.details.locationStrength}</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-gray-400 mb-1 uppercase tracking-wide">Visual Appeal</div>
                      <div className="text-[13px] text-[hsl(var(--charcoal))]">{transaction.details.visualAppeal}</div>
                    </div>
                  </div>
                </div>

                {/* Instructions & Additional Info */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
                    Instructions & Additional Info
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-[11px] text-gray-400 mb-1.5 uppercase tracking-wide">Showing Instructions</div>
                      <div className="text-[13px] text-[hsl(var(--charcoal))] leading-relaxed">
                        {transaction.instructions.showing}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-[11px] text-gray-400 mb-1.5 uppercase tracking-wide">Special Instructions</div>
                      <div className="text-[13px] text-[hsl(var(--charcoal))] leading-relaxed">
                        {transaction.instructions.special}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-[11px] text-gray-400 mb-1.5 uppercase tracking-wide">Appliances Conveying</div>
                      <div className="text-[13px] text-[hsl(var(--charcoal))] leading-relaxed">
                        {transaction.instructions.appliances}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-[11px] text-gray-400 mb-1.5 uppercase tracking-wide">Recent Updates</div>
                      <div className="text-[13px] text-[hsl(var(--charcoal))] leading-relaxed">
                        {transaction.instructions.updates}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-[11px] text-gray-400 mb-1.5 uppercase tracking-wide">HOA Includes</div>
                      <div className="text-[13px] text-[hsl(var(--charcoal))] leading-relaxed">
                        {transaction.instructions.hoaIncludes}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Documents Status */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
                    Documents
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {transaction.documents.map((doc, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          doc.status === 'complete' 
                            ? 'bg-[hsl(var(--success))]' 
                            : 'bg-[hsl(var(--caution))]'
                        }`}>
                          {doc.status === 'complete' ? (
                            <CheckCircle2 className="w-3 h-3 text-white" />
                          ) : (
                            <AlertCircle className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <span className="text-[13px] text-[hsl(var(--charcoal))]">{doc.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Transaction context */}
              <div className="w-[400px] space-y-5">
                
                {/* Transaction Parties */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
                    Transaction Parties
                  </h2>
                  
                  <div className="space-y-4">
                    {transaction.parties.map((party, idx) => (
                      <div 
                        key={idx}
                        className={`flex items-start gap-3 ${
                          idx < transaction.parties.length - 1 ? 'pb-4 border-b border-gray-100' : ''
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-full ${party.color} flex items-center justify-center text-white text-sm font-semibold flex-shrink-0`}>
                          {party.initials}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="text-sm font-semibold text-[hsl(var(--charcoal))]">{party.name}</div>
                            <span className="border border-blue-200 bg-blue-50/30 text-blue-700 px-2 py-0.5 rounded text-[10px] font-medium uppercase">
                              {party.role}
                            </span>
                          </div>
                          <div className="text-xs text-gray-600">{party.email}</div>
                          <div className="text-xs text-gray-600">{party.phone}</div>
                          {party.relationship && (
                            <div className="text-[11px] text-gray-400 mt-1">
                              Relationship: {party.relationship}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Transaction Details */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
                    Transaction Details
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-[11px] text-gray-400 mb-1 uppercase tracking-wide">Listing Commission</div>
                      <div className="text-[13px] font-medium text-[hsl(var(--charcoal))]">{transaction.financial.listingCommission}</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-gray-400 mb-1 uppercase tracking-wide">Buyer Commission</div>
                      <div className="text-[13px] font-medium text-[hsl(var(--charcoal))]">{transaction.financial.buyerCommission}</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-gray-400 mb-1 uppercase tracking-wide">Sign Date</div>
                      <div className="text-[13px] font-medium text-[hsl(var(--charcoal))]">{transaction.dates.signDate}</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-gray-400 mb-1 uppercase tracking-wide">Close Date</div>
                      <div className="text-[13px] font-medium text-[hsl(var(--charcoal))]">{transaction.dates.closeDate}</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-gray-400 mb-1 uppercase tracking-wide">Contract Date</div>
                      <div className="text-[13px] font-medium text-[hsl(var(--charcoal))]">{transaction.dates.contractDate}</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-gray-400 mb-1 uppercase tracking-wide">Client Source</div>
                      <div className="text-[13px] font-medium text-[hsl(var(--charcoal))]">{transaction.financial.clientSource}</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <div className="text-[11px] text-gray-400 mb-1 uppercase tracking-wide">Gunn Referral</div>
                        <div className="text-[13px] font-medium text-[hsl(var(--charcoal))]">{transaction.financial.gunnReferral}</div>
                      </div>
                      <div>
                        <div className="text-[11px] text-gray-400 mb-1 uppercase tracking-wide">Paperwork Status</div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-[hsl(var(--success))]" />
                          <span className="text-[13px] font-medium text-[hsl(var(--charcoal))]">{transaction.financial.paperworkStatus}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services & Inventory */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
                    Services & Inventory
                  </h2>
                  
                  <div className="mb-5">
                    <div className="text-[11px] text-gray-400 mb-2 uppercase tracking-wide">Services Needed</div>
                    <div className="flex flex-wrap gap-1.5">
                      {transaction.services.map((service, idx) => (
                        <span key={idx} className="border border-blue-200 bg-blue-50/30 text-blue-700 px-2.5 py-1 rounded-md text-xs">
                          {service}
                        </span>
                      ))}
                    </div>
                    <div className="text-[11px] text-gray-600 mt-2 italic">
                      {transaction.servicesNote}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-[11px] text-gray-400 mb-2 uppercase tracking-wide">Inventory Needed</div>
                    <div className="flex flex-wrap gap-1.5">
                      {transaction.inventory.map((item, idx) => (
                        <span key={idx} className="border border-green-200 bg-green-50/30 text-green-700 px-2.5 py-1 rounded-md text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Target Market */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
                    Target Market
                  </h2>
                  
                  <div className="mb-4">
                    <div className="text-[11px] text-gray-400 mb-2 uppercase tracking-wide">Buyer Types</div>
                    <div className="flex flex-wrap gap-1.5">
                      {transaction.targetMarket.buyerTypes.map((type, idx) => (
                        <span key={idx} className="border border-amber-200 bg-amber-50/30 text-amber-700 px-2.5 py-1 rounded-md text-xs">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-[11px] text-gray-400 mb-2 uppercase tracking-wide">Opportunity Types</div>
                    <div className="flex flex-wrap gap-1.5">
                      {transaction.targetMarket.opportunityTypes.map((type, idx) => (
                        <span key={idx} className="border border-pink-200 bg-pink-50/30 text-pink-700 px-2.5 py-1 rounded-md text-xs">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="space-y-2">
                    <Button className="w-full justify-start h-11 text-[13px] font-semibold" variant="default">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Client
                    </Button>
                    <Button className="w-full justify-start h-11 text-[13px] font-semibold" variant="outline">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Client
                    </Button>
                    <Button className="w-full justify-start h-11 text-[13px] font-semibold" variant="outline">
                      <FileText className="w-4 h-4 mr-2" />
                      Generate Contract
                    </Button>
                    <Button className="w-full justify-start h-11 text-[13px] font-semibold" variant="outline">
                      <Flag className="w-4 h-4 mr-2" />
                      View Reports
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-8 py-4 px-8 bg-white border-t border-[hsl(var(--silver))]">
            <div className="max-w-[1400px] mx-auto flex justify-between items-center">
              <div className="flex gap-6 text-xs text-gray-500">
                <span>Created: 09/01/2024 at 10:45am</span>
                <span>Last Modified: 11/08/2024</span>
              </div>
              <Button variant="outline" size="sm" className="text-[13px] font-semibold">
                Back to Transactions
              </Button>
            </div>
          </footer>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
