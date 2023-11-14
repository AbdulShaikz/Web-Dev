import { Client, Databases, ID, Storage, Query } from "appwrite";
import conf from "../conf/conf";

class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  //using slug as unique ID
  async createPost({
    title,
    slug,
    author,
    thumbnail,
    content,
    userId,
    status,
  }) {
    try {
      await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          author,
          thumbnail,
          content,
          userId,
          status,
        }
      );
    } catch (error) {
      console.log("Error while creating post: ", error);
    }
  }

  async updatePost(slug, { title, content, thumbnail, status }) {
    try {
      await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          thumbnail,
          content,
          status,
        }
      );
    } catch (error) {
      console.log("Error while updating post: ", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Error while deleting post: ", error);
    }
  }

  async getPost(slug) {
    try {
      await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Error while getting post: ", error);
    }
  }

  async getAllPosts(queries = [Query.equal("status", "active")]) {
    try {
      await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Error while getting all posts: ", error);
    }
  }

  //File upload service

  async uploadFile(file){
    try {
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file,
        )
    } catch (error) {
        console.log("Error while uploading file: ",error);
        return false
    }
  }

  async deleteFile(fileId){
    try {
        return await this.bucket.deleteFile(
            conf.appwriteBucketId,
           fileId,
        )
    } catch (error) {
        console.log("Error while deleting file: ",error);
        return false
    }
  }

  async getFilePreview(fileId){
    try {
        return await this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        )
    } catch (error) {
        console.log("Error while getting preview of file: ",error);
    }
  }
}

const service = new Service();
export default service;
