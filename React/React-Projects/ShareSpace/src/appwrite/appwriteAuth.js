import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
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
      /* put this inside create {
           sendVerfication: true,
           url: 'https://localhost:5173/home'
        } */
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Error while creating account: ", error);
      throw error;
    }
  }

  async verifyAccount(url) {
    try {
      return await this.account.createVerification(url);
    } catch (error) {
      console.log("Error while verifying the account: ", error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log("Error while signing in: ", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Error while getting the current user: ", error);
      //throw error;
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Error while signing out: ", error);
      throw error;
    }

    return null;
  }
}

const appwriteAuthService = new AuthService();

export default appwriteAuthService;
