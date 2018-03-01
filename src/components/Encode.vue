<template>
  <div>
    <div class="flex mb-8">
      <div class="w-5/6 md:w-2/3 lg:w-1/2 mx-auto">
        <h1 class="text-grey-darkest mb-8">Base 64 Encode</h1>
        <form class="mb-8">
          <textarea class="border border-grey rounded w-full leading-normal text-grey-darkest mb-2" rows="10" v-model="text"></textarea>
        </form>
      </div>
    </div>
    <div v-if="base64Encoded">
      <div class="flex">
        <div class="w-5/6 md:w-2/3 lg:w-1/2 mx-auto">
          <div class="flex flex-col md:flex-row">
            <p class="overflow-y-scroll break-words text-grey-darkest font-semibold mr-2 mb-4 md:mb-0">{{base64Encoded}}</p>
            <div class="flex justify-center md:justify-end items-start">
              <button v-clipboard="base64Encoded" @success="handleSuccess('Copied Code')" class="px-4 py-2 text-grey-darker bg-white hover:bg-grey-lightest rounded border flex items-center mr-2 md:mr-4 md:mb-1 md:mb-4 md:w-full">
                <svg class="stroke-current text-grey-darker w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                  <g class="nc-icon-wrapper" fill="#444444">
                    <path d="M32 2H8C5.79 2 4 3.79 4 6v28h4V6h24V2zm6 8H16c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h22c2.21 0 4-1.79 4-4V14c0-2.21-1.79-4-4-4zm0 32H16V14h22v28z"></path>
                  </g>
                </svg>
                <span>Code</span>
              </button>
              <button v-clipboard="base64EncodedUrl" @success="handleSuccess('Copied Url')" class="px-4 py-2 text-grey-darker bg-white hover:bg-grey-lightest rounded border flex items-center md:w-full">
                <svg class="stroke-current text-grey-darker w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                  <g class="nc-icon-wrapper" fill="#444444">
                    <path d="M32 2H8C5.79 2 4 3.79 4 6v28h4V6h24V2zm6 8H16c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h22c2.21 0 4-1.79 4-4V14c0-2.21-1.79-4-4-4zm0 32H16V14h22v28z"></path>
                  </g>
                </svg>
                <span>Url</span>
              </button>
            </div>
          </div>
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
      text: ''
    }
  },
  methods: {
    handleSuccess (text) {
      this.$toasted.show(text, {
        theme: 'primary',
        position: 'top-right',
        duration: 3000
      })
    }
  },
  computed: {
    base64Encoded () {
      return base64.encode(utf8.encode(this.text))
    },
    base64EncodedUrl () {
      return 'http://localhost:8080/decode/' + this.base64Encoded
    }
  }
}
</script>
