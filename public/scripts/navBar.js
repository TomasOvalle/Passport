async function printConditions() {
    try {
        let template = "";
        let online = await fetch("/api/sessions/online");
        online = await online.json();
        if (online.statusCode === 200) {
            template = `                    
                <input class="signOut-button" type="button" id="SignOut" value="Sign Out!">
                <a href="./carts.html">
                    <input type="button" value="Cart">
                </a>`;
                document.querySelector("#conditions").innerHTML = template;
                document.querySelector("#SignOut").addEventListener("click", async () => {
                    const opts = {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                    };
                    let response = await fetch("/api/sessions/signout", opts);
                    response = await response.json();
                    console.log(response);
                    if (response.statusCode === 200) {
                        location.replace("/pages/index.html")
                    }
                })
        } else {
            template = `<a href="./login.html">
                            <input type="button" name="Login" value="Login">
                        </a>`
            document.querySelector("#conditions").innerHTML = template;
        }
    } catch (error) {
        console.log(error);
    }
}

printConditions();