import React from "react";

function Main(){
    return(
     <main>
        
      {/* Main Content */}
      <main className="App-main">
        <div className="form-container">
          <h2>Registration Form</h2>
          <form>
            <div className="form-group">
              <label>Title:</label>
              <input type="text" placeholder="Enter your title" />
            </div>

            <div className="form-group">
              <label>Author Name:</label>
              <input type="text" placeholder="Enter author name" />
            </div>

            <div className="form-group">
              <label>Date:</label>
              <input type="date" />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </main>

     </main>
    );
};

export default Main;