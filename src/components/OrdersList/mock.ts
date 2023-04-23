import { OrderProps } from './types'

export default [
  {
    id: '1',
    paymentInfo: {
      flag: 'visa',
      image: '/img/cards/visa.png',
      number: '**** **** **** 4242',
      purchasedDate: 'Purchase made on Apr 14, 2021'
    },
    games: [
      {
        id: '1',
        title: 'game',
        downloadLink:
          'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
        img: 'http://localhost:1337/image.jpg',
        price: '$10.00'
      }
    ]
  },
  {
    id: '2',
    paymentInfo: {
      flag: 'mastercard',
      image: '/img/cards/mastercard.png',
      number: '**** **** **** 5555',
      purchasedDate: 'Purchase made on Apr 14, 2021'
    },
    games: [
      {
        id: '3',
        title: 'game',
        downloadLink:
          'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
        img: 'http://localhost:1337/image.jpg',
        price: '$10.00'
      }
    ]
  }
] as OrderProps[]
