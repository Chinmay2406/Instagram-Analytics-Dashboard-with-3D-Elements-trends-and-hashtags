import React from 'react';
import { Hero } from './components/Hero';
import { Analytics } from './components/Analytics';
import { Calendar } from './components/Calendar';
import { SentimentAnalysis } from './components/SentimentAnalysis';
import { ImageAnalyzer } from './components/ImageAnalyzer';
import { Resources } from './components/Resources';
import { ThemeToggle } from './components/ThemeToggle';
import { Trends } from './components/Trends';

function App() {
  return (
    <div className="bg-black transition-colors duration-300 light-mode:bg-gray-100">
      <ThemeToggle />
      <Hero />
      <Trends />
      <div id="analytics">
        <Analytics />
      </div>
      <Calendar />
      <SentimentAnalysis />
      <ImageAnalyzer />
      <Resources />
    </div>
  );
}

export default App;