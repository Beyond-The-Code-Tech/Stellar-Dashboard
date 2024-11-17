import React from 'react';
import RGL from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

interface GridLayoutProps {
  children: React.ReactNode;
}

export const GridLayout: React.FC<GridLayoutProps> = ({ children }) => {
  const layout = [
    { i: 'revenue', x: 0, y: 0, w: 6, h: 4 },
    { i: 'devices', x: 6, y: 0, w: 6, h: 4 },
    { i: 'sales', x: 0, y: 4, w: 6, h: 4 },
    { i: 'activity', x: 6, y: 4, w: 6, h: 4 },
  ];

  return (
    <RGL
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={100}
      width={1200}
      margin={[16, 16]}
      isDraggable={true}
      isResizable={true}
      compactType={null}
    >
      {React.Children.map(children, (child, index) => (
        <div key={layout[index].i}>{child}</div>
      ))}
    </RGL>
  );
};