import React, {Component} from 'react';

class Explanation extends Component {


    render() {
        return (
            <div className="Explanation">
                <h1>okdohyuk's calculator</h1>
                <h2>기능</h2>
                <ul>
                    <li>다양한 사칙연산 기능</li>
                    <li>값 초기화 기능</li>
                    <li>소수점 계산 기능</li>
                    <li>다크모드 기능</li>
                </ul>
                <h2>사용방법</h2>
                <p className="use">
                    1단계, 라이트모드와 다크모드중에서 자신이 원하는 모드를 선택해줍니다.<br />
                    2단계, 자신에게 필요한 연산을 진행해줍니다.<br />
                    3단계, 연산순서 설정이 필요한 연산을 진행시 괄호를 이용해줍니다.<br />
                    4단계, 계산식을 입력하다가 실수를 하였다면, 등호 옆에있는 지우기버튼을 이용해줍니다.
                </p>
            </div>
    )
        ;
    }
}


export default Explanation;