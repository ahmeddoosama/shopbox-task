import { Injectable } from "@angular/core";
import { ApolloQueryResult } from "@apollo/client/core";
import { QueryFull } from "../../models/graph-models";
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs";
import { BaseQuery } from "../base-query/base-query";

@Injectable({
  providedIn: "root"
})
export class BaseService {
  constructor(private baseQuery: BaseQuery, private apollo: Apollo) {}

  generalQuery(input: QueryFull): any {
    return this.apollo.query({
      query: this.baseQuery.generalQuery(input)
    });
  }

  generalQueryFull(input: QueryFull): any {
    return this.apollo.query({
      query: this.baseQuery.generalQueryFull(input),
      variables: input.variables
    });
  }

  generalMutationFull(input: QueryFull): Observable<any> {
    return this.apollo.mutate({
      mutation: this.baseQuery.generalMutationFull(input),
      variables: input.variables
    });
  }

  generalMutation(input: QueryFull) {
    return this.apollo.mutate({
      mutation: this.baseQuery.generalMutation(input),
      variables: input.variables
    });
  }
}