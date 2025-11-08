import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, Info, Calendar, FileText } from "lucide-react";

export function TransactionDetails() {
  return (
    <div className="bg-card rounded-xl border border-border shadow-sm">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">Transaction Details</h3>
      </div>

      <Tabs defaultValue="info" className="w-full">
        <div className="px-6 pt-4">
          <TabsList className="bg-muted">
            <TabsTrigger value="financial" className="gap-2">
              <DollarSign className="h-4 w-4" />
              Financial Details
            </TabsTrigger>
            <TabsTrigger value="info" className="gap-2">
              <Info className="h-4 w-4" />
              Transaction Info
            </TabsTrigger>
            <TabsTrigger value="dates" className="gap-2">
              <Calendar className="h-4 w-4" />
              Important Dates
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="financial" className="p-6">
          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b border-border">
              <span className="text-muted-foreground">Purchase Price</span>
              <span className="font-semibold text-foreground">—</span>
            </div>
            <div className="flex justify-between py-3 border-b border-border">
              <span className="text-muted-foreground">Commission Rate</span>
              <span className="font-semibold text-foreground">—</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-muted-foreground">Estimated Commission</span>
              <span className="font-semibold text-foreground">—</span>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="info" className="p-6">
          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b border-border">
              <span className="text-muted-foreground">Status</span>
              <span className="font-semibold text-foreground">active</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-muted-foreground">Type</span>
              <span className="font-semibold text-foreground">Purchase</span>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="dates" className="p-6">
          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b border-border">
              <span className="text-muted-foreground">Created Date</span>
              <span className="font-semibold text-foreground">Sep 28, 2025</span>
            </div>
            <div className="flex justify-between py-3 border-b border-border">
              <span className="text-muted-foreground">Expected Close</span>
              <span className="font-semibold text-foreground">—</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-muted-foreground">Days Active</span>
              <span className="font-semibold text-foreground">41 days</span>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="p-6 border-t border-border bg-muted/30">
        <div className="flex items-start gap-3">
          <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
          <div>
            <h4 className="font-medium text-foreground mb-1">Instructions & Notes</h4>
            <p className="text-sm text-muted-foreground">From IntakeForm #622</p>
          </div>
        </div>
      </div>
    </div>
  );
}
