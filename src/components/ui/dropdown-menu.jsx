import { ChevronDown } from "lucide-react"; // if you actually want an icon
export { Root as DropdownMenu } from "@radix-ui/react-dropdown-menu";
export { Item as DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
export { Trigger as DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
export { Content as DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import {
DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export function SortDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="inline-flex items-center gap-1 rounded-md border border-muted/60 bg-muted/30 px-3 py-2
                     text-sm font-medium tracking-wide text-foreground/90 transition-colors
                     hover:bg-muted/40 data-[state=open]:bg-muted/50"
        >
          Sort by
          <ChevronDown className="h-4 w-4 stroke-accent" />{" "}
          {/* remove if no icon */}
        </button>
      </DropdownMenuTrigger>

      {/* ── key props: align=end + min-width ── */}
      <DropdownMenuContent
        align="end" // right-edges line up
        sideOffset={4} // 4-px gap below trigger
        className="min-w-[10rem] p-1" // stop text wrapping
      >
        {[
          "Price – Low → High",
          "Price – High → Low",
          "Acres – Small → Large",
          "Acres – Large → Small",
          "Newest Listings",
        ].map((label) => (
          <DropdownMenuItem
            key={label}
            className="cursor-pointer rounded-sm px-2 py-1.5 text-sm outline-none
                       focus:bg-muted/60 data-[highlighted]:bg-muted/60"
          >
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
