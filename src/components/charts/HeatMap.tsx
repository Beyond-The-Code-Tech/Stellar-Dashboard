import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface HeatMapProps {
  data: { x: string; y: string; value: number }[];
  width?: number;
  height?: number;
}

export const HeatMap: React.FC<HeatMapProps> = ({
  data,
  width = 600,
  height = 400,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !data.length) return;

    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const xValues = Array.from(new Set(data.map(d => d.x)));
    const yValues = Array.from(new Set(data.map(d => d.y)));

    const x = d3
      .scaleBand()
      .domain(xValues)
      .range([margin.left, innerWidth + margin.left])
      .padding(0.1);

    const y = d3
      .scaleBand()
      .domain(yValues)
      .range([margin.top, innerHeight + margin.top])
      .padding(0.1);

    const color = d3
      .scaleSequential()
      .interpolator(d3.interpolateInferno)
      .domain([0, d3.max(data, d => d.value) || 0]);

    // Add cells
    const cells = svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => x(d.x) || 0)
      .attr('y', d => y(d.y) || 0)
      .attr('width', x.bandwidth())
      .attr('height', y.bandwidth())
      .attr('fill', 'white');

    cells
      .transition()
      .duration(1000)
      .attr('fill', d => color(d.value));

    // Add axes
    svg
      .append('g')
      .attr('transform', `translate(0,${innerHeight + margin.top})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'rotate(-45)')
      .style('text-anchor', 'end');

    svg
      .append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    // Add hover effects
    const tooltip = d3
      .select('body')
      .append('div')
      .attr('class', 'absolute hidden bg-white p-2 rounded shadow-lg text-sm');

    cells
      .on('mouseenter', function(event, d) {
        d3.select(this)
          .attr('stroke', '#000')
          .attr('stroke-width', 2);

        tooltip
          .style('left', `${event.pageX + 10}px`)
          .style('top', `${event.pageY - 10}px`)
          .style('display', 'block')
          .html(`${d.x}, ${d.y}: ${d.value}`);
      })
      .on('mouseleave', function() {
        d3.select(this)
          .attr('stroke', null);

        tooltip.style('display', 'none');
      });

    return () => {
      tooltip.remove();
    };
  }, [data, width, height]);

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className="w-full h-full"
    ></svg>
  );
};