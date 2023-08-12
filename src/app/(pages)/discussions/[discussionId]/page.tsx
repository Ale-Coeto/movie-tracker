import { getPosts } from "@/app/utils/actions/getPosts";
import NewPost from "../components/Sidebar/NewPost";
import Post from "../components/Post";
import Header from "../components/Sidebar/Header";


const DiscussionIdPage = async (params: any) => {
    const posts = await getPosts(params.searchParams.id);

    return (
        <>
            <Header title={params.searchParams.title} code={params.searchParams.id} />

            <div className="md:pl-72 px-6 md:pr-20 pt-20 pb-8 overflow-scroll flex flex-col gap-8 bg-primary ">
                {posts.map((post, key) => (
                    <Post key={key} info={post} />
                ))}
            </div>
            <NewPost id={params.searchParams.id} />
        </>
    )
}

export default DiscussionIdPage;