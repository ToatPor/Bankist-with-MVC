const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  sort: false,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2022-08-31T17:39:07.678Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  sort: false,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

export const state = {
  currentUSer: {},
  accounts: [account1, account2],
  receiverUser: {},
};

const createId = function (data) {
  data.forEach(
    data =>
      (data.id = data.owner
        .toLowerCase()
        .split(' ')
        .map(data => data[0])
        .join(''))
  );
};

const getSummary = function (data) {
  data.forEach(
    obj => (obj.summary = obj.movements.reduce((acc, mov) => (acc += mov), 0))
  );
};

export const findCurrentUser = function (data) {
  return (state.currentUSer = state.accounts.find(
    dataId => dataId.id === data.id && dataId.pin === +data.pin
  ));
};

//render depend on data in array or you can set in model
export const overallSummary = function (data) {
  return data.reduce((acc, mov) => (acc += mov), 0);
};

export const getUsername = function (data) {
  return data.split(' ')[0];
};

export const income = function (data) {
  return data.reduce(
    (acc, movement) => (movement > 0 ? (acc += movement) : acc),
    0
  );
};

export const expense = function (data) {
  return data.reduce(
    (acc, movement) => (movement < 0 ? (acc += movement) : acc),
    0
  );
};

export const sortData = function () {
  state.currentUSer.sort = !state.currentUSer.sort;
};

export const findReciever = function (data) {
  return (state.receiverUser = state.accounts.find(
    datas => datas.id === data.receiver
  ));
};

export const movementMove = function (data) {
  const amount = overallSummary(state.currentUSer.movements);
  if (
    +data.amount >= 0 &&
    data.receiver === state.currentUSer.id &&
    amount !== 0
  )
    return;
  state.currentUSer.movements.push(-data.amount);
  state.receiverUser.movements.push(+data.amount);
};

export const movementDate = function () {
  state.currentUSer.movementsDates.push(new Date().toISOString());
  state.receiverUser.movementsDates.push(new Date().toISOString());
};

export const closeAcc = function (data) {
  const findUser = state.accounts.find(
    acc => acc.id === data.user && acc.pin === +data.pass
  );
  return findUser;
};

export const deleteAcc = function (data) {
  const findUser = state.accounts.findIndex(
    acc => acc.id === data.user && acc.pin === +data.pass
  );
  state.accounts.splice(findUser, 1);
};
export const setLocal = function () {
  localStorage.setItem('loginAcc', JSON.stringify(state.currentUSer));
};

export const getLocal = function () {
  const dataAcc = localStorage.getItem('loginAcc');
  if (dataAcc) state.currentUSer = JSON.parse(dataAcc);
  return dataAcc;
};

export const checkSteatment = function (data) {
  const result = state.currentUSer.movements.some(
    mov => mov >= +data.loan * 0.1
  );
  return result;
};
export const loanApporve = function (data) {
  state.currentUSer.movements.push(+data.loan);
  state.currentUSer.movementsDates.push(new Date().toISOString());
};
const init = function () {
  createId(state.accounts);
  getSummary(state.accounts);
};
init();
// export const formatNumber = function (number, user) {
//   return new Intl.NumberFormat(user.locale, {
//     style: 'currency',
//     currency: user.currency,
//   }).format(number);
// };
