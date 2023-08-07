import getUser from "@/app/actions/getUser";
import DesktopBar from "./DesktopBar";

async function Sidebar({ children }: {
    children: React.ReactNode,
  }) {

    const user = await getUser();

    return (
      <div className="h-full bg-primary">
        <DesktopBar user={user!}/>
        <main className="h-full">
          {children}
        </main>
      </div>
    )
  }
  
  export default Sidebar;