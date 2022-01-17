import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
const QuoteDetails = (props) => {
  const params = useParams();
  return (
    <>
      <h1>Quote Detail</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetails;
