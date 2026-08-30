import conf from "../conf/conf.js";
import { Client, ID, TablesDB, Storage, Query } from "appwrite";

class Service {
  client = new Client();
  tablesDB;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.tablesDB = new TablesDB(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.tablesDB.createRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteTableId,
        rowId: slug,
        data: {
          title,
          content,
          featuredImage,
          status,
          userId,
        },
      });
    } catch (error) {
      console.error("Error creating Post", error.message);
      return false;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.tablesDB.updateRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteTableId,
        rowId: slug,
        data: {
          title,
          content,
          featuredImage,
          status,
        },
      });
    } catch (error) {
      console.error("Error updating Post", error.message);
      return false;
    }
  }

  async deletePost(slug) {
    try {
      await this.tablesDB.deleteRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.tableId,
        rowId: slug,
      });
      return true;
    } catch (error) {
      console.error("Error deleting Post", error.message);
      return false;
    }
  }

  async getRow(slug) {
    try {
      return await this.tablesDB.getRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteTableId,
        rowId: slug,
      });
    } catch (error) {
      console.error("Error getting Post", error.message);
      return false;
    }
  }

  async getRows(queries = [Query.equal("status", "active")]) {
    try {
      return await this.tablesDB.listRows({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteTableId,
        queries: queries,
      });
    } catch (error) {
      console.error("Error getting Posts", error.message);
      return false;
    }
  }
  
  async uploadFile(file){
    try {
      return await this.bucket.createFile({
        bucketId:conf.appwriteBucketId,
        fileId:ID.unique(),
        file:file
      })
    } catch (error) {
      console.error("Error Uploading File", error.message);
      return false;
    }
  }
  
  async deleteFile(fileId){
    try {
      return await this.bucket.deleteFile({
        bucketId:conf.appwriteBucketId,
        fileId:fileId
      })
    } catch (error) {
      console.error("Error delete File", error.message);
      return false;
    }
  }
  
  async getFilePreview(fileId){
    try {
      return this.bucket.getFilePreview({
        bucketId:conf.appwriteBucketId,
        fileId:fileId
      })
    } catch (error) {
      console.error("Error getting file preview", error.message);
      return false;
    } 
  }
}

const service = new Service();

export default service;
