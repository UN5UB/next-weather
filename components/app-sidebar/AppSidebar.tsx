import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import SearchDialog from "./search-dialog/SearchDialog";
import SideWeather from "./side-weather/SideWeather";
import SideFooter from "./side-footer/SideFooter";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SearchDialog />
      </SidebarHeader>
      <SidebarContent>
        <SideWeather />
      </SidebarContent>
      <SidebarFooter>
        <SideFooter />
      </SidebarFooter>
    </Sidebar>
  );
}
