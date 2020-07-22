import { when, deepEqual } from 'ts-mockito';
import { Resolver, Query } from '@nestjs/graphql';
import { RelationsOpts, RemoveRelationsResolver } from '../../../src/resolvers/relations';
import { RelationInputType, RelationsInputType } from '../../../src/types';
import { expectSDL } from '../../__fixtures__';
import { createResolverFromNest, TestResolverDTO, TestService } from '../__fixtures__';
import {
  removeRelationEmptySDL,
  removeRelationManyCustomNameSDL,
  removeRelationManyDisabledSDL,
  removeRelationManySDL,
  removeRelationOneCustomNameSDL,
  removeRelationOneDisabledSDL,
  removeRelationOneSDL,
  TestRelationDTO,
} from './__fixtures__';

@Resolver(() => TestResolverDTO)
class TestResolver extends RemoveRelationsResolver(TestResolverDTO, {
  one: { relation: { DTO: TestRelationDTO }, custom: { DTO: TestRelationDTO, relationName: 'other' } },
  many: { relations: { DTO: TestRelationDTO }, customs: { DTO: TestRelationDTO, relationName: 'others' } },
}) {
  constructor(service: TestService) {
    super(service);
  }
}

describe('RemoveRelationsResolver', () => {
  const expectResolverSDL = (sdl: string, opts?: RelationsOpts) => {
    @Resolver(() => TestResolverDTO)
    class TestSDLResolver extends RemoveRelationsResolver(TestResolverDTO, opts ?? {}) {
      @Query(() => TestResolverDTO)
      test(): TestResolverDTO {
        return { id: '1', stringField: 'foo' };
      }
    }
    return expectSDL([TestSDLResolver], sdl);
  };
  it('should not add remove methods if one and many are empty', () => {
    return expectResolverSDL(removeRelationEmptySDL);
  });

  describe('one', () => {
    it('should use the object type name', () => {
      return expectResolverSDL(removeRelationOneSDL, { one: { relation: { DTO: TestRelationDTO } } });
    });

    it('should use the dtoName if provided', () => {
      return expectResolverSDL(removeRelationOneCustomNameSDL, {
        one: { relation: { DTO: TestRelationDTO, dtoName: 'Test' } },
      });
    });

    it('should not add remove methods if disableRemove is true', () => {
      return expectResolverSDL(removeRelationOneDisabledSDL, {
        one: { relation: { DTO: TestRelationDTO, disableRemove: true } },
      });
    });

    it('should call the service findRelation with the provided dto and correct relation name', async () => {
      const { resolver, mockService } = await createResolverFromNest(TestResolver);
      const input: RelationInputType = {
        id: 'record-id',
        relationId: 'relation-id',
      };
      const output: TestResolverDTO = {
        id: 'record-id',
        stringField: 'foo',
      };
      when(mockService.removeRelation('relation', input.id, input.relationId)).thenResolve(output);
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const result = await resolver.removeRelationFromTestResolverDTO({ input });
      return expect(result).toEqual(output);
    });

    it('should call the service findRelation with the provided dto and custom relation name', async () => {
      const { resolver, mockService } = await createResolverFromNest(TestResolver);
      const input: RelationInputType = {
        id: 'record-id',
        relationId: 'relation-id',
      };
      const output: TestResolverDTO = {
        id: 'record-id',
        stringField: 'foo',
      };
      when(mockService.removeRelation('other', input.id, input.relationId)).thenResolve(output);
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const result = await resolver.removeCustomFromTestResolverDTO({ input });
      return expect(result).toEqual(output);
    });
  });

  describe('many', () => {
    it('should use the object type name', () => {
      return expectResolverSDL(removeRelationManySDL, { many: { relations: { DTO: TestRelationDTO } } });
    });

    it('should use the dtoName if provided', () => {
      return expectResolverSDL(removeRelationManyCustomNameSDL, {
        many: { relations: { DTO: TestRelationDTO, dtoName: 'Test' } },
      });
    });

    it('should not add remove many methods if disableRemove is true', () => {
      return expectResolverSDL(removeRelationManyDisabledSDL, {
        many: { relations: { DTO: TestRelationDTO, disableRemove: true } },
      });
    });

    it('should call the service findRelation with the provided dto and correct relation name', async () => {
      const { resolver, mockService } = await createResolverFromNest(TestResolver);
      const input: RelationsInputType = {
        id: 'id-1',
        relationIds: ['relation-id-1', 'relation-id-2'],
      };
      const output: TestResolverDTO = {
        id: 'record-id',
        stringField: 'foo',
      };
      when(mockService.removeRelations('relations', input.id, deepEqual(input.relationIds))).thenResolve(output);
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const result = await resolver.removeRelationsFromTestResolverDTO({ input });
      return expect(result).toEqual(output);
    });

    it('should call the service findRelation with the provided dto and correct custom relation name', async () => {
      const { resolver, mockService } = await createResolverFromNest(TestResolver);
      const input: RelationsInputType = {
        id: 'id-1',
        relationIds: ['relation-id-1', 'relation-id-2'],
      };
      const output: TestResolverDTO = {
        id: 'record-id',
        stringField: 'foo',
      };
      when(mockService.removeRelations('others', input.id, deepEqual(input.relationIds))).thenResolve(output);
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const result = await resolver.removeCustomsFromTestResolverDTO({ input });
      return expect(result).toEqual(output);
    });
  });
});