document.querySelector("#login").addEventListener("click", async () => {
    const data = {
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
    }
    const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    }
    console.log(data);
    let response = await fetch("/api/sessions/login", opts)
    response = await response.json()
    console.log(response);
    if (response.statusCode === 200) {
        location.replace("/pages/index.html")
    }
    return Swal.fire({
        title: response.message,
        icon: "error",
        timer: 5000,
        timerProgressBar: true,
        confirmButtonColor: "#ff3b3c",
    });
});

