import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import axios from 'axios'
import './App.css';

class App extends Component {
  state = {
    users: [],
    lastName: {},
    firstName: {},
    dob: {},
    month1: {},
    month2: {},
    month3: {},
    month4: {},
    month5: {},
    month6: {},
    month7: {},
    month8: {},
    month9: {},
    month10: {},
    month11: {},
    month12: {},
    month1List: {},
    month2List: {},
    month3List: {},
    month4List: {},
    month5List: {},
    month6List: {},
    month7List: {},
    month8List: {},
    month9List: {},
    month10List: {},
    month11List: {},
    month12List: {}
  }
    async componentDidMount() {

    this.setState({loading: true});


    const res = await axios.get(`https://yalantis-react-school.herokuapp.com/api/task0/users`);

    this.setState({ users: res.data, loading: false})
    
  }
  
 
  render() {
    let { users, month1, month2, month3, month4, month5, month6, month7, month8, month9, month10, month11, month12,
      month1List, month2List, month3List, month4List ,month5List, month6List, month7List, month8List, month9List, month10List ,month11List, month12List} = this.state;
  
    console.log(users.length)
    console.log(users)
    
    month1 = users.filter(myFunction1);
    function myFunction1(value) {
     return ((+(value.dob.charAt([5]) + value.dob.charAt([6]))) === 1)
    }
    month1List = month1.map(myFunctionList1);
    function myFunctionList1(value) {
      return " " + value.firstName + " " + value.lastName
    }

    month2 = users.filter(myFunction2);
    function myFunction2(value) {
     return ((+(value.dob.charAt([5]) + value.dob.charAt([6]))) === 2)
    }
    
    month3 = users.filter(myFunction3);
    function myFunction3(value) {
     return ((+(value.dob.charAt([5]) + value.dob.charAt([6]))) === 3)
    }
    
    month4 = users.filter(myFunction4);
    function myFunction4(value) {
     return ((+(value.dob.charAt([5]) + value.dob.charAt([6]))) === 4)
    }
    
    month5 = users.filter(myFunction5);
    function myFunction5(value) {
     return ((+(value.dob.charAt([5]) + value.dob.charAt([6]))) === 5)
    }
    
    month6 = users.filter(myFunction6);
    function myFunction6(value) {
     return ((+(value.dob.charAt([5]) + value.dob.charAt([6]))) === 6)
    }
    
    month7 = users.filter(myFunction7);
    function myFunction7(value) {
     return ((+(value.dob.charAt([5]) + value.dob.charAt([6]))) === 7)
    }
    
    month8 = users.filter(myFunction8);
    function myFunction8(value) {
     return ((+(value.dob.charAt([5]) + value.dob.charAt([6]))) === 8)
    }
    
    month9 = users.filter(myFunction9);
    function myFunction9(value) {
     return ((+(value.dob.charAt([5]) + value.dob.charAt([6]))) === 9)
    }
    
    month10 = users.filter(myFunction10);
    function myFunction10(value) {
     return ((+(value.dob.charAt([5]) + value.dob.charAt([6]))) === 10)
    }
    
    month11 = users.filter(myFunction11);
    function myFunction11(value) {
     return ((+(value.dob.charAt([5]) + value.dob.charAt([6]))) === 11)
    }

    month12 = users.filter(myFunction12);
    function myFunction12(value) {
     return ((+(value.dob.charAt([5]) + value.dob.charAt([6]))) === 12)
    }
    month2List = month2.map(myFunctionList1);
    month3List = month3.map(myFunctionList1);
    month4List = month4.map(myFunctionList1);
    month5List = month5.map(myFunctionList1);
    month6List = month6.map(myFunctionList1);
    month7List = month7.map(myFunctionList1);
    month8List = month8.map(myFunctionList1);
    month9List = month9.map(myFunctionList1);
    month10List = month10.map(myFunctionList1);
    month11List = month11.map(myFunctionList1);
    month12List = month12.map(myFunctionList1);

    const style1 = {};
    const style2 = {};
    const style3 = {};
    const style4 = {};
    const style5 = {};
    const style6 = {};
    const style7 = {};
    const style8 = {};
    const style9 = {};
    const style10 = {};
    const style11 = {};
    const style12 = {};
    
    

    if (month1.length <= 2) {
      style1.color = 'grey'
    } else if (month1.length <= 6 ) {
      style1.color = 'blue'
    } else if (month1.length <= 10) {
      style1.color = 'green'
    } else {
      style1.color = 'tomato'
    }

    if (month2.length <= 2) {
      style2.color = 'grey'
    } else if (month2.length <= 6 ) {
      style2.color = 'blue'
    } else if (month2.length <= 10) {
      style2.color = 'green'
    } else {
      style2.color = 'tomato'
    }

    if (month3.length <= 2) {
      style3.color = 'grey'
    } else if (month3.length <= 6 ) {
      style3.color = 'blue'
    } else if (month3.length <= 10) {
      style3.color = 'green'
    } else {
      style3.color = 'tomato'
    }

    if (month4.length <= 2) {
      style4.color = 'grey'
    } else if (month4.length <= 6 ) {
      style4.color = 'blue'
    } else if (month4.length <= 10) {
      style4.color = 'green'
    } else {
      style4.color = 'tomato'
    }

    if (month5.length <= 2) {
      style5.color = 'grey'
    } else if (month5.length <= 6 ) {
      style5.color = 'blue'
    } else if (month5.length <= 10) {
      style5.color = 'green'
    } else {
      style5.color = 'tomato'
    }

    if (month6.length <= 2) {
      style6.color = 'grey'
    } else if (month6.length <= 6 ) {
      style6.color = 'blue'
    } else if (month6.length <= 10) {
      style6.color = 'green'
    } else {
      style6.color = 'tomato'
    }

    if (month7.length <= 2) {
      style7.color = 'grey'
    } else if (month7.length <= 6 ) {
      style7.color = 'blue'
    } else if (month7.length <= 10) {
      style7.color = 'green'
    } else {
      style7.color = 'tomato'
    }

    if (month8.length <= 2) {
      style8.color = 'grey'
    } else if (month8.length <= 6 ) {
      style8.color = 'blue'
    } else if (month8.length <= 10) {
      style8.color = 'green'
    } else {
      style8.color = 'tomato'
    }

    if (month9.length <= 2) {
      style9.color = 'grey'
    } else if (month9.length <= 6 ) {
      style9.color = 'blue'
    } else if (month9.length <= 10) {
      style9.color = 'green'
    } else {
      style9.color = 'tomato'
    }

    if (month10.length <= 2) {
      style10.color = 'grey'
    } else if (month10.length <= 6 ) {
      style10.color = 'blue'
    } else if (month10.length <= 10) {
      style10.color = 'green'
    } else {
      style10.color = 'tomato'
    }

    if (month11.length <= 2) {
      style11.color = 'grey'
    } else if (month11.length <= 6 ) {
      style11.color = 'blue'
    } else if (month11.length <= 10) {
      style11.color = 'green'
    } else {
      style11.color = 'tomato'
    }

    if (month12.length <= 2) {
      style12.color = 'grey'
    } else if (month12.length <= 6 ) {
      style12.color = 'blue'
    } else if (month12.length <= 10) {
      style12.color = 'green'
    } else {
      style12.color = 'tomato'
    }

  
    
    console.log(month2, month3)
    
  

  return (
    
    <div className='App'>
    <Navbar />
    <div className="container text-center lead">
    
    <h3 style={style1}> <abbr title={month1List}>January</abbr> </h3>
    <h3 style={style2}> <abbr title={month2List}>February</abbr> </h3>
    <h3 style={style3}> <abbr title={month3List}>March</abbr> </h3>
    <h3 style={style4}> <abbr title={month4List}>April</abbr> </h3>
    <h3 style={style5}> <abbr title={month5List}>May</abbr> </h3>
    <h3 style={style6}> <abbr title={month6List}>June</abbr> </h3>
    <h3 style={style7}> <abbr title={month7List}>July</abbr> </h3>
    <h3 style={style8}> <abbr title={month8List}>August</abbr> </h3>
    <h3 style={style9}> <abbr title={month9List}>September</abbr> </h3>
    <h3 style={style10}> <abbr title={month10List}>October</abbr> </h3>
    <h3 style={style11}> <abbr title={month11List}>November</abbr> </h3>
    <h3 style={style12}> <abbr title={month12List}>December</abbr> </h3>
 
    </div>
    </div>
    
  );
  }
}


export default App;
