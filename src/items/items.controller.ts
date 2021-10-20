import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import { CreateItemDto } from "../items/dto/create-item.dto";
import { Request, Response } from "express";

import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService: ItemsService) {}

    @Get() 
    findAll(): Item[] {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param() param): Item {
        return this.itemsService.findOne(param.id);
    }

    @Delete(':id')
    delete(@Param() param): string {
        return `Delete ${param.id}`;
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
        return `Update ${id} - Name: ${updateItemDto.name}`
    }

    // directly access request and response via express
    // @Get() 
    // findAll(@Req() req: Request, @Res() res: Response): Response {
    //     console.log(req.url);
    //     return res.send("Hello Express");
    // }

    @Post() 
    create(@Body() createItemTdo: CreateItemDto): string {
        return `Name: ${createItemTdo.name} \n Description: ${createItemTdo.description}`;
    }


}
