<template>
  <div class="">
    <div class="flex mb-8">
      <div class="w-5/6 md:w-2/3 lg:w-1/2 mx-auto">
        <h1 class="text-grey-darkest mb-8">Base 64 Decode</h1>
        <form class="mb-8">
          <textarea class="border border-grey rounded w-full leading-normal text-grey-darkest mb-2" rows="10" v-model="text"></textarea>
        </form>
      </div>
    </div>
    <div>
      <div class="flex">
        <div class="w-5/6 md:w-2/3 lg:w-1/2 mx-auto">
          <div class="hidden">{{decodedText}}</div>
          <ul class="list-reset">
            <li v-for="(t, i) in decodedArr" :key="i" class="w-full mb-4 flex flex-col md:flex-row items-center md:items-start border-b md:border-none pb-2 md:pb-0">
              <a v-if="t.url" :href="t.text" class="overflow-y-scroll break-words no-underline hover:underline text-blue-darker font-semibold md:mr-6 mb-2 md:mb-0">{{t.text}}</a>
              <span v-else class="overflow-y-scroll break-words text-grey-darkest font-semibold md:mr-6 mb-2 md:mb-0">{{t.text}}</span>
              <div class="flex justify-end">
                <button v-clipboard="t.text" @success="handleSuccess" class="px-4 py-2 text-grey-darker bg-white hover:bg-grey-lightest rounded border flex items-center">
                  <svg class="stroke-current text-grey-darker w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                    <g class="nc-icon-wrapper" fill="#444444">
                      <path d="M32 2H8C5.79 2 4 3.79 4 6v28h4V6h24V2zm6 8H16c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h22c2.21 0 4-1.79 4-4V14c0-2.21-1.79-4-4-4zm0 32H16V14h22v28z"></path>
                    </g>
                  </svg>
                  <span>Copy</span>
                </button>
                <a v-if="t.url" :href="t.text" target="_blank" class="px-4 py-2 text-grey-darker bg-white hover:bg-grey-lightest rounded border flex items-center ml-4 no-underline">
                  <svg class="stroke-current text-grey-darker w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                    <g class="nc-icon-wrapper" fill="#444444">
                      <path d="M6 16.82l18 18 14-14V30h4V14H26v4h9.18L24 29.18 8.82 14 6 16.82z"></path>
                    </g>
                  </svg>
                  <span>Go</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import base64 from 'base-64'
import utf8 from 'utf8'

export default {
  data () {
    return {
      text: this.$route.params.hashcode || '',
      decodedArr: []
    }
  },
  methods: {
    handleSuccess (e) {
      this.$toasted.show('Copied text', {
        theme: 'primary',
        position: 'top-right',
        duration: 3000
      })
    },
    splitText (text) {
      this.decodedArr = []
      let t = text.split('\n')
      let rgx = /^(?:http(s)?:\/\/)/gm
      t.map(n => {
        let url = false
        if (n !== '') {
          n.match(rgx) ? (url = true) : (url = false)
          this.decodedArr = [...this.decodedArr, { text: n, url: url }]
        }
        return this.decodedArr
      })
    }
  },
  computed: {
    base64Decoded () {
      return (utf8.decode(base64.decode(this.text)))
    },
    decodedText () {
      return this.splitText(this.base64Decoded)
    }
  }
}
</script>
