import { Navbar } from "./components/navbar";

export function Header() {
  return (
    <header className="z-2 fixed flex w-full justify-end bg-primary p-4 text-primary-foreground shadow">
      <Navbar />
    </header>
  );
}
