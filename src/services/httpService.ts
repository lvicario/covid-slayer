import axios, { AxiosInstance, AxiosResponse } from "axios";

export type HttpInstance = AxiosInstance;
export type HttpResponse = AxiosResponse;

export class HttpService {
	public client: AxiosInstance;

	constructor(public baseURL: string) {
		this.client = axios.create({
			baseURL
		});

		this.responseInterceptor();
	}

	responseInterceptor() {
		this.client.interceptors.response.use(null, err => {
			const expectedError =
				err.response &&
				err.response.status >= 400 &&
				err.response.status < 500;

			if (!expectedError) {
				// should use logger service
				console.log("Log errors:", err);
			}

			return Promise.reject(err);
		});
	}
}
