var userName;

document.getElementById("login_button").addEventListener("click", () => {
    userName = document.getElementById("user_name").value;
    if(userName != null) {
        localStorage.setItem("user_name", userName);
        window.location = "kwitter_room.html";
    }else {
        window.alert("😔😓 opps!! Error plaese fill the form and try again");
        console.error("😔😓 opps!! Error plaese fill the form and try again");
    }
});