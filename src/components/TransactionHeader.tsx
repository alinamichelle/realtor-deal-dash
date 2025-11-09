import { ArrowLeft, Edit, FileText, Phone, Mail, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

export function TransactionHeader() {
  const navigate = useNavigate();
  return (
    <div className="border-b border-border bg-card">
      <div className="px-8 py-6">
        <div className="flex items-start justify-between mb-6">
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
                <h1 className="text-3xl font-bold text-foreground">Transaction #2173</h1>
                <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                  Active
                </Badge>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Badge variant="secondary" className="font-normal">
                  Purchase
                </Badge>
                <span className="text-sm">2644 Gwendolyn Lane</span>
                <span className="text-xs">•</span>
                <span className="text-sm">Created Sep 28, 2025 · 41 days old</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <FileText className="h-4 w-4" />
              Generate Report
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              Call Client
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Mail className="h-4 w-4" />
              Email Client
            </Button>
            <Button className="gap-2 bg-primary hover:bg-primary/90">
              <Edit className="h-4 w-4" />
              Edit Transaction
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-popover">
                <DropdownMenuItem>Update Status</DropdownMenuItem>
                <DropdownMenuItem>View Documents</DropdownMenuItem>
                <DropdownMenuItem>Generate Contract</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">Archive Transaction</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
