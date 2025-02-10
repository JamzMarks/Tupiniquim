document.getElementById("newsLetterForm").addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById("NLEmailInput").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Regex
    if (emailPattern.test(email)) {
        console.log('ok');
        alert('Um link de confirmação foi enviado para o seu e-mail. Por favor, verifique sua caixa de entrada.');
        
    } else {
        console.log('nao ok')
        alert('Insira um e-mail valido!');
    }
})