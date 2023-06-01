import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ObjectId } from 'mongoose';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    try {
      return this.bookService.create(createBookDto);
    } catch (err) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'proibido',
      }, HttpStatus.FORBIDDEN, {
        cause: err
      });
    }
  }

  @Get()
  findAll() {
    try {
      return this.bookService.findAll();
    } catch (err) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'proibido',
      }, HttpStatus.FORBIDDEN, {
        cause: err
      });
    }
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectId) {
    try {
      return this.bookService.findOne(id);
    } catch (err) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'proibido',
      }, HttpStatus.FORBIDDEN, {
        cause: err
      });
    }
  }

  @Patch(':id')
  update(@Param('id') id: ObjectId, @Body() updateBookDto: UpdateBookDto) {
    try {
      return this.bookService.update(id, updateBookDto);
    } catch (err) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'proibido',
      }, HttpStatus.FORBIDDEN, {
        cause: err
      });
    }
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    try {
      return this.bookService.remove(id);
    } catch (err) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'proibido',
      }, HttpStatus.FORBIDDEN, {
        cause: err
      });
    }
  }
}
