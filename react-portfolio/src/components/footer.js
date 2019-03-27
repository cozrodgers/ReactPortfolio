import React, {Component} from 'react';
import { Layout, Header, HeaderRow, Drawer, Navigation, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';


class CustomFooter extends Component {
    render() {
        return(
            <div>
            <Footer size="mini">
    <FooterSection type="left" logo="Title">
        <FooterLinkList>
            <a href="#">Help</a>
            <a href="#">Privacy & Terms</a>
        </FooterLinkList>
    </FooterSection>
    </Footer>
    </div>
          
        )
    }
}


export default CustomFooter;



