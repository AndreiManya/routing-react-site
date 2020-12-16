import React, {Component} from 'react';



export default class ContactItem extends Component { 
  constructor({props}) {
    super(props);
  }

  render(){
    const {link, className, svg1, title, description, svg2} = this.props;
    return(
      <a href={link} className={className}>
            <div className="icon">
              {svg1}
            </div>
            <div className="content">
            <h1>{title}</h1>
              <span>{description}</span>
            </div>
            {svg2}
        </a>
    )
  }
};
