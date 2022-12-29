/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class InputRoom {
    title: string;
    pictures: string[];
    surface: number;
}

export class CreatePropertyInput {
    title: string;
    address: string;
    surface: number;
    rooms: InputRoom[];
    pictures: string[];
}

export class CreateAdInput {
    title: string;
    description: string;
    rentalUnit: number;
    property: CreatePropertyInput;
}

export class UpdateAdInput {
    id: string;
    title?: Nullable<string>;
    description?: Nullable<string>;
    rentalUnit?: Nullable<number>;
}

export class CreateFileInput {
    data: string;
}

export class UpdatePropertyInput {
    id: string;
    title?: Nullable<string>;
    address?: Nullable<string>;
    surface?: Nullable<number>;
    pictures?: Nullable<Nullable<string>[]>;
    rooms?: Nullable<Nullable<string>[]>;
}

export class CreateRentingInput {
    status: string;
    tenant: string;
    ad: string;
}

export class UpdateRentingInput {
    id: number;
    status?: Nullable<string>;
}

export class CreateRoomInput {
    title: string;
    pictures: Nullable<string>[];
    surface: number;
    property: string;
}

export class UpdateRoomInput {
    id: string;
    title?: Nullable<string>;
    pictures?: Nullable<Nullable<string>[]>;
    surface?: Nullable<number>;
}

export class CreateTenantInput {
    firstName: string;
    lastName: string;
    email: string;
}

export class File {
    _id: string;
    filename: string;
    mimeType: string;
}

export class Tenant {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export class Renting {
    _id: string;
    status: string;
    tenant: Tenant;
    ad?: Nullable<Ad>;
}

export class Property {
    _id: string;
    title: string;
    address: string;
    surface: number;
    rooms: Room[];
    pictures: File[];
}

export class Ad {
    _id: string;
    title: string;
    description: string;
    rentalUnit: number;
    property: Property;
    rentings: Renting[];
    createdAt: number;
}

export class AdPaginated {
    data: Ad[];
    total: number;
}

export abstract class IQuery {
    abstract ads(offset?: Nullable<number>, limit?: Nullable<number>, sort?: Nullable<string>): AdPaginated | Promise<AdPaginated>;

    abstract ad(id: string): Nullable<Ad> | Promise<Nullable<Ad>>;

    abstract properties(): Nullable<Property>[] | Promise<Nullable<Property>[]>;

    abstract property(id: string): Nullable<Property> | Promise<Nullable<Property>>;

    abstract rentings(): Nullable<Renting>[] | Promise<Nullable<Renting>[]>;

    abstract renting(id: number): Nullable<Renting> | Promise<Nullable<Renting>>;

    abstract rooms(): Nullable<Room>[] | Promise<Nullable<Room>[]>;

    abstract room(id: string): Nullable<Room> | Promise<Nullable<Room>>;

    abstract tenants(): Nullable<Tenant>[] | Promise<Nullable<Tenant>[]>;

    abstract tenant(id: number): Nullable<Tenant> | Promise<Nullable<Tenant>>;

    abstract tenantFindByEmail(email: string): Nullable<Tenant> | Promise<Nullable<Tenant>>;
}

export abstract class IMutation {
    abstract createAd(createAdInput: CreateAdInput): Ad | Promise<Ad>;

    abstract updateAd(updateAdInput: UpdateAdInput): Ad | Promise<Ad>;

    abstract removeAd(id: string): Nullable<Ad> | Promise<Nullable<Ad>>;

    abstract uploadFile(createFileInput: CreateFileInput): File | Promise<File>;

    abstract deleteFile(id: string): Nullable<File> | Promise<Nullable<File>>;

    abstract createProperty(createPropertyInput: CreatePropertyInput): Property | Promise<Property>;

    abstract updateProperty(updatePropertyInput: UpdatePropertyInput): Property | Promise<Property>;

    abstract removeProperty(id: string): Nullable<Property> | Promise<Nullable<Property>>;

    abstract createRenting(createRentingInput: CreateRentingInput): Renting | Promise<Renting>;

    abstract updateRenting(updateRentingInput: UpdateRentingInput): Renting | Promise<Renting>;

    abstract createRoom(createRoomInput: CreateRoomInput): Room | Promise<Room>;

    abstract updateRoom(updateRoomInput: UpdateRoomInput): Room | Promise<Room>;

    abstract removeRoom(id: string): Nullable<Room> | Promise<Nullable<Room>>;

    abstract createTenant(createTenantInput: CreateTenantInput): Tenant | Promise<Tenant>;
}

export class Room {
    _id?: Nullable<string>;
    title?: Nullable<string>;
    pictures?: Nullable<Nullable<File>[]>;
    surface?: Nullable<number>;
}

type Nullable<T> = T | null;
