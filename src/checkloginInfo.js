import React from "react";

// validateCredentials.js
const validUsers = [
  {
    username: "user1",
    password: "password1",
  },
  {
    username: "user2",
    password: "password2",
  },
];

// Function to validate credentials
export function validateCredentials(username, password) {
  const user = validUsers.find(
    (user) => user.username === username && user.password === password
  );
  return user !== undefined;
}
export default validateCredentials;
