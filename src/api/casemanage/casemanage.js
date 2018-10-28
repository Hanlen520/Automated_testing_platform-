import { get,post } from './../base/api_base.js'
export default {
	searchCaseName(params){
		return post('/search', params)
	}
}