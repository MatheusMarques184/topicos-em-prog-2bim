import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './entities/book.entity';
import { Model, ObjectId } from 'mongoose';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  create(createBookDto: CreateBookDto) {
    const createdBook = this.bookModel.create(createBookDto);
    return createdBook;
  } 

  findAll() {
    const foundAllBooks = this.bookModel.find();
    return foundAllBooks;
  }

  findOne(id: ObjectId) {
    const foundBookByID = this.bookModel.findById(id);
    return foundBookByID;
  }

  update(id: ObjectId, updateBookDto: UpdateBookDto) {
    const updatedBook = this.bookModel.findByIdAndUpdate(id,
      {
        name: updateBookDto.author,
        age: updateBookDto.title,
        email: updateBookDto.ISBN,
      },
      { new: true },);
    return updatedBook;
  }

  remove(id: ObjectId) {
    this.bookModel.findByIdAndDelete(id);
    return "removido com sucesso"
  }
}
