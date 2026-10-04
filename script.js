function sendmail(event) {
    event.preventDefault(); // ✅ stop the form from reloading the page

    const templateParams = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value,
        number: document.querySelector("#number").value,
    };

    emailjs.send("service_f11gerp", "template_pvzv91a", templateParams)
        .then(() => {
            alert("Email Sent!");
        })
        .catch((err) => {
            alert("Failed to send: " + err.text);
        });
}