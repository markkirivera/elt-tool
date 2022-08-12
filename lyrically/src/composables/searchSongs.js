import { ref } from 'vue'

const searchSongs = (input) => {
    const url = 'https://api.musixmatch.com/ws/1.1/track.search?'
    const key = 'e2c0394d2ae434d36886cbed8785c52b'
    const config = {
        headers: { 'Access-Control-Allow-Origin': '*' }
    };

    const songs = ref([])
    const error = ref(null)

    const load = async() => {
        try {
            let data = await fetch(url + 'apikey=' + key + '&q_track=', { method: 'GET' })

            if (!data.ok) {
                throw Error('No post available')
            }

            songs.value = await data.json()
            console.log(songs.value)
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { songs, error, load }
}

export default searchSongs