import { useEffect, useState } from "react"
import appwriteService from "../appwrite/config"
import { Container, PostCard } from "../components"
import { useSelector } from "react-redux"

function AllPosts() {
    const [posts, setPosts] = useState([])
    // const authStatus = useSelector((state) => state.auth.status);
    const userId = useSelector((state) => state.auth.userData.$id);

    useEffect(()=>{
        appwriteService.getPosts([]).then((posts) => {
            if(posts){
                const userPosts = posts.documents.filter((post) => post.userId === userId)
                setPosts(userPosts);
            }
        })
    },[])
  return (
    <div className="w-full py-8">
        <Container>
            <div className="flex flex-wrap">
                { posts.length === 0 ? <h1 className="text-2xl text-white font-bold w-full text-center hover:text-[#4E4FEB]">No posts created</h1> 
                  : posts.map((post) => (
                    <div key={post.$id} className="p-2 w-1/4">
                        <PostCard {...post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts