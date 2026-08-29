import conf from "../conf/conf.js";

import { Client, Account, ID } from "appwrite";

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create({
        userId: ID.unique(),
        email,
        password,
        name,
      });

      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw new Error(`Error in creating user: ${error.message}`);
    }
  }

  async login({ email, password }) {
    try {
      const session = await account.createEmailPasswordSession({
        email,
        password,
      });

      return session;
    } catch (error) {
      throw new Error("Error in login" + error.message);
    }
  }

  async getCurrentUser() {
    try {   
      return await this.account.get();
    } catch (error) {
      if (error.code === 401) {
        return null;
      }

      throw new Error(`Error in getting account info: ${error.message}`, {
        cause: error,
      });
    }
}

async logout(){
    try {
        await this.account.deleteSessions();
    } catch (error) {
        throw new Error(`Error in logging out: ${error.message}`, {
          cause: error,
        });
    }
  }
}

const authService = new AuthService();

export default authService;
