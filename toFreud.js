function toFreud(string) {
  string = string.split(" ");
  for (let i = 0; i < string.length; i++) {
    if (string == "") {
      return "";
    } else {
      string[i] = "sex";
    }
  }
  return string.join(" ");
}