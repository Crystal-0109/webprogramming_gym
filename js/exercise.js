function showPopup(areaName) {
  // 팝업 창 생성
  var popup = document.createElement("div");
  popup.id = "customPopup";
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.padding = "20px";
  popup.style.background = "#fff";
  popup.style.border = "1px solid #000";
  popup.style.zIndex = "9999";

  // 팝업 내용 및 닫기 버튼 추가
  var content = getPopupContent(areaName);
  popup.innerHTML = content + "<button onclick=\"closePopup()\">X</button>";

  // body에 팝업 추가
  document.body.appendChild(popup);
}

function getPopupContent(areaName) {
  // 각 area에 따른 내용 동적으로 설정
  switch (areaName) {
      case "대흉근":
          return "<p>대흉근은 가슴의 앞쪽, 위쪽을 광범위하게 덮고 있는 큰 부채꼴 모양의 근육으로, 위팔 어깨관절에서 팔을 움직이고 어깨 갈비관절에서 어깨뼈를 움직입니다.<br><br>관련 운동 기구: 펙덱 플라이, 덤벨 프레스</p>";
      case "이두근":
          return "<p>대퇴이두근은 반건양근·반막양근과 함께 슬괵근을 이룬다. 대퇴 내측에 있는 반건양근에 과도한 부하가 걸리면 연관통이 둔부고랑을 중심으로 나타나고, 대퇴의 뒤쪽과 장딴지 쪽으로 확산된다. 외측의 대퇴이두근에 부하가 발생하면 연관통은 슬와를 중심으로 나타나고, 대퇴의 뒤쪽으로 상행하여 확산된다.<br><br>관련 운동 기구: 덤벨 컬, 바벨 컬, 암컬 머신, 프리쳐 컬</p>";
      case "전완근":
          return "<p>전완근은 앞팔의 근육이다. 팔에 있는 여러 가지 소근육을 통틀어 일컫는 단어이다.<br><br>관련 운동 기구: 리스트 컬, 리스트 롤러, 해머컬</p>";
      case "대퇴근":
          return "<p>대퇴근은 4개의 근육으로 구성되어 있으며 대퇴사두근이라고 한다. 대퇴직근, 대퇴중간근, 내측광근, 외측광근<br><br>관련 운동 기구: 바벨 풀스쿼트, 케이블 힙어덕션, 덤벨 리어 런지</p>";
      case "광배근":
          return "<p>광배근은 대원근과 대흉근과 함께 팔의 하강운동을 돕는다. 내전운동, 신전운동, 및 어깨의 내측 회전을 수행한다. 팔이 머리 위 위치에 고정되어 있으면, 광배근은 몸통을 위쪽과 앞쪽으로 민다.<br><br>관련 운동 기구: 시티드로우, 티바로우</p>";
      case "삼두근":
          return "<p>팔꿈치 이완과 어깨근육을 자유롭게 해주는 주요 근육으로, 팔 위쪽 어깨의 뒷부분과 팔꿈치 뒷부분까지 연결되어 있으며 3개의 근육으로 이루어져 있다. 긴근육은 견갑골의 외측에서, 내측두와 외측두는 상완골체 후면에서 시작되어 합쳐져 근육 가운데 부분을 이룬다.<br><br>관련 운동 기구: 스컬 크러셔, 덤벨 삼두근 킥백, 클로즈그립 벤치프레스</p>";
      case "내전근":
          return "<p>내전근은 흔히 안쪽 허벅지라고 설명드리며 크게는 장내전근,단내전근,대내전근 이렇게 3개의 근육으로 나눠저 있습니다. 장내전근과 단내전근은 모두 치골전면 즉 골반 아래쪽부터 시작하여 대퇴골 중앙부에 붙어있으며 고관절의 내전과 굴곡 그리고 내회전 보조를 작용합니다.<br><br>관련 운동 기구: 이너타이, 와이드 레그프레스, 와이드 V스쿼트 머신</p>";
      case "둔근":
          return "<p>둔근은 골반을 바로 세우고 펴주는 역할을 하고 있으며 그 중에서 둔근의 중반에 걸쳐 있는 중둔근은 고관절을 옆으로 벌릴 수 있는 기능을 맡고 있습니다. 둔근을 강화하면 고관절과 요추의 교정효과를 기대해볼 수 있고 무릎 주위의 근육 강화와 부상예방을 기대할 수 있다. <br><br>관련 운동 기구: 힙 어브덕션, 힙 쓰러스트</p>";
      default:
          return "<p>기본 설명 내용...</p>";
  }
}

function closePopup() {
  var popup = document.getElementById("customPopup");
  if (popup) {
      popup.remove();
  }
}