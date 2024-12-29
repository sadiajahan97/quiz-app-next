import { Navbar } from "./components/navbar";

export function Header() {
  return (
    <header className="flex justify-end bg-primary p-4 text-primary-foreground shadow">
      <Navbar />
    </header>
  );
}
