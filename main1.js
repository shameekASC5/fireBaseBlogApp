// link to firebase
const database = firebase.database().ref();

database.on("child_added", pullFromDB);

function pullFromDB (data) {
    const dataObject = data.val();
    console.log(dataObject);

    let blogPostTitle = dataObject.title;
    let bloggerName = dataObject.name;
    let blogPost = dataObject.post;
    // console.log(blogPostTitle);
    // console.log(bloggerName);
    // console.log(blogPost);

    //Create main container div
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("main_container");
    //I used insert before so that new blog posts would appear at the top
    document.getElementById("main_div").insertBefore(mainContainer, document.getElementById("main_div").firstChild);
    //John_Jane Doe photo
    // const img = document.createElement("img");
    // img.src = "https://www.authenticateis.com/wp-content/uploads/2018/02/blank-headshot.jpeg";
    // img.classList.add("user_image");
    //h1 for title, h3 for name, p for post
    let title = document.createElement("h1");
    title.innerHTML = blogPostTitle;
    let name = document.createElement("h3");
    name.innerHTML = "By: " + bloggerName;
    let post = document.createElement("p");
    post.innerHTML = blogPost;
    // mainContainer.appendChild(img);
    mainContainer.appendChild(title);
    mainContainer.appendChild(name);
    mainContainer.appendChild(post);
    
    document.getElementById("newBlogPost").addEventListener("click", function () {
        window.location.replace("createBlog.html");
    });
}