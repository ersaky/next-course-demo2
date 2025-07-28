import "@/app/globals.css";
import ThemeProvider from "@/providers/theme";
export const metadata = {
  title: {
    template: "%s - BTK Akademi",
    default: "Auth | Next.js ile Web Geliştirme",
  },
  description: "BTK Akademi Next.js ile Web Geliştirme eğitimi",
};

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}) {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return <div>{login}</div>;
  }
  return (
    <ThemeProvider>
      <div className="font-sans">
        {children}
        <div className="grid grid-cols-3 gap-4 max-w-7xl w-full px-4 py-10">
          {users}
          {revenue}
          {notifications}
        </div>
      </div>
    </ThemeProvider>
  );
}
