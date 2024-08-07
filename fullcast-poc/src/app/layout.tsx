import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { AppBar, Box, IconButton, Tab, Tabs, Toolbar } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fullcast",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppBar position="static" color="transparent">
          <Toolbar className="flex justify-between">
            <Image
              src="/logo-home.svg"
              alt="Logo"
              width={50}
              height={23}
              priority
            />
            <Box className="grow">
              <Tabs>
                <Tab
                  label="Plans"
                  href="/"
                  className="normal-case font-bold text-[#002A3A]"
                />
                <Tab
                  label="Reports"
                  href="/reports"
                  className="normal-case font-bold text-[#002A3A]"
                />

                <Tab
                  label="Scenarios"
                  href="/scenarios"
                  className="normal-case font-bold text-[#002A3A]"
                />
              </Tabs>
            </Box>

            <IconButton size="large" aria-haspopup="true" color="inherit">
              <HelpOutlineIcon />
            </IconButton>
            <IconButton size="large" aria-haspopup="true" color="inherit">
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton size="large" aria-haspopup="true" color="inherit">
              <AccountCircleOutlinedIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {children}
      </body>
    </html>
  );
}
