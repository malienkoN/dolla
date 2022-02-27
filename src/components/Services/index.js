import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import {ServicesContainer, ServicesInner, ServicesCard, ServicesIcon} from "./ServicesElements";

export function Services() {
    return (
        <ServicesContainer id="services">
            <h1>Our Services</h1>
            <ServicesInner>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <h2>Reduce expenses</h2>
                    <p>We help reduce your fees and increase your overall revenue</p>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <h2>Virtual Offices</h2>
                    <p>You can access our platform online anywhere in the world</p>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <h2>Premium Benefits</h2>
                    <p>Unlock our special membership card that returns 5% cash back</p>
                </ServicesCard>
            </ServicesInner>
        </ServicesContainer>
    );
}