import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="find a user" />
      </div>

      <div className="userChat">
        <img src="https://images.pexels.com/photos/14113987/pexels-photo-14113987.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        <div className="userChatInfo">
          <span>Nityansh</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
