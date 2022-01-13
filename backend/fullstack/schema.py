import graphene
from fullstack.post.schema import Query as fullstackQuery

class Query(fullstackQuery, graphene.ObjectType):
    pass


