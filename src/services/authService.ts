import jwtDecode from "jwt-decode";
import { HttpService, HttpInstance, HttpResponse } from "./httpService";
import config from "./../config.json";

const TOKEN = "token";

class AuthService extends HttpService {
	constructor(baseURL: string) {
		super(baseURL);
	}

	public login = async (data: { email: string, password: string }): Promise<HttpResponse> => {
        return new Promise(async (resolve, reject) => {
            try {
            	const response = await this.client.post("/signin", data);
                const jwt = response.data.accessToken;
                localStorage.setItem(TOKEN, jwt);

            	resolve(response.data);
            } catch (err) {
            	reject(err);
            }
        });
    }

    public getUserFromStorage = () => {
        try {
            const token: any = localStorage.getItem(TOKEN);
            return jwtDecode(token);
        } catch (err) {
            return null;
        }
    }

    public getToken = () => {
        return localStorage.getItem(TOKEN);
    }

    public removeToken = () => {
        localStorage.removeItem(TOKEN);
    }
}

const authService = new AuthService(config.mockEndpoint);

export default authService;
