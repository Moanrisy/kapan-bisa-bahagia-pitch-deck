---
transition: slide-left
---

# Overview
Premis cerita


Kapan Bisa Bahagia adalah game visual novel yang bercerita tentang damar. Seorang gen z yang selalu bertanya-tanya kapan dia bisa bahagia?

<v-clicks>

<span v-mark.highlight.red="3"> Damar sangat membenci hidupnya.</span>  Dia selalu mengeluh dan banyaknya tekanan hidup membuat damar hampir bertemu Tuhan.

Hingga ia diselamatkan oleh seorang kakek-kakek yang 
<span v-mark.box.red="5">mengubah pandangannya soal hidup </span>.
Mampukah damar merubah benci nya pada kehidupan <span v-mark.highlight.green="4">menjadi cinta?</span>

</v-clicks>

<!-- - 📝 **popular, easy** to learn programming language.

<v-clicks>

- 🛠 suitable for fast **prototyping**
- 🧑‍💻 commonly used in the field of **data analysis**, **machine learning** and **AI**.

</v-clicks> -->

<!-- <v-clicks>

It has very efficient libraries available to process large amounts of data including libraries such of `NumPy`, `Pandas`, `Matplotlib` and `SciPy` that we will familiarize ourselves with during this course.

</v-clicks> -->


<!-- [python docs!](https://docs.python.org/3/) -->

<!-- <div class="w-60 relative">
  <div class="relative w-40 h-40">
    <img
      v-motion
      :initial="{ x: 800, y: -100, scale: 2, rotate: -100 }"
      :enter="final"
      class="absolute inset-0"
      src="https://sli.dev/logo-square.png"
      alt=""
    />
    <img
      v-motion
      :initial="{ x: 600, y: 400, scale: 2, rotate: 100 }"
      :enter="final"
      class="absolute inset-0"
      src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
      alt=""
    />
  </div>

  <div
    class="text-5xl absolute top-14 left-40 text-[#f0ec07] -z-1"
    v-motion
    :initial="{ x: -80, opacity: 0}"
    :enter="{ x: 0, opacity: 1, transition: { delay: 2000, duration: 1000 } }">
    Python
  </div>
</div> -->

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!-- vue script setup scripts can be directly used in markdown, and will only affects current page -->
<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}
</script>

