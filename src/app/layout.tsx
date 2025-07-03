import "./globals.css";
import Image from "next/image";
import logo from "../../../public/logo1.png";
const cred1 = "/page-2/cred (1).png";
const cred2 = "/page-2/cred (2).png";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main> {children}</main>
      </body>
    </html>
  );
}
