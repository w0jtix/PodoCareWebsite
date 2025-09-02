export const processText = (text: string) => {
    return text
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="terms-link">$1</a>')
    .replace(/__(.+?)__/g, '<u>$1</u>');
  }