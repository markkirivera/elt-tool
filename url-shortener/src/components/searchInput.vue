<template>
  <div class="container">
    <input
      @keydown.enter="checkUrl"
      v-model="input"
      type="url"
      placeholder="Paste URL"
    />
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup() {
    const input = ref('');

    function checkUrl() {

      var res = input.value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

      if (res !== null) {

        const url = new URL(
          "https://t.ly/api/v1/link/shorten"
        );

        let params = {
          "api_token": "DyNj9talGy1oPKReBx5b0Xy92GvgYfwPJNkPd0QVXNbXU2ev5wx0UcZXBz3K",
        };
        Object.keys(params)
          .forEach(key => url.searchParams.append(key, params[key]));

        let headers = {
          "Content-Type": "application/json",
          "Accept": "application/json",
        };

        let body = {
          "long_url": input.value,
          "domain": "https:\/\/short.com\/",
          "include_qr_code": false
        }

        fetch(url, {
          method: "POST",
          headers,
          body: JSON.stringify(body),
        })
          .then(response =>
            response.json()
          );

        console.log('valid url')
      } else {
        console.log('not url')
      }

      //   console.log(input.value)
    }

    return { input, checkUrl }
  }
}
</script>

<style>
input {
  width: 50%;
  margin: 2em auto;
  padding: 0.5em 1em;
  font-size: 15px;
  border-radius: 10px;
  border: 1px solid #000;
  outline: none;
}
</style>