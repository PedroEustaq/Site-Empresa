var animado = document.getElementById("cor");
var arrastaPEsq = document.getElementById("Pronto");

if (!window.matchMedia("(max-width: 768px)").matches) {


window.addEventListener('scroll', () => {
    
    var ScrolouTopo = window.scrollY;
    var alturaDaPag = document.body.scrollHeight - window.innerHeight
    var porcentagemdeRolagem = (ScrolouTopo / alturaDaPag) * 900;

    var invertiPorc = 900 - porcentagemdeRolagem;
    var alem = -900 + porcentagemdeRolagem


    animado.style.transform = 'translateX(' + parseInt(-900 + porcentagemdeRolagem) + 'px)';
    arrastaPEsq.style.transform = 'translateX(' + parseInt(invertiPorc) + 'px)';

   // animado.style.backgroundColor = 'green';
   //window.alert(parseInt(alem));

})
}