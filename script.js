document.addEventListener("DOMContentLoaded", () => {

    // FEED PAGE - CREATE POST
    const postForm = document.querySelector(".create-post form");
    if (postForm) {
        postForm.addEventListener("submit", e => {
            e.preventDefault();
            const textarea = postForm.querySelector("textarea");
            if (textarea.value.trim() === "") return;

            const newPost = document.createElement("div");
            newPost.className = "post-card";
            newPost.innerHTML = `
                <div class="post-content">
                    <p>${textarea.value}</p>
                </div>
            `;
            document.querySelector(".feed-container").prepend(newPost);
            textarea.value = "";
        });
    }

    // LOGIN PAGE - SIMPLE CHECK
    const loginForm = document.querySelector(".login-box form");
    if (loginForm) {
        loginForm.addEventListener("submit", e => {
            const email = loginForm.email.value.trim();
            const pass = loginForm.password.value.trim();
            if (!email || !pass) {
                e.preventDefault();
                alert("Please fill all fields");
            }
        });
    }

    // OPTIONAL: CHARACTER COUNTER
    const textarea = document.querySelector("textarea");
    const counter = document.getElementById("charCount");
    if (textarea && counter) {
        textarea.addEventListener("input", () => {
            counter.textContent = textarea.value.length;
        });
    }

});


