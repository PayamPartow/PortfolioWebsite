// const address =  {
//     street : 'Alpine',
//     city : 'Vancouver',
//     ZipCode: 'v7r2l5'
// };


// function showAddress(address){
//     for (let key in address)
//     console.log(key, address[key]);
// }



//creating object using factory function

// function createAddress(street, city, zipcode){
//     return {
//         street,
//         city,
//         zipcode
//     }
// };

// const address1 = createAddress('Alpine', 'Vancouver', 'v7r2l5');
// //showAddress(address1);
// console.log(address1);


//creating object using a constructor function

// function Address(street, city, zipcode){

//     this.street = street;
//     this.city = city;
//     this.zipcode = zipcode;

// };

// const address2 = new Address('Alpine', 'Vancouver', 'v7r2l5');
// showAddress(address2);


//function that tells us if the two object are equal. 
//note that we can't just say obj1 === obj2 
//since they are reference type and are pointing to different locations in memory even if they have same key value pairs

// function areEqual(obj1, obj2){
// return obj1.street === obj2.street && 
//     obj1.city === obj2.city 
//     && obj1.zipcode === obj2.zipcode ;
// };

// console.log(areEqual(address1, address2));




// //function that determines if object1 and object2 are pointing to the same object
// function isSame(obj1, obj2){
//     return obj1 === obj2;
    
// };

// console.log(isSame(address1, address2));












// //create a blog post object 

// const BlogPost = {
//     title:'a1',
//     body:'abcdefg',
//     author:'thatBitch',
//     views:100,
//     comments: {
//         author:'me',
//         body:'sup g'
//     },
//     isLive: true
    
// }
// console.log(BlogPost);


//create construction function for creating new blog posts that the user has not yet published

// function Post(title, body, author){
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views = 0; //setting default values for views , comments and isLive since the post has not been published yet
//     this.comments = [];
//     this.isLive = false;
// }

// let post = new Post('a', 'b', 'c');
// console.log(post);

//create an array of objects for the price ranges of resturants similar to what we see on yelp or google maps
// let priceRanges = [
//     {label: '$', tooltip: 'Inexpensive', MinPerPerson: 0, MaxPerPerson: 10 },
//     {label: '$$', tooltip: 'Moderate', MinPerPerson: 11, MaxPerPerson: 20 },
//     {label: '$$$', tooltip: 'Expensive', MinPerPerson: 21, MaxPerPerson: 30 }
// ];










//write a function that creates an array with a given range of numbers

// function arrayFromRange(min, max){
//     let a = [];
//     for(let i = min ; i<=max; i++ ){
//         a.push(i);
//     }
//     return a;
// }

// const numbers = arrayFromRange(1,10);
// console.log(numbers);










// write a function called includes that searches for an element in array and returns true if it exists in the array 

// function includes(array, searchElement){
//     for (element of array) {
//         if(element === searchElement) return true;
//     return false;
//     };
// }
// console.log(includes([1,2],3));











//write a function called except that removes all the occurances of a certain element in our array

// function except(array, excluded){
//     output = [];
//     for(element of array){
//         if(!excluded.includes(element))output.push(element);
//     };
//     return output;
// };
// console.log(except([1,2,1,3,4,5,6], [1,2,3]));









// write a function that moves elements in an array 

// function move(array, index, offset){
    
//     if(position >= array.length || position<0) {
//         console.error("invalid offset");
//         return;
//     }
//     position = index+offset;
//     const output = [...array];
//     const element = output.splice(index, 1)[0]; //splice returns an array object with all the deleted elements
//     output.splice(position, 0 , element); //when adding using splice the element will go before the right before the starting index
//     return output;
// }
// console.log(move([1,2,3,4,5,6], 2, 2));



















//write a function that counts the number of occurances of a given element in an array

// //method 1 
// function countOccurrences(array, searchElements){
//     count = 0;
//     for (element of array){
//         if(element === searchElements) count++;
        
