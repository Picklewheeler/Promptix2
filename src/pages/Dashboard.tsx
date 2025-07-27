import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, CreditCard, BarChart2, Plus, FileText } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }
  return (
    <div className="p-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="p-6">
          <h3 className="text-lg font-medium text-muted-foreground mb-2">Active Tasks</h3>
          <p className="text-3xl font-bold">2</p>
          <p className="text-sm text-muted-foreground">Tasks in progress</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-medium text-muted-foreground mb-2">Active Projects</h3>
          <p className="text-3xl font-bold">2</p>
          <p className="text-sm text-muted-foreground">Projects in progress</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-medium text-muted-foreground mb-2">Team Members</h3>
          <p className="text-3xl font-bold">4</p>
          <p className="text-sm text-muted-foreground">Active employees</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-medium text-muted-foreground mb-2">This Month</h3>
          <p className="text-3xl font-bold">1</p>
          <p className="text-sm text-muted-foreground">Tasks completed</p>
        </Card>
      </div>

      {/* Active Tasks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Active Tasks</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
              <div>
                <h4 className="font-medium">Update Server Infrastructure</h4>
                <p className="text-sm text-muted-foreground">Due: 2024-01-28</p>
              </div>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">in-progress</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
              <div>
                <h4 className="font-medium">Review Security Protocols</h4>
                <p className="text-sm text-muted-foreground">Due: 2024-01-29</p>
              </div>
              <span className="px-3 py-1 bg-orange-500/10 text-orange-500 rounded-full text-sm">pending</span>
            </div>
          </div>
        </Card>

        {/* Active Projects */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Active Projects</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
              <div>
                <h4 className="font-medium">Custom Phone Cases Batch</h4>
                <p className="text-sm text-muted-foreground">Client: TechCorp</p>
              </div>
              <span className="text-sm font-medium">$2500</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
              <div>
                <h4 className="font-medium">Architectural Model Series</h4>
                <p className="text-sm text-muted-foreground">Client: ArchStudio</p>
              </div>
              <span className="text-sm font-medium">$8000</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
