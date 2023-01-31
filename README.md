# 프로젝트 점선면, DLF
`BACKEND`    
   
`2023.01.07 ~ 2023.01.08` 진행된 연합동아리 [CMC](https://www.makeus.in/cmc) 해커톤에서 "점선면" 이라는 단어를 선택하고 단어에 맞게 기획하고 제작한 ios 앱 서비스입니다.   
해당 repository는 서버의 내용만 담고 있습니다. ios 코드를 확인하시려면 -> [여기](https://github.com/Neordinary-Hackathon/PointAndLineToPlane-iOS)


<img width="1191" alt="스크린샷 2023-02-01 오전 1 10 27" src="https://user-images.githubusercontent.com/50348197/215815946-8b22e14e-ca18-4957-b9e3-245838b8c10a.png">

## 기술 스택
BACKEND : `express` `sequelize` `pm2` `docker-compose` `AWS EC2` `AWS RDS` 
### [POSTMAN documentation](https://documenter.getpostman.com/view/19606295/2s8ZDeSdgR)

## 파일 구조

```
PointAndLineToPlane-Server
├── api
│   ├── middleware
│   │   └── auth.middleware.js  // kakao 토큰검증
│   ├── routes
│   │   ├── archiving.route.js
│   │   ├── dot.route.js
│   │   ├── flat.route.js
│   │   ├── line.route.js
│   │   └── user.route.js
│   └── util
│       └── util.js             // 중복되는 문자열 파싱 매서드
├── app.js
├── config
│   ├── config.js               // sequelize config
│   └── pm2.config.js           // pm2 config
├── docker-compose.yml
├── docker-entrypoint.sh
├── models
│   ├── dot.model.js
│   ├── dotToLine.model.js
│   ├── flat.model.js
│   ├── index.js
│   ├── line.model.js
│   ├── lineToFlat.model.js
│   └── user.model.js
├── package-lock.json
├── package.json
├── services
│   ├── archiving.service.js
│   ├── dot.service.js
│   ├── flat.service.js
│   ├── kakao.service.js
│   ├── line.service.js
│   └── user.service.js
├── Dockerfile
└── README.md
```

