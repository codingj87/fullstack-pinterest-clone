import graphene
from fullstack.schema import Query as fullstackQuery


class Query(
    fullstackQuery,
    graphene.ObjectType,
):
    pass


schema = graphene.Schema(query=Query)