const compareDates = (d1, d2) => {
    let date1 = new Date(d1).getTime();
    let date2 = new Date(d2).getTime();
  
    if (date1 < date2) {
      console.log(`${d1} is less than ${d2}`);
    } else if (date1 > date2) {
      console.log(`${d1} is greater than ${d2}`);
    } else {
      console.log(`Both dates are equal`);
    }
  };
  
  compareDates("06/21/2022", "07/28/2023");
  compareDates("01/01/2001", "01/01/2001");
  compareDates("11/01/2021", "02/01/2022");