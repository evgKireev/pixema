import Slider from 'react-slick';

import './slick.css';
import './slick-theme.css';
import { CardType } from '../../@types/types/cards';
import Card from '../Card';
import Skeleton from '../Skeleton';
import { useAppSelector } from '../../redux/hooks';

type MultipleItemsType = {
  cards: CardType[];
};

const MultipleItems: React.FC<MultipleItemsType> = ({ cards }) => {
  const { statusSuggestions } = useAppSelector((state) => state.cardsSlice);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };
  return (
    <div>
      <Slider {...settings}>
        {statusSuggestions === 'pennding'
          ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
          : cards.map((card) => (
              <Card
                card={card}
                key={card.id}
                images={card.medium_cover_image}
                title={card.title}
                genre={card.genres}
                rating={card.rating}
                id={card.id}
              />
            ))}
      </Slider>
    </div>
  );
};

export default MultipleItems;
