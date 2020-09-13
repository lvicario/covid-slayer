import { HttpService, HttpInstance, HttpResponse } from "./httpService";
import config from "./../config.json";

interface RegisterProp {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

class PlayerService extends HttpService {
	constructor(baseURL: string) {
		super(baseURL);
	}

    public register = (data: RegisterProp): Promise<HttpResponse> => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.client.post("/register", data);
                const jwt = response.data.accessToken;
                localStorage.setItem("token", jwt);

                resolve(response.data);
            } catch (err) {
                reject(err);
            }
        })
    };
}

const playerService = new PlayerService(config.mockEndpoint);

export default playerService;
