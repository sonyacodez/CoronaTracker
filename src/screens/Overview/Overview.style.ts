import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  margin: 2rem;
`;

export const CardWrapper = styled.div`
  display: flex;
  & > * {
    margin-right: 3rem;
  }
`;
