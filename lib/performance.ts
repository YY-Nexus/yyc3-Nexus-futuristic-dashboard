export function reportWebVitals(metric: any) {
  if (metric.label === 'web-vital') {
    console.log(metric)

    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(metric),
    })
  }
}
