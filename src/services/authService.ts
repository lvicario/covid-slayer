import { HttpService, HttpInstance, HttpResponse } from "./httpService";
import config from "@src/config.json";

interface LoginProp {
    email: string;
    password: string;
}

interface RegisterProp extends LoginProp {
    firstName: string;
    lastName: string;
}

class AuthService extends HttpService {
	constructor(baseURL: string) {
		super(baseURL);
	}

	public login = async (data: LoginProp): Promise<HttpResponse> => {
        return new Promise(async (resolve, reject) => {
            try {
            	const response = await this.client.post("/signin", data);

            	resolve(response.data);
            } catch (err) {
            	reject(err);
            }
        });
    }

    public register = (data: RegisterProp): Promise<HttpResponse> => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.client.post("/register", data);
                resolve(response.data);
            } catch (err) {
                reject(err);
            }
        })
    };
}

const authService = new AuthService(config.mockEndpoint);

export default authService;
