import getUser from "@/app/utils/actions/getUser";
import DesktopBar from "./DesktopBar";
import MobileBar from "./MobileBar";


async function Sidebar({ children }: {
  children: React.ReactNode,
}) {

  const user = await getUser();

  return (
    <div className="h-full bg-primary">
      <DesktopBar user={user!} />
      <MobileBar user={user!} />
      <main className="h-full">
        {children}
      </main>
    </div>
  )
}

export default Sidebar;