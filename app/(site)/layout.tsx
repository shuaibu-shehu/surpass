import Header from "@/components/landing-page/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>     
      <Header />              
      {children}
      
    </main>
  );
}
