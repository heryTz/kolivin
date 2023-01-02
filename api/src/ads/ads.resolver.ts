import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AdsService } from './ads.service';
import { CreateAdInput } from './dto/create-ad.input';
import { FetchAdInput } from './dto/fetch-ad.input';
import { PaginatedAd } from './dto/paginated-ad';
import { UpdateAdInput } from './dto/update-ad.input';
import { Ad } from './entities/ad.entity';

@Resolver(() => Ad)
export class AdsResolver {
  constructor(private readonly adsService: AdsService) {}

  @Mutation(() => Ad, { name: 'createAd' })
  create(@Args('createAdInput') createAdInput: CreateAdInput) {
    return this.adsService.create(createAdInput);
  }

  @Query(() => PaginatedAd, { name: 'ads' })
  findAll(@Args() { offset, limit, sort }: FetchAdInput) {
    return this.adsService.findAll({ offset, limit, sort });
  }

  @Query(() => Ad, { name: 'ad' })
  findOne(@Args('id') id: string) {
    return this.adsService.findOne(id as any);
  }

  @Mutation(() => Ad, { name: 'updateAd' })
  update(@Args('updateAdInput') updateAdInput: UpdateAdInput) {
    return this.adsService.update(updateAdInput.id as any, updateAdInput);
  }

  @Mutation(() => Ad, { name: 'removeAd' })
  remove(@Args('id') id: string) {
    return this.adsService.remove(id as any);
  }
}
