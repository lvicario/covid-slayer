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
                const response = await this.client.post("/users", data);
                const jwt = response.data.accessToken;
                localStorage.setItem("token", jwt);

                resolve(response.data);
            } catch (err) {
                console.log(`err: ${JSON.stringify(err, null, 4)}`);
                reject(err);
            }
        })
    };
}

const playerService = new PlayerService(config.endpoint);

export default playerService;
