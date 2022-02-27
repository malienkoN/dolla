import styled from 'styled-components';

export const ServicesContainer = styled.section`
  padding: 140px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #010606;

  h1 {
    font-size: 2.5rem;
    color: #fff;
    margin: 0 0 64px;

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 1rem;
    margin: 0 0 10px;
  }
`

export const ServicesInner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  
  @media (max-width: 999px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const ServicesCard = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,.2);
  transition: all .2s ease-in-out;
  cursor: pointer;
  min-height: 320px;
  
  &:hover {
    transform: scale(1.02);
  }
  
  p {
    margin: 0;
    font-size: 1rem;
    text-align: center;
  }
`

export const ServicesIcon = styled.img`
  width: 160px;
  height: 160px;
  margin-bottom: 10px;
`