import './Page1.css';
import React, {Component} from 'react';
import ContactItem from '../ContactItem/'
import { Transition, animated} from 'react-spring/renderprops';

export default class Welcome extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: false,
      activeJoin: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    let contactMe = document.querySelector('.contactme');
    const currentState = this.state.active,
    currentStateJoin = this.state.activeJoin;
    if (e.currentTarget === contactMe) {
      return this.setState({ active: !currentState });
    }
       return this.setState({activeJoin: !currentStateJoin});
  }    

 

  render() {
    return (
    <div className="wrap">
      <div className="cont">
        <div className="label">
          <p>Morning <br/>Inspiration</p>
          <div className='button-item' onClick={this.toggle} >Join Today</div>
        </div>
        <Transition
          items={this.state.activeJoin}
          from={{ opacity: 0}}
          enter={{ opacity: 1}}
          leave={{ opacity: 0}}
        >
          {show => 
          show && (props => (
            <animated.div style={props}>
              <div className={`contact-area`}>
                <div className={`contact ${this.state.active ? 'active': null}`}>
                  <main>
                    <section>
                      <div className="content">    
                        <aside>
                          <h1>WELCOME</h1>
                          <p>Hi, I'm Andrei Maniukevich and I'm Front-end developer, this site was created for my portfolio.</p>
                        </aside>
                        <button onClick={this.toggle} className={`contactme ${this.state.active ? 'active': null}` } >
                          <span>Contact Me</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g className="nc-icon-wrapper" fill="#444444"> <path d="M14.83 30.83L24 21.66l9.17 9.17L36 28 24 16 12 28z"></path> </g> </svg>
                        </button>
                      </div>
              
                      <div className={`title ${this.state.active ? 'active': null}`}><p>Contact Me</p></div>
                    </section>
                  </main>
          
                  <nav className={this.state.active ? 'active': null}>
                    <ContactItem 
                      link='https://mail.google.com/mail/u/0/?view=cm&fs=1&to=1234and95@gmail.com'
                      className='gmail' 
                      svg1={<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M16 3v10c0 .567-.433 1-1 1h-1V4.925L8 9.233 2 4.925V14H1c-.567 0-1-.433-1-1V3c0-.283.108-.533.287-.712C.467 2.107.718 2 1 2h.333L8 6.833 14.667 2H15c.283 0 .533.108.713.288.179.179.287.429.287.712z" fill-rule="evenodd"/></svg>}
                      title="Email"
                      description='1234and95@gmail.com'
                      svg2={<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g className="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>}
                    />

                    <ContactItem 
                      link='https://vk.com/latemod'
                      className='facebook' 
                      svg1={<img src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' aria-labelledby='title' aria-describedby='desc' role='img' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EVK%3C/title%3E%3Cdesc%3EA line styled icon from Orion Icon Library.%3C/desc%3E%3Cpath data-name='layer1' d='M31.362 50.823h3.567a2.16 2.16 0 0 0 1.6-.758 2.988 2.988 0 0 0 .469-1.611s-.094-4.832 2.159-5.59c2.159-.663 4.975 4.737 8.073 6.822a6.8 6.8 0 0 0 4.037 1.137h7.979c.563 0 4.037-.474 2.253-3.7-.188-.284-1.126-2.463-6.008-7.011-5.069-4.737-4.318-3.979 1.69-12.128 3.661-4.927 5.069-7.959 4.694-9.285-.282-1.042-3.192-.853-3.192-.853h-9.016a1.955 1.955 0 0 0-1.126.189 2.332 2.332 0 0 0-.751.947 45.451 45.451 0 0 1-3.379 7.106c-4.037 6.917-5.632 7.3-6.29 6.822-1.5-1.042-1.126-3.979-1.126-6.159 0-6.727 1.033-9.475-1.971-10.233a13.1 13.1 0 0 0-4.224-.379c-3.192 0-5.914 0-7.51.758-1.033.474-1.784 1.611-1.314 1.705a4.1 4.1 0 0 1 2.624 1.333c.939 1.232.939 4.169.939 4.169s.563 7.864-1.22 8.812c-1.22.663-2.91-.663-6.477-6.917a50.473 50.473 0 0 1-3.192-6.727 3.093 3.093 0 0 0-.75-1.042 2.563 2.563 0 0 0-1.408-.568H3.95s-1.314-.095-1.784.663a1.907 1.907 0 0 0 0 1.516s6.76 15.917 14.364 23.876c6.947 7.675 14.832 7.106 14.832 7.106z' fill='none' stroke='%23202020' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' stroke-linejoin='round'%3E%3C/path%3E%3C/svg%3E" alt="VK" />}
                      title="Vk"
                      description='Andrei Maniukevich'
                      svg2={ <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g className="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>}
                    />
                  </nav>
                </div>
              </div>  
            </animated.div>
          ))}
        </Transition>
        <div className="quote">
          <p>If you can dream it, you can achieve it.</p>
        </div>
      </div>
    </div>
      ); 
  }
};


