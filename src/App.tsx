import React, {Component} from 'react';
import './App.scss';
import Particles from 'react-particles-js';

class App extends Component {

    private params = {};

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        There's no<br/>
                        place like<br/>
                        127.0.0.1
                    </p>

                </header>
                <Particles
                    className="App-particles"
                    params={{
                        particles: {
                            number: {
                                value: 80,
                                density: {
                                    enable: true,
                                    value_area: 800
                                }
                            },
                            size: {
                                value: 3,
                                random: true,
                            },
                            color: {
                                value: '#ffffff'
                            },
                            opacity: {
                                value: 0.4,
                            },
                            move: {
                                enable: true,
                                speed: 5,
                            },
                            line_linked: {
                                enable: true,
                                opacity: 0.3,
                            }
                        },
                        interactivity:{
                            events: {
                                onclick: {
                                    enable: true,
                                    mode: 'push',
                                }
                            }
                        },
                        retina_detect: true
                    }}
                />
            </div>
        );
    }
}

export default App;
