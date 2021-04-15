DROP TABLE IF EXISTS books;

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    page_count INTEGER NOT NULL,
    description TEXT,
    fiction BOOLEAN
);

INSERT INTO books(title, author, page_count, description, fiction)
VALUES
('Harry Potter', 'JK Rowling', 550, 'hi', true);

