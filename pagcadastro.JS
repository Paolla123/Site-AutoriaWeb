const cadastro = JSON.parse(localStorage.getItem('cadastro')) || []; // localStorage
const NomeInput = document.getElementById("Nome");
    const NomeText = NomeInput.value;
    const GrupoInput = document.getElementById("Grupo");
    const GrupoText = GrupoInput.value;
    const AlturaInput = document.getElementById("Altura");
    const AlturaNumber = AlturaInput.value;
    const LarguraInput = document.getElementById("Largura");
    const LarguraText = LarguraInput.value;
    
function butao1() {
    const fulano = ({
    Nome: NomeInput.value,
    Grupo: GrupoInput.value,
    Altura: AlturaInput.value,
    Largura: LarguraInput.value


});
cadastro.push(fulano);

localStorage.setItem("fulano", JSON.stringify(cadastro))
}




