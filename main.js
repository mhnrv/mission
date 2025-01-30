const token = sessionStorage.getItem("shared-session-com.synack.accessToken");
console.log(token);
navigator.clipboard.writeText(token);

