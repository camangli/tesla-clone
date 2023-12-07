import React from 'react';
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectCars } from "../features/car/carSlice";
import Section from './Section';

function Home() {
    const cars = useSelector(selectCars);
  return (
    <Container>
        {
            cars && cars.map((cars, index) =>
                (<Section 
                    title={cars.title}
                    description={cars.description}
                    backgroundImg={cars.image}
                    leftBtnText="Custom Order"
                    rightBtnText="Existing Inventory"
                />)
            )
        }
        <Section 
            title="Lower Cost Solar Panel in America"
            description="Money Back Guarantee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order Now"
            rightBtnText="learn more"
        />
        <Section 
            title="Accessories"
            description=""
            backgroundImg="accessories.jpg"
            leftBtnText="Order Now"
            //rightBtnText="learn more"
        />

    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`