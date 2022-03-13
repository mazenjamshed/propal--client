import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 42rem;
  max-height: 50rem;
  padding: 3rem 5rem;
  background-color: #a8dadc;
  border-radius: 2rem;
  position: absolute;
  z-index: 6;
  left: 33%;
  top: 18%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;

    /* color: red; */
  }
`;
