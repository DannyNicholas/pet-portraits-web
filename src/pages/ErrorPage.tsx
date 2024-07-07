import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import { Container, Header } from "semantic-ui-react";
import AppHeader from '../components/AppHeader.tsx';


const ErrorPage = () => {

  const error: unknown = useRouteError() as Error;
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.data || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = 'Unknown error';
  }

  return (
    <>
      <AppHeader />
      <Container text>
        <Header as='h2'>Error</Header>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{errorMessage}</i>
        </p>
      </Container>
    </>
  )
}

export default ErrorPage