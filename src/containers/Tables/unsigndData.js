

const tableData = 
  [{
    "id": 0,
    "key": 0,
    "requestAt": "2018-08-22, 16:26",
    "meetingKey": "치킨프렌차이즈 계모임",
    "requestType": "추가모금",
    "personKey": "김신형",
    "reason": "조합원 추가 초대",
    "agreement": "미동의"
  },
  {
    "id": 1,
    "key": 1,
    "requestAt": "2018-08-12, 20:24",
    "meetingKey": "금암동 수다모임",
    "requestType": "사용",
    "personKey": "김금자",
    "reason": "11차 곗돈 수령",
    "agreement": "동의"
  },
  {
    "id": 2,
    "key": 2,
    "requestAt": "2018-08-11, 13:10",
    "meetingKey": "덕진구 자율방범대",
    "requestType": "사용",
    "personKey": "이덕수",
    "reason": "조합원 회식",
    "agreement": "동의"
  },
  {
    "id": 3,
    "key": 3,
    "requestAt": "2018-08-12, 20:24",
    "meetingKey": "ect.",
    "requestType": "사용",
    "personKey": "ect.",
    "reason": "ect.",
    "agreement": "동의"
  },
  {
    "id": 4,
    "key": 4,
    "requestAt": "2018-08-12, 20:24",
    "meetingKey": "ect.",
    "requestType": "사용",
    "personKey": "ect.",
    "reason": "ect.",
    "agreement": "동의"
  },
];

const sortOption = {};
class transactionData {
  constructor(size) {
    this.size = size || tableData.length || 2000;
    this.datas = [];
    this.sortKey = null;
    this.sortDir = null;
  }
  dataModel(index) {
    return tableData[index];
  }
  getObjectAt(index) {
    if (index < 0 || index > this.size) {
      return undefined;
    }
    if (this.datas[index] === undefined) {
      this.datas[index] = this.dataModel(index);
    }
    return this.datas[index];
  }
  getAll() {
    if (this.datas.length < this.size) {
      for (let i = 0; i < this.size; i++) {
        this.getObjectAt(i);
      }
    }
    return this.datas.slice();
  }

  getSize() {
    return this.size;
  }
  getSortAsc(sortKey) {
    sortOption.sortKey = sortKey;
    sortOption.sortDir = 'ASC';
    return this.datas.sort(this.sort);
  }
  getSortDesc(sortKey) {
    sortOption.sortKey = sortKey;
    sortOption.sortDir = 'DESC';
    return this.datas.sort(this.sort);
  }
  sort(optionA, optionB) {
    const valueA = optionA[sortOption.sortKey].toUpperCase();
    const valueB = optionB[sortOption.sortKey].toUpperCase();
    let sortVal = 0;
    if (valueA > valueB) {
      sortVal = 1;
    }
    if (valueA < valueB) {
      sortVal = -1;
    }
    if (sortVal !== 0 && sortOption.sortDir === 'DESC') {
      return sortVal * (-1);
    }
    return sortVal;
  }
}
export default transactionData;
