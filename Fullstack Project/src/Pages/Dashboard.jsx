 import  "../Pages/Page Styles/Dashboard.css"

const SidePanel = () => {
  return (
    <div className="side-panel">
      <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Reports</a></li>
        <li><a href="#">Settings</a></li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
}

export default SidePanel;
