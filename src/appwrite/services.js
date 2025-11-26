import {Client, Databases, ID, Query, } from 'appwrite'
import conf from '../conf/conf'

export class Services{
    client= new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.ENDPOINT)
            .setProject(conf.PROJECT_ID)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    
    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
            return await this.databases.createDocument(
                conf.DB_ID,
                conf.COLLECTION_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch(error){
            console.log("Error in the creating post function", error)
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try{
            return await this.databases.updateDocument(
                conf.DB_ID,
                conf.COLLECTION_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch(error){
            console.log("Error in the updating of post", error)
        }
    }

    async deletePost(slug){
        try{
        return await this.databases.deleteDocument(
            conf.DB_ID,
            conf.COLLECTION_ID,
            slug,
        )
        } catch(error){
            console.log("Error while deleting", error);
        }
    }

    async getpost(slug){
        try{
            return await this.databases.getDocument(
                conf.DB_ID,
                conf.COLLECTION_ID,
                slug,
            )
        }catch(error){
            console.log("Error while getting the post", error);
        }
    }

    async getposts(queries=[Query.equal("status", "active")]){
        try{
            return await this.databases.listDocuments(
                conf.DB_ID,
                conf.COLLECTION_ID,
                queries
            )
        }catch(err){
            console.log("Error while getting all the posts.", err)
        }
    }

   
}

const services = new Services()

export default services