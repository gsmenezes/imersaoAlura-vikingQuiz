import styled from "styled-components";

const Widget = styled.div`
  margin: 0 0 12px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: #33658a;
  opacity: 0.8;
  border-radius: 4px;
  overflow: hidden;

  h1,
  h2,
  h3 {
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: 0;
  }

  p {
    font-size: 0.875rem;
    line-height: 1rem;
  }
`;

Widget.Content = styled.div`
  padding: 15px 32px;

  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.contrastText};
  }

`;

Widget.Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 6px 32px 18px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text2};
`;

Widget.Footer = styled.div `
display: flex;
justify-content: flex-start;
align-items: center;
padding: 18px 32px;
background-color: ${({ theme }) => theme.colors.primary};
color: ${({ theme }) => theme.colors.text2};
`;

Widget.Topic = styled.a `
outline: 0;
text-decoration: none;
color: ${({ theme }) => theme.colors.contrastText};
background-color: ${({ theme }) => theme.colors.primary};
padding: 10px 15px;
margin-bottom: 8px;
cursor: pointer;
border-radius: ${({ theme }) => theme.borderRadius};
transition: .3s;
display: block;

&:hover,
&:focus{
  opacity: 0.5;
}
 `;

 Widget.Quiz = styled.div `
 margin: 50px auto;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: #33658a;
  opacity: 0.8;
  border-radius: 4px;
  overflow: hidden;

  h1,
  h2,
  h3 {
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: 0;
  }

  p {
    font-size: 0.875rem;
    line-height: 1rem;
  }

  `;

Widget.Result = styled.div `
margin: 50px auto;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: #33658a;
  opacity: 0.8;
  border-radius: 4px;
  overflow: hidden;

  h1,
  h2,
  h3 {
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: 0;
  }

  p {
    font-size: 0.875rem;
    line-height: 1rem;
  }

`;



export default Widget;
