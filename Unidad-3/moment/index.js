import moment from "moment";

const calculateDays = (newBirthday) => {

  const now = moment();
  const birthDay = moment(newBirthday, "DD-MM-YYYY");

  const days = now.diff(birthDay, "days");

  console.log(days);
}

calculateDays("13/10/1997");