export const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);
export const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
export const validUsername = new RegExp("^[a-zA-Z0-9._:$!%-]");
export const validPhoneNumber = new RegExp("[a-zA-Z0-9._:$!%-]");
