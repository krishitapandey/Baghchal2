import { Helmet } from "react-helmet-async";

const MetaDecorator = ({title,description,link}) => {
    
    return ( 
        <Helmet>
            <title>{title}</title>
            <meta name='description' content = {description}/>
            
        </Helmet>
     );
}
 
export default MetaDecorator;