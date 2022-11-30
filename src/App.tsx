import { Row, Col, Tabs } from "antd";
import "./App.css";
import HighchartsView from "./components/higcharts/HighchartsView";
import AmChartsView from "./components/AmCharts/AmChartsView";
import FusionChartsView from "./components/FusionCharts/FusionChartsView";
import DygraphsView from "./components/Dygraphs/DygraphsView";

function App() {
  const items = [
    {
      label: "Highcharts",
      key: "1",
      children: (
        <Row gutter={24}>
          <Col span={24}>
            <HighchartsView />
          </Col>
        </Row>
      ),
    },
    {
      label: "AmCharts",
      key: "2",
      children: (
        <Row gutter={24}>
          <Col span={24}>
            <AmChartsView />
          </Col>
        </Row>
      ),
    },
    {
      label: "FusionCharts",
      key: "3",
      children: (
        <Row gutter={24}>
          <Col span={24}>
            <FusionChartsView />
          </Col>
        </Row>
      ),
    },
    {
      label: "Dygraphs",
      key: "4",
      children: (
        <Row gutter={24}>
          <Col span={24}>
            <DygraphsView />
          </Col>
        </Row>
      ),
    },
  ];
  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      centered
      destroyInactiveTabPane
      style={{
        width: "100%",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    />
  );
}

export default App;
