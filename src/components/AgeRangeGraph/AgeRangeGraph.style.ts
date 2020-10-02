import styled from 'styled-components/macro';
import { IColors } from '../../types/styled';

export const KeyContainer = styled.div`
  display: flex;
  align-items: center;
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

  & > div > ${KeyContainer}:first-of-type {
    margin-top: 2rem;
  }
  & > div > ${KeyContainer}:last-of-type {
    margin-bottom: 2rem;
  }
`;


export const KeyColorSquare = styled.div <{ keyColor: keyof IColors }>`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.1rem;
  border-radius: 3.5px;
  background-color: ${({ keyColor, theme: { colors } }) => colors[keyColor]};
  box-shadow: 0px 3px 3px 0px ${({ theme: { colors } }) => colors.lightGray2};
`;
