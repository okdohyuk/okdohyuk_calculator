import React, {Component} from 'react';

class Explanation extends Component {


    render() {
        return (
            <div className="explanation">
                <h1>okdohyuk's calculator</h1>
                <h2>사용설명</h2>
                <p className="use">
                    1단계, 라이트모드와 다크모드중에서 자신이 원하는 모드를 선택해줍니다.<br />
                    2단계, 일반적인 사칙연산 및 연산 순서에 맞게 연산을 하실 수 있습니다.
                </p>
                <h2>개발환경</h2>
                <p className="use">
                    라이브러리: 리액트<br />
                    언어: HTML, CSS, JSX
                </p>
            </div>
        );
    }
}


export default Explanation;