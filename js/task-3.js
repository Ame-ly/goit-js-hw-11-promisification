const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = transaction => {
  const delay = randomIntegerFromInterval(200, 500);
  const onResolve = {
    id: transaction.id,
    time: delay,
    money: transaction.amount,
  };
  const onReject = transaction.id;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

      if (canProcess) {
        resolve(onResolve);
      } else {
        reject(onReject);
      }
    }, delay);
  });
};

const logSuccess = ({ id, time, money }) => {
  console.log(
    `%c Transaction ${id} processed in ${time}ms - ${money}$`,
    'color: green; font-size: 16px',
  );
};

const logError = id => {
  console.warn(
    `%c Error processing transaction ${id}. Please try again later.`,
    'color: red; font-size: 16px',
  );
};

makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);

// const makeTransaction = (transaction, onSuccess, onError) => {
//   const delay = randomIntegerFromInterval(200, 500);

//   setTimeout(() => {
//     const canProcess = Math.random() > 0.3;

//     if (canProcess) {
//       onSuccess(transaction.id, delay);
//     } else {
//       onError(transaction.id);
//     }
//   }, delay);
// };

// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
