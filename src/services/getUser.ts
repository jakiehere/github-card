import axios from 'axios';

export const getUser = async () => {
    const res = await axios.get('https://api.github.com/users')
    const data = await res.data.slice(0, 20);
    return data
}
