import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
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
  CheckCircle2,
  Send,
  MessageSquare,
  CheckSquare,
  Plus,
  Users,
  Briefcase,
  Megaphone,
  ChevronDown
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const stages = [
  { id: 1, name: "Intake", completed: true },
  { id: 2, name: "Listing", completed: true },
  { id: 3, name: "Under Contract", completed: true },
  { id: 4, name: "Closing", completed: false },
  { id: 5, name: "Completed", completed: false },
];

const mockComments = [
  {
    id: 1,
    author: "Colin Beatt",
    initials: "CB",
    message: "Just spoke with the client - they're ready to move forward with the inspection next week.",
    timestamp: "2 hours ago",
    date: "Nov 8, 2025 at 3:42 PM"
  },
  {
    id: 2,
    author: "Sarah Johnson",
    initials: "SJ",
    message: "Great! I'll coordinate with the inspection company. Should we schedule for Tuesday or Wednesday?",
    timestamp: "1 hour ago",
    date: "Nov 8, 2025 at 4:15 PM"
  },
  {
    id: 3,
    author: "Colin Beatt",
    initials: "CB",
    message: "Wednesday works better for them. Let's aim for 10 AM.",
    timestamp: "45 min ago",
    date: "Nov 8, 2025 at 4:30 PM"
  }
];

const mockTasks = [
  {
    id: 1,
    title: "Schedule property inspection",
    assignedTo: "Sarah Johnson",
    assignedToInitials: "SJ",
    dueDate: "Nov 13, 2025",
    completed: false,
    priority: "high"
  },
  {
    id: 2,
    title: "Review and sign purchase agreement",
    assignedTo: "Rylee Whited",
    assignedToInitials: "RW",
    dueDate: "Nov 10, 2025",
    completed: true,
    priority: "high"
  },
  {
    id: 3,
    title: "Create social media listing posts",
    assignedTo: "Marketing Team",
    assignedToInitials: "MT",
    dueDate: "Nov 15, 2025",
    completed: false,
    priority: "medium"
  }
];

const transactionTeam = [
  { name: "Colin Beatt", role: "Primary Agent", initials: "CB", color: "bg-blue-100 text-blue-600" },
  { name: "Anthony Gibson", role: "Secondary Agent", initials: "AG", color: "bg-purple-100 text-purple-600" },
  { name: "Sarah Johnson", role: "CTC", initials: "SJ", color: "bg-green-100 text-green-600" },
  { name: "Mike Roberts", role: "Listing Coordinator", initials: "MR", color: "bg-amber-100 text-amber-600" }
];

const clients = [
  { name: "Rylee Whited", role: "Primary Client", initials: "RW", color: "bg-pink-100 text-pink-600" },
  { name: "Jordan Whited", role: "Secondary Client", initials: "JW", color: "bg-rose-100 text-rose-600" }
];

const marketingTeam = [
  { name: "Marketing Team", role: "Marketing", initials: "MT", color: "bg-orange-100 text-orange-600" }
];

