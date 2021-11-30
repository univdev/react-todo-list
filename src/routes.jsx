import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/index';

export default class RouteDirectories extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Index></Index>}></Route>
      </Routes>
    )
  }
}