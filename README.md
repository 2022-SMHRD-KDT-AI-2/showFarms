# showFarms
2nd Team Project, 학습된 YOLO 모델을 이용한 스트리밍 서비스가 탑재된 농산물 직거래 플랫폼

# 프로젝트 상세설명
1. 농산물 이미지 및 라벨링 데이터를 이용하여 YOLO 모델을 학습하여 농산물을 분류하는 '품질분류모델'을 만든다.
2. 안드로이드 어플리케이션을 이용하여 실시간 영상을 플라스크 서버로 전송하고 해당 서버에서 품질분류모델을 적용한다.
3. 적용된 영상을 웹과 메인 서버로 전송한다.
4. 메인 서버에서 웹과 모바일을 구현하기 위한 REST API 및 DB를 조작한다.

# 프로젝트 실행
Front
- Web

    `!!! require npm`

    `cd front/web && npm install (or yarn install)`

    `npm start or yarn start`
- App

Back
- Flask
- Spring

# 사용기술
`Web`
- React, Typescript, ES6+
- Recoil, Axios, React-Router
- Movie.js, Emotion

`Android`
- Java(v. 18), 
- RTMP

`영상처리 서버 및 DL / ML`
- Python(v. 3), FastAPI
- Django, NGINX
- YOLOv5
- OpenCV
- Aruco Marker

`메인서버`
- Spring, Java
- Oracle11

# 구성원 및 역할

| 이름      | 역할                                |
|---------|-----------------------------------|
| 구예림(팀장) | Deep Learning(YOLO), 데이터 전처리 및 분석 |
| 윤중열     | Back-End                          |
| 장강근     | web 기능개발 및 ui 디자인                 |
| 김영재     | Deep Learning(YOLO), 데이터 전처리 및 분석        |
| 임혜성     | Front-End 총괄                      |
| 서명진     | Back-End                          |
 

# DB Tables
![0526 erd](https://user-images.githubusercontent.com/99248706/172281961-b1ad81fd-9154-4cd4-a81e-45cc03517142.PNG)

# 구현 / 개발 세부내용

# Service URL
