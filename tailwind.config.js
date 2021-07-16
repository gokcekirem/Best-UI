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
        'MainColorInactive': '#bccbdc',
        'MainColorActive': '#3fabc8',
        'ActiveAreaCard': '#ffffff',
        'ActiveAreaRadioButtonActive': '#688aaf',
        'ActiveAreaFillInBox': '#d2dce7',
        'MainTextActive': 'rgba(3, 52, 95, 1)',
        'MainTextInactive': 'rgba(3, 52, 95, 0.5)',
        'ActiveAreaBackground': '#daebff',
        'InputBoxInactiveColor': 'rgba(19, 66, 93, 0.25)',
        'InputBoxActiveColor': 'rgba(19, 66, 93, 0.5)'
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