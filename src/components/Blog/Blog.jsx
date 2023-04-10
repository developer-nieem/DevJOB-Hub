import React from "react";

const Blog = () => {
  return (
    <div className="container my-5">
      <div class="card my-4">
        <div class="card-header">When should you use context API?</div>
        <div class="card-body">
          <p class="card-text">
            We can use context api when need data  most of components  , then we declare api a main components on the router and get the data useContext, Example : i declare api data this project on main route then provide all components and catch the data if i need any components 
          </p>
        </div>
      </div>
      <div class="card my-4">
        <div class="card-header">What is a custom hook?</div>
        <div class="card-body">
          <p class="card-text">
           Custom hook  is a beautiful features of react hooks , For custom hooks we can use same functionality and js code many place then we use hooks.  like use useState hooks for state management , its means if we have same functionality on many place then we create custom hooks and use them 
          </p>
        </div>
      </div>
      <div class="card my-4">
        <div class="card-header">What is useRef?</div>
        <div class="card-body">
          <p class="card-text">
          useRef is react hook , That we use for element reference  and keep stored input value. its not changeable 
          </p>
        </div>
      </div>
      <div class="card my-4">
        <div class="card-header">What is useMemo?</div>
        <div class="card-body">
          <p class="card-text">
            useMemo is react hook , that calculation any function and kept memories . and when need any change but useMemo not reRander with give stored value 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
