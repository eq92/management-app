import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Header from './components/Header';
import AddClientModal from './components/addClientModal';
import Clients from './components/Clients';
import Projects from './components/Projects';

//to handle in memory cache merging.
const cache = new InMemoryCache({
   typePolicies: {
      Query: {
         fields: {
            clients: {
               merge(exsisting, incoming) {
                  return incoming;
               },
            },
            projects: {
               merge(exsisting, incoming) {
                  return incoming;
               },
            },
         },
      },
   },
});

const client = new ApolloClient({
   uri: 'http://localhost:5050/graphql',
   cache,
});

function App() {
   return (
      <>
         <ApolloProvider client={client}>
            <Header />
            <div className="container">
               <AddClientModal />
               <Projects />
               <Clients />
            </div>
         </ApolloProvider>
      </>
   );
}

export default App;
