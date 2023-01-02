import { ObjectType } from '@nestjs/graphql';
import { Paginated } from 'src/utils/paginator';
import { Ad } from '../entities/ad.entity';

@ObjectType()
export class PaginatedAd extends Paginated(Ad) {}
