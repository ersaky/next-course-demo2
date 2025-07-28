"use client";
import { useTheme } from "@/providers/theme";

export default function DashboardPage() {
  const theme = useTheme();
  return (
    <div>
      <h1 style={{ color: theme.colors.primary }}>Dashboard</h1>
    </div>
  );
}
