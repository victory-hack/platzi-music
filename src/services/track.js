import platziMusicService from './platzi-music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

  return platziMusicService.get('pokemon?limit=100&offset=0', {
    params: { q, type }
  })
    .then(res => {
      console.log(res)
      return res.data.results
    })
}

export default trackService
