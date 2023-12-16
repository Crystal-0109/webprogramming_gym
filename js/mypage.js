window.onload = function() {
  // 세션 스토리지에서 현재 로그인한 사용자 정보 가져오기
  const currentUserJSON = sessionStorage.getItem('loginUser');
  const currentUser = JSON.parse(currentUserJSON);

  if (!currentUser) {
    const loginPrompt = prompt('마이페이지를 열려면 먼저 로그인이 필요합니다.로그인페이지로이동');

    if (loginPrompt && loginPrompt.toLowerCase() === '예') {
      location.href = 'login.html';
    } else {
      alert('로그인이 필요합니다. 마이페이지를 이용하려면 로그인');
    }
  } else {
    // 현재 사용자의 기한(deadline) 가져오기
    const deadline = currentUser ? currentUser.deadline : 'N/A';
    const locker = currentUser ? currentUser.locker : 'N/A';

    // 현재 날짜와 기한 사이의 차이 계산하기
    const currentDate = new Date();
    const deadlineDate = new Date(deadline);
    const timeDifference = deadlineDate - currentDate;
    const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // HTML에 기한 출력하기
    const deadlineElement = document.getElementById('deadlineday');
    deadlineElement.textContent = deadline;

    const lockerElement = document.getElementById('locker');
    lockerElement.textContent = locker;

    const daysRemainingElement = document.getElementById('leftday');
    if (daysRemaining < 0) {
      daysRemainingElement.textContent = "마감 지남"
    } else {
      daysRemainingElement.textContent = daysRemaining + '일';
    }
  }





  





  
  
}