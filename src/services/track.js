import platziMusicService from './platzi-music'
import trae from 'trae'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

  return platziMusicService.get('pokemon?limit=100&offset=0', {
    params: { q, type }
  })
    .then(res => {
      return res.data.results
    })
}

trackService.findById = function (q) {
  return trae.get(q)
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      console.error(err)
    })
}

export default trackService
