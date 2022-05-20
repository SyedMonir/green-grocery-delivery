module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#4E944F',
          secondary: '#E9EFC0',
          accent: '#83BD75',
          neutral: 'black',
          'base-100': 'white',
          info: '#98A8DD',
          success: '#1BBB70',
          warning: '#DF7E07',
          error: '#FA5C5C',
        },
      },
      {
        dark: {
          primary: '#16222A',
          secondary: '#16222A',
          accent: '#3A6073',
          neutral: 'white',
          'base-100': '#16222A',
          info: '#98A8DD',
          success: '#1BBB70',
          warning: '#F59E0B',
          error: '#FB7185',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
