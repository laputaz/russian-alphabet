// import Vue from '/node_modules/vue/dist/vue.esm.browser.js'

const alphabetsUp = [
  'А',
  'Б',
  'В',
  'Г',
  'Д',
  'Е',
  'Ё',
  'Ж',
  'З',
  'И',
  'Й',
  'К',
  'Л',
  'М',
  'Н',
  'О',
  'П',
  'Р',
  'С',
  'Т',
  'У',
  'Ф',
  'Х',
  'Ц',
  'Ч',
  'Ш',
  'Щ',
  'Ъ',
  'Ы',
  'Ь',
  'Э',
  'Ю',
  'Я'
]

const alphabetsLow = [
  'а',
  'б',
  'в',
  'г',
  'д',
  'е',
  'ё',
  'ж',
  'з',
  'и',
  'й',
  'к',
  'л',
  'м',
  'н',
  'о',
  'п',
  'р',
  'с',
  'т',
  'у',
  'ф',
  'х',
  'ц',
  'ч',
  'ш',
  'щ',
  'ъ',
  'ы',
  'ь',
  'э',
  'ю',
  'я'
]

const getRandomHex = () => {
  // 0 ~ 15 in hex
  return Math.round(Math.random() * 15).toString(16)
}

const randomColors = () => {
  // 0 ~ 15
  let color = '#'
  for (let i = 0; i <= 5; i++) {
    color += getRandomHex()
  }
  return color
}

const randomAlphabet = (index = Math.round(Math.random() * 32)) => {
  return [alphabetsUp[index], alphabetsLow[index]]
}

new Vue({
  el: '#app',
  data: {
    alphabetUp: '',
    alphabetLow: '',
    backgroundColor: '',
    isRandom: false,
    currentIndex: 0
  },
  methods: {
    click() {
      let alphabets = []
      if (!this.isRandom) {
        if (this.currentIndex >= 33) {
          this.currentIndex = 0
        }
        alphabets = randomAlphabet(this.currentIndex)
        this.currentIndex += 1
      } else {
        alphabets = randomAlphabet()
      }
      this.alphabetUp = alphabets[0]
      this.alphabetLow = alphabets[1]
      this.backgroundColor = randomColors()
    },
    toggleRandom() {
      this.isRandom = !this.isRandom
      this.currentIndex = 0
    }
  },
  created() {
    this.click()
  }
})
