import { Container } from "react-bootstrap";

function Results({ metaContent }) {
  return (
    <div className="justify-content-center">
      <Container
        className="p-4 my-4 bg-white text-dark"
        style={{ minHeight: 400 }}
      >
        {metaContent}
      </Container>
    </div>
  );
}
export default Results;
