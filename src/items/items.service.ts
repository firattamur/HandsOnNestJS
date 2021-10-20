import { Injectable } from '@nestjs/common';
import { Item } from "./interfaces/item.interface"

@Injectable()
export class ItemsService {

    private readonly items: Item[] = [

        {
            id: "233223234",
            name: "Item One",
            qty: 40,
            description: "This is item one!"
        },

        {
            id: "2332sdf23234",
            name: "Item Two",
            qty: 50,
            description: "This is item two!"
        }

    ]

    findAll(): Item[] {
        return this.items;
    }

    findOne(id: string): Item {
        return this.items.find(item => item.id === id);
    }

}
