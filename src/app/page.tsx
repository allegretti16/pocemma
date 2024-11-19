"use client";

import { DarkModeToggle } from "@/components/dark-mode-toggle";
import { Chat } from "@/components/chat";
import { useRouter } from "next/navigation";
import { useEffect } from "react";





export default function Home() {
  const router = useRouter()
  useEffect(() => {
    const checkAuth = () => {
      try {
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        if (!isAuthenticated) {
          router.push("/login");
        }
      } catch (error) {
        console.error("Errore nel controllo dell'autenticazione:", error);
      }
    };

    checkAuth();
  }, [router]);
  return (
    <main className="relative container flex min-h-screen flex-col">
      <div className=" p-4 flex h-14 items-center justify-between supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <span className="font-bold">EmmaHelper</span>
        <DarkModeToggle />
      </div>
      <div className="flex flex-1 py-4">
        <div className="w-full">
          <Chat />
        </div>
      </div>
    </main>
  );
}
