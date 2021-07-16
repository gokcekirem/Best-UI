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
       'ActiveAreaCard': 'rgba(205,216,203,0.50)',
       'ActiveAreaRadioButtonActive': '#CDD8CB',
       'ActiveAreaFillInBox': '#BBC2BA',
       'MainTextActive': '#EBEBEB',
       'MainTextInactive': '#B3B3B3',
       'ActiveAreaBackground': '#EAF2E9',
       'InputBoxInactiveColor': 'rgba(187,194,186,0.50)',
       'InputBoxActiveColor': 'rgba(52,54,51,0.50)'
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