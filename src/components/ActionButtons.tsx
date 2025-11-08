import { Mail, Phone, FileText, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ActionButtons() {
  return (
    <div className="bg-card rounded-xl border border-border shadow-sm p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Actions</h3>
      <div className="space-y-3">
        <Button className="w-full justify-start gap-3 bg-primary hover:bg-primary/90 h-12">
          <Mail className="h-5 w-5" />
          Email Client
        </Button>
        <Button className="w-full justify-start gap-3 bg-success hover:bg-success/90 h-12">
          <Phone className="h-5 w-5" />
          Call Client
        </Button>
        <Button 
          variant="outline" 
          className="w-full justify-start gap-3 h-12 border-accent/30 hover:bg-accent hover:text-accent-foreground"
        >
          <FileText className="h-5 w-5" />
          Generate Contract
        </Button>
        <Button variant="outline" className="w-full justify-start gap-3 h-12">
          <BarChart3 className="h-5 w-5" />
          Transaction Report
        </Button>
      </div>
    </div>
  );
}
