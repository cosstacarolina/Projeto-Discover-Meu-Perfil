function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode add a imagem light
    img.setAttribute("src", "./assets/foto_perfil_claro.jpg")
    img.setAttribute("alt", "Lulu Kawaii Café.")
  } else {
    //se tiver sem light mode, manter imagem
    img.setAttribute("src", "./assets/foto_perfil_escuro.jpg")
    img.setAttribute("alt", "Lulu Doceira Macabra.")
  }
}
