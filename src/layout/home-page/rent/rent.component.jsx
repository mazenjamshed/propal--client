import PropertyCard from './../../../components/property-card/propertycard.component';
import { SectionHeading } from './../../../styles/typograpghy.styled';
import { Container } from './../../../styles/utils.styled';
import { RentSection } from './rent.styled';

const Rent = () => {
  return (
    <RentSection>
      <Container>
        <SectionHeading>Recent Property for Rent</SectionHeading>
        <PropertyCard />
        <PropertyCard />
      </Container>
    </RentSection>
  );
};

export default Rent;