window.onload = () => {
  if (!isAccessToken()) {
    alert("Please Sign Up First");
    window.location.href = "/f3-contest2";
  }
  displayUser();
};

const displayUser = () => {
  const user = localStorage.getItem("userState");
  const userObj = JSON.parse(user);
  document.getElementById("name").innerText += userObj.name;
  document.getElementById("email").innerText += userObj.email;
  document.getElementById("password").innerText += userObj.password;
};

const logOut = () => {
  if (localStorage.getItem("userState")) localStorage.removeItem("userState");
  window.location.href = "https://ARIFAHMAD207.github.io/sinup-f3";
};

const isAccessToken = () => {
  if (!localStorage.getItem("userState")) return false;
  const user = localStorage.getItem("userState");
  const userObj = JSON.parse(user);
  // console.log(user,userObj, userObj.accessToken);
  if (!userObj.accessToken) return false;
  return true;
};


