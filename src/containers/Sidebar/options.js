
const options = [
    {
        key: 'dashboard',
        label: '메인 화면',
        leftIcon: 'ion-alert',
      },
  {
    key: 'charts',
    label: '모임 찾기',
    leftIcon: 'ion-arrow-graph-up-right',
    children: [
      {
        key: 'reactChart2',
        label: '해맑은 장사꾼(계모임)',
      },{
        key: 'reactChart3',
        label: '녹색 어머니 연합회(단체)',
      },{
        key: 'reactChart4',
        label: '프렌차이즈 간담회(계모임)',
      },
    ],
  },
  {
    key: 'Forms',
    label: '개인 설정',
    leftIcon: 'ion-android-mail',
    children: [
      {
        key: 'InputField',
        label: '회원정보 수정',
      },
      {
        key: 'editor',
        label: '모임 신청하기',
      },
    ],
  },
  {
    key: 'table',
    label: '사용자 페이지',
    leftIcon: 'ion-android-menu',
    children: [
      {
        key: 'table_ant',
        label: '나의 현황',
      },
    ],
  },
];
export default options;
