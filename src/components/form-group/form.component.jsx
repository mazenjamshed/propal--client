import { FormContainer, Input, Label } from './form.styled';

const FormGroup = () => {
  return (
    <FormContainer>
      <Label htmlFor='hmm'>label 1</Label>
      <Input type='text' name='hmm' id='hmm' />
    </FormContainer>
  );
};

export default FormGroup;
