import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  CheckSquare,
  DollarSign,
  FileText,
  Users,
  Settings,
} from "lucide-react";

const navItems = [
  {
    title: "Dashboard",
    href: "/employee-portal",
    icon: LayoutDashboard,
  },
  {
    title: "Tasks",
    href: "/employee-portal/tasks",
    icon: CheckSquare,
  },
  {
    title: "Income",
    href: "/employee-portal/income",
    icon: DollarSign,
  },
  {
    title: "Requests",
    href: "/employee-portal/requests",
    icon: FileText,
  },
  {
    title: "Departments",
    href: "/employee-portal/departments",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/employee-portal/settings",
    icon: Settings,
  },
];

export function EmployeePortalNav() {
  return (
    <nav className="space-y-1">
      {navItems.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          className={({ isActive }) =>
            cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            )
          }
        >
          <item.icon className="h-4 w-4" />
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
}
