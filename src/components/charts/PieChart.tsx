import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface PieChartProps {
  data: { label: string; value: number }[];
  width?: number;
  height?: number;
}

export const PieChart: React.FC<PieChartProps> = ({
  data,
  width = 400,
  height = 400,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !data.length) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const radius = Math.min(width, height) / 2;
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3.pie<{ label: string; value: number }>().value(d => d.value);
    const arc = d3.arc().innerRadius(radius * 0.6).outerRadius(radius * 0.95);
    const outerArc = d3.arc().innerRadius(radius * 0.9).outerRadius(radius * 0.9);

    const g = svg
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const path = g
      .selectAll('path')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', arc as any)
      .attr('fill', (d, i) => color(i.toString()))
      .attr('stroke', 'white')
      .style('stroke-width', '2px')
      .style('opacity', 0.7)
      .transition()
      .duration(1000)
      .attrTween('d', function(d: any) {
        const interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
        return function(t) {
          return (arc as any)(interpolate(t));
        };
      });

    // Add labels
    const text = g
      .selectAll('text')
      .data(pie(data))
      .enter()
      .append('text')
      .attr('transform', function(d: any) {
        const pos = (outerArc as any).centroid(d);
        return `translate(${pos})`;
      })
      .style('text-anchor', 'middle')
      .style('font-size', '12px')
      .style('fill', '#4B5563')
      .text(d => `${d.data.label} (${d.data.value})`);

    // Add hover effects
    path
      .on('mouseover', function() {
        d3.select(this)
          .style('opacity', 1)
          .transition()
          .duration(200)
          .attr('transform', 'scale(1.05)');
      })
      .on('mouseout', function() {
        d3.select(this)
          .style('opacity', 0.7)
          .transition()
          .duration(200)
          .attr('transform', 'scale(1)');
      });
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