const movies = document.querySelectorAll('.movie video')
const body = document.querySelector('body')

movies.forEach((movie) => {
  movie.play()
  movie.addEventListener('mouseover', playVideo)
  movie.addEventListener('mouseout', stopVideo)
})

body.addEventListener('mouseover', () => {
  movies.forEach((movie) => {
    movie.mute = true
  })
})

function playVideo(e) {
  setTimeout(() => {
    e.target.muted = false
    e.target.autoplay = true
    e.target.play()
  }, 800)
}

function stopVideo(e) {
  e.target.muted = true
}
