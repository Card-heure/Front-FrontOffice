export function isAuthenticated() {
  if (localStorage.getItem("jwt")) {
    if (localStorage.getItem("jwt") !== "undefined" && localStorage.getItem("jwt") !== null) {
      const expire = localStorage.getItem("expire");
      const date = new Date(expire!);
      if (date.getTime() > Date.now()) {
        return true;
      }
    }
  }
  return false;
}
