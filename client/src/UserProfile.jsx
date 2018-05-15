import React from 'react';
import { Link } from 'react-router-dom';


class UserProfile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};

  }

  // fetch all the users favorite museums
  // Don't store state in here. Whenever you need
  // to refer to the whole list of museums, call
  // this.props.museumall. If you need to change
  // the museum array, do this...
  // {() => this.props.changeMuseum(newArray)}

  // If you need to use the things in the faves array,
  // use this.props.favesall.
  // If you need to update/change the faves array,
  // do this...
  // {() => this.props.updateFaves(newArray)}



    // get call from comment table to return isfave and comments
    // to make sure it can compare isfave is true or false
  componentWillMount(){
    fetch(`/api/1/faves/`)
    .then(response => response.json())
      .then(data => {
        console.log('this is props', this.props)
        this.props.updateFaves(data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  // delete a favorite
  // All of our components need to be able to use
  // this method that you wrote here. So I copy and
  // pasted it into App.js so that I can pass it down
  // as a prop to the rest of the components. Can you
  // If you delete this method since I moved it to App.js?
  // if you need to use this method, you can refer to it
  // like this {() => this.props.delFaves(user)}



  // Bulma template for table
  // checking if fave museum id = index of array museum id
  // and show results in table
  render(){
   let FavesList = this.props.favesall.map((element, i) => {
          let city = element.address.split(' ').join('+');
          city = city.split(',').join('+')
          city = city.split('++').join('+')
          console.log('this is city', city)
          let url = `/museum/${element.museum_id}`
          return(

            <section className="searchResults" key={i}>

              <div className="searchResults">
            <Link to={url} onClick={() => {this.props.sendID(element.museum_id, city)}}>
              <h2>{element.name}</h2>

              <h2 className="local">{element.address}</h2>
              </Link>
              <span className="delbtn">
              <a className="icon" onClick={() =>
                this.props.delFaves()}>
                  <i className="fas fa-times-circle"></i>
              </a>
            </span>
              </div>
              </section>);

        })

    return(
      <div>
        <div className="table">
         <div>
          <div>
            <h1>Favorites</h1>
          </div>
         </div>
          {FavesList}
        </div>
      </div>
      )
  }
}


export default UserProfile;
