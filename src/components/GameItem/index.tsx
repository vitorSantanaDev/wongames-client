import { useCart } from 'hooks/use-cart'
import { Download } from '@styled-icons/boxicons-solid'
import { GameItemProps } from './types'

import * as S from './styles'

const GameItem = ({
  id,
  img,
  price,
  title,
  paymentInfo,
  downloadLink
}: GameItemProps) => {
  const { isInCart, removeFromCart } = useCart()
  return (
    <S.Wrapper>
      <S.GameContent>
        <S.ImageBox>
          {/*eslint-disable-next-line @next/next/no-img-element*/}
          <img src={img} alt={title} />
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
          <S.Group>
            <S.Price>{price}</S.Price>
            {isInCart(id) && (
              <S.Remove onClick={() => removeFromCart(id)}>Remove</S.Remove>
            )}
          </S.Group>
        </S.Content>
      </S.GameContent>
      {!!paymentInfo && (
        <S.PaymentContent>
          <div>{paymentInfo.purchasedDate}</div>
          <S.CardInfo>
            <span>{paymentInfo.number}</span>

            {paymentInfo.image && paymentInfo.flag ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={paymentInfo.image} alt={paymentInfo.flag} />
            ) : null}
          </S.CardInfo>
        </S.PaymentContent>
      )}
    </S.Wrapper>
  )
}

export default GameItem
