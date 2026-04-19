export function capitalize(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}