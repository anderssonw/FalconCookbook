import axios from 'axios'

let instance

if (process.env.NODE_ENV == 'development') {
	instance = axios.create({
		baseURL: 'http://localhost:5001/thecookbook-5c258/us-central1/app/',
	})
} else {
	instance = axios.create({
		baseURL: 'https://us-central1-thecookbook-5c258.cloudfunctions.net/app/',
	})
}

export default instance
