const formatter = Intl.DateTimeFormat();

export const renderDate = (date: Date) => {
  return <span>{formatter.format(date)}</span>;
};
