import { NavLinkInterface } from "@quiz-app/types/navigation";

export const navLinksGuest: NavLinkInterface[] = [
  { label: "Home", value: "/" },
  { label: "Quizzes", value: "/quizzes" },
  { label: "Leaderboard", value: "/leaderboard" },
  { label: "About", value: "/about" },
  { label: "Sign In", value: "/sign-in" },
];

export const navLinksUser: NavLinkInterface[] = [
  { label: "Home", value: "/" },
  { label: "Quizzes", value: "/quizzes" },
  { label: "Create Quiz", value: "/create-quiz" },
  { label: "Leaderboard", value: "/leaderboard" },
  { label: "Profile", value: "/profile" },
  { label: "About", value: "/about" },
  { label: "Sign Out", value: "/sign-in" },
];
