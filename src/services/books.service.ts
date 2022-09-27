import { CreateBookDto, UpdateBookReviewDto } from '@dtos/books.dto';
import { HttpException } from '@exceptions/HttpException';
import { Book } from '@interfaces/books.interface';
import bookModel from '@models/books.model';
import { isEmpty } from '@utils/util';

class BookService {
  public books = bookModel;

  public async findAllBook(): Promise<Book[]> {
    const books: Book[] = await bookModel.find();
    return books;
  }

  public async findBookById(bookId: string): Promise<Book> {
    if (isEmpty(bookId)) throw new HttpException(400, 'BookId is empty');

    const findBook: Book = await bookModel.findOne({ _id: bookId });
    if (!findBook) throw new HttpException(409, "Book doesn't exist");

    return findBook;
  }

  public async createBook(bookData: CreateBookDto): Promise<Book> {
    if (isEmpty(bookData)) throw new HttpException(400, 'bookData is empty');

    const createBookData: any = await bookModel.create(bookData);

    return createBookData;
  }

  public async updateBook(bookId: string, bookData: CreateBookDto): Promise<Book> {
    if (isEmpty(bookData)) throw new HttpException(400, 'bookData is empty');

    const updateBookById: Book = await bookModel.findByIdAndUpdate(bookId, { bookData });
    if (!updateBookById) throw new HttpException(409, "Book doesn't exist");

    return updateBookById;
  }

  public async updateBookReview(bookId: string, reviewData: UpdateBookReviewDto): Promise<Book> {
    if (isEmpty(reviewData)) throw new HttpException(400, 'bookData is empty');
    console.log(reviewData);
    const updateBookById: Book = await (await bookModel.findByIdAndUpdate(bookId, { $push: { reviews: reviewData } })).populate('reviews.user');
    if (!updateBookById) throw new HttpException(409, "Book doesn't exist");

    return updateBookById;
  }

  public async deleteBook(bookId: string): Promise<Book> {
    const deleteBookById: Book = await bookModel.findByIdAndDelete(bookId);
    if (!deleteBookById) throw new HttpException(409, "Book doesn't exist");

    return deleteBookById;
  }
}

export default BookService;
