const movies = document.querySelectorAll('.movie video')

movies.forEach((movie) => {
  movie.addEventListener('mouseover', playVideo)
  movie.addEventListener('mouseout', stopVideo)
})

function playVideo(e) {
  setTimeout(() => {
    e.target.muted = false
    e.target.play()
  }, 800)
}

function stopVideo(e) {
  setTimeout(() => {
    e.target.muted = true
    e.target.load()
    e.target.pause()
  }, 800)
}
