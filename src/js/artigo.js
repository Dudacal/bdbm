function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "deboradasbrazp2006@gmail.com",
        Password: "0C8282B65D3D21E41BE38728CEA5E66B2967",
        To: "deboradasbrazp2006@gmail.com",
        From: "deboradasbrazp2006@gmail.com",
        Port: "2525",
        ReplyFrom: document.getElementById("email").value,
        Subject: "Mensagem de " + document.getElementById("nome").value,
        Body: "Primeiro nome / Apelido : " + document.getElementById("nome").value +
            "<br>E-mail: " + document.getElementById("email").value +
            "<br><br> Primeira questão: " + document.querySelector('input[name="quest1"]:checked').value +
            "<br>Segunda questão: " + document.querySelector('input[name="quest2"]:checked').value +
            "<br>Terceira questão: " +document.querySelector('input[name="quest3"]:checked').value +
            "<br>Quarta questão: " + document.querySelector('input[name="quest4"]:checked').value
    }).then(
        message => alert(message)
    );
}
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Concordo totalmente', 'Concordo parcialmente', 'Neutro', 'Discordo parcialmente', 'Discordo totalmente'],
        datasets: [{
            label: 'Total de votos',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});