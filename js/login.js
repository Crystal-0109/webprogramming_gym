localStorage.clear();

const users = [
  {name: '관리자', id: 'admin', password: 'admin', deadline: '2023-12-31', locker: '-1'},
  {name: '행복', id: 'happy', password: 'call', deadline: '2023-10-31', locker: '1234'},
  {name: '행운', id: 'luck', password: 'key', deadline: '2023-12-20', locker: '4321'},
  {name: '안녕', id: 'how', password: 'areyou', deadline: '2024-02-28', locker: '-1'}
]
const usersJSON = JSON.stringify(users)

localStorage.setItem('users', usersJSON);

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault(); // 폼 제출 기본 동작 막기

  // 입력한 아이디와 비밀번호 가져오기
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  const matchedUser = users.find(users => users.id === username && users.password === password);
  const loginUser = [];
  // 일치하는 사용자가 있으면 로그인 성공을 출력
  if (matchedUser) {
      alert('로그인 성공!');
      sessionStorage.setItem('loginUser', JSON.stringify(matchedUser));
      location.href='mypage.html';
  } else {
      alert('일치하는 사용자를 찾을 수 없습니다. 아이디와 비밀번호를 확인하세요.');
  }
});

document.getElementById('register-form').addEventListener('submit', function(e) {
  e.preventDefault(); // 폼 제출 기본 동작 막기

  // 입력한 아이디와 비밀번호 가져오기
  var newname = document.getElementById('new-name').value;
  var newUsername = document.getElementById('new-username').value;
  var newPassword = document.getElementById('new-password').value;

  const newUsers = {name: newname, id: newUsername, password: newPassword};

  users.push(newUsers);
  const usersJSON = JSON.stringify(users)

  localStorage.setItem('users', usersJSON);

  document.getElementById("new-name").value = "";
  document.getElementById("new-username").value = "";
  document.getElementById("new-password").value = "";

  alert('회원가입 성공');
});