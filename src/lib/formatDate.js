
export function formatDate(dateString) {
    return new Date(`${dateString}`).toLocaleDateString('zh-CN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'Asia/Shanghai',
    })
}

export function yyyymmddDate(dateString) {
    return new Date(`${dateString}`).toISOString().slice(0, 10);
}
