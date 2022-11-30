import { InputNumber } from "antd";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useState } from "react";
import { data } from "../../utils/data";

const HighchartsChart = () => {
  const [numberData, setNumberData] = useState(1000);

  const chartData = data(numberData);

  const options = {
    chart: {
      zoomType: "x",
    },

    title: {
      text: "Highcharts drawing " + numberData + " points",
    },

    subtitle: {
      text: "Using the Boost module",
    },

    accessibility: {
      screenReaderSection: {
        beforeChartFormat:
          "<{headingTagName}>{chartTitle}</{headingTagName}><div>{chartSubtitle}</div><div>{chartLongdesc}</div><div>{xAxisDescription}</div><div>{yAxisDescription}</div>",
      },
    },

    tooltip: {
      valueDecimals: 2,
    },

    xAxis: {
      type: "datetime",
    },
    series: [
      {
        data: chartData,
        lineWidth: 0.5,
        name: "Hourly data points",
      },
    ],
  };

  const increaseData: any = (item: number) => {
    setNumberData(item);
  };

  return (
    <div
      style={{
        minWidth: 800,
        maxWidth: 1500,
        margin: "1em auto",
      }}
    >
      <InputNumber
        size="small"
        onChange={increaseData}
        min={1}
        max={50000}
        defaultValue={numberData}
      />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default HighchartsChart;
