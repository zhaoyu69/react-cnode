export default class UserService {
    static async getUsers() {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
        return resp.data;
    }
}