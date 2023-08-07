import getUser from "@/app/actions/getUser";
import DesktopBar from "./DesktopBar";
import { isMovieAdded } from "@/app/actions/isAdded";

async function Sidebar({ children }: {
    children: React.ReactNode,
  }) {

    const user = await getUser();
    // const isAdded = isMovieAdded("64ca1b82a5fd33988b56c3b7")
    // .then((e) => console.log(e))
    // .catch(() => console.log('error'));

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