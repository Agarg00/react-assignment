// PieChart.jsx
import { useRef, useEffect } from "react";
import * as d3 from "d3";

const OrderStatusChart = ({
  data,
  width = 242,
  height = 242,
}: {
  data: { value: number; label: string }[];
  width?: number;
  height?: number;
}) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      const total = data.reduce((acc, item) => acc + item.value, 0);
      const svg = d3.select(ref.current);
      svg.selectAll("*").remove(); // clear previous content

      const radius = Math.min(width, height) / 2;
      const innerRadius = radius * 0.7; // Donut hole size

      const color = d3.scaleOrdinal(d3.schemeTableau10);
      //   @ts-expect-error value
      const pie = d3.pie().value((d) => d.value);
      const arc = d3.arc().innerRadius(innerRadius).outerRadius(radius);

      const chart = svg
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

      // Draw slices
      chart
        .selectAll("path")
        //   @ts-expect-error value
        .data(pie(data))
        .enter()
        .append("path")
        //   @ts-expect-error value
        .attr("d", arc)
        //   @ts-expect-error value
        .attr("fill", (d, i) => color(i));
      //   .attr('stroke', 'white')
      //   .style('stroke-width', '2px');

      // Add percentage labels on slices
      chart
        .selectAll("text")
        //   @ts-expect-error value
        .data(pie(data))
        .enter()
        .append("text")
        //   @ts-expect-error value
        .text((d) => `${Math.round((d.data.value / total) * 100)}%`)
        //   @ts-expect-error value
        .attr("transform", (d) => `translate(${arc.centroid(d)})`)
        .style("text-anchor", "middle")
        .style("font-size", 12)
        .style("fill", "white");

      // Add total in center

      chart
        .append("text")
        .text(total)
        .attr("text-anchor", "middle")
        .attr("dy", "0.5em")
        .style("font-size", "32px")
        .style("font-weight", "bold")
        .style("fill", "#666565")
        .style("transform", "translateX(-2px)");
    }
  }, [data, width, height]);
  //   @ts-expect-error value
  return <svg ref={ref} />;
};

export default OrderStatusChart;
