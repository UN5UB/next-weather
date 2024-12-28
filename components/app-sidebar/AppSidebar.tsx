import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import SearchDialog from "./search-dialog/SearchDialog";
import SideWeather from "./side-weather/SideWeather";

export function AppSidebar() {
  return (
    <Sidebar>
      <SearchDialog />
      <SideWeather />
      <SidebarContent />
    </Sidebar>
  );
}
