import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';

function App() {
  const handleLogin = (email, password) => {
    // 로그인 로직을 구현하세요.
  };

  return (
    <div>
      {/* <h1>회원 관리 프로그램</h1>
      <LoginPage onLogin={handleLogin} /> */}
      <MainPage />
    </div>
  );
}

export default App;
