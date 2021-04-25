async function contact() {
    var name = document.querySelector('#name').value
    var email = document.querySelector('#email').value
    var message = document.querySelector('#message').value
    await fetch("https://api.formium.io/submit/6084b5c80304f100014f7bf2/portfolio", {
        method: "POST",
        headers:
            { "Content-Type": "application/json" },
        body: JSON.stringify({
            name,
            email,
            message
        })
    });
}