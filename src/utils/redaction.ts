export function redact(input: string): string {
  return input.replace(/(secret|password)=([^&\s]+)/gi, '$1=REDACTED');
}
