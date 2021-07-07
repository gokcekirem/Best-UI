/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 **
 ** Global Color 
 */
module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    extend: {
      colors: {
       'MainColorInactive': '#062300',
       'MainColorActive': '#105700',
       'ActiveAreaCard': '#CDD8CB',
       'ActiveAreaRadioButtonActive': '#CDD8CB',
       'ActiveAreaFillInBox': '#BBC2BA',
       'MainTextActive': '#EBEBEB',
       'MainTextInactive': '#B3B3B3',
       'ActiveAreaBackground': '#EAF2E9'
      },
      fontFamily: {
          'Black': ['Objective-Black'],
          'Bold': ['Objective-Bold'],
          'Extra-Bold': ['Objective-ExtraBold'],
          'Normal': ['Objective-Normal'],
          'Light': ['Objective-Light'],
          'Medium': ['Objective-Medium'],
          'Super': ['Objective-Super'],
          'Thin': ['Objective-Thin']
      },
      fontSize: {
        'bestFontSmall': '0.625rem',
        'bestFontMedium': '0.938rem',
        'bestFontLarge': '1.563rem',
        'bestFontExtraLarge': '3rem'
      }
    }
  },
  variants: {},
  plugins: []
}