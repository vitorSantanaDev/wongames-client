import { GameItemProps } from 'components/GameItem/types'

export default [
  {
    id: '2',
    img: 'https://images.hdqwalls.com/download/cyberpunk-biker-gang-4k-cf-1360x768.jpg',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00',
    downloadLink: 'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
    paymentInfo: {
      flag: 'mastercard',
      image: '/img/Master.png',
      number: '*** *** **** 4326',
      purchasedDate: 'Purchase made on 07/20/2020 at 20:32'
    }
  },
  {
    id: '3',
    img: 'https://images.hdqwalls.com/download/cyberpunk-biker-gang-4k-cf-1360x768.jpg',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00',
    downloadLink: 'https://wongames.com/game/download/kjhejl867asd76DEh',
    paymentInfo: {
      flag: 'visa',
      image: '/img/visa.png',
      number: '*** *** **** 5423',
      purchasedDate: 'Purchase made on 08/20/2020 at 21:12'
    }
  }
] as GameItemProps[]
