import styled from 'styled-components/macro';

export const KeyContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 53rem;
  height: 80rem;
  padding: 1.5rem;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 5px 20px 0px ${({ theme }) => theme.colors.lightGray2};

  & > div > ${KeyContainer} {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export const Legend = styled.div`
  display: flex;
`;

export const KeyColorSquare = styled.div<{ keyColor: string }>`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.1rem;
  border-radius: 3.5px;
  background-color: ${({ keyColor }) => keyColor};
  box-shadow: 0px 3px 3px 0px ${({ theme: { colors } }) => colors.lightGray2};
`;
