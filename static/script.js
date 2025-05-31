// 예시 계정 데이터 (실제로는 서버나 DB에서 받아와야 함)
const accountData = [
  { id: '20230001', name: '김민수', email: 'kimms@school.edu', password: 'abc1234' },
  { id: '20230002', name: '이지은', email: 'leeje@school.edu', password: 'qwe5678' },
  { id: '20230003', name: '박지호', email: 'parkjh@school.edu', password: 'zxc9876' }
  { id: '20230004', name: '김민호', email: 'kimmh@school.edu', password: 'xyz2030' }
];

// DOM 요소 참조
const form = document.getElementById('search-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // 폼 제출 시 새로고침 방지

  const inputId = document.getElementById('student-id').value.trim();
  const inputName = document.getElementById('student-name').value.trim();

  // 입력 검증
  if (!inputId || !inputName) {
    showResult('학번과 이름을 모두 입력해주세요.');
    return;
  }

  // 계정 찾기
  const user = accountData.find(
    (item) => item.id === inputId && item.name === inputName
  );

  if (user) {
    showResult(`
      ✅ <strong>${user.name}</strong> 학생의 계정 정보입니다:<br>
      📧 아이디: <strong>${user.email}</strong><br>
      🔑 비밀번호: <strong>${user.password}</strong>
    `);
  } else {
    showResult('❌ 해당 정보를 찾을 수 없습니다. 학번과 이름을 다시 확인해주세요.');
  }
});

// 결과 출력 함수
function showResult(message) {
  resultDiv.innerHTML = message;
  resultDiv.style.display = 'block';
}
