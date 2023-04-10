import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);
  return (
    <div className="h-100">
        <div className=" flex align-items-center ">
        <div class="card w-50 m-auto mt-5 text-center " >
        <div class="card-body ">
            <img className="img-thumbnail" src="https://static.vecteezy.com/system/resources/previews/016/920/479/original/allert-chat-warning-flat-illustration-vector.jpg" alt="" />
          <h5 class="card-title">Page not found {error.status}</h5>
          <p class="card-text">
            {error.error.message}
          </p>
          
          <Link to='/'> 
           <button className="btn btn-primary">
          BACK TO HOME
          </button>
           </Link>
         
         
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default ErrorPage;
