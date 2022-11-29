
export function formatDate(dateString) {
    return new Date(`${dateString}`).toLocaleDateString('zh-CN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'Asia/Hong_kong',
    })
}

export function yyyymmddDate(dateString) {
    if(dateString){
        return new Date(`${dateString}`).toISOString().slice(0, 10);
    }else{
        return '0000-00-00'
    }
}
