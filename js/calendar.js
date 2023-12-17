const holidays = ["1/1", "1/21", "1/22", "1/23", "3/1", "5/5", "5/17", "6/6", "8/15", "10/3", "10/9", "10/28", "10/29", "10/30", "12/25"];

        function daysInMonth(month, year) {
            return new Date(year, month + 1, 0).getDate();
        }

        function getFirstDayOfMonth(month, year) {
            return new Date(year, month, 1).getDay();
        }

        function generateCalendar(month, year) {
            const calendarBody = document.getElementById('calendar-body');
            calendarBody.innerHTML = '';

            const totalDays = daysInMonth(month, year);
            const firstDay = getFirstDayOfMonth(month, year);

            let dayCounter = 1;

            for (let i = 0; i < 6; i++) {
                const row = document.createElement('tr');

                for (let j = 0; j < 7; j++) {
                    const cell = document.createElement('td');
                    if ((i === 0 && j < firstDay) || dayCounter > totalDays) {
                        cell.textContent = '';
                    } else {
                        cell.textContent = dayCounter;

                        const dateStr = `${month + 1}/${dayCounter}`;
                        if (holidays.includes(dateStr)) {
                            cell.classList.add('holiday');
                        }

                        if (j === 0 || j === 6) {
                            // Sunday or Saturday (weekend)
                            cell.classList.add('weekend');
                        }

                        dayCounter++;
                    }

                    row.appendChild(cell);
                }

                calendarBody.appendChild(row);
            }

            const monthName = new Intl.DateTimeFormat('ko-KR', { month: 'long' }).format(new Date(year, month));
            document.getElementById('calendar-title').textContent = `${year}년 ${monthName} 달력`;
        }

        let currentMonth = (new Date()).getMonth();
        let currentYear = (new Date()).getFullYear();

        function prevMonth() {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            generateCalendar(currentMonth, currentYear);
        }

        function nextMonth() {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            generateCalendar(currentMonth, currentYear);
        }

        generateCalendar(currentMonth, currentYear);