import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@quiz-app/components/ui/navigation-menu";
import { navLinksGuest } from "@quiz-app/constants/navigation";

export default function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navLinksGuest.map((link) => (
          <NavigationMenuItem
            className="p-2 hover:rounded hover:bg-background hover:text-foreground"
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
