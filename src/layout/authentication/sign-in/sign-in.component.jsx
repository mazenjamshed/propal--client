import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { modalActions } from '../../../store/slices/modalSlice';
import { FormHeading } from '../../../styles/typograpghy.styled';
import Button from '../../../components/button/button.component';
import Overlay from '../overlay/overlay.component';
import {
  Input,
  InputGroup,
  Label,
  // Overlay,
  SignInContainer,
} from '../auth.styled';
import { FormWrapper } from '../form-container/form-container.styled';

const SignIn = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const dispatch = useDispatch();
  return (
    <>
      <Overlay>
        <FormWrapper>
          <FormHeading style={{ marginBottom: 25 }}>Sign In</FormHeading>
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
          <Button />

          <button onClick={() => dispatch(modalActions.showSignup())}>
            Sign up
          </button>
        </FormWrapper>
      </Overlay>
    </>
  );
};

export default SignIn;
