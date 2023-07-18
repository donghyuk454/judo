import React from 'react';

const MainPage = () => {
  return (
    <div>
      <h1>Judo</h1>
      <nav>
        <ul className="tabs">
          <li className="tab">회원 관리</li>
          <li className="tab">TODO</li>
          <li className="tab">계정 관리</li>
        </ul>
      </nav>
      <div className="content">
        {/* 각 탭에 해당하는 내용을 추가하세요 */}
        {/* 예: 회원 관리 탭 내용 */}
        <div id="회원관리" className="tab-content">
          <h2>회원 관리 페이지</h2>
          {/* 추가적인 내용 */}
        </div>
        {/* TODO 탭 내용 */}
        <div id="TODO" className="tab-content">
          <h2>TODO 페이지</h2>
          {/* 추가적인 내용 */}
        </div>
        {/* 계정 관리 탭 내용 */}
        <div id="계정관리" className="tab-content">
          <h2>계정 관리 페이지</h2>
          {/* 추가적인 내용 */}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
