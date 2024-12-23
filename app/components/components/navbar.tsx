import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@quiz-app/components/ui/navigation-menu";
import { navLinksGuest } from "@quiz-app/constants/navigation";

export function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navLinksGuest.map((link) => (
          <NavigationMenuItem
            className="px-4 py-2 hover:rounded hover:bg-accent hover:text-accent-foreground"
            key={link.value}
          >
            <NavigationMenuLink className="hover:underline" href={link.value}>
              {link.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
