import { Injectable } from "@angular/core";
import { QueryFull } from "../../models/graph-models";
import gql from "graphql-tag";

@Injectable({
  providedIn: "root",
})
export class BaseQuery {
  // general Query >> Uses with :  simple queries (do not have inputes or paginations) .
  generalQuery(input: QueryFull) {
    return gql`
        query ${input.func} {
            ${input.func}
            ${input.return}
            }
        `;
  }

  // general Query >> Uses with : queries have paginations or inputes or both .
  generalQueryFull(input: QueryFull) {
    return gql`
        query ${input.func} ${
      input.variable ? "( $" + input.variable + ":" + input.type : "("
    } ${input.variable && input.pagination ? "," : ""} ${
      input.pagination
        ? "$" + input.pagination + ":" + input.paginationType + ")"
        : ")"
    } {
            ${input.func}  ${
      input.variable ? "( " + input.variable + ": $" + input.variable : "("
    } ${input.variable && input.pagination ? "," : ""} ${
      input.pagination ? input.pagination + ": $" + input.pagination + ")" : ")"
    }${input.return}
                    }
    `;
  }
  // mutation uses with : mutation which hase inputes
  generalMutationFull(input: QueryFull) {
    return gql`
  mutation (${"$" + input.variable}: ${input.type})  {
    ${input.func} (${input.variable}: ${"$" + input.variable})
     ${input.return}
  }
`;
  }

  // mutation uses with : mutation which do not hase i inputes

  generalMutation(input: QueryFull) {
    return gql`
  mutation  {
    ${input.func}
     ${input.return}
  }
`;
  }
}
