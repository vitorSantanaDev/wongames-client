import { Download } from '@styled-icons/boxicons-solid'
import { GameItemProps } from './types'

import * as S from './styles'

const GameItem = ({
  image,
  price,
  title,
  paymentInfo,
  downloadLink
}: GameItemProps) => (
  <S.Wrapper>
    <S.GameContent>
      <S.ImageBox>
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img src={image} alt={title} />
      </S.ImageBox>
      <S.Content>
        <S.Title>
          {title}
          {!!downloadLink && (
            <S.DownloadLink
              href={downloadLink}
              target="_blank"
              aria-label={`Get ${title} here`}
            >
              <Download size={22} />
            </S.DownloadLink>
          )}
        </S.Title>
        <S.Price>{price}</S.Price>
      </S.Content>
    </S.GameContent>
    {!!paymentInfo && (
      <S.PaymentContent>
        <div>{paymentInfo.purchasedDate}</div>
        <S.CardInfo>
          <span>{paymentInfo.number}</span>
          {/*eslint-disable-next-line @next/next/no-img-element*/}
          <img src={paymentInfo.image} alt={paymentInfo.flag} />
        </S.CardInfo>
      </S.PaymentContent>
    )}
  </S.Wrapper>
)

export default GameItem
