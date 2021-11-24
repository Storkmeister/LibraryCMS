import React, { Component } from 'react';
import './../style/aboutUs.css';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import MUILink from '@mui/material/Link';

export default class AboutUs extends Component {
    static displayName = AboutUs.name;

    
    render(){
        return (
        <div>
          <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
              <MUILink onClick={() => this.props.history.push('/')}>
                  Forside
              </MUILink>
              <Typography color="text.primary">Om os</Typography>
          </Breadcrumbs>
          <h4>Om os</h4>
          <div className="about-container">
            Vi er begge ny udlærte...
          </div>
        </div>
        )}
}