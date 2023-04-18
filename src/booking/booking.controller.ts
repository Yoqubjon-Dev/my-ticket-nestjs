import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { BookingService } from './booking.service';

@ApiTags('Booking')
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @ApiOperation({ summary: 'Create a booking' })
  @Post()
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }

  @ApiOperation({ summary: 'Get all booking' })
  @Get()
  findAll() {
    return this.bookingService.findAll();
  }

  @ApiOperation({ summary: 'Get booking' })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.bookingService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update booking' })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateBookingDto: UpdateBookingDto,
  ) {
    return await this.bookingService.update(+id, updateBookingDto);
  }

  @ApiOperation({ summary: 'Delete booking' })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<number> {
    return await this.bookingService.delete(id);
  }
}
