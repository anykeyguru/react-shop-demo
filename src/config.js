const LANG = process.env.REACT_APP_LANG;
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `${process.env.REACT_APP_HOST}/v2/shop?lang=${LANG}`;


export {
    API_KEY,
    API_URL,
}