
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-center gap-4 px-4">
        <Link to="/week1">
          <Button
            variant={location.pathname === "/week1" ? "default" : "outline"}
          >
            Первая неделя
          </Button>
        </Link>
        <Link to="/week2">
          <Button
            variant={location.pathname === "/week2" ? "default" : "outline"}
          >
            Вторая неделя
          </Button>
        </Link>
        <Link to="/week3">
          <Button
            variant={location.pathname === "/week3" ? "default" : "outline"}
          >
            Третья неделя
          </Button>
        </Link>
      </div>
    </header>
  );
}
