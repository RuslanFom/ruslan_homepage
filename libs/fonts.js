import localFont from 'next/font/local'

export const mPlusRounded1c = localFont({
  src: [
    {
      path: '../public/fonts/MPLUSRounded1c-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/MPLUSRounded1c-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/MPLUSRounded1c-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/MPLUSRounded1c-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-mplus-rounded-1c',
})