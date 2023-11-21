import { useSelector } from "react-redux";
import { Container, PostCard } from "../components/index.js";
import { useEffect, useState } from "react";
import appwriteStorage from "../appwrite/appwriteStorage.js";

function Home() {
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  const [posts, setPosts] = useState([]);
  const [verificationStatus, setVerificationStatus] = useState(false);

  useEffect(() => {
    if (authStatus) {
      if(userData.emailVerification === true) setVerificationStatus(true)
      appwriteStorage.getAllPosts().then((post) => {
        if (post) setPosts(post.documents);
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
                  No posts created
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
          {verificationStatus === false ? <div
            className="bg-red-100 border text-center border-red-400 w-full text-red-700 px-4 py-2 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Verify your email! </strong>
            <span className="block sm:inline">
              to post on this website
            </span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                className="fill-current h-5 w-5 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div> : ""}
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-full sm:w-1/4 flex-wrap">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
export default Home;
