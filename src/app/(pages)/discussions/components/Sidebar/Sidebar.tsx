import { getGeneral } from "@/app/actions/getGeneral";
import DesktopSideBar from "./DesktopSidebar";
import { Discussion } from "@prisma/client";
import { getDiscussions } from "@/app/actions/getDiscussions";

const Sidebar = async({ children }: { children: React.ReactNode }) => {
    const generalDiscussion = await getGeneral();
    const discussions = await getDiscussions();

    return (
        <div className="h-full">
            <DesktopSideBar general={generalDiscussion} discussions={discussions}/>
            {children}
        </div>
    )
}

export default Sidebar;