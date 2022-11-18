// export function formatDate(dateString) {
//   return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-US', {
//     day: 'numeric',
//     month: 'long',
//     year: 'numeric',
//     timeZone: 'UTC',
//   })
// }
export function formatDate(dateString) {
  return new Date(`${dateString}`).toLocaleDateString('zh-CN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Shanghai',
  })
}
