'use client'
import Button from "@/app/components/Button";
import CreateDiscussionModal from "@/app/components/Modals/CreateDiscussionModal";
import JoinModal from "@/app/components/Modals/JoinModal";
import useLoggedIn from "@/app/hooks/useLogged";
import { Discussion } from "@prisma/client";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface DesktopSideBarProps {
    general: Discussion | null;
    discussions: Discussion[];
}

const DesktopSideBar: React.FC<DesktopSideBarProps> = ({ general, discussions }) => {
    const router = useRouter();
    const [joinOpen, setJoinOpen] = useState(false);
    const [createOpen, setCreateOpen] = useState(false);
    const [selected, setSelected] = useState(-2);
    const isLogged = useLoggedIn();

    const handleNav = (id: string, title: string, key: number) => {
        setSelected(key);
        router.push(`/discussions/user?id=${id}&title=${title}`);
    }

    return (
        <>
            <JoinModal isOpen={joinOpen} onClose={() => setJoinOpen(false)} />
            <CreateDiscussionModal isOpen={createOpen} onClose={() => setCreateOpen(false)} />

            <div className="text-white bg-secondary h-full fixed inset-y-0 flex flex-col justify-between z-40">

                <div className="mt-20 text-lg ">
                    <div className={clsx(selected == -1 && "bg-tertiary", "px-6 py-2 hover:bg-tertiary")} onClick={() => handleNav("64cf25790ccd285092b7604a", "General", -1)}>
                        {general?.title}
                    </div>

                    {discussions.map((discussion, key) => (
                        <div key={key} className={clsx(selected == key && "bg-tertiary", "text-lg py-2 px-6 overflow-scroll hover:bg-tertiary w-full")} onClick={() => handleNav(discussion.id, discussion.title, key)}>
                            {discussion.title}
                        </div>
                    ))}
                </div>
                {isLogged ? (
                    <div className="flex flex-col gap-4 pl-3 pr-7 pb-4">
                        <Button wfull onClick={() => setJoinOpen(true)}>
                            Join Discussion
                        </Button>
                        <Button wfull onClick={() => setCreateOpen(true)}>
                            Create Discussion
                        </Button>
                    </div>
                ) : (
                    <div className="w-56 p-8 text-gray-400">
                        Login to join or create discussions
                    </div>
                )}

            </div>
        </>
    )
}

export default DesktopSideBar;