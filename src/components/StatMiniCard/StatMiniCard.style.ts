import styled, { css } from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 318px;
  height: 212px;
  padding: 15px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 5px 20px 0px ${({ theme }) => theme.colors.lightGray2};
`;

export const PercentageContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Arrow = styled.i<{ hasIncreased: boolean }>`
  font-size: 13px;
  padding-right: 8px;
  margin-bottom: 3px;
  color: ${({ hasIncreased, theme: { colors } }) => (hasIncreased ? colors.red : colors.green1)};
  ${({ hasIncreased }) =>
    hasIncreased &&
    css`
      transform: rotate(180deg);
    `}
`;
