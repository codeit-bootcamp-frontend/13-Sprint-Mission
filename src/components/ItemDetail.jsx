import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemInfo } from "../api/itemApi";
import styled from "styled-components";
import theme from "../styles/theme";
import noneImg from "../assets/images/icons/noneImg.svg";
import { ic_heart } from "../assets/images/icons/ic_heart.svg";

export default function ItemDetail() {
  const { itemId } = useParams();
  const [item, setItem] = useState({
    name: "",
    description: "",
    price: 0,
    tags: [],
    images: null,
    favoriteCount: 0,
    seller: "",
    updated: "",
  });
  const [isImgError, setIsImgError] = useState(false);

  useEffect(() => {
    getItemInfo(itemId)
      .then((result) => setItem(result))
      .catch((error) => console.error(error));
  }, [itemId]);

  return (
    <DetailContainer>
      {/* 아이템 이미지 */}
      {item.images && !isImgError ? (
        <Image
          src={item.images}
          onLoad={() => setIsImgError(false)}
          onError={() => setIsImgError(true)}
        />
      ) : (
        <NoneImageContainer>
          <NoneImage src={noneImg} />
        </NoneImageContainer>
      )}

      {/* 아이템 정보 */}
      <Detail>
        <div>
          <Header>
            <TitleWrapper>
              <Title>{item.name}</Title>
              {/* edit버튼 */}
            </TitleWrapper>
            <Price>{item.price.toLocaleString()}원</Price>
          </Header>
          <ItemInfo>
            <div>
              <Label>상품소개</Label>
              <Content>{item.description}</Content>
            </div>
            <div>
              <Label>상품태그</Label>
              <TagWrapper>
                {item.tags.map((tag) => (
                  <Tag key={tag}>#{tag}</Tag>
                ))}
              </TagWrapper>
            </div>
          </ItemInfo>
        </div>

        {/* 판매자 정보 + 좋아요 버튼 */}
        <UserWrapper>
          <SellerInfo>{item.ownerNickname}</SellerInfo>
          <Updated>{item.updated}</Updated>
          <LikeWrapper>
            <Like src={ic_heart} />
            <LikeCount>{item.favoriteCount}</LikeCount>
          </LikeWrapper>
        </UserWrapper>
      </Detail>
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  gap: 24px;
  padding-bottom: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
`;

const Image = styled.img`
  max-width: 500px;
  width: 100%;
  height: auto;
  border-radius: 16px;
`;

const NoneImageContainer = styled.div`
  max-width: 500px;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 16px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoneImage = styled.img`
  width: 60px;
  height: 60px;
`;

const Detail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font: ${theme.fonts.H5Regular};
  color: ${theme.colors.Gray800};
`;

const Price = styled.p`
  font: ${theme.fonts.H1};
  color: ${theme.colors.Gray800};
`;

const ItemInfo = styled.di`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Label = styled.p`
  font: ${theme.fonts.H5Bold};
  color: ${theme.colors.Gray600};
`;

const Content = styled.p`
  font: ${theme.fonts.H5Regular};
  color: ${theme.colors.Gray600};
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Tag = styled.span`
  background-color: ${theme.colors.Gray100};
  font: ${theme.fonts.H5Regular};
  color: ${theme.colors.Gray800};
`;

const UserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SellerInfo = styled.p`
  font: ${theme.fonts.H7Regular};
  color: ${theme.colors.Gray600};
`;

const Updated = styled.p`
  font: ${theme.fonts.H7Regular};
  color: ${theme.colors.Gray400};
`;

const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const Like = styled.img`
  width: 24px;
  height: 24px;
`;

const LikeCount = styled.p`
  font: ${theme.fonts.H5Regular};
  color: ${theme.colors.Gray500};
`;
