import { useDispatch } from 'react-redux';
import Button from '../../../components/button/button.component';
import { modalActions } from '../../../store/slices/modalSlice';
import { FormHeading } from '../../../styles/typograpghy.styled';
import { InputGroup, Label, Input } from '../auth.styled';
import { FormWrapper } from '../form-container/form-container.styled';
import Overlay from '../overlay/overlay.component';
const SignUp = () => {
  const dispatch = useDispatch();

  return (
    <Overlay>
      <FormWrapper>
        <FormHeading style={{ marginBottom: 25 }}>Sign Up</FormHeading>
        <InputGroup style={{ marginBottom: 15 }}>
          <Label htmlFor='Email'>Email:</Label>
          <Input
            type='email'
            id='Email'
            name='Email'
            placeholder='Enter your email here'
          />
        </InputGroup>
        <InputGroup style={{ marginBottom: 25 }}>
          <Label htmlFor='Password'>Password:</Label>
          <Input
            type='password'
            id='Password'
            name='Password'
            placeholder='Enter your password here'
          />
        </InputGroup>
        <InputGroup style={{ marginBottom: 25 }}>
          <Label htmlFor='Password'>Password:</Label>
          <Input
            type='password'
            id='Password'
            name='Password'
            placeholder='Enter your password here'
          />
        </InputGroup>
        <InputGroup style={{ marginBottom: 25 }}>
          <Label htmlFor='Password'>Password:</Label>
          <Input
            type='password'
            id='Password'
            name='Password'
            placeholder='Enter your password here'
          />
        </InputGroup>
        <InputGroup style={{ marginBottom: 25 }}>
          <Label htmlFor='Password'>Password:</Label>
          <Input
            type='password'
            id='Password'
            name='Password'
            placeholder='Enter your password here'
          />
        </InputGroup>
        <InputGroup style={{ marginBottom: 25 }}>
          <Label htmlFor='Password'>Password:</Label>
          <Input
            type='password'
            id='Password'
            name='Password'
            placeholder='Enter your password here'
          />
        </InputGroup>
        <InputGroup style={{ marginBottom: 25 }}>
          <Label htmlFor='Password'>Password:</Label>
          <Input
            type='password'
            id='Password'
            name='Password'
            placeholder='Enter your password here'
          />
        </InputGroup>

        <Button />
        <button onClick={() => dispatch(modalActions.closeSignup())}>
          CLose Sign up
        </button>
      </FormWrapper>
    </Overlay>
  );
};

export default SignUp;
