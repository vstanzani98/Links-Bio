function updateImage() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if (!img) return // evita erro

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/eu sanf-light.jpeg")
  } else {
    img.setAttribute("src", "./assets/eu sanf.jpeg")
  }
}

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  updateImage()
}

// roda quando a página carregar
document.addEventListener("DOMContentLoaded", updateImage)
