import { getGeneral } from "@/app/utils/actions/getGeneral";
import DesktopSideBar from "./DesktopSidebar";
import { getDiscussions } from "@/app/utils/actions/getDiscussions";

const Sidebar = async ({ children }: { children: React.ReactNode }) => {
    const generalDiscussion = await getGeneral();
    const discussions = await getDiscussions();

    return (
        <div className="h-full">
            <DesktopSideBar general={generalDiscussion} discussions={discussions} />
            {children}
        </div>
    )
}

export default Sidebar;