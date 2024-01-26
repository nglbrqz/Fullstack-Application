 import  "../Pages/Page Styles/Dashboard.css";

const DashboardNavBar = () => {
  return (
    <div className="top-nav">
      <div className="left">
        <span>NEW LIFE</span>
      </div>
      <div className="right">
        <form action = "" className="search-bar" >
          <input type="text" placeholder=" Search..." />
        </form>
        <div className="nav-button-container">
          <ul>
            <li><a href="#"><img className="nav-logo" src="data:image/png;base64,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" /></a></li>
            <li><a href="#"><img className="nav-logo" src="https://static-00.iconduck.com/assets.00/notification-icon-1023x1024-mgwtsscu.png" /></a></li>
            <li><a href="#"><img className="nav-logo" src="https://icon-library.com/images/white-home-icon-png/white-home-icon-png-21.jpg" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const SidePanel = () => {
  return (
    <div className="side-panel">
      <div className = "menu">
        <div className="side-panel-admin">
          <img src = "https://i0.wp.com/www.nutravet.co.uk/wp-content/uploads/2022/05/calm-cat-1-1.jpg?fit=480%2C480&ssl=1"/>
          <span>John Smith</span>
        </div>
        <div className="side-panel-menu">
          <ul>
            <li><a href="#">EVENTS</a></li>
            <li><a href="#">ATTENDEES</a></li>
            <li><a href="#">GALLERY</a></li>
          </ul>
        </div>
      </div>

      {/* Logout and Settings buttons */}
      <div className="bottom-buttons">
        <ul>
          <li><a href="#">LOGOUT</a></li>
          <li><a href="#">SETTINGS</a></li>
        </ul>
      </div>
    </div>
  );
}

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Top Navigation Bar */}
      <DashboardNavBar/>

      {/* Side Panel */}
      <SidePanel />

      {/* Main Content */}
      <div className="main-content">
        {/* Add main content here */}
        <h2>Main Content*</h2>
      </div>
    </div>
  );
};


export default Dashboard;
