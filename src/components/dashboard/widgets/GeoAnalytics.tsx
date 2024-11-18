import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Card, Title } from '@tremor/react';
import { useTheme } from '../../../hooks/useTheme';
import Earth from './Earth';

export default function GeoAnalytics() {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <Card className={`${theme.bgColor} p-6 rounded-xl shadow-xl h-[400px]`}>
        <Title className={theme.textColor}>Global Analytics</Title>
        <div className="w-full h-[300px] mt-4">
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Earth />
              <OrbitControls enableZoom={false} />
            </Suspense>
          </Canvas>
        </div>
      </Card>
    </motion.div>
  );
}