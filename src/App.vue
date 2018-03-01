<template>
  <div id="app" class="font-sans antialised leading-normal min-h-screen">
    <div class="container mx-auto py-10">
      <div class="flex justify-center mb-16">
        <router-link to="/encode" active-class="active" class="text-3xl text-grey-dark hover:text-grey-darkest mr-4 no-underline border-b-4 border-transparent hover:border-blue">Encode</router-link>
        <router-link to="/decode" active-class="active" class="text-3xl text-grey-dark hover:text-grey-darkest mr-4 no-underline border-b-4 border-transparent hover:border-blue">Decode</router-link>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.active {
  color: #3d4852;
  border-bottom-width: 4px;
  border-color: #3490dc;
}
</style>
