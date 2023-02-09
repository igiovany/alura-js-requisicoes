import { conectApi } from "./conectApi.js"

const list = document.querySelector("[data-list")

export default function buildCard(title, description, url, image) {
  const video = document.createElement("li")
  video.className = "videos__item"
  video.innerHTML = `
    <iframe width="100%" height="72%" src="${url}" title="${title}"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <div class="descricao-video">
      <img src="${image}" alt="logo canal alura">
      <h3>${title}</h3>
      <p>${description}</p>
    </div>
  `
  return video
}




async function listVideos() {
  const apiList = await conectApi.listVideos()
  apiList.forEach(element => list.appendChild(buildCard(element.title, element.description, element.url, element.image)));

}

listVideos()