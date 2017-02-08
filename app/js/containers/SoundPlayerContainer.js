import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import { Button, Navbar,Nav , NavDropdown, MenuItem, NavItem ,Carousel, Modal, Popover, Tooltip, OverlayTrigger} from 'react-bootstrap';
// import { initAuth } from '../actions/AuthedActions';
import { initEnvironment } from '../actions/EnvironmentActions';
// import { initNavigator } from '../actions/NavigatorActions';

// import NavContainer from '../containers/NavContainer';
// import MeContainer from '../containers/MeContainer';
// import ModalContainer from '../containers/ModalContainer';
// import PlayerContainer from '../containers/PlayerContainer';
// import SongContainer from '../containers/SongContainer';
// import SongsContainer from '../containers/SongsContainer';
// import UserContainer from '../containers/UserContainer';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  height: PropTypes.number,
  isMobile: PropTypes.bool,
  // path: PropTypes.array.isRequired,
  width: PropTypes.number,
  showModal: PropTypes.bool
};

class SoundPlayerContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(initEnvironment());
    // dispatch(initAuth());
    // dispatch(initNavigator());
  }
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);

    // this.toggleTimedComments = this.toggleTimedComments.bind(this);
    this.state = {
      // className: null,
      // currentTime: 0,
      showModal: false,
    };
  }
  // getInitialState() {
  //     return { showModal: false };
  //   }

    close() {
      this.setState({ showModal: false });
    }

    open() {
      this.setState({ showModal: true });
    }


  // renderContent() {
  //   const { path } = this.props;
  //   switch (path[0]) {
  //     case 'songs':
  //       switch (path.length) {
  //         case 1:
  //           return <SongsContainer />;
  //         case 2:
  //           return <SongContainer />;
  //         default:
  //           return null;
  //       }
  //     case 'users':
  //       return <UserContainer />;
  //     case 'me':
  //       return <MeContainer />;
  //     default:
  //       return null;
  //   }
  // }

  render() {
    const { height, isMobile, width } = this.props;
    // if (isMobile) {
    //   return (
    //     <div className="mobile" style={{ height: `${height}px`, width: `${width}px` }}>
    //       <PlayerContainer />
    //       {this.renderContent()}
    //       <NavContainer />
    //     </div>
    //   );
    // }
    const {  showModal } = this.state;

    const popover = (
          <Popover id="modal-popover" title="popover">
            very popover. such engagement
          </Popover>
        );
        const tooltip = (
          <Tooltip id="modal-tooltip">
            wow.
          </Tooltip>
        );


    return (
      <div>
        <Navbar>
   <Navbar.Header>
     <Navbar.Brand>
       <a href="#">React-Bootstrap</a>
     </Navbar.Brand>
   </Navbar.Header>
   <Nav>
     <NavItem eventKey={1} href="#">Link</NavItem>
     <NavItem eventKey={2} href="#">Link</NavItem>
     <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
       <MenuItem eventKey={3.1}>Action</MenuItem>
       <MenuItem eventKey={3.2}>Another action</MenuItem>
       <MenuItem eventKey={3.3}>Something else here</MenuItem>
       <MenuItem divider />
       <MenuItem eventKey={3.3}>Separated link</MenuItem>
     </NavDropdown>
   </Nav>
 </Navbar>
  <div className="static-modal">
    <Modal           dialogClassName="modal-dialog-pop"

show={this.state.showModal} onHide={this.close} >
             <Modal.Header closeButton>
               <Modal.Title>Modal heading</Modal.Title>
             </Modal.Header>
             <Modal.Body>
               <h4>Text in a modal</h4>
               <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

               <h4>Popover in a modal</h4>
               <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

               <h4>Tooltips in a modal</h4>
               <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

               <hr />

               <h4>Overflowing text to show scroll behavior</h4>
            
               <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
               <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
             </Modal.Body>
             <Modal.Footer>
               <Button onClick={this.close}>Close</Button>
             </Modal.Footer>
           </Modal>
 <Carousel>
    <Carousel.Item>
      <img width={width} height={height} alt="1200x500" src="https://react-bootstrap.github.io//assets/carousel.png"/>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={width} height={height} alt="1200x500" src="https://react-bootstrap.github.io//assets/carousel.png"/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={width} height={height} alt="1200x500" src="https://react-bootstrap.github.io//assets/carousel.png"/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
        <Button  bsStyle="primary"
          bsSize="large"
          onClick={this.open}>Click me!</Button>
        {/* <NavContainer /> */}
        {/* {this.renderContent()} */}
        {/* <PlayerContainer /> */}
        {/* <ModalContainer /> */}


  </div>

      </div>
    );
  }
}

SoundPlayerContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const { environment, navigator } = state;
  const { height, isMobile, width } = environment;
  // const { path } = navigator.route;

  // state.showModal = false;
  return {
    height,
    isMobile,
    showModal : false,
    // path,
    width,
  };
}


export default connect(mapStateToProps)(SoundPlayerContainer);
