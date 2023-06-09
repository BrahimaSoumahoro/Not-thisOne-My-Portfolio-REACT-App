import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss';
import Loader from 'react-loaders';


const   Home = ()   => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['B', 'r', 'a', 'h', 'i', 'm', 'a']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', '', '&', '', 'N', 'e', 't', 'w', 'o', 'r', 'k', '', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']
    
useEffect(() => {
    return setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000);
}, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={'${letterClass} _12'}>i,</span>
               <br /> 
                <span className={'${letterClass} _13'}>I,</span>
                <span className={'${letterClass} _14'}>'m </span>
                <img src={LogoTitle} alt="Developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                <br /> 
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                </h1>
                <h2>Frontend Developer / Information Technology Engineer & Instructor / JavaScript Expert /Graphic Specialist </h2>
             <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        <Logo /> 
        </div>
        <Loader type="pacman"  />
        </>
      
    );
}



export default Home