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
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomerService } from './customer.service';

@ApiTags('Customer')
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) { }

  @ApiOperation({ summary: 'Create a customer' })
  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto, hashed_password: string) {
    return this.customerService.create(createCustomerDto, hashed_password);
  }

  @ApiOperation({ summary: 'Get all customer' })
  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @ApiOperation({ summary: 'Get customer' })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.customerService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update customer' })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return await this.customerService.update(+id, updateCustomerDto);
  }

  @ApiOperation({ summary: 'Delete customer' })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<number> {
    return await this.customerService.delete(id);
  }
}
