import React, { Component } from 'react';
import TodoItem from './enteriesitem'


class ShoppingCart extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
}

addItem(e){

  if(this._itemtitle.value !== null){

    var newItem = {
      //not sure how to add new line on the following
      text : 'ProductTitle: ' +this._itemtitle.value 
            +'\n Quantity: '+this._itemquality.value
            +'\n Description: '+this._description.value,
      key : Date.now()
    };

   

    this.setState((prevState) => {
      return {
        items : prevState.items.concat(newItem)      
      };
    });
   
    this._itemtitle.value= "";
    this._itemquality.value ="";
    this._description.value ="";
  }
    e.preventDefault();
}

deleteItem(key){
  var filterItems = this.state.items.filter(function (item){
    return (item.key !== key)
  });

  this.setState({
    items : filterItems
  });
}



    render() { 
        return (  
          <div>
          <div class="row">
          <div class="col-75">
          
            <div class="container">
              <fieldset>
                <legend>Shopping List (Week 3 Task)</legend>
      
                 <form onSubmit={this.addItem}> 
                 <div class="row">
              
                  <div class="col-50"><br/>
                    <input type="text" ref={(a)=>this._itemtitle = a } id="itemtitle" name="itemtitle" placeholder="Item title"/>
                    <input type="text" ref={(a)=>this._itemquality = a } id="quantity" name="quantity" placeholder="Quantity"/>
                  </div>
                  <div class="col-50"> </div>
                  <div class="col-50">
                    <input type="text" ref={(a)=>this._description = a } id="description" name="description" placeholder="description"/>
                  </div>
                 
                </div>
                <button id="add" class="btn">add item</button>
                </form>   

            <fieldset>
            <TodoItem entries={this.state.items} 
                      delete={this.deleteItem}/>
              
     
          </fieldset>
              </fieldset>
            </div>          
          </div>
          
        </div>
       
        </div>
     
        ); 
    }
}
 
export default ShoppingCart;