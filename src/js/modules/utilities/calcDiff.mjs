/**
 * Calculates the time difference between the input and right now in Days, hours and minutes. Also adjusting the input date from UTC to UTC +1 to get the correct time in local time.
 * @param {string} timeValue A string containing a date in a supported format
 * @returns The difference between the input date string and right now in days, hours and minutes.
 */
export function timeDiff(timeValue) {
  const today = Date.parse(new Date());
  const parsed = Date.parse(timeValue);

  //I'm sure there's an easier way of doing this but google was not my friend today

  const diff = parsed - today;
  const inSeconds = diff / 1000;
  const minutes = Math.floor(inSeconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const newHours = hours - days * 24 - 1; //Minus one to adjust for timezone
  const newMin = minutes - hours * 60;

  if(days < 0){
    return "Ended"
  };

  return `${days}D ${newHours}H ${newMin}M`;
}
