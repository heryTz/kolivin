import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AdsService } from './ads.service';
import { CreateAdInput } from './dto/create-ad.input';
import { FetchAdInput } from './dto/fetch-ad.input';
import { UpdateAdInput } from './dto/update-ad.input';

@Resolver('Ad')
export class AdsResolver {
  constructor(private readonly adsService: AdsService) {}

  @Mutation('createAd')
  create(@Args('createAdInput') createAdInput: CreateAdInput) {
    return this.adsService.create(createAdInput);
  }

  @Query('ads')
  findAll(
    @Args('offset') offset?: FetchAdInput['offset'],
    @Args('limit') limit?: FetchAdInput['limit'],
    @Args('sort') sort?: FetchAdInput['sort'],
  ) {
    return this.adsService.findAll({ offset, limit, sort });
  }

  @Query('ad')
  findOne(@Args('id') id: string) {
    return this.adsService.findOne(id as any);
  }

  @Mutation('updateAd')
  update(@Args('updateAdInput') updateAdInput: UpdateAdInput) {
    return this.adsService.update(updateAdInput.id as any, updateAdInput);
  }

  @Mutation('removeAd')
  remove(@Args('id') id: string) {
    return this.adsService.remove(id as any);
  }
}
