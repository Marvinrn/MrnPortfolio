import React from 'react';
import BackGround from './BackGround';

const IntroPart = () => {
    return (
        <section className='intro'>
            <div className='intro__content'>
                <h1 className='intro__title'>Marvin Rodrigues Novo</h1>
                <p className='intro__subtitle'>Développeur Web Front-End</p>
                <button className='intro__btn'>Qui suis-je?</button>
            </div>
            <BackGround />
        </section>
    );
};

export default IntroPart;