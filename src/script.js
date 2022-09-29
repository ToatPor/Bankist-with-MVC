import * as model from './model.js';
import loginView from './view/loginView.js';
import appView from './view/appView.js';
import welcomeView from './view/welcomeView.js';
import moveMent from './view/moveMent.js';
import balanceView from './view/balanceView.js';
import valueInView from './view/valueInView.js';
import interstView from './view/interstView.js';
import expenseView from './view/expenseView.js';
import sortView from './view/sortView.js';
import dateView from './view/dateView.js';
import formTransferView from './view/formTransferView.js';
import closeAccountView from './view/closeAccountView.js';
import timerView from './view/timerView.js';
import loanView from './view/loanView.js';

const updateUi = function () {
  welcomeView.renderWelcome(model.getUsername(model.state.currentUSer.owner));
  loginView.clearField();
  appView.openApp();
  balanceView.renderAmount(
    model.state.currentUSer,
    model.overallSummary(model.state.currentUSer.movements)
  );
  moveMent.renderMovement(model.state.currentUSer);
  valueInView.renderAmount(
    model.state.currentUSer,
    model.income(model.state.currentUSer.movements)
  );
  expenseView.renderAmount(
    model.state.currentUSer,
    model.expense(model.state.currentUSer.movements)
  );
  interstView.renderInterest(model.state.currentUSer.interestRate);
  dateView.renderDateNow(model.state.currentUSer);
  timerView.calTime();
  timerView.calRepete();
};

const login = function (data) {
  const user = model.findCurrentUser(data);
  if (!user) return;
  timerView.checkTimer();
  updateUi();
  model.setLocal();
};
const loan = function (data) {
  const check = model.checkSteatment(data);
  if (!check) return;
  model.loanApporve(data);
  updateUi();
  model.setLocal();
};
const sortData = function () {
  model.sortData();
  moveMent.renderMovement(model.state.currentUSer);
};

const transferTo = function (data) {
  const receive = model.findReciever(data);
  if (!receive) return;
  model.movementMove(data);
  model.movementDate();
  formTransferView.clearField();
  timerView.checkTimer();
  updateUi();
  model.setLocal();
};

const clsoeAcc = function (data) {
  const close = model.closeAcc(data);
  if (close !== model.state.currentUSer) return;
  closeAccountView.clearField();
  model.deleteAcc(data);
  appView.closeApp();
};

const currentAcc = function () {
  const data = model.getLocal();
  if (!data) return;
  updateUi();
};

const init = function () {
  loginView.submitForm(login);
  sortView.addHandlerSort(sortData);
  formTransferView.submitForm(transferTo);
  closeAccountView.submitForm(clsoeAcc);
  loginView.addHandlerWindow(currentAcc);
  loanView.submitForm(loan);
};

init();
