export default class Api {
  static get(URL) {
    return fetch(URL, { method: "GET" });
  }

  static post(URL, data) {
    return fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
}
