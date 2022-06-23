import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import FetchSailor from "../../components/API/FetchSailor"
import Date_filter from "../../components/Date_filter/Date_filter";
import Detailpage from "../../components/Detailpage/Detailpage";


const Home = () => {
  return (
    <div className="home">
    {/* <Detailpage/> */}
      {/* <Sidebar /> */}
      {/* <FetchSailor/> */}
      <div className="homeContainer">
        {/* <Navbar /> */}
        {/* <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div> */}
        {/* <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div> */}

        {/* <Date_filter /> */}


        <div className="listContainer">
          <div className="listTitle"></div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
