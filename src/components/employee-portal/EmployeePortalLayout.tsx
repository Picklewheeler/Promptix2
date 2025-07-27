import { ReactNode } from "react";
import { useAuth } from "@/lib/auth";
import { Navigate } from "react-router-dom";
import { EmployeePortalNav } from "./EmployeePortalNav";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";

export function EmployeePortalLayout({ children }: { children: ReactNode }) {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="hidden lg:flex flex-col w-64 border-r">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Employee Portal</h2>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          <EmployeePortalNav />
        </div>

        <div className="p-4 border-t">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{user?.fullName}</p>
              <p className="text-xs text-muted-foreground truncate">{user?.department}</p>
            </div>
          </div>
          <Button variant="ghost" className="w-full justify-start" onClick={logout}>
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-0">
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
