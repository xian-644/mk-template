import React from 'react';

function Home() {
  return (
    <div className="home-page">
      <h1>首页</h1>
      <p>欢迎使用 React 模板项目</p>
      <p>这是一个使用 mk-template 创建的 React 应用</p>
      <div className="features">
        <h2>功能特点</h2>
        <ul>
          <li>React 18</li>
          <li>React Router</li>
          <li>Axios</li>
          <li>基础页面结构</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;