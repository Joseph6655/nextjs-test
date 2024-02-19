import FeatureSection from "./featureSection"
import Banner from '../../comps/banner'
import Footer from'../../comps/footer'
import Navbar from '../../comps/navbar';

const layout = ({children}) => {
    return ( 
        <div className="content">
            <Navbar/>
            {children}
            <Banner />
            <FeatureSection/>
            <Footer/>
        </div>
     );
}
 
export default layout;