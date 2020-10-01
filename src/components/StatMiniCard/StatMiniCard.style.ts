import styled, { css } from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 31.8rem;
  height: 26.5rem;
  padding: 1.5rem;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 5px 20px 0px ${({ theme }) => theme.colors.lightGray2};
  & > .recharts-wrapper {
    margin-left: 7.5rem;
  }
`;

export const PercentageContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Arrow = styled.i<{ hasIncreased: boolean }>`
  font-size: 13px;
  padding-right: 0.8rem;
  margin-bottom: 0.3rem;
  color: ${({ hasIncreased, theme: { colors } }) => (hasIncreased ? colors.red : colors.green1)};
  ${({ hasIncreased }) =>
    hasIncreased &&
    css`
      transform: rotate(180deg);
    `}
`;
