import axios from "axios";

async function fetchData() {
    const res = await axios('https://dummyjson.com/products/')
}

export default fetchData;