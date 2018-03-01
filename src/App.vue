<template>
  <div id="app" class="font-sans antialised leading-normal min-h-screen flex flex-col">
    <div class="container mx-auto py-10 flex-1">
      <header class="flex justify-center mb-16">
        <router-link to="/encode" active-class="active" class="text-3xl text-grey-darkest hover:text-black mr-4 no-underline border-b-4 border-transparent hover:border-blue">Encode</router-link>
        <router-link to="/decode" active-class="active" class="text-3xl text-grey-darkest hover:text-black mr-4 no-underline border-b-4 border-transparent hover:border-blue">Decode</router-link>
      </header>
      <router-view/>
    </div>
    <footer class="self-center pb-8">
      <a href="https://github.com/zulfadhli4141" target="_blank" rel="noopener">
        <svg class="w-8 h-8 mr-2" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 20 20" width="20" height="20"><g class="nc-icon-wrapper" fill="#3d4852"><path fill="#3d4852" d="M13.18 11.309c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801s1.3-.807 1.3-1.801c-.001-.992-.582-1.799-1.3-1.799zm4.526-4.683c.149-.365.155-2.439-.635-4.426 0 0-1.811.199-4.551 2.08-.575-.16-1.548-.238-2.519-.238-.973 0-1.945.078-2.52.238C4.74 2.399 2.929 2.2 2.929 2.2c-.789 1.987-.781 4.061-.634 4.426C1.367 7.634.8 8.845.8 10.497c0 7.186 5.963 7.301 7.467 7.301l1.734.002 1.732-.002c1.506 0 7.467-.115 7.467-7.301 0-1.652-.566-2.863-1.494-3.871zm-7.678 10.289h-.056c-3.771 0-6.709-.449-6.709-4.115 0-.879.31-1.693 1.047-2.369C5.537 9.304 7.615 9.9 9.972 9.9h.056c2.357 0 4.436-.596 5.664.531.735.676 1.045 1.49 1.045 2.369 0 3.666-2.937 4.115-6.709 4.115zm-3.207-5.606c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801.719 0 1.301-.807 1.301-1.801 0-.992-.582-1.799-1.301-1.799z"></path></g></svg>
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.active {
  color: #22292f;
  font-weight: 600;
  border-bottom-width: 4px;
  border-color: #3490dc;
}
</style>
