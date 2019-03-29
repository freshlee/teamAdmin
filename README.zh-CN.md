### 使用命令行
```bash
$ git clone https://github.com/ant-design/ant-design-pro.git --depth=1
$ cd ant-design-pro
$ npm install
$ npm start         # 访问 http://localhost:8000
```

### 使用 docker

```bash
# preview 
$ docker pull chenshuai2144/ant-design-pro
$ docker run -p 80:80 chenshuai2144/ant-design-pro
# open http://localhost

# dev 
$ npm run docker:dev

# build 
$ npm run docker:build


# production dev 
$ npm run docker-prod:dev

// production build 
$ npm run docker-prod:build
```

