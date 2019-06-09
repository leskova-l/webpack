mode 
steps
    - install new webpack or copy package
     - install webpack-merge --save-dev
      -  create webpack.config.js
      - визначити точку входу і точку виходу
      - сторити dev та prod config file за допомогою merge та загального
      - package вказати потрібний конфіг файл --config webpack.prod.config.js


по замовчування є production та development для різних файлів конфігурацій (можна робити 1 загальний і комбінувати їх за допомогою плагіну webpack-merge)
--mode=production
--config=prod.config.js
