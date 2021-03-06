# React 2nd Project: AirTnT

## About
![airbnb](https://user-images.githubusercontent.com/67219914/109384034-9974f400-792d-11eb-8e10-b532b3f1ad93.jpg)
- 개요 : 대표 부킹서비스 Airbnb(에어비앤비) 웹사이트 클론 프로젝트
- 기간 : 1.25(월) ~ 2.10(수) / 17일간
- 원본 : https://www.airbnb.co.kr/ (에어비앤비 코리아)
<br />

## Skill Stack
### Front-End
- HTML/CSS/Javascript
- React.js(CRA): Functional Component
- Styled Components
- Context API(useContext)
- react-router-dom
- react-icons(각종 아이콘)
- react-dates, moment(달력)
- rsuite(슬라이더 바)

### Back-End
- Node.js
- Express.js(Generator)
- npm Middlewares: bcrypt, jsonwebtoken, cors
<br />

## Outcome
![AirTnT_500_5](https://user-images.githubusercontent.com/67219914/109272810-bb4e7800-7854-11eb-87a0-a30a52507371.gif)

### Front-End
- 파일구조 및 작업내용: https://github.com/Abangpa1ace/React-PJT2-Airbnb/blob/main/client/README.md

### Back-End
- 파일구조 및 작업내용: https://github.com/Abangpa1ace/React-PJT2-AirTnT/blob/main/server/README.md
<br />

## Review
#### 1. 첫 개인 프로젝트
내 인생의 두 번째 웹페이지 제작이자, 이번에는 혼자서 진행하게 된 프로젝트였다. 

우선, 목표 작업량과 서버구현까지 혼자서 완성했고 사이트의 퀄리티도 높은 편이어서, 학습적으로나 결과물적으로나 뿌듯한 프로젝트다.
또, Express.js 로 서버까지 만들어본 경험이 뿌듯한 한편, 구현우선으로 공부하다보니 catch-up을 위해 블로그로 개념을 늦게나마 정리했다.

개인으로 진행해보니 초기세팅, 컨벤션이 일관되어 작업이 수월한 한편, 스스로 모든기능을 고민하고 결정하기 위한 선택&집중, 페이스 관리의 중요성을 느꼈다.
무엇보다 개발업무의 꽃인 협업과 공통관리의 경험이 제한되는 점이 1차 팀 프로젝트에 비해 아쉽게 다가왔다.
<br />

#### 2. 새로 배우게 된 것들
- Functional Components 숙달 
- styled-components 라이브러리 활용 스타일링
- Context API 대규모 어플리케이션 적용 
- React-dates 캘린더 라이브러리 활용 날짜지정 서비스 구현(moment 사용)
- KakaoMap API 활용 지도 서비스 구현 
- fetch 요청시 Path Parameter(id), Query String(search, filter, pagination) 반영
- Node.js, Express.js 활용 서버구현, 미들웨어 활용(인증/인가, CORS) 
<br />

#### 3. 피드백
혼자서 진행하다보니, 많은 양을 욕심부린만큼 디테일에서 아쉬운 부분들도 분명 생겼다.
1) Context API 기능과다 : 하나의 context.js 에 모든 기능이 집중되어 비효율적. 불필요 전역State 선별, Context 분리 고민필요
2) Navbar 디테일 : 내부 컨텐츠 확대/축소 애니메이션, 검색바 값삭제 x버튼 등 디테일한 UI구현 부족
3) 라이브러리 커스터마이징 미적용 : react-dates(캘린더), rsuite(슬라이더바) CSS 미수정
4) 페이지네이션 버튼 중간생략 미적용 : 버튼이 6개 이상일 때, 중간 값을 ...하고 4개/1개를 양 끝에 배치 수정필요
5) 다양한 지도API 활용 : KakaoMap은 마커 CSS가 안되서 커스텀 오버레이를 추가(Google Map 추후 경험필요)
6) Detail 페이지 모달창 미적용 : 상세 페이지는 간략한 정보를, 버튼을 누르면 모달창 등으로 추가정보를 표시하는 기능 추가필요
7) Back-End(Server) Database 미적용 : DB툴을 적용하지 않은, JS파일에 임시DB를 구현
<br />

많은 페이지와 기능, 서버까지 시도한 것은 좋은 경험이었으나 그만큼 하나에 온연히 몰두하기가 쉽지 않았다. 3차 프로젝트는 기능을 줄이더라도 집중적으로 해볼 필요가 있다고 생각했다.

또한, 프로젝트 기간에 Styled-Components, Express 학습을 병행하니, 수정소요도 생기고 공부를 중간중간 해야하는게 부가적인 부담이었다.
3차 프로젝트 전에는, 추가 적용하려는 기술(Redux, axios)에 대한 공부를 진행한 뒤 온전히 구현시도에 집중할 계획이다.