//     }
//     return count;
// }

// console.log(countOccurrences([1,2,3,1,4,5,1,6,1], 1));

//method 2: using reducing an Array

// function countOccurrences(array, searchElements){
//     //note we need to return the array.reduce in the end 
//    return array.reduce((accumulator, currentValue) =>{
//     const occurance = (currentValue === searchElements) ? 1 : 0;
//     return accumulator + occurance;
//     },0);    
// }

// console.log(countOccurrences([1,2,3,1,4,5,1,6,1], 1));





















//function that finds the largest number in an array

//method1 using sort 
// function getMax(array){
//     if(array.length === 0) return undefined;
//     const sortedArray = array.sort();
//     return sortedArray[(sortedArray.length)-1];

// }

// console.log(getMax([1,2,3,1,4,5,1,6,1]));

//method2: 

// function getMax(array){
//     if(array.length === 0) return undefined;
//     let max = array[0];
//     for(element of array){
//         if(element>max) max = element;

//     }
//     return max;
// }
// console.log(getMax([1,2,3,1,4,5,1,6,1]));



//method 3: using reducing an array method

// function getMax(array){
//         if(array.length === 0) return undefined;
//         return array.reduce((accumalator, current)=>(current>accumalator) ? current : accumalator);
        
//     }

//     console.log(getMax([1,2,3,1,10,4,5,1,6,1]));






















// exercise 7: Movies

// const movies = [
//     {title: 'a', year: 2018, rating: 4.5},
//     {title: 'b', year: 2018, rating: 4.7},
//     {title: 'c', year: 2018, rating: 3},
//     {title: 'd', year: 2017, rating: 4.5}
// ]

// //get all the movies in 2018 with rating > 4
// // Sort them by their rating
// //Descending order
// //pick their title and view them

// let titles = movies
//     .filter(obj => obj.year === 2018 && obj.rating >= 4)

//     // if the result becomes negative then its its like returning -1 switchh wont happen
//     //if the result becomes 0 or positive then its like returning 0 or 1 so the switch will happen
//     .sort((a,b)=> a.rating - b.rating ) 
//     .reverse()
//      //to only get the title we map the objects in the array to an array of their titles only
//      .map(m => m.title);
// console.log(titles);

// // noob way of making a list of only the titles
// // for (object of titles) console.log(object.title) ;


// //definition of Hoisting in JavaScript : 
// // its the process of movies all the finction declarations to the top during run time















// //Functions EX1 : create a function that takes any number of arguments and returns their sum
// // then modify that function to be able to take an array of arguments as well and return their sum

// function sum(...arg){
//     // note that arg itself is an array of values due to using the rest operator
//     //so we would have to check and see if the first item in the array is itself another array 
//     if (arg.length === 1  && Array.isArray(arg[0])){
//         // return arg[0].reduce((a,b)=> (a+b));

//         // better solution is to copy that array into out array of arg using spread operation
//         arg = [...arg[0]];
//     }

//     return arg.reduce((a,b)=> (a+b));
// }

// console.log(sum([1,2,3,4,5]));










// //ex2: create a circle object where we can set the radius from outside of the object but only read the radius object

// const circle = {
//     radius : 2,
//     get area(){
//         return Math.PI * this.radius * this.radius;
//     }
// }

// console.log(circle.area);

// circle.radius = 20;

// console.log(circle.radius);





//ex3: 

try{const numbers = [1, 2, 3, 4]; 

    const count = countOccurrences(false, 1); 
    
    console.log(count); 
    }
catch(e){
    console.log(e.message);
}

function countOccurrences(array, searchElement) {
  // let count = 0; 
  // for (let element of array)
  //   if (element === searchElement)
  //     count++;
  // return count;

  if(!Array.isArray(array))throw new Error('Value is not an array');
  return array.reduce((accumulator, current) => {
    const occurrence = (current === searchElement) ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
  }, 0);
}