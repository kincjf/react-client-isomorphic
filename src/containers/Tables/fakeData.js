// const API_URL = "http://13.77.161.105:3000/api/Fund";

// let tableData = 
//   [{
//     "fundNameKey": "치킨프렌차이즈 계모임",
//     "initialTotalPrice": "150,000",
//     "currentTotalPrice": "1,200,000",
//     "startedAt": "2017-09-01",
//     "expiredAt": "2018-09-01",
//   },
//   {
//     "id": 1,
//     "key": 1,
//     "fundNameKey": "전주시 어머니회",
//     "initialTotalPrice": "50,000",
//     "currentTotalPrice": "800,000",
//     "startedAt": "2016-09-01",
//     "expiredAt": "2020-09-01",
//   },
//   {
//     "id": 2,
//     "key": 2,
//     "fundNameKey": "전주이씨 종친회",
//     "initialTotalPrice": "500,000",
//     "currentTotalPrice": "5,800,000",
//     "startedAt": "2010-10-01",
//     "expiredAt": "2020-10-01",
//   },
//   {
//     "id": 3,
//     "key": 3,
//     "fundNameKey": "ect.",
//     "initialTotalPrice": "150,000",
//     "currentTotalPrice": "1,200,000",
//     "startedAt": "2017-09-01",
//     "expiredAt": "2018-09-01",
//   },
//   {
//     "id": 4,
//     "key": 4,
//     "fundNameKey": "ect.",
//     "initialTotalPrice": "150,000",
//     "currentTotalPrice": "1,200,000",
//     "startedAt": "2017-09-01",
//     "expiredAt": "2018-09-01",
//   },
//   {
//     "id": 5,
//     "key": 5,
//     "fundNameKey": "ect.",
//     "initialTotalPrice": "150,000",
//     "currentTotalPrice": "1,200,000",
//     "startedAt": "2017-09-01",
//     "expiredAt": "2018-09-01",
//   },
//   {
//     "id": 6,
//     "key": 6,
//     "fundNameKey": "ect.",
//     "initialTotalPrice": "150,000",
//     "currentTotalPrice": "1,200,000",
//     "startedAt": "2017-09-01",
//     "expiredAt": "2018-09-01",
//   },
//   {
//     "id": 7,
//     "key": 7,
//     "fundNameKey": "ect.",
//     "initialTotalPrice": "150,000",
//     "currentTotalPrice": "1,200,000",
//     "startedAt": "2017-09-01",
//     "expiredAt": "2018-09-01",
//   }];

const sortOption = {};
class fakeData {
  constructor(data, size) {
    this.tableData = data;
    this.size = size || this.tableData.length || 2000;
    this.datas = [];
    this.sortKey = null;
    this.sortDir = null;
  }
  dataModel(index) {
    return this.tableData[index];
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
export default fakeData;
