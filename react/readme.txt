react
steps:
 - copy package (install) & config
 - встановити loaders
 
 babel npm i -D babel-loader @babel/core @babel/preset-env @babel/preset-react --save-dev
 test:/\.(js|jsx)$/,
 
 створити babel.config.js
 
 style npm install --save-dev css-loader less-loader --save-dev
 file loader для картинки
 
 встановити webpack плагіни clean-webpack-plugin html-webpack-plugin --save-dev
   (copy html template)
   
hot reload  
npm install webpack-dev-server --save-dev

мініфікація стилів
mini-css-extract-plugin --save-dev
https://www.npmjs.com/package/mini-css-extract-plugin