import React from "react";
import like from '../../like.svg'

class Box extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            content: props.content,
            bgClass: 'card ' + props.bgClass + ' mb-3',
            // contentHidden: true,
            starIncremented: false
        }
    }

    incrementStars = (event) => {   //'this' is undefined, if we declare it as normal function, either we have to use arrow functions, or 'bind' methods to 'this' in constructor
        if(this.state.starIncremented)  return console.log('You have already incremented once');

        const id = this.state.content.probId
        console.log(id, ' clicked');

        fetch(
            'https://adig15.herokuapp.com/ps/sihJ20/incId/' + id,
            {
                method: 'POST'
            }
        ).then(() => {
            let newContent = this.state.content
            ++newContent.stars
            this.setState({
                content: newContent,
                starIncremented: true
            })
        })
    }

    // showContent(){
    //     const id = this.state.content.probId
    //     const item = document.getElementById(id)
    //     if(this.state.contentHidden){
    //         item.className="card-body"
    //         this.setState({contentHidden: false})
    //         console.log('Clicked -', this.state);
    //     }
    //     else{
    //         item.className=""
    //         this.setState({contentHidden: true})
    //         console.log('Clicked -', this.state);
    //     }
    // }

    render(){
        return (
            // <div className='row'>
                <div className={this.state.bgClass} style={{maxWidth: '80vw'}}>
                    <div className="card-header">{this.state.content.title}
                        <img src={like} width='24vw' style={{float: 'right'}} alt="Upvote" onClick={this.incrementStars}></img>
                        {this.state.content.stars}
                    </div>
                    <div id={'content' + this.state.content.probId} className="card-body">
                        <p className="card-text">{this.state.content.statement}</p>
                    </div>
                </div>
            // </div>
        )
    }
}

// module.exports = Box
export default Box