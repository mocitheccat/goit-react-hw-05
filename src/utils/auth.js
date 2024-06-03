class Auth {
  static readUser() {
    return localStorage.getItem("username");
  }

  static loginUser(username) {
    localStorage.setItem("username", username);
  }

  static logoutUser() {
    localStorage.removeItem("username");
  }
}

export default Auth;
