import { useSelector } from "react-redux";
import { Container, PostForm } from "../components"


function AddPost() {
  const userData = useSelector((state) => state.auth.userData);
  return (
    <div className="py-8">
      <Container>
        {userData.emailVerification === true ? <PostForm/> : 
        <div className="flex justify-center p-2 w-full">
          <h1 className="text-2xl text-red-500 font-bold hover:text-red-800">
          You need to verify your email in order to post anything
        </h1>
        </div>}
      </Container>
    </div>
  )
}
export default AddPost