export const formatRuntime = (minute) => {
  let hrs = 0;
  let min = 0;
  hrs = Math.floor(minute / 60);
  min = minute % 60;
  return `${hrs}h ${min}m`;
};

export const formatReleaseDate = (releaseDate) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let releaseDateNew = new Date(releaseDate);
  let date =
    releaseDateNew.getDate() < 10
      ? `0${releaseDateNew.getDate()}`
      : releaseDateNew.getDate();
  let month = months[releaseDateNew.getMonth()];
  let year = releaseDateNew.getFullYear();
  return `${month} ${date}, ${year}`;
};

export const formatBudget = (money) => {
  let budget =
    money === 0
      ? `-`
      : money < 10e5
      ? `${money} USD`
      : money < 10e8
      ? `${money / 10e5} million USD`
      : `${money / 10e8} bilion USD`;
  return budget;
};

export const formatRevenue = (money) => {
  let revenue =
    money === 0
      ? `-`
      : money < 10e5
      ? `$${money}`
      : money < 10e8
      ? `$${money / 10e5} million`
      : `$${money / 10e8} bilion`;
  return revenue;
};
