"use strict";

class User {
  get ValidateAll() {
    return true;
  }

  get rules() {
    return {
      name: "required",
      email: "required|email|unique:users",
      password: "required"
    };
  }
}

module.exports = User;
