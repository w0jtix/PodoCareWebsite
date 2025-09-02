type BooksyInfo = {
    name: string;
}

export const booksyData : BooksyInfo = {
    name:  "podocarepoznan",
}

export function getBooksyUrl (): string {
    return `https://${booksyData.name}.booksy.com/a`
}