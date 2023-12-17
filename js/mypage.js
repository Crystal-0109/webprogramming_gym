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
    const userNm = currentUser ? currentUser.name : 'N/A';

    // 현재 날짜와 기한 사이의 차이 계산하기
    const currentDate = new Date();
    const deadlineDate = new Date(deadline);
    const timeDifference = deadlineDate - currentDate;
    const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    //사용자 이름 출력하기
    const userNmElement = document.getElementById('userNm');
    userNmElement.textContent = userNm;

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

    // 쿠폰 코드 입력 활성화
    const couponRadio = document.getElementById('coupon');
    const cashRadio = document.getElementById('cash');
    const cardRadio = document.getElementById('card');
    const couponCodeInput = document.getElementById('couponCode');
    const cardnumInput = document.getElementById('cardnum');
    const cardperiodInput = document.getElementById('cardperiod');
    const cardcvcInput = document.getElementById('cardcvc');
    couponRadio.addEventListener('click', function() {
      couponCodeInput.disabled = false;
      cardnumInput.disabled = true;
      cardperiodInput.disabled = true;
      cardcvcInput.disabled = true;
    });
    cashRadio.addEventListener('click', function() {
      couponCodeInput.disabled = true;
      cardnumInput.disabled = true;
      cardperiodInput.disabled = true;
      cardcvcInput.disabled = true;
    });
    cardRadio.addEventListener('click', function() {
      couponCodeInput.disabled = true;
      cardnumInput.disabled = false;
      cardperiodInput.disabled = false;
      cardcvcInput.disabled = false;
    });


    const paymentButton = document.getElementById('online-payment');
    paymentButton.addEventListener('click', function() {
      // 월 선택 값 가져오기
      const selectedMonths = document.getElementById('months').value;

      // 현금, 카드, 쿠폰 선택 값 가져오기
      const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

      

      // 총 결제 금액 계산
      let totalAmount = 10000 * selectedMonths; // 월당 10,000원

      // 3개월 번들 할인 적용
      if (selectedMonths >= 3) {
        totalAmount -= 1000 * Math.floor(selectedMonths / 3); // 3개월 번들 할인 - 1,000원씩
      }

      // 쿠폰 할인 적용
      const couponCode = document.getElementById('couponCode').value;
      if (couponCode === 'X-MAS') {
        const discountAmount = 0.2 * totalAmount; // 20% 할인
        totalAmount -= discountAmount;
      } else {
        alert("쿠폰이 알맞지 않습니다.");
        return;
      }
      console.log(paymentMethod);

      if (paymentMethod == 'card') {
        if (cardnumInput.value.length !== 16 || cardperiodInput.value.length !== 4 || cardcvcInput.value.length !== 3) {
            alert('카드 번호는 16자리, 유효기간은 4자리, CVC는 3자리여야 합니다. 다시 확인해주세요.');
        } else {
          alert("카드로 " + totalAmount + '원 결제되었습니다.');
        }
      } else if (paymentMethod == 'coupon') {
        alert("쿠폰으로 " + totalAmount + '원 결제되었습니다.');
      } else if (paymentMethod == 'cash') {
        alert("현금으로 " + totalAmount + '원 결제되었습니다.');
      }
      if (!paymentMethod) {
        alert('결제 수단을 선택해주세요.');
        return; // 결제 수단이 선택되지 않았으면 여기서 함수 종료
      }
      
      // 결제 수단에 따라 메시지 출력
      // let paymentMessage = '';
      // switch (paymentMethod) {
      //   case 'cash':
      //     paymentMessage = '현금으로 ';
      //     break;
      //   case 'card':
      //     paymentMessage = '카드로 ';
      //     break;
      //   case 'coupon':
      //     paymentMessage = '쿠폰으로 ';
      //     break;
      //   default:
      //     alert('결제 수단을 선택해주세요.');
      //     return;
      // }

      // // 최종 결제 메시지 출력
      // alert(paymentMessage + totalAmount + '원 결제되었습니다.');

  });
}