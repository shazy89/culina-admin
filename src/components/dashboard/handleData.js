export const chartDataEmployees = (companies) => {
  let two = 0;
  let four = 0;
  let sixPlus = 0;
  companies.forEach((company) => {
    if (company.users.length > 3) {
      two += 1;
    } else if (company.users.length > 2 && company.users.length < 5) {
      four += 1;
    } else {
      sixPlus += 1;
    }
  });

  return [two, four, sixPlus];
};
