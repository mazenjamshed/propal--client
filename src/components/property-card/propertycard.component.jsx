import { Card, Content, Img } from './propertycard.styled';

const PropertyCard = () => {
  return (
    <Card>
      <Img src={require('./../../assets/img/hero_bg.jpg')} />
      <Content>Card content here</Content>
    </Card>
  );
};

export default PropertyCard;
