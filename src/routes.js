import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import App from './App';


function Home() {
    return (
        <h1>I'm at Home!</h1>
    )
}

class Routes extends React.Component {
    
    render() { 
        return ( 
            <div>
                <BrowserRouter>
                    <div>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/gitusers">Git users</Link>
                            </li>
                        </ul>

                        <Route exact path="/" component={Home} />
                        <Route path="/gitusers" component={App} />
                    </div>
                </BrowserRouter>
            </div>
         );
    }
}
 
export default Routes;