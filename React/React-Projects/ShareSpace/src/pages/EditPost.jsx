import { useEffect } from "react";
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import appwriteStorage from "../appwrite/appwriteStorage";
import {Container, PostForm} from "../components";

function EditPost() {
  const [post, setPost] = useState(null);
  const {slug} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if(slug) {
      appwriteStorage.getPost(slug).then((post) => {
        if(post) setPost(post);
      })
    }else{
      navigate("/");
    }
  }, [slug, navigate])
  return (
    post ? (
      <div className="py-8">
        <Container>
          <PostForm post={post}/>
        </Container>
      </div>
    ) : null
  )
}
export default EditPost;