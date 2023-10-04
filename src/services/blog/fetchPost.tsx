import request from '../api';
import { Post } from '../models/models';
const fetchPost = async() => {
    const result  =  await request({
        endpoint: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
    });
    return result as Post[];
}
export default fetchPost;