// Run after page loads
document.addEventListener("DOMContentLoaded", function () {

    console.log("JS Connected ✅");

    // =========================
    // 🔗 NAVIGATION
    // =========================
    const loginBtn = document.getElementById("loginBtn");
    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            window.location.href = "login.html";
        });
    }

    const cartIcon = document.getElementById("cart-icon");
    if (cartIcon) {
        cartIcon.addEventListener("click", () => {
            window.location.href = "cart.html";
        }); 
    }

    // =========================
    // 📩 CONTACT FORM
    // =========================
    const contactForm = document.querySelector(".contact-form form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            alert("Message sent successfully! ✅");
            contactForm.reset();
        });
    }

    // =========================
    // ❓ FAQ TOGGLE
    // =========================
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector("h4");
        const answer = item.querySelector("p");

        if (answer) {
            answer.style.display = "none";
        }

        if (question) {
            question.addEventListener("click", () => {
                answer.style.display =
                    answer.style.display === "none"
                        ? "block"
                        : "none";
            });
        }

    });

    // FAQ Search
    const searchBox = document.getElementById("searchBox");

    if (searchBox) {
        searchBox.addEventListener("keyup", function () {

            let value = this.value.toLowerCase();

            faqItems.forEach(item => {

                let text = item.innerText.toLowerCase();

                item.style.display =
                    text.includes(value)
                        ? "block"
                        : "none";

            });

        });
    }

    // =========================
    // 🔐 LOGIN FORM
    // =========================
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        // Remember email
        let savedEmail = localStorage.getItem("rememberEmail");

        if (savedEmail) {

            const emailField = document.getElementById("email");
            const remember = document.getElementById("remember");

            if (emailField) {
                emailField.value = savedEmail;
            }

            if (remember) {
                remember.checked = true;
            }
        }

        loginForm.addEventListener("submit", function (e) {

            e.preventDefault();

            let email = document.getElementById("email").value.trim();
            let password = document.getElementById("password").value.trim();
            let remember = document.getElementById("remember");
            let message = document.getElementById("message");

            if (email === "" || password === "") {

                message.innerText = "Please fill all fields ❌";
                message.style.color = "red";
                return;
            }

            if (!email.includes("@") || !email.includes(".")) {

                message.innerText = "Invalid email ❌";
                message.style.color = "red";
                return;
            }

            let correctEmail = "admin@gmail.com";
            let correctPassword = "123456";

            if (
                email === correctEmail &&
                password === correctPassword
            ) {

                if (remember.checked) {
                    localStorage.setItem(
                        "rememberEmail",
                        email
                    );
                } else {
                    localStorage.removeItem(
                        "rememberEmail"
                    );
                }

                message.innerText =
                    "Login Successful ✅";

                message.style.color = "green";

                setTimeout(() => {
                    window.location.href =
                        "home.html";
                }, 1000);

            } else {

                message.innerText =
                    "Invalid Email or Password ❌";

                message.style.color = "red";
            }

        });
    }

    // =========================
    // 📝 SIGNUP FORM
    // =========================
    const signupForm = document.getElementById("signupForm");

    if (signupForm) {

        signupForm.addEventListener("submit", function (e) {

            e.preventDefault();

            let name =
                document.getElementById("name").value;

            let email =
                document.getElementById("email").value;

            let password =
                document.getElementById("password").value;

            let confirmPassword =
                document.getElementById("confirmPassword").value;

            let message =
                document.getElementById("message");

            if (password !== confirmPassword) {

                message.innerText =
                    "Passwords do not match ❌";

                message.style.color = "red";
                return;
            }

            localStorage.setItem(
                "user",
                JSON.stringify({
                    name,
                    email,
                    password
                })
            );

            message.innerText =
                "Account Created ✅";

            message.style.color = "green";

            signupForm.reset();

            setTimeout(() => {
                window.location.href =
                    "login.html";
            }, 1500);

        });

    }

    // =========================
    // 🔑 FORGOT PASSWORD
    // =========================
    const forgotForm =
        document.getElementById("forgotForm");

    if (forgotForm) {

        forgotForm.addEventListener(
            "submit",
            function (e) {

                e.preventDefault();

                let email =
                    document.getElementById("email").value;

                let message =
                    document.getElementById("message");

                if (email.trim() !== "") {

                    message.innerText =
                        "Reset link sent ✅";

                    message.style.color =
                        "green";

                } else {

                    message.innerText =
                        "Enter valid email ❌";

                    message.style.color =
                        "red";
                }

            }
        );
    }

});

// =========================
// 🛒 CART
// =========================
let total = 0;

window.addToCart = function(name, price) {

    total += price;

    let totalBox = document.getElementById("total");
    let cartMessage = document.getElementById("cartMessage");

    if (totalBox) {
        totalBox.innerText = total;
    }

    if (cartMessage) {
        cartMessage.innerText = name + " added to cart!";
    }

    alert(name + " added to cart ✅");
}

// =========================
// CART BUTTON
// =========================
const cartBtn =
    document.getElementById("cart");

if (cartBtn) {

    cartBtn.addEventListener(
        "click",
        function () {
            window.location.href =
                "home.html";
        }
    );

}

let count = 0;

window.addToCart = function(name, price){

    count++;

    document.getElementById("Counter").innerText =
        "🛒 " + count;
        
}

    function subscribe() {
        let email = document.getElementById("email").value;

        if (email === "") {
            alert("Please enter your email!");
        } else {
            alert("Subscribed successfully: " + email);
        }
    }

        import { BrowserRouter, Routes, Route } from "react-router-dom";

    function App() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<h1>Home</h1>} />
            <Route path="/Shop" element={<h1>Shop</h1>} />
                    <Route path="/Men" element={<h1>Men</h1>} />
            <Route path="/Women" element={<h1>Women</h1>} />
            <Route path="/Kids" element={<h1>Kids</h1>} />
      <Route path="/Contact" element={<h1>Contact</h1>} />
          </Routes>
        </BrowserRouter>
      );
    }

    export default App;