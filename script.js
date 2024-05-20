
$(document).ready(function() {
    $('#generate').on('click', function() {
        const year = parseInt($('#year').val());
        generateCalendar(year);
    });

    function generateCalendar(year) {
        $('#calendar').empty();
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        for (let month = 0; month < 12; month++) {
            const firstDay = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            
            let table = '<div class="month"><div class="month-name">' + monthNames[month] + '</div>';
            table += '<table class="calendar-table"><thead><tr>';
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            for (const day of days) {
                table += `<th class="${day === 'Sun' ? 'sunday' : ''}">${day}</th>`;
            }
            table += '</tr></thead><tbody><tr>';

            for (let i = 0; i < firstDay; i++) {
                table += '<td></td>';
            }
            for (let day = 1; day <= daysInMonth; day++) {
                const dayOfWeek = new Date(year, month, day).getDay();
                if (dayOfWeek === 0 && day !== 1) {
                    table += '</tr><tr>';
                }
                table += `<td class="${dayOfWeek === 0 ? 'sunday' : ''}">${day}</td>`;
            }
            table += '</tr></tbody></table></div>';
            $('#calendar').append(table);
        }
    }
});
