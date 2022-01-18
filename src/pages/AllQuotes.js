import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "ismail", text: "learning react is fun" },
  { id: "q2", author: "ismailagain", text: "learning react is ok" },
  { id: "q3", author: "ismailneedhelp", text: "learning react is painful" },
];
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