export default function TransactionDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const completedStages = stages.filter(s => s.completed).length;
  const progressPercentage = (completedStages / stages.length) * 100;
  const [newComment, setNewComment] = useState("");
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskAssignee, setNewTaskAssignee] = useState("");
  const [newTaskDueDate, setNewTaskDueDate] = useState("");
  const [newTaskPriority, setNewTaskPriority] = useState("medium");
  const [taskComments, setTaskComments] = useState<{ [key: number]: string }>({});
  const [showTaskComments, setShowTaskComments] = useState<{ [key: number]: boolean }>({});

  const allTeamMembers = [...transactionTeam, ...clients, ...marketingTeam];

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
                  <Button className="gap-2 bg-primary hover:bg-primary/90">
                    Edit Transaction
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            {/* Progress Timeline - Compact */}
            <Card className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold">Transaction Progress</h3>
                <span className="text-xs text-muted-foreground">{progressPercentage}% Complete</span>
              </div>
              <Progress value={progressPercentage} className="h-1.5 mb-4" />
              <div className="flex justify-between">
                {stages.map((stage, idx) => (
                  <div key={stage.id} className="flex flex-col items-center gap-1.5 relative flex-1">
                    {idx !== 0 && (
                      <div 
                        className={`absolute right-1/2 top-3.5 w-full h-0.5 -z-10 ${
                          stages[idx - 1].completed && stage.completed ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                    )}
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all ${
                        stage.completed
                          ? 'bg-primary border-primary text-primary-foreground'
                          : 'bg-background border-muted text-muted-foreground'
                      }`}
                    >
                      {stage.completed ? (
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      ) : (
                        <span className="text-[10px] font-semibold">{stage.id}</span>
                      )}
                    </div>
                    <span className={`text-[10px] font-medium text-center ${
                      stage.completed ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {stage.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Tasks, Comments & Activity - Tabbed */}
                <Card className="p-6">
                  <Tabs defaultValue="tasks" className="w-full">
                    <TabsList className="bg-muted w-full">
                      <TabsTrigger value="tasks" className="flex-1 gap-2 text-xs">
                        <CheckSquare className="h-3.5 w-3.5" />
                        Tasks
                        <Badge variant="secondary" className="ml-1 text-[10px]">{mockTasks.length}</Badge>
                      </TabsTrigger>
                      <TabsTrigger value="comments" className="flex-1 gap-2 text-xs">
                        <MessageSquare className="h-3.5 w-3.5" />
                        Comments
                        <Badge variant="secondary" className="ml-1 text-[10px]">{mockComments.length}</Badge>
                      </TabsTrigger>
                      <TabsTrigger value="activity" className="flex-1 gap-2 text-xs">
                        <Clock className="h-3.5 w-3.5" />
                        Activity
                      </TabsTrigger>
                    </TabsList>

                    {/* Tasks Tab */}
                    <TabsContent value="tasks" className="mt-4">
                      <div className="flex items-center justify-end mb-3">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="gap-2 h-8 text-xs"
                          onClick={() => setShowTaskForm(!showTaskForm)}
                        >
                          <Plus className="h-3 w-3" />
                          Add Task
                        </Button>
                      </div>

                      {showTaskForm && (
                        <Card className="p-3 mb-3 bg-muted/30">
                          <div className="space-y-3">
                            <div>
                              <Label htmlFor="taskTitle" className="text-xs font-medium">Task Title</Label>
                              <Input 
                                id="taskTitle"
                                placeholder="Enter task title..."
                                value={newTaskTitle}
                                onChange={(e) => setNewTaskTitle(e.target.value)}
                                className="mt-1 h-8 text-xs"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <div>
                                <Label htmlFor="assignee" className="text-xs font-medium">Assign To</Label>
                                <Select value={newTaskAssignee} onValueChange={setNewTaskAssignee}>
                                  <SelectTrigger id="assignee" className="mt-1 h-8 text-xs">
                                    <SelectValue placeholder="Select person" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {allTeamMembers.map((member) => (
                                      <SelectItem key={member.name} value={member.name} className="text-xs">
                                        {member.name} - {member.role}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                              <div>
                                <Label htmlFor="dueDate" className="text-xs font-medium">Due Date</Label>
                                <Input 
                                  id="dueDate"
                                  type="date"
                                  value={newTaskDueDate}
                                  onChange={(e) => setNewTaskDueDate(e.target.value)}
                                  className="mt-1 h-8 text-xs"
                                />
                              </div>
                            </div>
                            <div>
                              <Label htmlFor="priority" className="text-xs font-medium">Priority</Label>
                              <Select value={newTaskPriority} onValueChange={setNewTaskPriority}>
                                <SelectTrigger id="priority" className="mt-1 h-8 text-xs">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="high" className="text-xs">High</SelectItem>
                                  <SelectItem value="medium" className="text-xs">Medium</SelectItem>
                                  <SelectItem value="low" className="text-xs">Low</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="flex gap-2">
                              <Button 
                                size="sm"
                                className="flex-1 h-7 text-xs"
                                disabled={!newTaskTitle.trim() || !newTaskAssignee}
                              >
                                Create Task
                              </Button>
                              <Button 
                                variant="outline"
                                size="sm"
                                className="h-7 text-xs"
                                onClick={() => {
                                  setShowTaskForm(false);
                                  setNewTaskTitle("");
                                  setNewTaskAssignee("");
                                  setNewTaskDueDate("");
                                  setNewTaskPriority("medium");
                                }}
                              >
                                Cancel
                              </Button>
                            </div>
                          </div>
                        </Card>
                      )}

                      <div className="space-y-2">
                        {mockTasks.map((task) => (
                          <div 
                            key={task.id}
                            className={`rounded-lg border transition-colors ${
                              task.completed ? 'bg-muted/30 border-border' : 'bg-background border-border'
                            }`}
                          >
                            <div className="flex items-start gap-2 p-2">
                              <Checkbox 
                                checked={task.completed}
                                className="mt-0.5"
                              />
                              <div className="flex-1 space-y-1">
                                <div className="flex items-start justify-between gap-2">
                                  <p className={`text-xs font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                                    {task.title}
                                  </p>
                                  <Badge 
                                    variant={task.priority === 'high' ? 'destructive' : task.priority === 'medium' ? 'default' : 'secondary'}
                                    className="text-[10px] shrink-0 h-4"
                                  >
                                    {task.priority}
                                  </Badge>
                                </div>
                                <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <Avatar className="h-4 w-4">
                                      <AvatarFallback className="bg-primary/10 text-primary text-[8px]">
                                        {task.assignedToInitials}
                                      </AvatarFallback>
                                    </Avatar>
                                    <span>{task.assignedTo}</span>
                                  </div>
                                  <span>•</span>
                                  <span>Due {task.dueDate}</span>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-auto p-0 ml-auto text-[10px] hover:text-primary"
                                    onClick={() => setShowTaskComments(prev => ({ ...prev, [task.id]: !prev[task.id] }))}
                                  >
                                    <MessageSquare className="h-2.5 w-2.5 mr-0.5" />
                                    Comment
                                  </Button>
                                </div>
                              </div>
                            </div>
                            
                            {showTaskComments[task.id] && (
                              <div className="border-t border-border p-2 bg-muted/20">
                                <Textarea 
                                  placeholder="Add a comment on this task..."
                                  value={taskComments[task.id] || ""}
                                  onChange={(e) => setTaskComments(prev => ({ ...prev, [task.id]: e.target.value }))}
                                  className="min-h-[50px] resize-none text-xs mb-2"
                                />
                                <div className="flex justify-end">
                                  <Button 
                                    size="sm"
                                    className="gap-1 h-6 text-[10px]"
                                    disabled={!taskComments[task.id]?.trim()}
                                  >
                                    <Send className="h-2.5 w-2.5" />
                                    Post
                                  </Button>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    {/* Comments Tab */}
                    <TabsContent value="comments" className="mt-4">
                      <div className="space-y-3 mb-4">
                        {mockComments.map((comment) => (
                          <div key={comment.id} className="flex gap-2 pb-3 border-b border-border last:border-0">
                            <Avatar className="h-7 w-7 mt-0.5">
                              <AvatarFallback className="bg-primary/10 text-primary text-[10px] font-semibold">
                                {comment.initials}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-xs">{comment.author}</span>
                                <span className="text-[10px] text-muted-foreground">{comment.timestamp}</span>
                              </div>
                              <p className="text-xs text-foreground">{comment.message}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-2">
                        <Textarea 
                          placeholder="Add a comment to this transaction..."
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          className="min-h-[60px] resize-none text-xs"
                        />
                        <div className="flex justify-end">
                          <Button 
                            size="sm"
                            className="gap-1 h-7 text-xs"
                            disabled={!newComment.trim()}
                          >
                            <Send className="h-3 w-3" />
                            Post Comment
                          </Button>
                        </div>
                      </div>
                    </TabsContent>

                    {/* Activity Tab */}
                    <TabsContent value="activity" className="mt-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-2 pb-3 border-b border-border">
                          <div className="p-1.5 bg-muted rounded-lg mt-0.5">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                          </div>
                          <div>
                            <div className="font-medium text-xs">Transaction created</div>
                            <div className="text-[10px] text-muted-foreground mt-0.5">Sep 28 at 8:54 PM</div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Transaction Details */}
                <Card className="p-4">
                  <Tabs defaultValue="info" className="w-full">
                    <TabsList className="bg-muted h-9">
                      <TabsTrigger value="financial" className="gap-2 text-xs">
                        <DollarSign className="h-3.5 w-3.5" />
                        Financial
                      </TabsTrigger>
                      <TabsTrigger value="info" className="gap-2 text-xs">
                        <FileText className="h-3.5 w-3.5" />
                        Details
                      </TabsTrigger>
                      <TabsTrigger value="dates" className="gap-2 text-xs">
                        <Calendar className="h-3.5 w-3.5" />
                        Dates
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="financial" className="mt-3">
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b border-border text-sm">
                          <span className="text-muted-foreground">Purchase Price</span>
                          <span className="font-semibold">—</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border text-sm">
                          <span className="text-muted-foreground">Commission Rate</span>
                          <span className="font-semibold">—</span>
                        </div>
                        <div className="flex justify-between py-2 text-sm">
                          <span className="text-muted-foreground">Estimated Commission</span>
                          <span className="font-semibold">—</span>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="info" className="mt-3">
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b border-border text-sm">
                          <span className="text-muted-foreground">Status</span>
                          <span className="font-semibold">Active</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border text-sm">
                          <span className="text-muted-foreground">Type</span>
                          <span className="font-semibold">Purchase</span>
                        </div>
                        <div className="flex justify-between py-2 text-sm">
                          <span className="text-muted-foreground">Property</span>
                          <span className="font-semibold">2644 Gwendolyn Lane</span>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="dates" className="mt-3">
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b border-border text-sm">
                          <span className="text-muted-foreground">Created Date</span>
                          <span className="font-semibold">Sep 28, 2025</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border text-sm">
                          <span className="text-muted-foreground">Expected Close</span>
                          <span className="font-semibold">—</span>
                        </div>
                        <div className="flex justify-between py-2 text-sm">
                          <span className="text-muted-foreground">Days Active</span>
                          <span className="font-semibold">41 days</span>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </Card>

                {/* Transaction Parties */}
                <Card className="p-6">
                  {/* Transaction Team */}
                  <Collapsible defaultOpen={true}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full group mb-3">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Transaction Team</h4>
                      </div>
                      <ChevronDown className="h-3 w-3 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="space-y-2 mb-6">
                        {transactionTeam.map((member) => (
                          <div 
                            key={member.name}
                            className="flex items-center gap-3 p-2.5 rounded-lg border border-border hover:border-primary/30 transition-colors cursor-pointer"
                          >
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className={`${member.color} text-xs font-semibold`}>
                                {member.initials}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-sm">{member.name}</div>
                              <div className="text-xs text-muted-foreground">{member.role}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Clients */}
                  <Collapsible defaultOpen={false}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full group mb-3">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Clients</h4>
                      </div>
                      <ChevronDown className="h-3 w-3 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="space-y-2 mb-6">
                        {clients.map((client) => (
                          <div 
                            key={client.name}
                            className="flex items-center gap-3 p-2.5 rounded-lg border border-border hover:border-primary/30 transition-colors cursor-pointer"
                          >
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className={`${client.color} text-xs font-semibold`}>
                                {client.initials}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-sm">{client.name}</div>
                              <div className="text-xs text-muted-foreground">{client.role}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Marketing */}
                  <Collapsible defaultOpen={false}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full group mb-3">
                      <div className="flex items-center gap-2">
                        <Megaphone className="h-4 w-4 text-muted-foreground" />
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Marketing</h4>
                      </div>
                      <ChevronDown className="h-3 w-3 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="space-y-2 mb-6">
                        {marketingTeam.map((member) => (
                          <div 
                            key={member.name}
                            className="flex items-center gap-3 p-2.5 rounded-lg border border-border hover:border-primary/30 transition-colors cursor-pointer"
                          >
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className={`${member.color} text-xs font-semibold`}>
                                {member.initials}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-sm">{member.name}</div>
                              <div className="text-xs text-muted-foreground">{member.role}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Property */}
                  <Collapsible defaultOpen={false}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full group mb-3">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Property</h4>
                      </div>
                      <ChevronDown className="h-3 w-3 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="flex items-center gap-3 p-2.5 rounded-lg border border-border hover:border-primary/30 transition-colors cursor-pointer">
                        <div className="p-2 rounded-lg bg-indigo-100">
                          <Building2 className="h-4 w-4 text-indigo-600" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">2644 Gwendolyn Lane</div>
                          <div className="text-xs text-muted-foreground">View Property</div>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
