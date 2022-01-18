import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote.js";

const DUMMY_QUOTES = [
  { id: "q1", author: "ismail", text: "learning react is fun" },
  { id: "q2", author: "ismailagain", text: "learning react is ok" },
  { id: "q3", author: "ismailneedhelp", text: "learning react is painful" },
];

const QuoteDetails = (props) => {
  const match = useRouteMatch();
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  console.log(match);
  if (!quote) {
    return <p>no quote found :(</p>;
  }
  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetails;
