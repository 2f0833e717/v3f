<template>
  <div class="q-pa-md flex justify-center">
    <q-parallax
      :height="440"
    >
      <template v-slot:media>
        <!-- https://gist.github.com/jsturgis/3b19447b304616f18657 -->
        <video
          width="1720"
          height="440"
          poster="~assets/486px-Tos-poster.png"
          autoplay
          loop
          muted
        >
          <source
            type="video/mp4"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
          >
        </video>
      </template>
      <h5 class="text-white">
        By Blender Foundation 'Tears Of Steel'
      </h5>
      <div style="max-width: 90%; ">
        <q-linear-progress
          dark
          rounded
          indeterminate
          color="secondary"
          class="q-mt-sm"
        />
        <q-linear-progress
          dark
          query
          color="primary"
          class="q-mt-sm"
        />
        <!-- About list                 ################################ -->
        <q-intersection
          transition="flip-right"
          class="list-item q-pamd"
        >
          <q-item
            v-ripple
            clickable
          >
            <q-item-section avatar>
              <q-avatar
                size="40px"
                icon="mail"
                color="primary"
                text-color="white"
              />
            </q-item-section>

            <q-item-section>
              <q-item-label>Contact</q-item-label>
              <q-item-label
                caption
                lines="1"
              >
                skinoshita202001082135@gmail.com
              </q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-spinner-audio color="secondary" />
            </q-item-section>
          </q-item>
          <q-item
            v-ripple
            clickable
          >
            <q-item-section avatar>
              <q-avatar
                size="40px"
                icon="account_circle"
                color="primary"
                text-color="white"
              />
            </q-item-section>

            <q-item-section>
              <q-item-label
                caption
                lines="1"
              >
                <q-btn
                  outline
                  clickable
                  style="color: goldenrod;max-width: 90%;"
                  label="src"
                  @click="toLinkGitHub"
                />
              </q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-spinner-audio color="secondary" />
            </q-item-section>
          </q-item>
        </q-intersection>
        <q-linear-progress
          dark
          query
          color="primary"
          class="q-mt-sm"
        />
        <q-linear-progress
          dark
          rounded
          indeterminate
          color="secondary"
          class="q-mt-sm"
        />
      </div>
    </q-parallax>
  </div>
</template>

<script>
import { openURL } from "quasar"
export default {

  name: "About",

  progress1: 0.4,
  progress2: 0.62,
  methods: {
    toLinkGitHub(){
      openURL("https://github.com/2f0833e717/v3f")
    }
  }


}
</script>

<style lang="scss" scoped>
  list-item{
    height: 56px;
    width: 300px;
  }
</style>
