const randomInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
    const delay = randomInterval(200, 500);
    
    return new Promise((resolve, reject) => {
    
        setTimeout(() => {
            const process = Math.random() > 0.3;
            if (process) {
               resolve({ id: transaction.id, time: delay });//заменил на резолв
            } else {
                reject(transaction.id); //заменил на редждект
            }
        }, delay);
    });

    
};

const logSuccess = ({ id, time }) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = (id) => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

/*
 * Работает так
 */
//makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
//makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
//makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
//makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
/*
 * Должно работать так
 */
makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);