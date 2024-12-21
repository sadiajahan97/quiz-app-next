import Navbar from "./components/navbar";

export default function Header() {
  return (
    <header className="flex justify-end bg-foreground p-2 text-background">
      <Navbar />
    </header>
  );
}
