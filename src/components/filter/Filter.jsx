import "./Filter.css"
import {useState,useEffect} from "react"
import { Link, animateScroll as scroll } from "react-scroll";


function Filter() {
   
    const [scrollPosition, setScrollPosition] = useState(0);
    const [containerStyle, setContainerStyle] = useState({});

    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    useEffect(() => {
      if (scrollPosition > window.innerHeight) {
        setContainerStyle({ height: '50px', backgroundColor: '#fdfdfd' });
      } else {
        setContainerStyle({ height: '100px', backgroundColor: 'white' });
      }
    }, [scrollPosition]);




    return (
        <div className="filter1" style={containerStyle}>
            <ul>
                <li><Link to="cactus" smooth={true} duration={600}>Cactus</Link></li>
                <li><Link to="succ" smooth={true} duration={600}>Succulents</Link> </li>
                <li><Link to="potters" smooth={true} duration={600}>Potters</Link></li>
                <li><Link to="all" smooth={true} duration={600}>All</Link></li>
            </ul>
        </div>
    );
}

export default Filter ;