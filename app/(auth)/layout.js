import "@/app/globals.css";
import Header from "./components/ui/header";
export const metadata = {
  title: {
    template: "%s - BTK Akademi",
    default: "Auth | Next.js ile Web Geliştirme",
  },
  description: "BTK Akademi Next.js ile Web Geliştirme eğitimi",
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="font-sans grid grid-rows-[120px_1fr_20px] justify-items-center min-h-screen">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
