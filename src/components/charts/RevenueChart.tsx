import { useEffect, useRef } from "react";
import * as d3 from "d3";

const chartData = [
  { month: "Jan", value: 45000 },
  { month: "Feb", value: 52000 },
  { month: "Mar", value: 48000 },
  { month: "Apr", value: 38000 },
  { month: "May", value: 42000 },
  { month: "Jun", value: 58000 },
  { month: "Jul", value: 51000 },
  { month: "Aug", value: 62000 },
  { month: "Sep", value: 49000 },
  { month: "Oct", value: 56000 },
  { month: "Nov", value: 59000 },
  { month: "Dec", value: 71000 },
];

const RevenueBarChart = () => {
  const svgRef = useRef();

  useEffect(() => {
    if (svgRef.current) {
      // Clear any previous svg content before drawing
      d3.select(svgRef.current).selectAll("*").remove();

      const margin = { top: 20, right: 30, bottom: 50, left: 60 };
      const width = 1160 - margin.left - margin.right;
      const height = 400 - margin.top - margin.bottom;

      // Create SVG container
      const svg = d3
        .select(svgRef.current)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);

      // Create chart group translated by margins
      const chart = svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      // X scale - months
      const x = d3
        .scaleBand()
        .domain(chartData.map((d) => d.month))
        .range([0, width])
        .padding(0.2);

      // Y scale - values
      const y = d3
        .scaleLinear()
        // @ts-expect-error value
        .domain([0, d3.max(chartData, (d) => d.value) * 1.1]) // Add some padding on top
        .range([height, 0]);

      // Add horizontal grid lines
      chart
        .append("g")
        .attr("class", "grid")
        // @ts-expect-error value
        .call(
          // @ts-expect-error value
          d3.axisLeft(y).tickSize(-width).tickFormat("") // No labels for grid lines
        )
        .attr("stroke-opacity", 0.1);

      // Draw bars
      chart
        .selectAll(".bar")
        .data(chartData)
        .join("rect")
        .attr("class", "bar")
        // @ts-expect-error value
        .attr("x", (d) => x(d.month))
        .attr("y", (d) => y(d.value))
        .attr("width", x.bandwidth())
        .attr("height", (d) => height - y(d.value))
        .attr("fill", "#513CCE");

      // Add x-axis
      chart
        .append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x).tickSize(0))
        .selectAll("text")
        .attr("transform", "translate(0,5)")
        .style("font-size", "12px");

      // Add y-axis
      chart
        .append("g")
        .call(d3.axisLeft(y).tickSize(0))
        .call((g) => g.select(".domain").remove());
      chart
        .selectAll(".label")
        .data(chartData)
        .join("text")
        .attr("class", "label")
        .text((d) => d.value)
        // @ts-expect-error value
        .attr("x", (d) => x(d.month) + x.bandwidth() / 2)
        .attr("y", (d) => y(d.value) - 5) // 5px above the bar
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .style("fill", "#747272");
    }
  }, []);

  // @ts-expect-error value
  return <svg ref={svgRef}></svg>;
};

export default RevenueBarChart;
