# 요구사항이 콘솔로 수정된 버전입니다.

> 원본은 [우테코 레포지토리](https://github.com/woowacourse/javascript-racingcar-precourse)에서 확인하세요.

<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-racingcar-precourse/blob/main/images/racingcar_icon.png?raw=true"/>
</p>
<h1 align="middle">자동차 경주 게임</h1>

## 🔍 진행방식

- 미션은 **기능 요구사항, 프로그래밍 요구사항, 과제 진행 요구사항** 세 가지로 구성되어 있다.
- 세 개의 요구사항을 만족하기 위해 노력한다. 특히 기능을 구현하기 전에 기능 목록을 만들고, 기능 단위로 커밋 하는 방식으로 진행한다.
- 기능 요구 사항에 기재되지 않은 내용은 스스로 판단하여 구현한다.

---
## 🎯 기능 요구사항
초간단 자동차 경주 게임을 구현한다.

- 주어진 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다.
- 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시키고, "[ERROR]"로 시작하는 에러 메시지를 출력 후 그 부분부터 입력을 다시 받는다.
- 아래의 프로그래밍 실행 결과 예시와 동일하게 입력과 출력이 이루어져야 한다.

<br>

## ✍🏻 입출력 요구사항

### ⌨️ 입력

- 경주 할 자동차 이름(이름은 쉼표(,) 기준으로 구분)

```
pobi,woni,jun
```

- 시도할 회수

```
5
```

### 🖥 출력

- 각 차수별 실행 결과

```
pobi : --
woni : ----
jun : ---
```

- 단독 우승자 안내 문구

```
최종 우승자 : pobi
```

- 공동 우승자 안내 문구

```
최종 우승자 : pobi, jun
```

- 예외 상황 시 에러 문구를 출력해야 한다. 단, 에러 문구는 [ERROR] 로 시작해야 한다.

```
[ERROR] 시도 횟수는 숫자여야 한다.
```

### 💻 프로그래밍 실행 결과 예시

```
경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
pobi,woni,jun
시도할 회수는 몇회인가요?
5

실행 결과
pobi : -
woni : 
jun : -

pobi : --
woni : -
jun : --

pobi : ---
woni : --
jun : ---

pobi : ----
woni : ---
jun : ----

pobi : -----
woni : ----
jun : -----

최종 우승자 : pobi, jun
```

<br>

---
## ✅ 프로그래밍 요구사항

### 라이브러리
- 전진하는 조건을 판단하기 위한 랜덤 값은 [`MissionUtils` 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Random.pickNumberInRange`를 사용해 구한다.
  ```javascript
  // ex)
  const randomNumber = Random.pickNumberInRange(0, 9);
  ```

### 공통 요구사항

- `package.json`을 변경할 수 없고 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않는다. 순수 Vanilla JS로만 구현한다.
- **[자바스크립트 코드 컨벤션](https://github.com/woowacourse/woowacourse-docs/tree/feature/styleguide/styleguide/javascript)을 지키면서 프로그래밍** 한다.
- 프로그램 종료 시 process.exit()를 호출하지 않는다.
- 프로그램 구현이 완료되면 `ApplicationTest`의 모든 테스트가 성공해야 한다. **테스트가 실패할 경우 0점 처리한다.**
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 이름을 수정하거나 이동하지 않는다.
- **indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용**한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.
- **함수(또는 메소드)가 한 가지 일만 하도록 최대한 작게** 만들어라.
- Jest를 이용하여 본인이 정리한 기능 목록이 정상 동작함을 테스트 코드로 확인한다.
- else를 지양한다.
  - 힌트: if 조건절에서 값을 return하는 방식으로 구현하면 else를 사용하지 않아도 된다.
  - 때로는 if/else, switch문을 사용하는 것이 더 깔끔해 보일 수 있다. 어느 경우에 쓰는 것이 적절할지 스스로 고민해 본다.
- 도메인 로직에 단위 테스트를 구현해야 한다. 단, UI(Console.readLine, Console.print) 로직에 대한 단위 테스트는 제외한다.
  - 핵심 로직을 구현하는 코드와 UI를 담당하는 로직을 구분한다.

### 추가된 요구 사항

- 함수(또는 메서드)의 길이가 10라인을 넘어가지 않도록 구현한다.
  - 함수(또는 메서드)가 한 가지 일만 잘하도록 구현한다.
- 메서드의 파라미터 개수는 최대 3개까지만 허용한다.

### Car 객체
- 다음 Car 객체를 활용해 구현해야 한다.
- Car 기본 생성자를 추가할 수 없다.
- name, position 변수의 접근 제어자인 private을 변경할 수 없다.
- 가능하면 setPosition(int position) 메소드를 추가하지 않고 구현한다.

```js
class Car {
  #name;
  #position = 0;

  constructor(name) {
    this.name = name;
  }

    // 추가 기능 구현
}
```

<br>

## 📝 과제 진행 요구사항

- 미션은 [https://github.com/woowacourse/javascript-racingcar-precours](https://github.com/woowacourse/javascript-racingcar-precourse) 저장소를 fork/clone해 시작한다.
- **기능을 구현하기 전에 구현할 기능 목록을 정리해 javascript-racingcar-precourse/docs/README.md 파일에** 추가한다.
- **git의 commit 단위는 앞 단계에서 README.md 파일에 정리한 기능 목록 단위로 추가**한다.
- [프리코스 과제 제출](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 문서 절차를 따라 미션을 제출한다.

## ✉️ 미션 제출 방법

- 미션 구현을 완료한 후 GitHub을 통해 제출해야 한다.
   - GitHub을 활용한 제출 방법은 [프리코스 과제 제출 문서](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 를 참고해 제출한다.
- GitHub에 미션을 제출한 후 [우아한테크코스 지원 플랫폼](https://apply.techcourse.co.kr) 에 접속하여 프리코스 과제를 제출한다.
   - 자세한 방법은 [링크](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse#제출-가이드) 를 참고한다.
   - **Pull Request만 보내고, 지원 플랫폼에서 과제를 제출하지 않으면 최종 제출하지 않은 것으로 처리되니 주의한다.**

### 🚨 과제 제출 전 체크리스트 - 0점 방지를 위한 주의사항
- 요구사항에 명시된 출력값 형식을 지키지 않을 경우 기능 구현을 모두 정상적으로 했더라도 0점으로 처리된다.
- 기능 구현을 완료한 뒤 아래 가이드에 따라 테스트를 실행했을 때 모든 테스트가 성공하는 지 확인한다. **테스트가 실패할 경우 0점으로 처리되므로, 반드시 확인 후 제출한다.**

### ✔️ 테스트 실행 가이드
- 테스트 실행에 필요한 패키지 설치를 위해 `Node.js` 버전 `14` 이상이 필요하다. 
- 다음 명령어를 입력해 패키지를 설치한다.     
```bash
// {폴더 경로}/javascript-racingcar-precourse/ 에서
npm install
```     

- 설치가 완료되었다면, 다음 명령어를 입력해 테스트를 실행한다.
```bash
// {폴더 경로}/javascript-racingcar-precourse/ 에서
npm run test
```