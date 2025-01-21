function toggleSidebar(){
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("toggle_btn")
    const overlay = document.getElementById("overlat");

    if(sidebar.style.width === "250px"){
        //cierre la barra
        sidebar.style.width = "0";
        overlay.style.display = "none"; //oculta el desenfoque
        toggleBtn.textContent = "☰"; //Cambia el botón abrir
    } else {
        //Abre la barra
        sidebar.style.width = "250px"
        overlay.style.display = "block"; //abre el desenfoque
        toggleBtn.textContent = "✖"
    }
}

document.getElementById("overlay").addEventListener("click", () => {
    const sidebar = document.getElementById("sidebar");
    const overlat = document.getElementById("overlay");
    const toggleBtn = document.getElementById("toggle_btn");

    sidebar.style.width="0";//cierra la barra
    overlat.style.display="none";//ocultar superposicion o desenfoque
    toggleBtn.textContent="☰";

});