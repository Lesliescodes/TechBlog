async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    //route to login page
    try {

        if (username && password) {
            const response =
                await fetch('/api/login', {
                    method: 'POST',
                    body: JSON.stringify({
                        username: username,
                        password: password
                    }),
                    headers: { 'Content-Type': 'application/json' }
                });
            console.log(response)
            if (response.ok) {
                document.location.replace('/dashboard');
            }
            else {
                alert(response.statusText);
            }
        }
    }
    catch (error) {
        console.log(error)
    }
}


document.querySelector('.yellow').addEventListener('click', loginFormHandler);