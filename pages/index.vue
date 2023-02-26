<template>
  <main>
    <Hero />
    <ProjectSection v-for="(project, projectIndex) in projects" :key="projectIndex" :count="project.count" :title="project.title" :image="project.image" :tag="project.tag" />
  </main>
</template>

<script>
export default {
  name: "IndexPage",

  data() {
    return {
      projects: [
        {
          count: '01/',
          title: "Discovery <br> Land Co",
          image: require('~/assets/images/6da0724185ada78281d89cf5496fa105fb5c4e75-2244x1632.webp'),
          tag: 'Website <br> Design'
        },
        {
          count: '02/',
          title: "Bear <br>  Grylls",
          image: require('~/assets/images/f6305f173c05d855f8f16bbbb8b2f68c936b3b9e-2880x1830.webp'),
          tag: 'Website <br> Design'
        },
        {
          count: '03/',
          title: "Fit for <br>  duty",
          image: require('~/assets/images/e86597fe8205026f2bbbf69070d43fc1299d2096-2880x1836.webp'),
          tag: 'Website <br> Design'
        },
        {
          count: '04/',
          title: "Verity <br>  Studios",
          image: require('~/assets/images/5dc7c72073d4698d638d33cd4da973237cbaa829-2880x1836.webp'),
          tag: 'Website <br> Design'
        }
      ],
    };
  },
};
</script>
