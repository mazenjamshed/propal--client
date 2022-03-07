import PropertyCard from './../../../components/property-card/propertycard.component';
import { SectionHeading } from './../../../styles/typograpghy.styled';
import { Container } from './../../../styles/utils.styled';
import { SalesSection } from './sales.styled';

const Sales = () => {
  return (
    <SalesSection>
      <Container>
        <SectionHeading>Recent Property for Sales</SectionHeading>
        <PropertyCard />
        <PropertyCard />
      </Container>
    </SalesSection>
  );
};

export default Sales;
