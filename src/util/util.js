

export function dateSort(a,b){  
    debugger
    var dateA = new Date(a['eventDate']).getTime();
    var dateB = new Date(b['eventDate']).getTime();
    return dateA > dateB ? 1 : -1;
}