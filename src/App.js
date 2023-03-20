import React from "react";
import App from './App.css';
import Reviews from "./reviews";


let reviews;
let reviewsArray=[];

class mainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {index : 0}
    reviews = `[{"id": "1","name": "Susan Smith","job": "WEB DEVELOPER","image":"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg","text":"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"},
    {"id": "2","name": "Anna Johnson","job": "WEB DESIGNER","image":"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg","text":"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."},
    {"id": "3","name": "Peter Jones","job": "INTERN","image":"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg","text":"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."},
    {"id": "4","name": "Bill Anderson","job": "THE BOSS","image":"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg","text":"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. "}]`

    
    reviewsArray = JSON.parse(reviews);
  }

  // componentDidMount = () => {
  //   reviews = `[{"id": "1","name": "Susan Smith","job": "Web Developer","image":"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg","text":"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"},
  //     {"id": "2","name": "Anna Johnson","job": "Web Designer","image":"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg","text":"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."},
  //     {"id": "3","name": "Peter Jones","job": "Intern","image":"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg","text":"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."},
  //     {"id": "4","name": "Bill Anderson","job": "The Boss","image":"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg","text":"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. "}]`

  //   reviewsArray = JSON.parse(reviews);
  // }

  handleRightClick =()=> {
    if(this.state.index<3) {
      this.setState({index:this.state.index+1});
    }
    else {
      this.setState({index:0})
    }
  }

  handleLeftClick = () => {
    if(this.state.index<=0) {
      this.setState({index:3});
    }
    else {
      this.setState({index: this.state.index-1});
    }
    
  }

  handleSurprise = () => {
    let randomNumber;
    randomNumber=Math.floor(Math.random() * 4);
    this.setState({index : randomNumber});
  }

 
  render() {
    return(
      <div id='main'>
       
        <div id='card-div'>  
          
          {
            <Reviews name={reviewsArray[this.state.index].name} designation={reviewsArray[this.state.index].job} image={reviewsArray[this.state.index].image} description={reviewsArray[this.state.index].text}  handleRightClick = {this.handleRightClick}  handleLeftClick={this.handleLeftClick} handleSurprise={this.handleSurprise}/>
          }

        </div>
      </div>
    )
  }
}

export default mainComponent;