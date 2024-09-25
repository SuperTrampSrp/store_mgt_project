export const updateTime = (): { formattedTime: string; currentDay: string } => {
    const currentDate = new Date();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    // Convert to 12-hour format and determine AM/PM
    const isPM = hours >= 12;
    const formattedHours = hours % 12 || 12; // Handle 0 as 12 for 12 AM/PM
    const ampm = isPM ? 'PM' : 'AM';

    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const currentDay = days[currentDate.getDay()];

    const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;

    return { formattedTime, currentDay };
};

