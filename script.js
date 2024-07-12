document.addEventListener('DOMContentLoaded', function() {
    function atualizarRelogio() {
        var dataAtual = new Date();
        var dataFormatada = "date-and-time: " + dataAtual.toLocaleString();
        document.getElementById("date-and-time").innerText = dataFormatada;
    }
    atualizarRelogio();

    setInterval(atualizarRelogio, 1000);
});