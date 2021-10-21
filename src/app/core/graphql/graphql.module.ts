import { NgModule } from "@angular/core";
import { APOLLO_OPTIONS } from "apollo-angular";
import { ApolloLink, DefaultOptions, InMemoryCache } from "@apollo/client/core";
import { HttpLink } from "apollo-angular/http";
import { environment } from "../../../environments/environment";
import { setContext } from "@apollo/client/link/context";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { CoreFacade } from "../facades/core.facade";
import { CommonFacade } from "../facades/common.facade";
import { onError } from 'apollo-link-error';
import { LocalStorageService } from "../services/local-storage/local-storage.service";

const uri = environment.url;

export function createApollo(
  httpLink: HttpLink,
  router:Router,
  toastrService: ToastrService,
  ) {

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    console.log("networkError =>", networkError)
		if (graphQLErrors)
			graphQLErrors.map(({ extensions, locations, path }) => {
				if (graphQLErrors) {
					if (graphQLErrors[0].extensions.exception.response.message) {

						if (Array.isArray(graphQLErrors[0].extensions.exception.response.message)) {
							const errArr = [...graphQLErrors[0].extensions.exception.response.message];
							errArr.forEach(element => {
							});
						} else {
							if(graphQLErrors[0].extensions.exception.response.message == "Invalid token"){
								localStorage.clear();
								router.navigate(['./login'])
							}
						}
					} else {
            // toastrService.show(networkError, `Error`, { status: 'danger' });
					}
				}
			});
	});


  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8'
    }
  }));

  const auth = setContext((operation, context) => {
    const token = localStorage.getItem('ADMIN_TOKEN');
    if (token === null) {
      return {};
    } else {
      return {
        headers: {
          Authorization: "Bearer " + JSON.parse(token)
        }
      };
    }
  });


  const defaultOptions: DefaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'none',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'none',
    },
  }
  const link = ApolloLink.from([basic, auth, (errorLink as unknown) as ApolloLink, httpLink.create({ uri })]);
  // const link = ApolloLink.from([basic, httpLink.create({ uri, auth })]);
  const cache = new InMemoryCache();
  return {
    link,
    cache,
    defaultOptions: defaultOptions,

  }
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
