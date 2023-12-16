window.onload = function() {
  // 세션 스토리지에서 현재 로그인한 사용자 정보 가져오기
  const currentUserJSON = sessionStorage.getItem('loginUser');
  const currentUser = JSON.parse(currentUserJSON);

  if (!currentUser) {
    const loginPrompt = alert('마이페이지를 열려면 먼저 로그인이 필요합니다.로그인페이지로이동');

    location.href = 'login.html';
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
    if (locker == '-1') {
      const lockerregisterButton = document.createElement('button');
      lockerregisterButton.textContent = '사물함 등록';
      lockerregisterButton.addEventListener('click', function() {
        // 프롬프트 창을 통해 사용자의 사물함 번호를 입력받기
        const newLocker = prompt('사물함 번호를 입력하세요:');
        
        // 사용자가 취소를 누르지 않은 경우에만 처리
        if (newLocker !== null) {
          // 세션 스토리지의 loginUser의 locker 속성에 등록
          currentUser.locker = newLocker;
          sessionStorage.setItem('loginUser', JSON.stringify(currentUser));
          
          // 등록된 사물함 번호를 HTML에 출력
          lockerElement.textContent = newLocker;

          alert('사물함이 등록되었습니다.');
        }
      });

      // 버튼을 HTML에 추가
      lockerElement.appendChild(lockerregisterButton);
    } else {
      lockerElement.textContent = locker;
    }
    

    const daysRemainingElement = document.getElementById('leftday');
    if (daysRemaining < 0) {
      daysRemainingElement.textContent = "마감 지남"
    } else {
      daysRemainingElement.textContent = daysRemaining + '일';
    }
  }
}