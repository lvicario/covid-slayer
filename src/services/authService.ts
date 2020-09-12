import { HttpService, HttpInstance, HttpResponse } from "./httpService";
import config from "@src/config.json";

class AuthService extends HttpService {
	constructor(baseURL: string) {
		super(baseURL);
	}

	public login = async (data: { email: string, password: string }): Promise<HttpResponse> => {
        return new Promise(async (resolve, reject) => {
            try {
            	const response = await this.client.post("/signin", data);
                const jwt = response.data.accessToken;
                localStorage.setItem("token", jwt);

            	resolve(response.data);
            } catch (err) {
            	reject(err);
            }
        });
    }
}

const authService = new AuthService(config.mockEndpoint);

export default authService;
