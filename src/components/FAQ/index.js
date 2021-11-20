import React , {useState} from 'react'
import {Data} from './Data'
import styled from 'styled-components'
import {IconContext} from 'react-icons'
import {FiPlus, FiX } from 'react-icons/fi'
import Email from '../Email'
import { LineContainer } from '../Line/LineElements'


const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 125vh;
  background: #000;
  @media screen and (max-width: 768px)
  {
    height: 150vh;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0%;
  width: 800px;
  
  @media screen and (max-width: 768px)
  {
    width: 450px;
  }
`;

const Wrap = styled.div`
  background: #222222;
  color: #fff;
  display: flex;
  margin: 10px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  text-align: center;
  cursor: pointer;

  h1 {
    padding: 2rem;
    font-size: 2rem;
  }

  span {
    margin-right: 1.5rem;
  }

  @media screen and (max-width: 768px)
  {
    
    margin-left: 0;
    h1{
      font-size: 1.5rem;
    }
  }
`;

const Dropdown = styled.div`
  background: #1c1c1c;
  margin-left: 10px;
  color: #fff;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #222222;
  border-top: 1px solid #222222;

  p {
    font-size: 20px;
    margin-left: 10px;
    padding-left: 10px;
  }

  @media screen and (max-width: 768px)
  {
    height: 190px;
    margin-left: 0;

    p{
      font-size: 15px;
    }
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#fff', size: '25px' }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiX /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        <Email />
        </Container>
      </AccordionSection>
      <LineContainer />
    </IconContext.Provider>
  );
};
export default Accordion
