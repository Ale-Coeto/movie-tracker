import StarGroup from "@/app/components/Videos/StarGroup";
import {Post} from "@prisma/client";
import format from "date-fns/format";
import { BsDot } from "react-icons/bs";


interface PostProps {
    info: Post | any;
}

const Post:React.FC<PostProps> = ({info}) => {
    return (
        <div className="bg-tertiary text-white p-4 rounded-md">
            <div className="flex flex-row justify-between items-start mb-5">
                <div className="flex flex-row self-start">
                    <div className="font-semibold text-lg">
                        {info.title}
                    </div>
                    <div className="text-gray-400 ml-3 text-lg self-end">
                        {info.user.name}
                    </div>
                </div>

                <div className="flex flex-row jus text-gray-400 self-top">
                    {format(new Date(info.createdAt), "dd/MM/yyyy")}
                    <BsDot className="self-center"/>
                    {format(new Date(info.createdAt), "HH:mm")}
                </div>
            </div>
            
            <div className="mb-4">
                {info.content}
            </div>
            {info.rating != -1 && (
                <div className="flex flex-row gap-2">
                    Rated: 
                    <StarGroup rate={info.rating}/>
                </div>
            )}
        </div>
    )
}

export default Post;