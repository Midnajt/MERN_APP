import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Error 404</h1>
      <p>{error.data}</p>
      <Link to='/'>back home</Link>
    </div>
  );
}
export default Error;
