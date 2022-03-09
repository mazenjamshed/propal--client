import ProfileCard from '../../../components/profile-card/profilecard.component';
import { SectionHeading } from '../../../styles/typograpghy.styled';
import { Container, FlexRow } from '../../../styles/utils.styled';
import { ContractorsSection } from './contractors.styled';

const Contactors = () => {
  return (
    <ContractorsSection>
      <Container>
        <SectionHeading>Top Contractors</SectionHeading>
        <FlexRow>
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </FlexRow>
      </Container>
    </ContractorsSection>
  );
};

export default Contactors;
