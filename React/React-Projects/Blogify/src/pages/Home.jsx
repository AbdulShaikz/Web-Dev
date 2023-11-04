import { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import { useSelector } from "react-redux";


function Home() {
  const authStatus = useSelector((state) => state.auth.status)
  const [posts, setPosts] = useState([]);
  
  // const userId = useSelector((state) => state.auth.userData);

  useEffect(() => {
    if(authStatus){
      appwriteService.getPosts().then((posts) => {
        if (posts) {
          // const userPosts = posts.documents.filter((post) => post.userId=== userId.$id)
          // console.log(userPosts);
          setPosts(posts.documents);
        }
      });
    }
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              {authStatus? <h1 className="text-2xl text-white font-bold hover:text-[#4E4FEB]">No posts created</h1> : <h1 className="text-2xl text-white font-bold hover:text-[#4E4FEB]">
                Login to read posts
              </h1>}
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post}/>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;

