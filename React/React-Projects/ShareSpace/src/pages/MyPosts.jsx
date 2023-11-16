import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import appwriteStorage from "../appwrite/appwriteStorage"
import { Container, PostCard } from "../components";

function MyPosts() {
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector(state => state.auth.userData);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (authStatus) {
      appwriteStorage.getAllPosts([]).then((post) => {
        if (post){
          const userPosts = post.documents.filter(post => post.userId === userData.$id)
          setPosts(userPosts)
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
              {authStatus ? (
                <h1 className="text-2xl text-white font-bold hover:text-[#4E4FEB]">
                  You haven&apos;t posted anything
                </h1>
              ) : (
                <h1 className="text-2xl text-white font-bold hover:text-[#4E4FEB]">
                  Login to read posts
                </h1>
              )}
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
            <div key={post.$id} className="p-2 w-full sm:w-1/4 flex-wrap">
              <PostCard {...post}/>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
export default MyPosts