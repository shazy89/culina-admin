export const chartDataEmployees = (companies) => {
  let two = 0;
  let four = 0;
  let fourPlus = 0;
  companies.forEach((company) => {
    if (company.users.length > 3) {
      two++;
    } else if (company.users.length > 2 && company.users.length < 5) {
      four++;
    } else {
      fourPlus++;
    }
  });

  return [two, four, fourPlus];
};

export const byDate = (companies) => {
  return companies.sort((a, b) => {
    let date1 = new Date(a.date);
    let date2 = new Date(b.date);
    if (date1.getFullYear() !== date2.getFullYear()) {
      return date1.getFullYear() - date2.getFullYear();
    } else {
      return date1.getMonth() - date2.getMonth();
    }
  });
};
