<template>
  <div class="categories-wrapper">
    <Common :sidebar="false" :isComment="false">
      <h2 class="title">{{ title }}</h2>

      <note-abstract 
        :data="posts"
        :currentPage="currentPage"
        @currentTag="getCurrentTag"></note-abstract>
      
      <pagation 
        :data="posts"
        :currentPage="currentPage"
        @getCurrentPage="getCurrentPage"></pagation>
    </Common>
  </div>
</template>

<script>
import Common from '@theme/components/Common.vue'
import NoteAbstract from '@theme/components/NoteAbstract.vue'
import Pagation from '@theme/components/Pagation.vue'

export default {
  components: { Common, NoteAbstract, Pagation },

  data () {
    return {
      currentPage: 1
    }
  },

  computed: {
    posts () {
      let posts = this.$category.posts
      posts.sort((a, b) => {
        return this._getTimeNum(b) - this._getTimeNum(a)
      })
      this.getCurrentPage(1)
      return posts
    },
    title () {
      return this.$page.frontmatter.title.split('|')[0]
    }
  },

  methods: {
    getCurrentTag (tag) {
      this.$emit('currentTag', tag)
    },
    getCurrentPage (page) {
      this.currentPage = page
      this.$page.currentPage = page
    },
    _getTimeNum (date) {
      return parseInt(new Date(date.frontmatter.date).getTime())
    }
  }
}
</script>

<style src="../styles/theme.styl" lang="stylus"></style>

<style lang="stylus" scoped>
.categories-wrapper
  max-width: 740px;
  margin: 0 auto;
  padding: 4.6rem 2.5rem 0; 
  .title
    margin-bottom 3rem

@media (max-width: $MQMobile)
  .categories-wrapper
    padding: 4.6rem 1rem 0;
  .page-edit
    .edit-link
      margin-bottom .5rem
    .last-updated
      font-size .8em
      float none
      text-align left
</style>