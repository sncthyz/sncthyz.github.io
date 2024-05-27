const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});


function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_xn5f4w7","template_vgen15w",parms).then(alert("Email sent!!"))
}