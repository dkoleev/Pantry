// External Files
const vue = require('vue')
const vueClipboard = require('vue-clipboard2')

vue.use(vueClipboard)

// CSS
require('./scss/main.scss')

// Components
const landingLeft = require('./components/landingLeft.ts')
const landingRight = require('./components/landingRight.ts')
const topbar = require('./components/topbar.ts')
const bottomBar = require('./components/bottomBar.ts')

// Interfaces
const { IView } = require('../interfaces/view.ts')

const pantry = new vue({
  el: '.app',
  components: {
    landingLeft,
    landingRight,
    topbar,
    bottomBar,
  },
  data() {
    return {
      view: IView.home,
    }
  },
  methods: {
    changeView(view: string) {
      this.view = IView[view]
    },
    copyText(text: string) {
      const _container = this.$refs.container
      this.$copyText(text, _container)
    }
  },
})

export = pantry
