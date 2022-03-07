import ProfileCard from '../../../components/profile-card/profilecard.component';
import { SectionHeading } from '../../../styles/typograpghy.styled';
import { Container } from '../../../styles/utils.styled';
import { ContractorsSection, Cards } from './contractors.styled';

const Contactors = () => {
  return (
    <ContractorsSection>
      <Container>
        <SectionHeading>Top Contractors</SectionHeading>
        <Cards>
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </Cards>
      </Container>
    </ContractorsSection>
  );
};

export default Contactors;
