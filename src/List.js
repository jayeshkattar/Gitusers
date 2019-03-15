import React from 'react';



class List extends React.Component {

    render() { 
        console.log('render')
        return ( 
        <div>
            <h3>Selected Name: {this.props.selectedName}</h3>
            <ul>
                {this.props.friends
                .map((item) => (
                    <li key={item} onClick={this.props.updateName.bind(null,item)}>
                        {item}
                    </li>
                ))} 
            </ul>
        </div> );
    }
}
 
export default List;