const blogTitleElement = document.getElementsByClassName("blog_title")[0];
const bloggerNameElement = document.getElementsByClassName("author_name")[0];
const blogContentElement = document.getElementsByClassName("text_box")[0];
const submitButton = document.getElementById("submit_button");

// link to firebase
const database = firebase.database().ref();

submitButton.addEventListener("click", updateDB); 

function updateDB(event) {
    event.preventDefault();
//Create Blog Title, Blogger Name, and Blog Content variables
    let blogTitle = blogTitleElement.value;
    let bloggerName = bloggerNameElement.value;
    let blogContent = blogContentElement.value;
//Resets client side Blog Title, Blogger Name, and Blog Content variables value to ""
    blogTitleElement.value = "";
    bloggerNameElement.value = "";
    blogContentElement.value = "";
//Create object for new blog post consisting of Blog Title, Blogger Name, and Blog Content variables
    const newBlogPost = {
        name : bloggerName,
        title: blogTitle,
        post:  blogContent
    };
//Pushs blog data to database
    database.push(newBlogPost);

}


