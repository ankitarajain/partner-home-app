//const API_URL = process.env.REACT_APP_API_URL || "";

const API_URL = "https://run.mocky.io/v3/";

const get = (uri: string) => {
  return fetch(API_URL + uri).then((response: Response) => response.json());
};

export { get };
