// const address =  {
//     street : 'Alpine',
//     city : 'Vancouver',
//     ZipCode: 'v7r2l5'
// };

function showAddress(address){
    for (let key in address)
    console.log(key, address[key]);
}


//creating object using factory function

function createAddress(street, city, zipcode){
    return {
        street,
        city,
        zipcode
    }
};

const address1 = createAddress('Alpine', 'Vancouver', 'v7r2l5');
//showAddress(address1);
console.log(address1);


//creating object using a constructor function

function Address(street, city, zipcode){

    this.street = street;
    this.city = city;
    this.zipcode = zipcode;

};

const address2 = new Address('Alpine', 'Vancouver', 'v7r2l5');
showAddress(address2);



//function that tells us if the two object are equal. 
//note that we can't just say obj1 === obj2 
//since they are reference type and are pointing to different locations in memory even if they have same key value pairs

function areEqual(obj1, obj2){
return obj1.street === obj2.street && 
    obj1.city === obj2.city 
    && obj1.zipcode === obj2.zipcode ;
};

console.log(areEqual(address1, address2));


//function that determines if object1 and object2 are pointing to the same object
function isSame(obj1, obj2){
    return obj1 === obj2;
    
};

console.log(isSame(address1, address2));


//create a blog post object 

const BlogPost = {
    title:'a1',
    body:'abcdefg',
    author:'thatBitch',
    views:100,
    comments: {
        author:'me',
        body:'sup g'
    },
    isLive: true
    
}
console.log(BlogPost);


//create construction function for creating new blog posts that the user has not yet published

function Post(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0; //setting default values for views , comments and isLive since the post has not been published yet
    this.comments = [];
    this.isLive = false;
}

let post = new Post('a', 'b', 'c');
console.log(post);

//create an array of objects for the price ranges of resturants similar to what we see on yelp or google maps
let priceRanges = [
    {label: '$', tooltip: 'Inexpensive', MinPerPerson: 0, MaxPerPerson: 10 },
    {label: '$$', tooltip: 'Moderate', MinPerPerson: 11, MaxPerPerson: 20 },
    {label: '$$$', tooltip: 'Expensive', MinPerPerson: 21, MaxPerPerson: 30 }
];

console