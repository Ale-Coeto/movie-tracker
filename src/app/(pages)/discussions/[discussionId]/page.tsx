import { getPosts } from "@/app/actions/getPosts";
import NewPost from "../components/Sidebar/NewPost";
import Post from "../components/Post";
import Header from "../components/Sidebar/Header";
import isLoggedIn from "@/app/hooks/isLogged";

interface IParams {
    discussionId: string;
    searchParams: {
        id: string;
        title: string;
    }
}
type PostType = Post & {
    user: {
        name: string;
    }
}

const DiscussionIdPage = async(params:any) => {
    const posts = await getPosts(params.searchParams.id);

    return (
        <>
            <Header title={params.searchParams.title} code={params.searchParams.id}/>

            <div className="pl-72 pt-20 pr-20 overflow-scroll flex flex-col gap-8">
            {posts.map((post, key) => (
                <Post key={key} info={post}/>
            ))}
            </div>
            <NewPost id={params.searchParams.id}/>
        </>
    )
}

export default DiscussionIdPage;