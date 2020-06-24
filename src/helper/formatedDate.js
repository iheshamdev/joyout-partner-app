const formatedDate = (date = new Date()) => {
  let d = new Date(date);
  let YYYY = d.getFullYear();
  let MM = d.getMonth() + 1;
  let DD = d.getDate();
  let result = YYYY + '-' + MM + '-' + DD;
  return result;
};

export default formatedDate;
