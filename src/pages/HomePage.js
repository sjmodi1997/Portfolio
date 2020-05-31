import React,{useRef,useEffect} from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Timeline from '../components/Timeline';
import Container from 'react-bootstrap/Container';
import Basic from '../components/Basic';
import Skills from '../components/Skills';
import Table from  '../components/Table';

function HomePage(props)
{
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
    const myRef = useRef(null)
    if(props.scrollToProject)
    {
        //console.log(myRef);
        scrollToRef(myRef);
    }

    
    useEffect(() => {
        console.log(myRef.current);
      }, [myRef]);

    return(
        <div>
            <Hero title="Smit Modi" subTitle="Software Developer" text="Noida" isMainHeading="true"/>
            <Container ref={el => { console.log(el); myRef.current = el;}} style={{backgroundColor: 'white',borderRadius: '25px'}} fluid={true}>
            <div id="Projects">
                <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
            </div>
            <Carousel />
            </Container>
            &nbsp;
            &nbsp;
            &nbsp;
            <Container style={{backgroundColor: 'white',width: '100%'}} fluid={true}>
                <Table />
            {/*<Skills />*/}
            </Container>
            <Timeline />
        </div>
    );
}

export default HomePage;