import { HomeButton } from "@/components/home-button";

export default function SubPagesLayout({ children }) {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-center py-20 px-8 xs:px-16 lg:px-32">
      <HomeButton />
      {children}
    </main>
  );
}
